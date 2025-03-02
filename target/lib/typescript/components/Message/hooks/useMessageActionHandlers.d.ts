import type { ChannelContextValue } from '../../../contexts/channelContext/ChannelContext';
import type { ChatContextValue } from '../../../contexts/chatContext/ChatContext';
import type { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import type { MessagesContextValue } from '../../../contexts/messagesContext/MessagesContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare const useMessageActionHandlers: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ channel, client, deleteMessage, deleteReaction, message, retrySendMessage, sendReaction, setEditingState, setQuotedMessageState, }: Pick<MessagesContextValue<StreamChatGenerics>, "deleteMessage" | "deleteReaction" | "retrySendMessage" | "sendReaction" | "setEditingState" | "setQuotedMessageState" | "supportedReactions"> & Pick<ChannelContextValue<StreamChatGenerics>, "channel" | "enforceUniqueReaction"> & Pick<ChatContextValue<StreamChatGenerics>, "client"> & Pick<MessageContextValue<StreamChatGenerics>, "message">) => {
    handleCopyMessage: () => void;
    handleDeleteMessage: () => void;
    handleEditMessage: () => void;
    handleFlagMessage: () => void;
    handleQuotedReplyMessage: () => void;
    handleResendMessage: () => Promise<void>;
    handleToggleBanUser: () => Promise<void>;
    handleToggleMuteUser: () => Promise<void>;
    handleTogglePinMessage: () => Promise<void>;
    handleToggleReaction: (reactionType: string) => Promise<void>;
};
//# sourceMappingURL=useMessageActionHandlers.d.ts.map