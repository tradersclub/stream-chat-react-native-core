import type { MessagesContextValue } from '../../../contexts/messagesContext/MessagesContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare const useCreateMessagesContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ additionalTouchableProps, Attachment, AttachmentActions, AudioAttachment, Card, CardCover, CardFooter, CardHeader, channelId, DateHeader, deletedMessagesVisibilityType, deleteMessage, deleteReaction, disableTypingIndicator, dismissKeyboardOnMessageTouch, enableMessageGroupingByUser, FileAttachment, FileAttachmentGroup, FileAttachmentIcon, FlatList, forceAlignMessages, Gallery, getMessagesGroupStyles, Giphy, giphyVersion, handleBlock, handleCopy, handleDelete, handleEdit, handleFlag, handleMute, handlePinMessage, handleQuotedReply, handleReaction, handleRetry, handleThreadReply, ImageLoadingFailedIndicator, ImageLoadingIndicator, initialScrollToFirstUnreadMessage, InlineDateSeparator, InlineUnreadIndicator, isAttachmentEqual, legacyImageViewerSwipeBehaviour, markdownRules, Message, messageActions, MessageAvatar, MessageBounce, MessageContent, messageContentOrder, MessageDeleted, MessageEditedTimestamp, MessageError, MessageFooter, MessageHeader, MessageList, MessagePinnedHeader, MessageReplies, MessageRepliesAvatars, MessageSimple, MessageStatus, MessageSystem, MessageText, MessageTimestamp, myMessageTheme, onLongPressMessage, onPressInMessage, onPressMessage, OverlayReactionList, ReactionList, removeMessage, Reply, retrySendMessage, ScrollToBottomButton, selectReaction, sendReaction, setEditingState, setQuotedMessageState, supportedReactions, targetedMessage, TypingIndicator, TypingIndicatorContainer, updateMessage, UrlPreview, VideoThumbnail, }: MessagesContextValue<StreamChatGenerics> & {
    /**
     * To ensure we allow re-render, when channel is changed
     */
    channelId?: string | undefined;
}) => MessagesContextValue<StreamChatGenerics>;
//# sourceMappingURL=useCreateMessagesContext.d.ts.map