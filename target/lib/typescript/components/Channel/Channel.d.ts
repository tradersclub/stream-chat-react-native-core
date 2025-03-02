import React, { PropsWithChildren } from 'react';
import { KeyboardAvoidingViewProps } from 'react-native';
import { Channel as ChannelType, SendMessageAPIResponse, StreamChat, Message as StreamMessage } from 'stream-chat';
import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import type { UseChannelStateValue } from '../../contexts/channelsStateContext/useChannelState';
import { ChatContextValue } from '../../contexts/chatContext/ChatContext';
import { InputMessageInputContextValue } from '../../contexts/messageInputContext/MessageInputContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import { OwnCapabilitiesContextValue } from '../../contexts/ownCapabilitiesContext/OwnCapabilitiesContext';
import { PaginatedMessageListContextValue } from '../../contexts/paginatedMessageListContext/PaginatedMessageListContext';
import { SuggestionsContextValue } from '../../contexts/suggestionsContext/SuggestionsContext';
import { ThreadContextValue } from '../../contexts/threadContext/ThreadContext';
import { TranslationContextValue } from '../../contexts/translationContext/TranslationContext';
import { DefaultStreamChatGenerics } from '../../types/types';
import { ReactionData } from '../../utils/utils';
import { LoadingErrorProps } from '../Indicators/LoadingErrorIndicator';
export declare const reactionData: ReactionData[];
export type ChannelPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ChannelContextValue<StreamChatGenerics>, 'channel'> & Partial<Pick<ChannelContextValue<StreamChatGenerics>, 'EmptyStateIndicator' | 'enableMessageGroupingByUser' | 'enforceUniqueReaction' | 'giphyEnabled' | 'hideStickyDateHeader' | 'hideDateSeparators' | 'LoadingIndicator' | 'maxTimeBetweenGroupedMessages' | 'NetworkDownIndicator' | 'StickyHeader'>> & Pick<ChatContextValue<StreamChatGenerics>, 'client' | 'enableOfflineSupport'> & Partial<Omit<InputMessageInputContextValue<StreamChatGenerics>, 'quotedMessage' | 'editing' | 'clearEditingState' | 'clearQuotedMessageState' | 'sendMessage'>> & Partial<Pick<SuggestionsContextValue<StreamChatGenerics>, 'AutoCompleteSuggestionHeader' | 'AutoCompleteSuggestionItem' | 'AutoCompleteSuggestionList'>> & Pick<TranslationContextValue, 't'> & Partial<Pick<PaginatedMessageListContextValue<StreamChatGenerics>, 'messages' | 'loadingMore' | 'loadingMoreRecent'>> & UseChannelStateValue<StreamChatGenerics> & Partial<Pick<MessagesContextValue<StreamChatGenerics>, 'additionalTouchableProps' | 'Attachment' | 'AttachmentActions' | 'AudioAttachment' | 'Card' | 'CardCover' | 'CardFooter' | 'CardHeader' | 'DateHeader' | 'deletedMessagesVisibilityType' | 'disableTypingIndicator' | 'dismissKeyboardOnMessageTouch' | 'FileAttachment' | 'FileAttachmentIcon' | 'FileAttachmentGroup' | 'FlatList' | 'forceAlignMessages' | 'Gallery' | 'getMessagesGroupStyles' | 'Giphy' | 'giphyVersion' | 'handleBan' | 'handleBlock' | 'handleCopy' | 'handleDelete' | 'handleEdit' | 'handleFlag' | 'handleMute' | 'handlePinMessage' | 'handleReaction' | 'handleQuotedReply' | 'handleRetry' | 'handleThreadReply' | 'InlineDateSeparator' | 'InlineUnreadIndicator' | 'isAttachmentEqual' | 'legacyImageViewerSwipeBehaviour' | 'ImageLoadingFailedIndicator' | 'ImageLoadingIndicator' | 'markdownRules' | 'Message' | 'messageActions' | 'MessageAvatar' | 'MessageBounce' | 'MessageContent' | 'messageContentOrder' | 'MessageDeleted' | 'MessageEditedTimestamp' | 'MessageError' | 'MessageFooter' | 'MessageHeader' | 'MessageList' | 'MessagePinnedHeader' | 'MessageReplies' | 'MessageRepliesAvatars' | 'MessageSimple' | 'MessageStatus' | 'MessageSystem' | 'MessageText' | 'MessageTimestamp' | 'myMessageTheme' | 'onLongPressMessage' | 'onPressInMessage' | 'onPressMessage' | 'OverlayReactionList' | 'ReactionList' | 'Reply' | 'ScrollToBottomButton' | 'selectReaction' | 'supportedReactions' | 'TypingIndicator' | 'TypingIndicatorContainer' | 'UrlPreview' | 'VideoThumbnail'>> & Partial<Pick<ThreadContextValue<StreamChatGenerics>, 'allowThreadMessagesInChannel' | 'thread'>> & {
    shouldSyncChannel: boolean;
    /**
     * Additional props passed to keyboard avoiding view
     */
    additionalKeyboardAvoidingViewProps?: Partial<KeyboardAvoidingViewProps>;
    /**
     * Disables the channel UI if the channel is frozen
     */
    disableIfFrozenChannel?: boolean;
    /**
     * When true, disables the KeyboardCompatibleView wrapper
     *
     * Channel internally uses the [KeyboardCompatibleView](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/KeyboardCompatibleView/KeyboardCompatibleView.tsx)
     * component to adjust the height of Channel when the keyboard is opened or dismissed. This prop provides the ability to disable this functionality in case you
     * want to use [KeyboardAvoidingView](https://facebook.github.io/react-native/docs/keyboardavoidingview) or handle dismissal yourself.
     * KeyboardAvoidingView works well when your component occupies 100% of screen height, otherwise it may raise some issues.
     */
    disableKeyboardCompatibleView?: boolean;
    /**
     * Overrides the Stream default mark channel read request (Advanced usage only)
     * @param channel Channel object
     */
    doMarkReadRequest?: (channel: ChannelType<StreamChatGenerics>) => void;
    /**
     * Overrides the Stream default send message request (Advanced usage only)
     * @param channelId
     * @param messageData Message object
     */
    doSendMessageRequest?: (channelId: string, messageData: StreamMessage<StreamChatGenerics>) => Promise<SendMessageAPIResponse<StreamChatGenerics>>;
    /**
     * Overrides the Stream default update message request (Advanced usage only)
     * @param channelId
     * @param updatedMessage UpdatedMessage object
     */
    doUpdateMessageRequest?: (channelId: string, updatedMessage: Parameters<StreamChat<StreamChatGenerics>['updateMessage']>[0]) => ReturnType<StreamChat<StreamChatGenerics>['updateMessage']>;
    /**
     * When true, messageList will be scrolled at first unread message, when opened.
     */
    initialScrollToFirstUnreadMessage?: boolean;
    keyboardBehavior?: KeyboardAvoidingViewProps['behavior'];
    /**
     * Custom wrapper component that handles height adjustment of Channel component when keyboard is opened or dismissed
     * Default component (accepts the same props): [KeyboardCompatibleView](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/KeyboardCompatibleView/KeyboardCompatibleView.tsx)
     *
     * **Example:**
     *
     * ```
     * <Channel
     *  channel={channel}
     *  KeyboardCompatibleView={(props) => {
     *    return (
     *      <KeyboardCompatibleView>
     *        {props.children}
     *      </KeyboardCompatibleView>
     *    )
     *  }}
     * />
     * ```
     */
    KeyboardCompatibleView?: React.ComponentType<KeyboardAvoidingViewProps>;
    keyboardVerticalOffset?: number;
    /**
     * Custom loading error indicator to override the Stream default
     */
    LoadingErrorIndicator?: React.ComponentType<LoadingErrorProps>;
    maxMessageLength?: number;
    /**
     * Load the channel at a specified message instead of the most recent message.
     */
    messageId?: string;
    newMessageStateUpdateThrottleInterval?: number;
    overrideOwnCapabilities?: Partial<OwnCapabilitiesContextValue>;
    stateUpdateThrottleInterval?: number;
    /**
     * Tells if channel is rendering a thread list
     */
    threadList?: boolean;
};
export type ChannelProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Omit<ChannelPropsWithContext<StreamChatGenerics>, 'channel'>> & Pick<ChannelPropsWithContext<StreamChatGenerics>, 'channel'>;
/**
 *
 * The wrapper component for a chat channel. Channel needs to be placed inside a Chat component
 * to receive the StreamChat client instance. MessageList, Thread, and MessageInput must be
 * children of the Channel component to receive the ChannelContext.
 *
 * @example ./Channel.md
 */
export declare const Channel: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: React.PropsWithChildren<ChannelProps<StreamChatGenerics>>) => React.JSX.Element;
//# sourceMappingURL=Channel.d.ts.map