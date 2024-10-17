import type { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare const useCreateMessageContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ actionsEnabled, alignment, channel, files, goToMessage, groupStyles, handleAction, handleCopyMessage, handleDeleteMessage, handleEditMessage, handleFlagMessage, handleQuotedReplyMessage, handleResendMessage, handleToggleBanUser, handleToggleMuteUser, handleToggleReaction, hasReactions, images, isEditedMessageOpen, isMyMessage, lastGroupMessage, lastReceivedId, members, message, messageContentOrder, myMessageTheme, onLongPress, onlyEmojis, onOpenThread, onPress, onPressIn, otherAttachments, preventPress, reactions, setIsEditedMessageOpen, showAvatar, showMessageOverlay, showMessageStatus, threadList, videos, }: MessageContextValue<StreamChatGenerics>) => MessageContextValue<StreamChatGenerics>;
//# sourceMappingURL=useCreateMessageContext.d.ts.map