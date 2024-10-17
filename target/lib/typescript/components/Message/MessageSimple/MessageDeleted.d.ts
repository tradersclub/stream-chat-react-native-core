import React from 'react';
import { LayoutChangeEvent } from 'react-native';
import type { MessageFooterProps } from './MessageFooter';
import { Alignment } from '../../../contexts/messageContext/MessageContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
import type { MessageType } from '../../MessageList/hooks/useMessageList';
type MessageDeletedComponentProps = {
    formattedDate: string | Date;
    groupStyle: string;
    noBorder: boolean;
    onLayout: (event: LayoutChangeEvent) => void;
};
export type MessageDeletedProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = MessageDeletedComponentProps & {
    alignment?: Alignment;
    message?: MessageType<StreamChatGenerics>;
    MessageFooter?: React.ComponentType<MessageFooterProps<StreamChatGenerics>>;
};
export declare const MessageDeleted: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: MessageDeletedProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=MessageDeleted.d.ts.map