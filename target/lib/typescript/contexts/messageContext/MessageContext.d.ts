import React, { PropsWithChildren } from 'react';
import type { Attachment } from 'stream-chat';
import type { ActionHandler } from '../../components/Attachment/Attachment';
import { ReactionSummary } from '../../components/Message/hooks/useProcessReactions';
import type { MessageTouchableHandlerPayload, TouchableHandlerPayload } from '../../components/Message/Message';
import type { GroupType, MessageType } from '../../components/MessageList/hooks/useMessageList';
import type { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import type { MessageContentType } from '../../contexts/messagesContext/MessagesContext';
import type { DeepPartial } from '../../contexts/themeContext/ThemeContext';
import type { Theme } from '../../contexts/themeContext/utils/theme';
import type { DefaultStreamChatGenerics, UnknownType } from '../../types/types';
export type Alignment = 'right' | 'left';
export type MessageContextValue<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    /** Whether or not actions can be performed on message */
    actionsEnabled: boolean;
    /** Position of the message, either 'right' or 'left' */
    alignment: Alignment;
    /** The files attached to a message */
    files: Attachment<StreamChatGenerics>[];
    /**
     * Position of message in group - top, bottom, middle, single.
     *
     * Message group is a group of consecutive messages from same user. groupStyles can be used to style message as per their position in message group
     * e.g., user avatar (to which message belongs to) is only showed for last (bottom) message in group.
     */
    groupStyles: GroupType[];
    /** Handler for actions. Actions in combination with attachments can be used to build [commands](https://getstream.io/chat/docs/#channel_commands). */
    handleAction: ActionHandler;
    /**
     * @deprecated
     * @returns Promise<void>
     */
    handleCopyMessage: () => void;
    /**
     * @deprecated
     * @returns Promise<void>
     */
    handleDeleteMessage: () => void;
    /**
     * @deprecated
     * @returns Promise<void>
     */
    handleEditMessage: () => void;
    /**
     * @deprecated
     * @returns Promise<void>
     */
    handleFlagMessage: () => void;
    /**
     * @deprecated
     * @returns Promise<void>
     */
    handleQuotedReplyMessage: () => void;
    /**
     * @deprecated
     * @returns Promise<void>
     */
    handleResendMessage: () => Promise<void>;
    /**
     * @deprecated
     * @returns Promise<void>
     */
    handleToggleBanUser: () => Promise<void>;
    /**
     * @deprecated
     * @returns Promise<void>
     */
    handleToggleMuteUser: () => Promise<void>;
    handleToggleReaction: (reactionType: string) => Promise<void>;
    /** Whether or not message has reactions */
    hasReactions: boolean;
    /** The images attached to a message */
    images: Attachment<StreamChatGenerics>[];
    /** Boolean that determines if the edited message is pressed. */
    isEditedMessageOpen: boolean;
    /** Whether or not this is the active user's message */
    isMyMessage: boolean;
    /** Whether or not this is the last message in a group of messages */
    lastGroupMessage: boolean;
    /** Current [message object](https://getstream.io/chat/docs/#message_format) */
    message: MessageType<StreamChatGenerics>;
    /** Order to render the message content */
    messageContentOrder: MessageContentType[];
    /**
     * You can call methods available on the Message
     * component such as handleEdit, handleDelete, handleAction etc.
     *
     * Source - [Message](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/Message/Message.tsx)
     *
     * By default, we show the overlay with all the message actions on long press.
     *
     * @param payload   Payload object for onLongPress event
     */
    onLongPress: (payload: TouchableHandlerPayload) => void;
    /** Whether the message is only text and the text is only emojis */
    onlyEmojis: boolean;
    /** Handler to open a thread on a message */
    onOpenThread: () => void;
    /**
     * You can call methods available on the Message
     * component such as handleEdit, handleDelete, handleAction etc.
     *
     * Source - [Message](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/Message/Message.tsx)
     *
     * By default, we will dismiss the keyboard on press.
     *
     * @param payload   Payload object for onPress event
     */
    onPress: (payload: MessageTouchableHandlerPayload) => void;
    onPressIn: ((payload: TouchableHandlerPayload) => void) | null;
    /** The images attached to a message */
    otherAttachments: Attachment<StreamChatGenerics>[];
    reactions: ReactionSummary[];
    /** React set state function to set the state of `isEditedMessageOpen` */
    setIsEditedMessageOpen: React.Dispatch<React.SetStateAction<boolean>>;
    showMessageOverlay: (isMessageActionsVisible?: boolean, error?: boolean) => void;
    showMessageStatus: boolean;
    /** Whether or not the Message is part of a Thread */
    threadList: boolean;
    /** The videos attached to a message */
    videos: Attachment<StreamChatGenerics>[];
    goToMessage?: (messageId: string) => void;
    /** Latest message id on current channel */
    lastReceivedId?: string;
    /**
     * Theme provided only to messages that are the current users
     */
    myMessageTheme?: DeepPartial<Theme>;
    /** Prevent message being pressed for image viewer view */
    preventPress?: boolean;
    /** Whether or not the avatar show show next to Message */
    showAvatar?: boolean;
} & Pick<ChannelContextValue<StreamChatGenerics>, 'channel' | 'members'>;
export declare const MessageContext: React.Context<MessageContextValue<DefaultStreamChatGenerics>>;
export declare const MessageProvider: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ children, value, }: React.PropsWithChildren<{
    value?: MessageContextValue<StreamChatGenerics> | undefined;
}>) => React.JSX.Element;
export declare const useMessageContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>() => MessageContextValue<StreamChatGenerics>;
/**
 * @deprecated
 *
 * This will be removed in the next major version.
 *
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withMessageContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withMessageContext: <P extends UnknownType, StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(Component: React.ComponentType<P>) => React.ComponentType<Omit<P, "onPress" | "onPressIn" | "onLongPress" | "channel" | "message" | "messageContentOrder" | "myMessageTheme" | "members" | "threadList" | "reactions" | "groupStyles" | "images" | "preventPress" | "actionsEnabled" | "alignment" | "files" | "handleAction" | "handleCopyMessage" | "handleDeleteMessage" | "handleEditMessage" | "handleFlagMessage" | "handleQuotedReplyMessage" | "handleResendMessage" | "handleToggleBanUser" | "handleToggleMuteUser" | "handleToggleReaction" | "hasReactions" | "isEditedMessageOpen" | "isMyMessage" | "lastGroupMessage" | "onlyEmojis" | "onOpenThread" | "otherAttachments" | "setIsEditedMessageOpen" | "showMessageOverlay" | "showMessageStatus" | "videos" | "goToMessage" | "lastReceivedId" | "showAvatar">>;
//# sourceMappingURL=MessageContext.d.ts.map