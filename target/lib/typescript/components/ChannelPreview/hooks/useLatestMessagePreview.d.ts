import type { Channel, ChannelState, MessageResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../types/types';
type LatestMessage<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = ReturnType<ChannelState<StreamChatGenerics>['formatMessage']> | MessageResponse<StreamChatGenerics>;
export type LatestMessagePreview<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    created_at: string | number | Date;
    messageObject: LatestMessage<StreamChatGenerics> | undefined;
    previews: {
        bold: boolean;
        text: string;
    }[];
    status: number;
};
export declare enum MessageReadStatus {
    NOT_SENT_BY_CURRENT_USER = 0,
    UNREAD = 1,
    READ = 2
}
/**
 * Hook to set the display preview for latest message on channel.
 *
 * @param {*} channel Channel object
 *
 * @returns {object} latest message preview e.g.. { text: 'this was last message ...', created_at: '11/12/2020', messageObject: { originalMessageObject } }
 */
export declare const useLatestMessagePreview: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(channel: Channel<StreamChatGenerics>, forceUpdate: number, lastMessage?: MessageResponse<StreamChatGenerics> | import("stream-chat").FormatMessageResponse<StreamChatGenerics> | undefined) => LatestMessagePreview<StreamChatGenerics>;
export {};
//# sourceMappingURL=useLatestMessagePreview.d.ts.map