import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import type { MessageType } from './hooks/useMessageList';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type MessageSystemProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    /** Current [message object](https://getstream.io/chat/docs/#message_format) */
    message: MessageType<StreamChatGenerics>;
    /**
     * Additional styles for the system message container.
     */
    style?: StyleProp<ViewStyle>;
};
/**
 * A component to display system message. e.g, when someone updates the channel,
 * they can attach a message with that update. That message will be available
 * in message list as (type) system message.
 */
export declare const MessageSystem: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: MessageSystemProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=MessageSystem.d.ts.map