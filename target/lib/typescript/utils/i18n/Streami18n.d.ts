import Dayjs from 'dayjs';
import { FallbackLng, TFunction } from 'i18next';
import type momentTimezone from 'moment-timezone';
import { CustomFormatters, PredefinedFormatters } from './predefinedFormatters';
import type { TDateTimeParser } from '../../contexts/translationContext/TranslationContext';
import enTranslations from '../../i18n/en.json';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/he';
import 'dayjs/locale/hi';
import 'dayjs/locale/it';
import 'dayjs/locale/ja';
import 'dayjs/locale/ko';
import 'dayjs/locale/nl';
import 'dayjs/locale/pt-br';
import 'dayjs/locale/ru';
import 'dayjs/locale/tr';
/**
 * These locale imports also set these locales globally.
 * So as a last step we import the english locale to make
 * sure we don't mess up languages in other places in the app.
 */
import 'dayjs/locale/en';
import type { DefaultStreamChatGenerics } from '../../types/types';
type DateTimeParserModule = typeof Dayjs | typeof momentTimezone;
type Streami18nOptions = {
    DateTimeParser?: DateTimeParserModule;
    dayjsLocaleConfigForLanguage?: Partial<ILocale>;
    debug?: boolean;
    disableDateTimeTranslations?: boolean;
    formatters?: Partial<PredefinedFormatters> & CustomFormatters;
    language?: string;
    logger?: (msg?: string) => void;
    timezone?: string;
    translationsForLanguage?: Partial<typeof enTranslations>;
};
type I18NextConfig = {
    debug: boolean;
    fallbackLng: false | FallbackLng;
    interpolation: {
        escapeValue: boolean;
        formatSeparator: string;
    };
    keySeparator: false | string;
    lng: string;
    nsSeparator: false | string;
    parseMissingKeyHandler: (key: string) => string;
};
export declare class Streami18n {
    i18nInstance: import("i18next").i18n;
    Dayjs: null;
    initialized: boolean;
    private waitForInitializing;
    private onLanguageChangeListeners;
    private onTFunctionOverrideListeners;
    private queuedTFunctionOverride;
    t: TFunction;
    tDateTimeParser: TDateTimeParser;
    translations: {
        [key: string]: {
            [key: string]: Partial<typeof enTranslations> | DefaultStreamChatGenerics;
        };
    };
    /**
     * dayjs.defineLanguage('nl') also changes the global locale. We don't want to do that
     * when a user calls the registerTranslation() function. So instead we will store the
     * locale configs given to the registerTranslation() function in `dayjsLocales` object,
     * and register the required locale with moment when setLanguage is called.
     */
    dayjsLocales: {
        [key: string]: Partial<ILocale>;
    };
    /**
     * Initialize properties used in constructor
     */
    logger: (msg?: string) => void;
    currentLanguage: string;
    DateTimeParser: DateTimeParserModule;
    formatters: PredefinedFormatters & CustomFormatters;
    isCustomDateTimeParser: boolean;
    i18nextConfig: I18NextConfig;
    /**
     * A valid TZ identifier string (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
     */
    timezone?: string;
    /**
     * Constructor accepts following options:
     *  - language (String) default: 'en'
     *    Language code e.g., en, tr
     *
     *  - translationsForLanguage (object)
     *    Translations object. Please check src/i18n/en.json for example.
     *
     *  - disableDateTimeTranslations (boolean) default: false
     *    Disable translations for date-times
     *
     *  - debug (boolean) default: false
     *    Enable debug mode in internal i18n class
     *
     *  - logger (function) default: () => {}
     *    Logger function to log warnings/errors from this class
     *
     *  - dayjsLocaleConfigForLanguage (object) default: 'enConfig'
     *    [Config object](https://momentjs.com/docs/#/i18n/changing-locale/) for internal moment object,
     *    corresponding to language (param)
     *
     *  - DateTimeParser (function) Moment or Dayjs instance/function.
     *    Make sure to load all the required locales in this Moment or Dayjs instance that you will be provide to Streami18n
     *
     * @param {*} options
     */
    constructor(options?: Streami18nOptions, i18nextConfig?: Partial<I18NextConfig>);
    /**
     * Initializes the i18next instance with configuration (which enables natural language as default keys)
     */
    private init;
    localeExists: (language: string) => boolean;
    validateCurrentLanguage: () => void;
    /** Returns an instance of i18next used within this class instance */
    geti18Instance: () => import("i18next").i18n;
    /** Returns list of available languages. */
    getAvailableLanguages: () => string[];
    /** Returns all the translation dictionary for all inbuilt-languages */
    getTranslations: () => {
        [key: string]: {
            [key: string]: DefaultStreamChatGenerics | Partial<{
                "1 Reply": string;
                "1 Thread Reply": string;
                "Allow access to your Gallery": string;
                "Allow camera access in device settings": string;
                "Also send to channel": string;
                "Are you sure you want to permanently delete this message?": string;
                "Are you sure?": string;
                "Ban User": string;
                "Block User": string;
                Cancel: string;
                "Cannot Flag Message": string;
                "Consider how your comment might make others feel and be sure to follow our Community Guidelines": string;
                "Copy Message": string;
                Delete: string;
                "Delete Message": string;
                "Device camera is used to take photos or videos.": string;
                "Device gallery permissions is used to take photos or videos.": string;
                "Do you want to send a copy of this message to a moderator for further investigation?": string;
                "Edit Message": string;
                Edited: string;
                "Editing Message": string;
                "Emoji matching": string;
                "Empty message...": string;
                "Error loading": string;
                "Error loading channel list...": string;
                "Error loading messages for this channel...": string;
                "Error while loading, please reload/refresh": string;
                "File is too large: {{ size }}, maximum upload size is {{ limit }}": string;
                "File type not supported": string;
                Flag: string;
                "Flag Message": string;
                "Flag action failed either due to a network issue or the message is already flagged": string;
                "Hold to start recording.": string;
                "How about sending your first message to a friend?": string;
                "Instant Commands": string;
                "Let's start chatting!": string;
                "Links are disabled": string;
                "Loading channels...": string;
                "Loading messages...": string;
                "Loading...": string;
                "Message Reactions": string;
                "Message deleted": string;
                "Message flagged": string;
                "Mute User": string;
                "No chats here yet\u2026": string;
                "Not supported": string;
                "Nothing yet...": string;
                Ok: string;
                "Only visible to you": string;
                "Open Settings": string;
                Photo: string;
                "Photos and Videos": string;
                "Pin to Conversation": string;
                "Pinned by": string;
                "Please allow Audio permissions in settings.": string;
                "Please enable access to your photos and videos so you can share them.": string;
                "Please select a channel first": string;
                "Reconnecting...": string;
                Reply: string;
                "Reply to Message": string;
                Resend: string;
                "Search GIFs": string;
                "Select More Photos": string;
                "Send Anyway": string;
                "Send a message": string;
                "Sending links is not allowed in this conversation": string;
                "Slow mode ON": string;
                "The message has been reported to a moderator.": string;
                "Thread Reply": string;
                "Unban User": string;
                "Unblock User": string;
                "Unknown User": string;
                "Unmute User": string;
                "Unpin from Conversation": string;
                "Unread Messages": string;
                Video: string;
                You: string;
                "You can't send messages in this channel": string;
                "timestamp/ChannelPreviewStatus": string;
                "timestamp/ImageGalleryHeader": string;
                "timestamp/InlineDateSeparator": string;
                "timestamp/MessageEditedTimestamp": string;
                "timestamp/MessageSystem": string;
                "timestamp/MessageTimestamp": string;
                "timestamp/StickyHeader": string;
                "{{ firstUser }} and {{ nonSelfUserLength }} more are typing": string;
                "{{ index }} of {{ photoLength }}": string;
                "{{ replyCount }} Replies": string;
                "{{ replyCount }} Thread Replies": string;
                "{{ user }} is typing": string;
                "\uD83C\uDFD9 Attachment...": string;
            }>;
        };
    };
    /**
     * Returns current version translator function.
     */
    getTranslators(): Promise<{
        t: TFunction;
        tDateTimeParser: TDateTimeParser;
    }>;
    /**
     * Register translation
     */
    registerTranslation(language: string, translation: Partial<typeof enTranslations> | DefaultStreamChatGenerics, customDayjsLocale?: Partial<ILocale>): void;
    addOrUpdateLocale(key: string, config: Partial<ILocale>): void;
    /**
     * Changes the language.
     * Note: if you are using overrideTFunction, you will need to call the override again after changing the language.
     */
    setLanguage(language: string): Promise<TFunction | undefined>;
    addOnLanguageChangeListener(callback: (t: TFunction) => void): {
        unsubscribe: () => void;
    };
    addOnTFunctionOverrideListener(callback: (t: TFunction) => void): {
        unsubscribe: () => void;
    };
    overrideTFunction(tFunction: TFunction): void;
}
export {};
//# sourceMappingURL=Streami18n.d.ts.map