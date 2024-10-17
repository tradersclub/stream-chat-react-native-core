import React, { useCallback } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

import { renderText, RenderTextParams } from './utils/renderText';

import {
  MessageContextValue,
  useMessageContext,
} from '../../../contexts/messageContext/MessageContext';
import {
  MessagesContextValue,
  useMessagesContext,
} from '../../../contexts/messagesContext/MessagesContext';
import { useTheme } from '../../../contexts/themeContext/ThemeContext';

import type { MarkdownStyle, Theme } from '../../../contexts/themeContext/utils/theme';
import { useTranslatedMessage } from '../../../hooks/useTranslatedMessage';
import type { DefaultStreamChatGenerics } from '../../../types/types';
import type { MessageType } from '../../MessageList/hooks/useMessageList';

const styles = StyleSheet.create({
  textContainer: { maxWidth: 250, paddingHorizontal: 16 },
  textUserName: {
    lineHeight: 17.5,
    fontSize: 14, 
    fontWeight: 500,
  },
  textUserNameContainer: {
    paddingTop: 12
  }
});

export type MessageTextProps<
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics,
> = MessageTextContainerProps<StreamChatGenerics> & {
  renderText: (params: RenderTextParams<StreamChatGenerics>) => JSX.Element | null;
  theme: { theme: Theme };
};

export type MessageTextContainerPropsWithContext<
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics,
> = Pick<
  MessageContextValue<StreamChatGenerics>,
  'message' | 'onLongPress' | 'onlyEmojis' | 'onPress' | 'preventPress'
> &
  Pick<
    MessagesContextValue<StreamChatGenerics>,
    'markdownRules' | 'MessageText' | 'myMessageTheme'
  > & {
    markdownStyles?: MarkdownStyle;
    messageOverlay?: boolean;
    messageTextNumberOfLines?: number;
    styles?: Partial<{
      textContainer: StyleProp<ViewStyle>;
    }>;
  };

const MessageTextContainerWithContext = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics,
>(
  props: MessageTextContainerPropsWithContext<StreamChatGenerics> & { isGroup?: boolean; isMyMessage?: boolean },
) => {
  const theme = useTheme();

  const {
    markdownRules,
    markdownStyles: markdownStylesProp = {},
    message,
    messageOverlay,
    MessageText,
    messageTextNumberOfLines,
    onLongPress,
    onlyEmojis,
    onPress,
    preventPress,
    isGroup,
    isMyMessage,
    styles: stylesProp = {},
  } = props;

  const {
    theme: {
      colors,
      messageSimple: {
        content: {
          markdown,
          textContainer: { onlyEmojiMarkdown, ...textContainer },
        },
      },
    },
  } = theme;

  const translatedMessage = useTranslatedMessage<StreamChatGenerics>(
    message,
  ) as MessageType<StreamChatGenerics>;

  if (!message.text) return null;

  const markdownStyles = { ...markdown, ...markdownStylesProp };

  const stringToColor = useCallback((str: string): string => {
    const MIN_BRIGHTNESS = 500; // Ajuste para controlar a escuridão mínima
  
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let r, g, b;
  
    const adjustHash = () => {
      hash = (hash * 9301 + 49297) % 233280; // Embaralha o hash para evitar loops
    };
  
    do {
      r = (hash >> 16) & 0xFF;  // Vermelho
      g = (hash >> 8) & 0xFF;   // Verde
      b = hash & 0xFF;          // Azul
  
      adjustHash(); // Ajusta o hash para recalcular a cor, se necessário
  
    } while (
      (r < 30 && g < 30 && b < 30) ||  // Evita preto ou quase preto
      (Math.abs(r - g) < 15 && Math.abs(g - b) < 15) || // Evita cinza
      (r + g + b < MIN_BRIGHTNESS) // Garante brilho mínimo
    );
  
    // Converte os valores RGB para hexadecimal
    const color = `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)
      .toUpperCase()}`;
  
    return color;
  }, []);
  

  const showUserName = ['single', 'top'].includes(message.groupStyles?.[0] || '') && isGroup && !isMyMessage;

  return (
    <View
      style={[styles.textContainer, textContainer, stylesProp.textContainer]}
      testID='message-text-container'
    >
      {MessageText ? (
        <View>
          {showUserName ? (
            <View style={[styles.textUserNameContainer]}>
              <Text style={[styles.textUserName, {color: stringToColor(message?.user?.id || '')}]}>
                {message?.user?.name}
              </Text>
            </View>
          ) : null}
          <MessageText {...props} renderText={renderText} theme={theme} />
        </View>
      ) : (
        renderText<StreamChatGenerics>({
          colors,
          markdownRules,
          markdownStyles: {
            ...markdownStyles,
            ...(onlyEmojis ? onlyEmojiMarkdown : {}),
          },
          message: translatedMessage,
          messageOverlay,
          messageTextNumberOfLines,
          onLongPress,
          onlyEmojis,
          onPress,
          preventPress,
        })
      )}
    </View>
  );
};

const areEqual = <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(
  prevProps: MessageTextContainerPropsWithContext<StreamChatGenerics>,
  nextProps: MessageTextContainerPropsWithContext<StreamChatGenerics>,
) => {
  const {
    markdownStyles: prevMarkdownStyles,
    message: prevMessage,
    myMessageTheme: prevMyMessageTheme,
    onlyEmojis: prevOnlyEmojis,
  } = prevProps;
  const {
    markdownStyles: nextMarkdownStyles,
    message: nextMessage,
    myMessageTheme: nextMyMessageTheme,
    onlyEmojis: nextOnlyEmojis,
  } = nextProps;

  const messageTextEqual =
    prevMessage.text === nextMessage.text && prevMessage.i18n === nextMessage.i18n;
  if (!messageTextEqual) return false;

  const onlyEmojisEqual = prevOnlyEmojis === nextOnlyEmojis;
  if (!onlyEmojisEqual) return false;

  const mentionedUsersEqual =
    prevMessage.mentioned_users?.length === nextMessage.mentioned_users?.length &&
    (nextMessage.mentioned_users?.length === 0 ||
      (prevMessage.mentioned_users?.length &&
        nextMessage.mentioned_users?.length &&
        prevMessage.mentioned_users[0].name === nextMessage.mentioned_users[0].name));
  if (!mentionedUsersEqual) return false;

  // stringify could be an expensive operation, so lets rule out the obvious
  // possibilities first such as different object reference or empty objects etc.
  // Also keeping markdown equality check at the last to make sure other less
  // expensive equality checks get executed first and markdown check will be skipped if returned
  // false from previous checks.
  const markdownStylesEqual =
    prevMarkdownStyles === nextMarkdownStyles ||
    (Object.keys(prevMarkdownStyles || {}).length === 0 &&
      Object.keys(nextMarkdownStyles || {}).length === 0) ||
    JSON.stringify(prevMarkdownStyles) === JSON.stringify(nextMarkdownStyles);
  if (!markdownStylesEqual) return false;

  const messageThemeEqual =
    JSON.stringify(prevMyMessageTheme) === JSON.stringify(nextMyMessageTheme);
  if (!messageThemeEqual) return false;

  return true;
};

const MemoizedMessageTextContainer = React.memo(
  MessageTextContainerWithContext,
  areEqual,
) as typeof MessageTextContainerWithContext;

export type MessageTextContainerProps<
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics,
> = Partial<MessageTextContainerPropsWithContext<StreamChatGenerics>>;

export const MessageTextContainer = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics,
>(
  props: MessageTextContainerProps<StreamChatGenerics> & { isGroup?: boolean; isMyMessage?: boolean },
) => {
  const { message, onLongPress, onlyEmojis, onPress, preventPress} =
    useMessageContext<StreamChatGenerics>();
  const { markdownRules, MessageText, myMessageTheme } = useMessagesContext<StreamChatGenerics>();
  const { messageTextNumberOfLines } = props;

  return (
    <MemoizedMessageTextContainer
      {...{
        markdownRules,
        message,
        MessageText,
        messageTextNumberOfLines,
        myMessageTheme,
        onLongPress,
        onlyEmojis,
        onPress,
        preventPress,
      }}
      {...props}
    />
  );
};

MessageTextContainer.displayName = 'MessageTextContainer{messageSimple{content}}';
