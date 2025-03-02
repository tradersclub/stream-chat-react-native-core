import React from 'react';
import { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../../contexts/messagesContext/MessagesContext';
import { TranslationContextValue } from '../../../contexts/translationContext/TranslationContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export type MessageContentPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageContextValue<StreamChatGenerics>, 'alignment' | 'isEditedMessageOpen' | 'goToMessage' | 'groupStyles' | 'hasReactions' | 'isMyMessage' | 'lastGroupMessage' | 'members' | 'message' | 'messageContentOrder' | 'onLongPress' | 'onlyEmojis' | 'onPress' | 'onPressIn' | 'otherAttachments' | 'preventPress' | 'showMessageStatus' | 'threadList'> & Pick<MessagesContextValue<StreamChatGenerics>, 'additionalTouchableProps' | 'Attachment' | 'FileAttachmentGroup' | 'Gallery' | 'isAttachmentEqual' | 'MessageFooter' | 'MessageHeader' | 'MessageDeleted' | 'MessageError' | 'MessagePinnedHeader' | 'MessageReplies' | 'MessageStatus' | 'myMessageTheme' | 'onPressInMessage' | 'Reply'> & Pick<TranslationContextValue, 't'> & {
    setMessageContentWidth: React.Dispatch<React.SetStateAction<number>>;
};
export type MessageContentProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Omit<MessageContentPropsWithContext<StreamChatGenerics>, 'setMessageContentWidth'>> & Pick<MessageContentPropsWithContext<StreamChatGenerics>, 'setMessageContentWidth'>;
/**
 * Child of MessageSimple that displays a message's content
 */
export declare const MessageContent: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: MessageContentProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=MessageContent.d.ts.map