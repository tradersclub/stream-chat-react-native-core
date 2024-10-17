import type React from 'react';
import type { DebouncedFunc } from 'lodash';
import type { Channel, CommandResponse, FormatMessageResponse, MessageResponse, StreamChat } from 'stream-chat';
import { IconProps } from '../../src/icons/utils/base';
import { MessageType } from '../components/MessageList/hooks/useMessageList';
import type { EmojiSearchIndex, MentionAllAppUsersQuery } from '../contexts/messageInputContext/MessageInputContext';
import type { SuggestionCommand, SuggestionComponentType, SuggestionUser } from '../contexts/suggestionsContext/SuggestionsContext';
import { Emoji } from '../emoji-data';
import type { TableRowJoinedUser } from '../store/types';
import type { DefaultStreamChatGenerics, ValueOf } from '../types/types';
export type ReactionData = {
    Icon: React.ComponentType<IconProps>;
    type: string;
};
export declare const FileState: Readonly<{
    FINISHED: "finished";
    NOT_SUPPORTED: "not_supported";
    UPLOAD_FAILED: "upload_failed";
    UPLOADED: "uploaded";
    UPLOADING: "uploading";
}>;
export declare const ProgressIndicatorTypes: {
    IN_PROGRESS: 'in_progress';
    INACTIVE: 'inactive';
    NOT_SUPPORTED: 'not_supported';
    RETRY: 'retry';
};
export declare const MessageStatusTypes: {
    FAILED: string;
    RECEIVED: string;
    SENDING: string;
};
export type FileStateValue = (typeof FileState)[keyof typeof FileState];
type Progress = ValueOf<typeof ProgressIndicatorTypes>;
export declare const getIndicatorTypeForFileState: (fileState: FileStateValue, enableOfflineSupport: boolean) => Progress | null;
/**
 * Utility to check if the message is a Blocked message.
 * @param message
 * @returns boolean
 */
export declare const isBlockedMessage: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(message: MessageType<StreamChatGenerics> | TableRowJoinedUser<"messages">) => boolean | "" | undefined;
/**
 *  Utility to check if the message is a Bounced message.
 * @param message
 * @returns boolean
 */
export declare const isBouncedMessage: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(message: MessageType<StreamChatGenerics>) => boolean;
/**
 * Utility to check if the message is a edited message.
 * @param message
 * @returns boolean
 */
export declare const isEditedMessage: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(message: MessageType<StreamChatGenerics>) => boolean;
export declare const queryMembersDebounced: DebouncedFunc<(<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(channel: Channel<StreamChatGenerics>, query: SuggestionUser<StreamChatGenerics>["name"], onReady?: ((users: SuggestionUser<StreamChatGenerics>[]) => void) | undefined, options?: {
    limit?: number;
}) => Promise<void>)>;
export declare const queryUsersDebounced: DebouncedFunc<(<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(client: StreamChat<StreamChatGenerics>, query: SuggestionUser<StreamChatGenerics>["name"], onReady?: ((users: SuggestionUser<StreamChatGenerics>[]) => void) | undefined, options?: {
    limit?: number | undefined;
    mentionAllAppUsersQuery?: MentionAllAppUsersQuery<StreamChatGenerics> | undefined;
}) => Promise<void>)>;
export declare const isCommandTrigger: (trigger: Trigger) => trigger is "/";
export declare const isEmojiTrigger: (trigger: Trigger) => trigger is ":";
export declare const isMentionTrigger: (trigger: Trigger) => trigger is "@";
export type Trigger = '/' | '@' | ':';
export type TriggerSettings<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    '/'?: {
        dataProvider: (query: CommandResponse<StreamChatGenerics>['name'], text: string, onReady?: (data: CommandResponse<StreamChatGenerics>[], q: CommandResponse<StreamChatGenerics>['name']) => void, options?: {
            limit?: number;
        }) => SuggestionCommand<StreamChatGenerics>[];
        output: (entity: CommandResponse<StreamChatGenerics>) => {
            caretPosition: string;
            key: string;
            text: string;
        };
        type: SuggestionComponentType;
    };
    ':'?: {
        dataProvider: (query: Emoji['name'], _: string, onReady?: (data: Emoji[], q: Emoji['name']) => void) => Emoji[] | Promise<Emoji[]>;
        output: (entity: Emoji) => {
            caretPosition: string;
            key: string;
            text: string;
        };
        type: SuggestionComponentType;
    };
    '@'?: {
        callback: (item: SuggestionUser<StreamChatGenerics>) => void;
        dataProvider: (query: SuggestionUser<StreamChatGenerics>['name'], _: string, onReady?: (data: SuggestionUser<StreamChatGenerics>[], q: SuggestionUser<StreamChatGenerics>['name']) => void, options?: {
            limit?: number;
            mentionAllAppUsersEnabled?: boolean;
            mentionAllAppUsersQuery?: MentionAllAppUsersQuery<StreamChatGenerics>;
        }) => SuggestionUser<StreamChatGenerics>[] | Promise<void> | void;
        output: (entity: SuggestionUser<StreamChatGenerics>) => {
            caretPosition: string;
            key: string;
            text: string;
        };
        type: SuggestionComponentType;
    };
};
export type ACITriggerSettingsParams<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    channel: Channel<StreamChatGenerics>;
    client: StreamChat<StreamChatGenerics>;
    onMentionSelectItem: (item: SuggestionUser<StreamChatGenerics>) => void;
    emojiSearchIndex?: EmojiSearchIndex;
};
export type QueryUsersFunction<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = (client: StreamChat<StreamChatGenerics>, query: SuggestionUser<StreamChatGenerics>['name'], onReady?: (users: SuggestionUser<StreamChatGenerics>[]) => void, options?: {
    limit?: number;
    mentionAllAppUsersQuery?: MentionAllAppUsersQuery<StreamChatGenerics>;
}) => Promise<void>;
export type QueryMembersFunction<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = (channel: Channel<StreamChatGenerics>, query: SuggestionUser<StreamChatGenerics>['name'], onReady?: (users: SuggestionUser<StreamChatGenerics>[]) => void, options?: {
    limit?: number;
}) => Promise<void>;
/**
 * Default emoji search index for auto complete text input
 */
export declare const defaultEmojiSearchIndex: EmojiSearchIndex;
/**
 * ACI = AutoCompleteInput
 *
 * DataProvider accepts `onReady` function, which will execute once the data is ready.
 * Another approach would have been to simply return the data from dataProvider and let the
 * component await for it and then execute the required logic. We are going for callback instead
 * of async-await since we have debounce function in dataProvider. Which will delay the execution
 * of api call on trailing end of debounce (lets call it a1) but will return with result of
 * previous call without waiting for a1. So in this case, we want to execute onReady, when trailing
 * end of debounce executes.
 */
export declare const ACITriggerSettings: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ channel, client, emojiSearchIndex, onMentionSelectItem, }: ACITriggerSettingsParams<StreamChatGenerics>) => TriggerSettings<StreamChatGenerics>;
export declare const makeImageCompatibleUrl: (url: string) => string;
export declare const getUrlWithoutParams: (url?: string) => string | undefined;
export declare const isLocalUrl: (url: string) => boolean;
export declare const generateRandomId: (a?: string) => string;
export declare const hasOnlyEmojis: (text: string) => boolean;
/**
 * Stringifies a message object
 * @param {FormatMessageResponse<StreamChatGenerics>} message - the message object to be stringified
 * @returns {string} The stringified message
 */
export declare const stringifyMessage: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ deleted_at, i18n, latest_reactions, reaction_groups, readBy, reply_count, status, text, type, updated_at, }: MessageResponse<StreamChatGenerics> | MessageType<StreamChatGenerics>) => string;
/**
 * Reduces a list of messages to strings that are used in useEffect & useMemo
 * @param {messages} messages - the array of messages to be compared
 * @returns {string} The mapped message string
 */
export declare const reduceMessagesToString: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(messages: FormatMessageResponse<StreamChatGenerics>[]) => string;
/**
 * Utility to get the file name from the path using regex.
 * `[^/]+` matches one or more characters that are not a slash (/), ensuring we capture the filename part.
 * `\.` matches the period before the file extension.
 * `[^/]+$` matches one or more characters that are not a slash (/) until the end of the string, capturing the file extension.
 * @param path string
 * @returns string
 */
export declare const getFileNameFromPath: (path: string) => string;
/**
 * Utility to get the duration label from the duration in seconds.
 * @param duration number
 * @returns string
 */
export declare const getDurationLabelFromDuration: (duration: number) => string;
/**
 * Utility to escape special characters in a string.
 * @param text
 * @returns string
 */
export declare function escapeRegExp(text: string): string;
export {};
//# sourceMappingURL=utils.d.ts.map