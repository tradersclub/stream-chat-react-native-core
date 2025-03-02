import React from 'react';
import { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../../contexts/messagesContext/MessagesContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export type MessageSimplePropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageContextValue<StreamChatGenerics>, 'alignment' | 'channel' | 'isEditedMessageOpen' | 'groupStyles' | 'hasReactions' | 'message'> & Pick<MessagesContextValue<StreamChatGenerics>, 'enableMessageGroupingByUser' | 'myMessageTheme' | 'MessageAvatar' | 'MessageContent' | 'ReactionList'>;
export type MessageSimpleProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<MessageSimplePropsWithContext<StreamChatGenerics>>;
/**
 *
 * Message UI component
 */
export declare const MessageSimple: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<MessageSimplePropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=MessageSimple.d.ts.map