import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  MessageContextValue,
  useMessageContext,
} from '../../../contexts/messageContext/MessageContext';
import {
  MessagesContextValue,
  useMessagesContext,
} from '../../../contexts/messagesContext/MessagesContext';
import { useTheme } from '../../../contexts/themeContext/ThemeContext';

import type { DefaultStreamChatGenerics } from '../../../types/types';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  lastMessageContainer: {
    marginBottom: 12,
  },
  messageGroupedSingleOrBottomContainer: {
    marginBottom: 8,
  },
  messageGroupedTopContainer: {},
});

export type MessageSimplePropsWithContext<
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics,
> = Pick<
  MessageContextValue<StreamChatGenerics>,
  'alignment' | 'channel' | 'isEditedMessageOpen' | 'groupStyles' | 'hasReactions' | 'message'
> &
  Pick<
    MessagesContextValue<StreamChatGenerics>,
    | 'enableMessageGroupingByUser'
    | 'myMessageTheme'
    | 'MessageAvatar'
    | 'MessageContent'
    | 'ReactionList'
  >;

const MessageSimpleWithContext = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics,
>(
  props: MessageSimplePropsWithContext<StreamChatGenerics>,
) => {
  const {
    alignment,
    channel,
    enableMessageGroupingByUser,
    groupStyles,
    hasReactions,
    message,
    MessageAvatar,
    MessageContent,
    ReactionList,
  } = props;

  const {
    theme: {
      messageSimple: {
        container,
        lastMessageContainer,
        messageGroupedSingleOrBottomContainer,
        messageGroupedTopContainer,
      },
    },
  } = useTheme();

  const [messageContentWidth, setMessageContentWidth] = useState(0);

  const isVeryLastMessage =
    channel?.state.messages[channel?.state.messages.length - 1]?.id === message.id;

  const messageGroupedSingleOrBottom =
    groupStyles.includes('single') || groupStyles.includes('bottom');

  const showReactions = message.type !== 'deleted' && hasReactions && ReactionList;

  const lastMessageInMessageListStyles = [styles.lastMessageContainer, lastMessageContainer];
  const messageGroupedSingleOrBottomStyles = [
    styles.messageGroupedSingleOrBottomContainer,
    messageGroupedSingleOrBottomContainer,
  ];
  const messageGroupedTopStyles = [styles.messageGroupedTopContainer, messageGroupedTopContainer];

  // const getMarginBottom = () => {
  //   if(messageGroupedSingleOrBottom){
  //     if(showReactions){ 
  //       return 0
  //     }
  //   }
  //   if(showReactions){
  //     return -10
  //   }
  //   return 0
  // }

  // const marginBottom = getMarginBottom()
  // console.log(Object.values(message.reaction_counts))

  return (
    <>
      <View
        style={[
          styles.container,
          messageGroupedSingleOrBottom
            ? isVeryLastMessage && enableMessageGroupingByUser
              ? lastMessageInMessageListStyles
              : messageGroupedSingleOrBottomStyles
            : messageGroupedTopStyles,
          {
            justifyContent: alignment === 'left' ? 'flex-start' : 'flex-end',
            marginTop: showReactions ? 2 : 0,
          },
          container,
          // { marginBottom: marginBottom }
        ]}
        testID='message-simple-wrapper'
      >
        {alignment === 'left' && <MessageAvatar />}
        <View style={{position: 'relative'}}>
          <MessageContent setMessageContentWidth={setMessageContentWidth} 
          // MessageReactionsList={showReactions ? <ReactionList messageContentWidth={messageContentWidth} /> : null} 
          />
          {/* {showReactions && <View style={{position: 'absolute', right: 40, bottom: -16}}><ReactionList messageContentWidth={messageContentWidth} /></View>} */}
        </View>
        {/* {showReactions && <ReactionList messageContentWidth={messageContentWidth} />} */}
      </View>
    </>
  );
};

const areEqual = <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(
  prevProps: MessageSimplePropsWithContext<StreamChatGenerics>,
  nextProps: MessageSimplePropsWithContext<StreamChatGenerics>,
) => {
  const {
    channel: prevChannel,
    groupStyles: prevGroupStyles,
    hasReactions: prevHasReactions,
    isEditedMessageOpen: prevIsEditedMessageOpen,
    message: prevMessage,
    myMessageTheme: prevMyMessageTheme,
  } = prevProps;
  const {
    channel: nextChannel,
    groupStyles: nextGroupStyles,
    hasReactions: nextHasReactions,
    isEditedMessageOpen: nextIsEditedMessageOpen,
    message: nextMessage,
    myMessageTheme: nextMyMessageTheme,
  } = nextProps;

  const hasReactionsEqual = prevHasReactions === nextHasReactions;
  if (!hasReactionsEqual) return false;

  const repliesEqual = prevMessage.reply_count === nextMessage.reply_count;
  if (!repliesEqual) return false;

  const groupStylesEqual = JSON.stringify(prevGroupStyles) === JSON.stringify(nextGroupStyles);
  if (!groupStylesEqual) return false;

  const isEditedMessageOpenEqual = prevIsEditedMessageOpen === nextIsEditedMessageOpen;
  if (!isEditedMessageOpenEqual) return false;

  const isPrevMessageTypeDeleted = prevMessage.type === 'deleted';
  const isNextMessageTypeDeleted = nextMessage.type === 'deleted';

  const messageEqual =
    isPrevMessageTypeDeleted === isNextMessageTypeDeleted &&
    prevMessage.status === nextMessage.status &&
    prevMessage.type === nextMessage.type &&
    prevMessage.text === nextMessage.text &&
    prevMessage.i18n === nextMessage.i18n;
  if (!messageEqual) return false;

  const isPrevQuotedMessageTypeDeleted = prevMessage.quoted_message?.type === 'deleted';
  const isNextQuotedMessageTypeDeleted = nextMessage.quoted_message?.type === 'deleted';

  const quotedMessageEqual =
    prevMessage.quoted_message?.id === nextMessage.quoted_message?.id &&
    isPrevQuotedMessageTypeDeleted === isNextQuotedMessageTypeDeleted;

  if (!quotedMessageEqual) return false;

  const channelEqual = prevChannel?.state.messages.length === nextChannel?.state.messages.length;
  if (!channelEqual) return false;

  const prevMessageAttachments = prevMessage.attachments;
  const nextMessageAttachments = nextMessage.attachments;
  const attachmentsEqual =
    Array.isArray(prevMessageAttachments) && Array.isArray(nextMessageAttachments)
      ? prevMessageAttachments.length === nextMessageAttachments.length &&
        prevMessageAttachments.every((attachment, index) => {
          const attachmentKeysEqual =
            attachment.image_url === nextMessageAttachments[index].image_url &&
            attachment.og_scrape_url === nextMessageAttachments[index].og_scrape_url &&
            attachment.thumb_url === nextMessageAttachments[index].thumb_url &&
            attachment.type === nextMessageAttachments[index].type;

          return attachmentKeysEqual;
        })
      : prevMessageAttachments === nextMessageAttachments;
  if (!attachmentsEqual) return false;

  const latestReactionsEqual =
    Array.isArray(prevMessage.latest_reactions) && Array.isArray(nextMessage.latest_reactions)
      ? prevMessage.latest_reactions.length === nextMessage.latest_reactions.length &&
        prevMessage.latest_reactions.every(
          ({ type }, index) => type === nextMessage.latest_reactions?.[index].type,
        )
      : prevMessage.latest_reactions === nextMessage.latest_reactions;
  if (!latestReactionsEqual) return false;

  const messageThemeEqual =
    JSON.stringify(prevMyMessageTheme) === JSON.stringify(nextMyMessageTheme);
  if (!messageThemeEqual) return false;

  return true;
};

const MemoizedMessageSimple = React.memo(
  MessageSimpleWithContext,
  areEqual,
) as typeof MessageSimpleWithContext;

export type MessageSimpleProps<
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics,
> = Partial<MessageSimplePropsWithContext<StreamChatGenerics>>;

/**
 *
 * Message UI component
 */
export const MessageSimple = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics,
>(
  props: MessageSimpleProps<StreamChatGenerics>,
) => {
  const { alignment, channel, groupStyles, hasReactions, isEditedMessageOpen, message } =
    useMessageContext<StreamChatGenerics>();
  const {
    enableMessageGroupingByUser,
    MessageAvatar,
    MessageContent,
    myMessageTheme,
    ReactionList,
  } = useMessagesContext<StreamChatGenerics>();

  return (
    <MemoizedMessageSimple<StreamChatGenerics>
      {...{
        alignment,
        channel,
        enableMessageGroupingByUser,
        groupStyles,
        hasReactions,
        isEditedMessageOpen,
        message,
        MessageAvatar,
        MessageContent,
        myMessageTheme,
        ReactionList,
      }}
      {...props}
    />
  );
};

MessageSimple.displayName = 'MessageSimple{messageSimple{container}}';
