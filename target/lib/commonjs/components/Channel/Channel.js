var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reactionData = exports.Channel = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _omit = _interopRequireDefault(require("lodash/omit"));
var _throttle = _interopRequireDefault(require("lodash/throttle"));
var _mimeTypes = require("mime-types");
var _streamChat = require("stream-chat");
var _useCreateChannelContext = require("./hooks/useCreateChannelContext");
var _useCreateInputMessageInputContext = require("./hooks/useCreateInputMessageInputContext");
var _useCreateMessagesContext = require("./hooks/useCreateMessagesContext");
var _useCreateOwnCapabilitiesContext = require("./hooks/useCreateOwnCapabilitiesContext");
var _useCreatePaginatedMessageListContext = require("./hooks/useCreatePaginatedMessageListContext");
var _useCreateThreadContext = require("./hooks/useCreateThreadContext");
var _useCreateTypingContext = require("./hooks/useCreateTypingContext");
var _useTargetedMessage2 = require("./hooks/useTargetedMessage");
var _ChannelContext = require("../../contexts/channelContext/ChannelContext");
var _useChannelState2 = require("../../contexts/channelsStateContext/useChannelState");
var _ChatContext = require("../../contexts/chatContext/ChatContext");
var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");
var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");
var _OwnCapabilitiesContext = require("../../contexts/ownCapabilitiesContext/OwnCapabilitiesContext");
var _PaginatedMessageListContext = require("../../contexts/paginatedMessageListContext/PaginatedMessageListContext");
var _SuggestionsContext = require("../../contexts/suggestionsContext/SuggestionsContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _ThreadContext = require("../../contexts/threadContext/ThreadContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _TypingContext = require("../../contexts/typingContext/TypingContext");
var _useAppStateListener = require("../../hooks/useAppStateListener");
var _icons = require("../../icons");
var _native = require("../../native");
var dbApi = _interopRequireWildcard(require("../../store/apis"));
var _types = require("../../types/types");
var _addReactionToLocalState = require("../../utils/addReactionToLocalState");
var _compressImage = require("../../utils/compressImage");
var _DBSyncManager = require("../../utils/DBSyncManager");
var _patchMessageTextCommand = require("../../utils/patchMessageTextCommand");
var _removeReactionFromLocalState = require("../../utils/removeReactionFromLocalState");
var _removeReservedFields = require("../../utils/removeReservedFields");
var _utils = require("../../utils/utils");
var _Attachment = require("../Attachment/Attachment");
var _AttachmentActions = require("../Attachment/AttachmentActions");
var _AudioAttachment = require("../Attachment/AudioAttachment");
var _Card = require("../Attachment/Card");
var _FileAttachment = require("../Attachment/FileAttachment");
var _FileAttachmentGroup = require("../Attachment/FileAttachmentGroup");
var _FileIcon = require("../Attachment/FileIcon");
var _Gallery = require("../Attachment/Gallery");
var _Giphy = require("../Attachment/Giphy");
var _ImageLoadingFailedIndicator = require("../Attachment/ImageLoadingFailedIndicator");
var _ImageLoadingIndicator = require("../Attachment/ImageLoadingIndicator");
var _VideoThumbnail = require("../Attachment/VideoThumbnail");
var _AutoCompleteSuggestionHeader = require("../AutoCompleteInput/AutoCompleteSuggestionHeader");
var _AutoCompleteSuggestionItem = require("../AutoCompleteInput/AutoCompleteSuggestionItem");
var _AutoCompleteSuggestionList = require("../AutoCompleteInput/AutoCompleteSuggestionList");
var _EmptyStateIndicator = require("../Indicators/EmptyStateIndicator");
var _LoadingErrorIndicator = require("../Indicators/LoadingErrorIndicator");
var _LoadingIndicator = require("../Indicators/LoadingIndicator");
var _KeyboardCompatibleView = require("../KeyboardCompatibleView/KeyboardCompatibleView");
var _Message = require("../Message/Message");
var _MessageAvatar = require("../Message/MessageSimple/MessageAvatar");
var _MessageBounce = require("../Message/MessageSimple/MessageBounce");
var _MessageContent = require("../Message/MessageSimple/MessageContent");
var _MessageDeleted = require("../Message/MessageSimple/MessageDeleted");
var _MessageEditedTimestamp = require("../Message/MessageSimple/MessageEditedTimestamp");
var _MessageError = require("../Message/MessageSimple/MessageError");
var _MessageFooter = require("../Message/MessageSimple/MessageFooter");
var _MessagePinnedHeader = require("../Message/MessageSimple/MessagePinnedHeader");
var _MessageReplies = require("../Message/MessageSimple/MessageReplies");
var _MessageRepliesAvatars = require("../Message/MessageSimple/MessageRepliesAvatars");
var _MessageSimple = require("../Message/MessageSimple/MessageSimple");
var _MessageStatus = require("../Message/MessageSimple/MessageStatus");
var _MessageTimestamp = require("../Message/MessageSimple/MessageTimestamp");
var _ReactionList = require("../Message/MessageSimple/ReactionList");
var _AttachButton = require("../MessageInput/AttachButton");
var _CommandsButton = require("../MessageInput/CommandsButton");
var _AudioRecorder = require("../MessageInput/components/AudioRecorder/AudioRecorder");
var _AudioRecordingButton = require("../MessageInput/components/AudioRecorder/AudioRecordingButton");
var _AudioRecordingInProgress = require("../MessageInput/components/AudioRecorder/AudioRecordingInProgress");
var _AudioRecordingLockIndicator = require("../MessageInput/components/AudioRecorder/AudioRecordingLockIndicator");
var _AudioRecordingPreview = require("../MessageInput/components/AudioRecorder/AudioRecordingPreview");
var _AudioRecordingWaveform = require("../MessageInput/components/AudioRecorder/AudioRecordingWaveform");
var _InputEditingStateHeader = require("../MessageInput/components/InputEditingStateHeader");
var _InputGiphySearch = require("../MessageInput/components/InputGiphySearch");
var _InputReplyStateHeader = require("../MessageInput/components/InputReplyStateHeader");
var _CooldownTimer = require("../MessageInput/CooldownTimer");
var _FileUploadPreview = require("../MessageInput/FileUploadPreview");
var _ImageUploadPreview = require("../MessageInput/ImageUploadPreview");
var _InputButtons = require("../MessageInput/InputButtons");
var _MoreOptionsButton = require("../MessageInput/MoreOptionsButton");
var _SendButton = require("../MessageInput/SendButton");
var _SendMessageDisallowedIndicator = require("../MessageInput/SendMessageDisallowedIndicator");
var _ShowThreadMessageInChannelButton = require("../MessageInput/ShowThreadMessageInChannelButton");
var _UploadProgressIndicator = require("../MessageInput/UploadProgressIndicator");
var _DateHeader = require("../MessageList/DateHeader");
var _InlineDateSeparator = require("../MessageList/InlineDateSeparator");
var _InlineUnreadIndicator = require("../MessageList/InlineUnreadIndicator");
var _MessageList = require("../MessageList/MessageList");
var _MessageSystem = require("../MessageList/MessageSystem");
var _NetworkDownIndicator = require("../MessageList/NetworkDownIndicator");
var _ScrollToBottomButton = require("../MessageList/ScrollToBottomButton");
var _StickyHeader = require("../MessageList/StickyHeader");
var _TypingIndicator = require("../MessageList/TypingIndicator");
var _TypingIndicatorContainer = require("../MessageList/TypingIndicatorContainer");
var _OverlayReactionList = require("../MessageOverlay/OverlayReactionList");
var _Reply = require("../Reply/Reply");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["attachments", "mentioned_users", "parent_id", "text"],
  _excluded2 = ["channel_mutes", "devices", "mutes"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Channel/Channel.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var styles = _reactNative.StyleSheet.create({
  selectChannel: {
    fontWeight: 'bold',
    padding: 16
  }
});
var reactionData = [{
  Icon: _icons.LoveReaction,
  type: 'love'
}, {
  Icon: _icons.ThumbsUpReaction,
  type: 'like'
}, {
  Icon: _icons.ThumbsDownReaction,
  type: 'sad'
}, {
  Icon: _icons.LOLReaction,
  type: 'haha'
}, {
  Icon: _icons.WutReaction,
  type: 'wow'
}];
exports.reactionData = reactionData;
var scrollToFirstUnreadThreshold = 4;
var defaultThrottleInterval = 500;
var defaultDebounceInterval = 500;
var throttleOptions = {
  leading: true,
  trailing: true
};
var debounceOptions = {
  leading: true,
  trailing: true
};
var ChannelWithContext = function ChannelWithContext(props) {
  var _client$user, _channel$data2, _ref30, _ref31;
  var additionalKeyboardAvoidingViewProps = props.additionalKeyboardAvoidingViewProps,
    additionalTextInputProps = props.additionalTextInputProps,
    additionalTouchableProps = props.additionalTouchableProps,
    _props$allowThreadMes = props.allowThreadMessagesInChannel,
    allowThreadMessagesInChannel = _props$allowThreadMes === void 0 ? true : _props$allowThreadMes,
    _props$asyncMessagesL = props.asyncMessagesLockDistance,
    asyncMessagesLockDistance = _props$asyncMessagesL === void 0 ? 50 : _props$asyncMessagesL,
    _props$asyncMessagesM = props.asyncMessagesMinimumPressDuration,
    asyncMessagesMinimumPressDuration = _props$asyncMessagesM === void 0 ? 500 : _props$asyncMessagesM,
    _props$asyncMessagesM2 = props.asyncMessagesMultiSendEnabled,
    asyncMessagesMultiSendEnabled = _props$asyncMessagesM2 === void 0 ? true : _props$asyncMessagesM2,
    _props$asyncMessagesS = props.asyncMessagesSlideToCancelDistance,
    asyncMessagesSlideToCancelDistance = _props$asyncMessagesS === void 0 ? 100 : _props$asyncMessagesS,
    _props$AttachButton = props.AttachButton,
    AttachButton = _props$AttachButton === void 0 ? _AttachButton.AttachButton : _props$AttachButton,
    _props$Attachment = props.Attachment,
    Attachment = _props$Attachment === void 0 ? _Attachment.Attachment : _props$Attachment,
    _props$AttachmentActi = props.AttachmentActions,
    AttachmentActions = _props$AttachmentActi === void 0 ? _AttachmentActions.AttachmentActions : _props$AttachmentActi,
    _props$AudioAttachmen = props.AudioAttachment,
    AudioAttachment = _props$AudioAttachmen === void 0 ? _AudioAttachment.AudioAttachment : _props$AudioAttachmen,
    _props$AudioAttachmen2 = props.AudioAttachmentUploadPreview,
    AudioAttachmentUploadPreview = _props$AudioAttachmen2 === void 0 ? _AudioAttachment.AudioAttachment : _props$AudioAttachmen2,
    _props$AudioRecorder = props.AudioRecorder,
    AudioRecorder = _props$AudioRecorder === void 0 ? _AudioRecorder.AudioRecorder : _props$AudioRecorder,
    _props$audioRecording = props.audioRecordingEnabled,
    audioRecordingEnabled = _props$audioRecording === void 0 ? false : _props$audioRecording,
    _props$AudioRecording = props.AudioRecordingInProgress,
    AudioRecordingInProgress = _props$AudioRecording === void 0 ? _AudioRecordingInProgress.AudioRecordingInProgress : _props$AudioRecording,
    _props$AudioRecording2 = props.AudioRecordingLockIndicator,
    AudioRecordingLockIndicator = _props$AudioRecording2 === void 0 ? _AudioRecordingLockIndicator.AudioRecordingLockIndicator : _props$AudioRecording2,
    _props$AudioRecording3 = props.AudioRecordingPreview,
    AudioRecordingPreview = _props$AudioRecording3 === void 0 ? _AudioRecordingPreview.AudioRecordingPreview : _props$AudioRecording3,
    _props$AudioRecording4 = props.AudioRecordingWaveform,
    AudioRecordingWaveform = _props$AudioRecording4 === void 0 ? _AudioRecordingWaveform.AudioRecordingWaveform : _props$AudioRecording4,
    _props$AutoCompleteSu = props.AutoCompleteSuggestionHeader,
    AutoCompleteSuggestionHeader = _props$AutoCompleteSu === void 0 ? _AutoCompleteSuggestionHeader.AutoCompleteSuggestionHeader : _props$AutoCompleteSu,
    _props$AutoCompleteSu2 = props.AutoCompleteSuggestionItem,
    AutoCompleteSuggestionItem = _props$AutoCompleteSu2 === void 0 ? _AutoCompleteSuggestionItem.AutoCompleteSuggestionItem : _props$AutoCompleteSu2,
    _props$AutoCompleteSu3 = props.AutoCompleteSuggestionList,
    AutoCompleteSuggestionList = _props$AutoCompleteSu3 === void 0 ? _AutoCompleteSuggestionList.AutoCompleteSuggestionList : _props$AutoCompleteSu3,
    autoCompleteSuggestionsLimit = props.autoCompleteSuggestionsLimit,
    autoCompleteTriggerSettings = props.autoCompleteTriggerSettings,
    _props$Card = props.Card,
    Card = _props$Card === void 0 ? _Card.Card : _props$Card,
    CardCover = props.CardCover,
    CardFooter = props.CardFooter,
    CardHeader = props.CardHeader,
    channel = props.channel,
    children = props.children,
    client = props.client,
    _props$CommandsButton = props.CommandsButton,
    CommandsButton = _props$CommandsButton === void 0 ? _CommandsButton.CommandsButton : _props$CommandsButton,
    compressImageQuality = props.compressImageQuality,
    _props$CooldownTimer = props.CooldownTimer,
    CooldownTimer = _props$CooldownTimer === void 0 ? _CooldownTimer.CooldownTimer : _props$CooldownTimer,
    _props$DateHeader = props.DateHeader,
    DateHeader = _props$DateHeader === void 0 ? _DateHeader.DateHeader : _props$DateHeader,
    _props$deletedMessage = props.deletedMessagesVisibilityType,
    deletedMessagesVisibilityType = _props$deletedMessage === void 0 ? 'always' : _props$deletedMessage,
    _props$disableIfFroze = props.disableIfFrozenChannel,
    disableIfFrozenChannel = _props$disableIfFroze === void 0 ? true : _props$disableIfFroze,
    _props$disableKeyboar = props.disableKeyboardCompatibleView,
    disableKeyboardCompatibleView = _props$disableKeyboar === void 0 ? false : _props$disableKeyboar,
    disableTypingIndicator = props.disableTypingIndicator,
    _props$dismissKeyboar = props.dismissKeyboardOnMessageTouch,
    dismissKeyboardOnMessageTouch = _props$dismissKeyboar === void 0 ? true : _props$dismissKeyboar,
    doDocUploadRequest = props.doDocUploadRequest,
    doImageUploadRequest = props.doImageUploadRequest,
    doMarkReadRequest = props.doMarkReadRequest,
    doSendMessageRequest = props.doSendMessageRequest,
    doUpdateMessageRequest = props.doUpdateMessageRequest,
    _props$emojiSearchInd = props.emojiSearchIndex,
    emojiSearchIndex = _props$emojiSearchInd === void 0 ? _utils.defaultEmojiSearchIndex : _props$emojiSearchInd,
    _props$EmptyStateIndi = props.EmptyStateIndicator,
    EmptyStateIndicator = _props$EmptyStateIndi === void 0 ? _EmptyStateIndicator.EmptyStateIndicator : _props$EmptyStateIndi,
    _props$enableMessageG = props.enableMessageGroupingByUser,
    enableMessageGroupingByUser = _props$enableMessageG === void 0 ? true : _props$enableMessageG,
    enableOfflineSupport = props.enableOfflineSupport,
    _props$enforceUniqueR = props.enforceUniqueReaction,
    enforceUniqueReaction = _props$enforceUniqueR === void 0 ? false : _props$enforceUniqueR,
    _props$FileAttachment = props.FileAttachment,
    FileAttachment = _props$FileAttachment === void 0 ? _FileAttachment.FileAttachment : _props$FileAttachment,
    _props$FileAttachment2 = props.FileAttachmentGroup,
    FileAttachmentGroup = _props$FileAttachment2 === void 0 ? _FileAttachmentGroup.FileAttachmentGroup : _props$FileAttachment2,
    _props$FileAttachment3 = props.FileAttachmentIcon,
    FileAttachmentIcon = _props$FileAttachment3 === void 0 ? _FileIcon.FileIcon : _props$FileAttachment3,
    _props$FileUploadPrev = props.FileUploadPreview,
    FileUploadPreview = _props$FileUploadPrev === void 0 ? _FileUploadPreview.FileUploadPreview : _props$FileUploadPrev,
    _props$FlatList = props.FlatList,
    FlatList = _props$FlatList === void 0 ? _native.FlatList : _props$FlatList,
    forceAlignMessages = props.forceAlignMessages,
    _props$Gallery = props.Gallery,
    Gallery = _props$Gallery === void 0 ? _Gallery.Gallery : _props$Gallery,
    getMessagesGroupStyles = props.getMessagesGroupStyles,
    _props$Giphy = props.Giphy,
    Giphy = _props$Giphy === void 0 ? _Giphy.Giphy : _props$Giphy,
    giphyEnabled = props.giphyEnabled,
    _props$giphyVersion = props.giphyVersion,
    giphyVersion = _props$giphyVersion === void 0 ? 'fixed_height' : _props$giphyVersion,
    handleAttachButtonPress = props.handleAttachButtonPress,
    handleBan = props.handleBan,
    handleBlock = props.handleBlock,
    handleCopy = props.handleCopy,
    handleDelete = props.handleDelete,
    handleEdit = props.handleEdit,
    handleFlag = props.handleFlag,
    handleMute = props.handleMute,
    handlePinMessage = props.handlePinMessage,
    handleQuotedReply = props.handleQuotedReply,
    handleReaction = props.handleReaction,
    handleRetry = props.handleRetry,
    handleThreadReply = props.handleThreadReply,
    _props$hasCameraPicke = props.hasCameraPicker,
    hasCameraPicker = _props$hasCameraPicke === void 0 ? (0, _native.isImagePickerAvailable)() : _props$hasCameraPicke,
    _props$hasCommands = props.hasCommands,
    hasCommands = _props$hasCommands === void 0 ? true : _props$hasCommands,
    _props$hasFilePicker = props.hasFilePicker,
    hasFilePicker = _props$hasFilePicker === void 0 ? _native.pickDocument !== null : _props$hasFilePicker,
    _props$hasImagePicker = props.hasImagePicker,
    hasImagePicker = _props$hasImagePicker === void 0 ? true : _props$hasImagePicker,
    _props$hideDateSepara = props.hideDateSeparators,
    hideDateSeparators = _props$hideDateSepara === void 0 ? false : _props$hideDateSepara,
    _props$hideStickyDate = props.hideStickyDateHeader,
    hideStickyDateHeader = _props$hideStickyDate === void 0 ? false : _props$hideStickyDate,
    _props$ImageLoadingFa = props.ImageLoadingFailedIndicator,
    ImageLoadingFailedIndicator = _props$ImageLoadingFa === void 0 ? _ImageLoadingFailedIndicator.ImageLoadingFailedIndicator : _props$ImageLoadingFa,
    _props$ImageLoadingIn = props.ImageLoadingIndicator,
    ImageLoadingIndicator = _props$ImageLoadingIn === void 0 ? _ImageLoadingIndicator.ImageLoadingIndicator : _props$ImageLoadingIn,
    _props$ImageUploadPre = props.ImageUploadPreview,
    ImageUploadPreview = _props$ImageUploadPre === void 0 ? _ImageUploadPreview.ImageUploadPreview : _props$ImageUploadPre,
    _props$initialScrollT = props.initialScrollToFirstUnreadMessage,
    initialScrollToFirstUnreadMessage = _props$initialScrollT === void 0 ? false : _props$initialScrollT,
    initialValue = props.initialValue,
    _props$InlineDateSepa = props.InlineDateSeparator,
    InlineDateSeparator = _props$InlineDateSepa === void 0 ? _InlineDateSeparator.InlineDateSeparator : _props$InlineDateSepa,
    _props$InlineUnreadIn = props.InlineUnreadIndicator,
    InlineUnreadIndicator = _props$InlineUnreadIn === void 0 ? _InlineUnreadIndicator.InlineUnreadIndicator : _props$InlineUnreadIn,
    Input = props.Input,
    _props$InputButtons = props.InputButtons,
    InputButtons = _props$InputButtons === void 0 ? _InputButtons.InputButtons : _props$InputButtons,
    _props$InputEditingSt = props.InputEditingStateHeader,
    InputEditingStateHeader = _props$InputEditingSt === void 0 ? _InputEditingStateHeader.InputEditingStateHeader : _props$InputEditingSt,
    _props$InputGiphySear = props.InputGiphySearch,
    InputGiphySearch = _props$InputGiphySear === void 0 ? _InputGiphySearch.InputGiphySearch : _props$InputGiphySear,
    _props$InputReplyStat = props.InputReplyStateHeader,
    InputReplyStateHeader = _props$InputReplyStat === void 0 ? _InputReplyStateHeader.InputReplyStateHeader : _props$InputReplyStat,
    isAttachmentEqual = props.isAttachmentEqual,
    keyboardBehavior = props.keyboardBehavior,
    _props$KeyboardCompat = props.KeyboardCompatibleView,
    KeyboardCompatibleView = _props$KeyboardCompat === void 0 ? _KeyboardCompatibleView.KeyboardCompatibleView : _props$KeyboardCompat,
    keyboardVerticalOffset = props.keyboardVerticalOffset,
    _props$legacyImageVie = props.legacyImageViewerSwipeBehaviour,
    legacyImageViewerSwipeBehaviour = _props$legacyImageVie === void 0 ? false : _props$legacyImageVie,
    _props$LoadingErrorIn = props.LoadingErrorIndicator,
    LoadingErrorIndicator = _props$LoadingErrorIn === void 0 ? _LoadingErrorIndicator.LoadingErrorIndicator : _props$LoadingErrorIn,
    _props$LoadingIndicat = props.LoadingIndicator,
    LoadingIndicator = _props$LoadingIndicat === void 0 ? _LoadingIndicator.LoadingIndicator : _props$LoadingIndicat,
    loadingMoreProp = props.loadingMore,
    loadingMoreRecentProp = props.loadingMoreRecent,
    markdownRules = props.markdownRules,
    maxMessageLengthProp = props.maxMessageLength,
    _props$maxNumberOfFil = props.maxNumberOfFiles,
    maxNumberOfFiles = _props$maxNumberOfFil === void 0 ? 10 : _props$maxNumberOfFil,
    maxTimeBetweenGroupedMessages = props.maxTimeBetweenGroupedMessages,
    members = props.members,
    _props$mentionAllAppU = props.mentionAllAppUsersEnabled,
    mentionAllAppUsersEnabled = _props$mentionAllAppU === void 0 ? false : _props$mentionAllAppU,
    mentionAllAppUsersQuery = props.mentionAllAppUsersQuery,
    _props$Message = props.Message,
    Message = _props$Message === void 0 ? _Message.Message : _props$Message,
    messageActions = props.messageActions,
    _props$MessageAvatar = props.MessageAvatar,
    MessageAvatar = _props$MessageAvatar === void 0 ? _MessageAvatar.MessageAvatar : _props$MessageAvatar,
    _props$MessageBounce = props.MessageBounce,
    MessageBounce = _props$MessageBounce === void 0 ? _MessageBounce.MessageBounce : _props$MessageBounce,
    _props$MessageContent = props.MessageContent,
    MessageContent = _props$MessageContent === void 0 ? _MessageContent.MessageContent : _props$MessageContent,
    _props$messageContent = props.messageContentOrder,
    messageContentOrder = _props$messageContent === void 0 ? ['quoted_reply', 'gallery', 'files', 'text', 'attachments'] : _props$messageContent,
    _props$MessageDeleted = props.MessageDeleted,
    MessageDeleted = _props$MessageDeleted === void 0 ? _MessageDeleted.MessageDeleted : _props$MessageDeleted,
    _props$MessageEditedT = props.MessageEditedTimestamp,
    MessageEditedTimestamp = _props$MessageEditedT === void 0 ? _MessageEditedTimestamp.MessageEditedTimestamp : _props$MessageEditedT,
    _props$MessageError = props.MessageError,
    MessageError = _props$MessageError === void 0 ? _MessageError.MessageError : _props$MessageError,
    _props$MessageFooter = props.MessageFooter,
    MessageFooter = _props$MessageFooter === void 0 ? _MessageFooter.MessageFooter : _props$MessageFooter,
    MessageHeader = props.MessageHeader,
    messageId = props.messageId,
    _props$MessageList = props.MessageList,
    MessageList = _props$MessageList === void 0 ? _MessageList.MessageList : _props$MessageList,
    _props$MessagePinnedH = props.MessagePinnedHeader,
    MessagePinnedHeader = _props$MessagePinnedH === void 0 ? _MessagePinnedHeader.MessagePinnedHeader : _props$MessagePinnedH,
    _props$MessageReplies = props.MessageReplies,
    MessageReplies = _props$MessageReplies === void 0 ? _MessageReplies.MessageReplies : _props$MessageReplies,
    _props$MessageReplies2 = props.MessageRepliesAvatars,
    MessageRepliesAvatars = _props$MessageReplies2 === void 0 ? _MessageRepliesAvatars.MessageRepliesAvatars : _props$MessageReplies2,
    messages = props.messages,
    _props$MessageSimple = props.MessageSimple,
    MessageSimple = _props$MessageSimple === void 0 ? _MessageSimple.MessageSimple : _props$MessageSimple,
    _props$MessageStatus = props.MessageStatus,
    MessageStatus = _props$MessageStatus === void 0 ? _MessageStatus.MessageStatus : _props$MessageStatus,
    _props$MessageSystem = props.MessageSystem,
    MessageSystem = _props$MessageSystem === void 0 ? _MessageSystem.MessageSystem : _props$MessageSystem,
    MessageText = props.MessageText,
    _props$MessageTimesta = props.MessageTimestamp,
    MessageTimestamp = _props$MessageTimesta === void 0 ? _MessageTimestamp.MessageTimestamp : _props$MessageTimesta,
    _props$MoreOptionsBut = props.MoreOptionsButton,
    MoreOptionsButton = _props$MoreOptionsBut === void 0 ? _MoreOptionsButton.MoreOptionsButton : _props$MoreOptionsBut,
    myMessageTheme = props.myMessageTheme,
    _props$NetworkDownInd = props.NetworkDownIndicator,
    NetworkDownIndicator = _props$NetworkDownInd === void 0 ? _NetworkDownIndicator.NetworkDownIndicator : _props$NetworkDownInd,
    _props$newMessageStat = props.newMessageStateUpdateThrottleInterval,
    newMessageStateUpdateThrottleInterval = _props$newMessageStat === void 0 ? defaultThrottleInterval : _props$newMessageStat,
    _props$numberOfLines = props.numberOfLines,
    numberOfLines = _props$numberOfLines === void 0 ? 5 : _props$numberOfLines,
    onChangeText = props.onChangeText,
    onLongPressMessage = props.onLongPressMessage,
    onPressInMessage = props.onPressInMessage,
    onPressMessage = props.onPressMessage,
    _props$OverlayReactio = props.OverlayReactionList,
    OverlayReactionList = _props$OverlayReactio === void 0 ? _OverlayReactionList.OverlayReactionList : _props$OverlayReactio,
    overrideOwnCapabilities = props.overrideOwnCapabilities,
    _props$ReactionList = props.ReactionList,
    ReactionList = _props$ReactionList === void 0 ? _ReactionList.ReactionList : _props$ReactionList,
    read = props.read,
    _props$Reply = props.Reply,
    Reply = _props$Reply === void 0 ? _Reply.Reply : _props$Reply,
    _props$ScrollToBottom = props.ScrollToBottomButton,
    ScrollToBottomButton = _props$ScrollToBottom === void 0 ? _ScrollToBottomButton.ScrollToBottomButton : _props$ScrollToBottom,
    selectReaction = props.selectReaction,
    _props$SendButton = props.SendButton,
    SendButton = _props$SendButton === void 0 ? _SendButton.SendButton : _props$SendButton,
    _props$sendImageAsync = props.sendImageAsync,
    sendImageAsync = _props$sendImageAsync === void 0 ? false : _props$sendImageAsync,
    _props$SendMessageDis = props.SendMessageDisallowedIndicator,
    SendMessageDisallowedIndicator = _props$SendMessageDis === void 0 ? _SendMessageDisallowedIndicator.SendMessageDisallowedIndicator : _props$SendMessageDis,
    setInputRef = props.setInputRef,
    setMembers = props.setMembers,
    setMessages = props.setMessages,
    setRead = props.setRead,
    setThreadMessages = props.setThreadMessages,
    setTyping = props.setTyping,
    setWatcherCount = props.setWatcherCount,
    setWatchers = props.setWatchers,
    shouldSyncChannel = props.shouldSyncChannel,
    _props$ShowThreadMess = props.ShowThreadMessageInChannelButton,
    ShowThreadMessageInChannelButton = _props$ShowThreadMess === void 0 ? _ShowThreadMessageInChannelButton.ShowThreadMessageInChannelButton : _props$ShowThreadMess,
    _props$StartAudioReco = props.StartAudioRecordingButton,
    StartAudioRecordingButton = _props$StartAudioReco === void 0 ? _AudioRecordingButton.AudioRecordingButton : _props$StartAudioReco,
    _props$stateUpdateThr = props.stateUpdateThrottleInterval,
    stateUpdateThrottleInterval = _props$stateUpdateThr === void 0 ? defaultThrottleInterval : _props$stateUpdateThr,
    _props$StickyHeader = props.StickyHeader,
    StickyHeader = _props$StickyHeader === void 0 ? _StickyHeader.StickyHeader : _props$StickyHeader,
    _props$supportedReact = props.supportedReactions,
    supportedReactions = _props$supportedReact === void 0 ? reactionData : _props$supportedReact,
    t = props.t,
    threadProps = props.thread,
    threadList = props.threadList,
    threadMessages = props.threadMessages,
    typing = props.typing,
    _props$TypingIndicato = props.TypingIndicator,
    TypingIndicator = _props$TypingIndicato === void 0 ? _TypingIndicator.TypingIndicator : _props$TypingIndicato,
    _props$TypingIndicato2 = props.TypingIndicatorContainer,
    TypingIndicatorContainer = _props$TypingIndicato2 === void 0 ? _TypingIndicatorContainer.TypingIndicatorContainer : _props$TypingIndicato2,
    _props$UploadProgress = props.UploadProgressIndicator,
    UploadProgressIndicator = _props$UploadProgress === void 0 ? _UploadProgressIndicator.UploadProgressIndicator : _props$UploadProgress,
    _props$UrlPreview = props.UrlPreview,
    UrlPreview = _props$UrlPreview === void 0 ? _Card.Card : _props$UrlPreview,
    _props$VideoThumbnail = props.VideoThumbnail,
    VideoThumbnail = _props$VideoThumbnail === void 0 ? _VideoThumbnail.VideoThumbnail : _props$VideoThumbnail,
    watcherCount = props.watcherCount,
    watchers = props.watchers;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    selectChannel = _useTheme$theme.channel.selectChannel,
    black = _useTheme$theme.colors.black;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    deleted = _useState2[0],
    setDeleted = _useState2[1];
  var _useState3 = (0, _react.useState)(undefined),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    editing = _useState4[0],
    setEditing = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useState7 = (0, _react.useState)(true),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    hasMore = _useState8[0],
    setHasMore = _useState8[1];
  var _useState9 = (0, _react.useState)(),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    lastRead = _useState10[0],
    setLastRead = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    loading = _useState12[0],
    setLoading = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    loadingMore = _useState14[0],
    setLoadingMore = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    loadingMoreRecent = _useState16[0],
    setLoadingMoreRecent = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    quotedMessage = _useState18[0],
    setQuotedMessage = _useState18[1];
  var _useState19 = (0, _react.useState)(threadProps || null),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    thread = _useState20[0],
    setThread = _useState20[1];
  var _useState21 = (0, _react.useState)(true),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    threadHasMore = _useState22[0],
    setThreadHasMore = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    threadLoadingMore = _useState24[0],
    setThreadLoadingMore = _useState24[1];
  var syncingChannelRef = (0, _react.useRef)(false);
  var _useState25 = (0, _react.useState)(true),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    hasNoMoreRecentMessagesToLoad = _useState26[0],
    setHasNoMoreRecentMessagesToLoad = _useState26[1];
  var _useTargetedMessage = (0, _useTargetedMessage2.useTargetedMessage)(),
    prevTargetedMessage = _useTargetedMessage.prevTargetedMessage,
    setTargetedMessage = _useTargetedMessage.setTargetedMessage,
    targetedMessage = _useTargetedMessage.targetedMessage;
  var hasOverlappingRecentMessagesRef = (0, _react.useRef)(false);
  var uploadAbortControllerRef = (0, _react.useRef)(new Map());
  var channelId = (channel == null ? void 0 : channel.id) || '';
  (0, _react.useEffect)(function () {
    var initChannel = function () {
      var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!channel || !shouldSyncChannel || channel.offlineMode)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              if (channel.initialized) {
                _context.next = 5;
                break;
              }
              _context.next = 5;
              return loadChannel();
            case 5:
              if (messageId) {
                loadChannelAroundMessage({
                  messageId: messageId
                });
              } else if (initialScrollToFirstUnreadMessage && channel.countUnread() > scrollToFirstUnreadThreshold) {
                loadChannelAtFirstUnreadMessage();
              }
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function initChannel() {
        return _ref.apply(this, arguments);
      };
    }();
    initChannel();
    return function () {
      copyChannelState.cancel();
      copyReadState.cancel();
      copyTypingState.cancel();
      loadMoreFinished.cancel();
      loadMoreThreadFinished.cancel();
    };
  }, [channelId, messageId]);
  var threadPropsExists = !!threadProps;
  (0, _react.useEffect)(function () {
    if (threadProps && shouldSyncChannel) {
      setThread(threadProps);
      if (channel && threadProps != null && threadProps.id) {
        var _channel$state$thread;
        setThreadMessages(((_channel$state$thread = channel.state.threads) == null ? void 0 : _channel$state$thread[threadProps.id]) || []);
      }
    } else {
      setThread(null);
    }
  }, [threadPropsExists, shouldSyncChannel]);
  var handleAppBackground = (0, _react.useCallback)(function () {
    var _channelData$own_capa;
    var channelData = channel.data;
    if (channelData != null && (_channelData$own_capa = channelData.own_capabilities) != null && _channelData$own_capa.includes('send-typing-events')) {
      channel.sendEvent({
        parent_id: thread == null ? void 0 : thread.id,
        type: 'typing.stop'
      });
    }
  }, [thread == null ? void 0 : thread.id, channelId]);
  (0, _useAppStateListener.useAppStateListener)(undefined, handleAppBackground);
  var isAdmin = (client == null ? void 0 : (_client$user = client.user) == null ? void 0 : _client$user.role) === 'admin' || (channel == null ? void 0 : channel.state.membership.role) === 'admin';
  var isModerator = (channel == null ? void 0 : channel.state.membership.role) === 'channel_moderator' || (channel == null ? void 0 : channel.state.membership.role) === 'moderator';
  var isOwner = (channel == null ? void 0 : channel.state.membership.role) === 'owner';
  var markRead = (0, _react.useRef)((0, _throttle["default"])(function () {
    if (!channel || channel != null && channel.disconnected || !(clientChannelConfig != null && clientChannelConfig.read_events)) {
      return;
    }
    if (doMarkReadRequest) {
      doMarkReadRequest(channel);
    } else {
      (0, _streamChat.logChatPromiseExecution)(channel.markRead(), 'mark read');
    }
  }, defaultThrottleInterval, throttleOptions)).current;
  var copyMessagesState = (0, _react.useRef)((0, _throttle["default"])(function () {
    if (channel) {
      clearInterval(mergeSetsIntervalRef.current);
      setMessages(channel.state.messages);
      restartSetsMergeFuncRef.current();
    }
  }, newMessageStateUpdateThrottleInterval, throttleOptions)).current;
  var copyTypingState = (0, _react.useRef)((0, _throttle["default"])(function () {
    if (channel) {
      setTyping(Object.assign({}, channel.state.typing));
    }
  }, stateUpdateThrottleInterval, throttleOptions)).current;
  var copyReadState = (0, _react.useRef)((0, _throttle["default"])(function () {
    if (channel) {
      setRead(Object.assign({}, channel.state.read));
    }
  }, stateUpdateThrottleInterval, throttleOptions)).current;
  var copyChannelState = (0, _react.useRef)((0, _throttle["default"])(function () {
    setLoading(false);
    if (channel) {
      setMembers(Object.assign({}, channel.state.members));
      setMessages((0, _toConsumableArray2["default"])(channel.state.messages));
      setRead(Object.assign({}, channel.state.read));
      setTyping(Object.assign({}, channel.state.typing));
      setWatcherCount(channel.state.watcher_count);
      setWatchers(Object.assign({}, channel.state.watchers));
    }
  }, stateUpdateThrottleInterval, throttleOptions)).current;
  (0, _react.useEffect)(function () {
    var channelSubscriptions = [];
    if (channel && shouldSyncChannel) {
      channelSubscriptions.push(channel.on('message.new', copyMessagesState));
      channelSubscriptions.push(channel.on('message.read', copyReadState));
      channelSubscriptions.push(channel.on('typing.start', copyTypingState));
      channelSubscriptions.push(channel.on('typing.stop', copyTypingState));
    }
    return function () {
      channelSubscriptions.forEach(function (s) {
        return s.unsubscribe();
      });
    };
  }, [channelId, shouldSyncChannel]);
  (0, _react.useEffect)(function () {
    var handleEvent = function handleEvent(event) {
      var ignorableEvents = ['user.watching.start', 'user.watching.stop'];
      if (ignorableEvents.includes(event.type)) return;
      if (shouldSyncChannel) {
        var isTypingEvent = event.type === 'typing.start' || event.type === 'typing.stop';
        if (!isTypingEvent) {
          var _event$message;
          if (thread != null && thread.id) {
            var updatedThreadMessages = thread.id && channel && channel.state.threads[thread.id] || threadMessages;
            setThreadMessages(updatedThreadMessages);
          }
          if (channel && thread != null && thread.id && ((_event$message = event.message) == null ? void 0 : _event$message.id) === thread.id) {
            var updatedThread = channel.state.formatMessage(event.message);
            setThread(updatedThread);
          }
        }
        if (channel && channel.initialized && event.type !== 'message.new' && event.type !== 'message.read' && event.type !== 'typing.start' && event.type !== 'typing.stop') {
          copyChannelState();
        }
      }
    };
    var _channel$on = channel.on(handleEvent),
      unsubscribe = _channel$on.unsubscribe;
    return unsubscribe;
  }, [channelId, thread == null ? void 0 : thread.id, shouldSyncChannel]);
  (0, _react.useEffect)(function () {
    var _client$on = client.on('channel.deleted', function (event) {
        if (event.cid === (channel == null ? void 0 : channel.cid)) {
          setDeleted(true);
        }
      }),
      unsubscribe = _client$on.unsubscribe;
    return unsubscribe;
  }, [channelId]);
  (0, _react.useEffect)(function () {
    var handleEvent = function handleEvent(event) {
      if (channel.cid === event.cid) copyChannelState();
    };
    var _client$on2 = client.on('notification.mark_read', handleEvent),
      unsubscribe = _client$on2.unsubscribe;
    return unsubscribe;
  }, []);
  var channelQueryCallRef = (0, _react.useRef)(function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(queryCall) {
      var onAfterQueryCall,
        scrollToMessageId,
        currentMessages,
        hadCurrentLatestMessages,
        scrollToMessageIndex,
        limitAfter,
        currentLength,
        noOfMessagesAfter,
        endIndex,
        restOfMessages,
        latestSet,
        hasLatestMessages,
        _args2 = arguments;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            onAfterQueryCall = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : undefined;
            scrollToMessageId = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : undefined;
            setError(false);
            _context2.prev = 3;
            clearInterval(mergeSetsIntervalRef.current);
            _context2.next = 7;
            return queryCall();
          case 7:
            setLastRead(new Date());
            setHasMore(true);
            currentMessages = channel.state.messages;
            hadCurrentLatestMessages = currentMessages.length > 0 && currentMessages === channel.state.latestMessages;
            if (typeof scrollToMessageId === 'function') {
              scrollToMessageId = scrollToMessageId();
            }
            scrollToMessageIndex = scrollToMessageId ? currentMessages.findIndex(function (_ref3) {
              var id = _ref3.id;
              return id === scrollToMessageId;
            }) : -1;
            if (channel && scrollToMessageIndex !== -1) {
              copyChannelState.cancel();
              limitAfter = 4;
              currentLength = currentMessages.length;
              noOfMessagesAfter = currentLength - scrollToMessageIndex - 1;
              if (noOfMessagesAfter > limitAfter) {
                endIndex = scrollToMessageIndex + limitAfter;
                channel.state.clearMessages();
                channel.state.messages = currentMessages.slice(0, endIndex + 1);
                splitLatestCurrentMessageSetRef.current();
                restOfMessages = currentMessages.slice(endIndex + 1);
                if (hadCurrentLatestMessages) {
                  latestSet = channel.state.messageSets.find(function (set) {
                    return set.isLatest;
                  });
                  if (latestSet) {
                    latestSet.messages = restOfMessages;
                    hasOverlappingRecentMessagesRef.current = true;
                  }
                }
              }
            }
            hasLatestMessages = channel.state.latestMessages.length > 0;
            channel.state.setIsUpToDate(hasLatestMessages);
            setHasNoMoreRecentMessagesToLoad(hasLatestMessages);
            copyChannelState();
            if (scrollToMessageIndex !== -1) {
              copyChannelState.flush();
            }
            onAfterQueryCall == null ? void 0 : onAfterQueryCall();
            _context2.next = 27;
            break;
          case 22:
            _context2.prev = 22;
            _context2.t0 = _context2["catch"](3);
            if (_context2.t0 instanceof Error) {
              setError(_context2.t0);
            } else {
              setError(true);
            }
            setLoading(false);
            setLastRead(new Date());
          case 27:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[3, 22]]);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
  var loadChannelAtFirstUnreadMessage = function loadChannelAtFirstUnreadMessage() {
    if (!channel) return;
    var unreadMessageIdToScrollTo;
    return channelQueryCallRef.current((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
      var unreadCount, isLatestMessageSetShown, lastReadDate, _res$messages$find, res;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            unreadCount = channel.countUnread();
            if (!(unreadCount === 0)) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return");
          case 3:
            isLatestMessageSetShown = !!channel.state.messageSets.find(function (set) {
              return set.isCurrent && set.isLatest;
            });
            if (!(isLatestMessageSetShown && unreadCount <= channel.state.messages.length)) {
              _context3.next = 7;
              break;
            }
            unreadMessageIdToScrollTo = channel.state.messages[channel.state.messages.length - unreadCount].id;
            return _context3.abrupt("return");
          case 7:
            lastReadDate = channel.lastRead();
            if (!lastReadDate) {
              _context3.next = 17;
              break;
            }
            setLoading(true);
            _context3.next = 12;
            return channel.query({
              messages: {
                created_at_around: lastReadDate,
                limit: 30
              },
              watch: true
            }, 'new');
          case 12:
            res = _context3.sent;
            unreadMessageIdToScrollTo = (_res$messages$find = res.messages.find(function (m) {
              return lastReadDate < (m.created_at ? new Date(m.created_at) : new Date());
            })) == null ? void 0 : _res$messages$find.id;
            if (unreadMessageIdToScrollTo) {
              channel.state.loadMessageIntoState(unreadMessageIdToScrollTo);
            }
            _context3.next = 19;
            break;
          case 17:
            _context3.next = 19;
            return loadLatestMessagesRef.current();
          case 19:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    })), function () {
      if (unreadMessageIdToScrollTo) {
        restartSetsMergeFuncRef.current();
      }
    }, function () {
      return unreadMessageIdToScrollTo;
    });
  };
  var loadChannelAroundMessage = function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5(_ref5) {
      var messageIdToLoadAround;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            messageIdToLoadAround = _ref5.messageId;
            if (!thread) {
              _context5.next = 18;
              break;
            }
            if (!messageIdToLoadAround) {
              _context5.next = 16;
              break;
            }
            setThreadLoadingMore(true);
            _context5.prev = 4;
            _context5.next = 7;
            return channel.state.loadMessageIntoState(messageIdToLoadAround, thread.id);
          case 7:
            setThreadLoadingMore(false);
            setThreadMessages(channel.state.threads[thread.id]);
            setTargetedMessage(messageIdToLoadAround);
            _context5.next = 16;
            break;
          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](4);
            if (_context5.t0 instanceof Error) {
              setError(_context5.t0);
            } else {
              setError(true);
            }
            setThreadLoadingMore(false);
          case 16:
            _context5.next = 20;
            break;
          case 18:
            _context5.next = 20;
            return channelQueryCallRef.current((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
              var currentMessageSet, recentCurrentSetMsgId;
              return _regenerator["default"].wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    setLoading(true);
                    if (!messageIdToLoadAround) {
                      _context4.next = 10;
                      break;
                    }
                    setMessages([]);
                    _context4.next = 5;
                    return channel.state.loadMessageIntoState(messageIdToLoadAround);
                  case 5:
                    currentMessageSet = channel.state.messageSets.find(function (set) {
                      return set.isCurrent;
                    });
                    if (!(currentMessageSet && !(currentMessageSet != null && currentMessageSet.isLatest))) {
                      _context4.next = 10;
                      break;
                    }
                    recentCurrentSetMsgId = currentMessageSet.messages[currentMessageSet.messages.length - 1].id;
                    _context4.next = 10;
                    return channel.query({
                      messages: {
                        id_gte: recentCurrentSetMsgId,
                        limit: 25
                      }
                    }, 'current');
                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            })), function () {
              if (messageIdToLoadAround) {
                clearInterval(mergeSetsIntervalRef.current);
                setTargetedMessage(messageIdToLoadAround);
              }
            }, messageIdToLoadAround);
          case 20:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[4, 12]]);
    }));
    return function loadChannelAroundMessage(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (!targetedMessage && prevTargetedMessage) {
      restartSetsMergeFuncRef.current();
    }
  }, [targetedMessage]);
  var loadChannelAtMessage = function loadChannelAtMessage(_ref8) {
    var _ref8$after = _ref8.after,
      after = _ref8$after === void 0 ? 2 : _ref8$after,
      _ref8$before = _ref8.before,
      before = _ref8$before === void 0 ? 30 : _ref8$before,
      messageId = _ref8.messageId;
    return channelQueryCallRef.current((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return queryAtMessage({
              after: after,
              before: before,
              messageId: messageId
            });
          case 2:
            if (messageId) {
              setTargetedMessage(messageId);
            }
          case 3:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    })));
  };
  var splitLatestCurrentMessageSetRef = (0, _react.useRef)(function () {
    var currentLatestSet = channel.state.messageSets.find(function (set) {
      return set.isCurrent && set.isLatest;
    });
    if (!currentLatestSet) return;
    currentLatestSet.isLatest = false;
    channel.state.messageSets.push({
      isCurrent: false,
      isLatest: true,
      messages: [],
      pagination: {
        hasNext: true,
        hasPrev: true
      }
    });
  });
  var mergeOverlappingMessageSetsRef = (0, _react.useRef)(function () {
    var limitToMaxRenderPerBatch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (hasOverlappingRecentMessagesRef.current) {
      var limit = 5;
      var latestMessageSet = channel.state.messageSets.find(function (set) {
        return set.isLatest;
      });
      var currentMessageSet = channel.state.messageSets.find(function (set) {
        return set.isCurrent;
      });
      if (latestMessageSet && currentMessageSet && latestMessageSet !== currentMessageSet) {
        if (limitToMaxRenderPerBatch && latestMessageSet.messages.length > limit) {
          currentMessageSet.messages = currentMessageSet.messages.concat(latestMessageSet.messages.slice(0, limit));
          latestMessageSet.messages = latestMessageSet.messages.slice(limit);
        } else {
          channel.state.messageSets = channel.state.messageSets.filter(function (set) {
            return !set.isLatest;
          });
          currentMessageSet.messages = currentMessageSet.messages.concat(latestMessageSet.messages);
          currentMessageSet.isLatest = true;
          hasOverlappingRecentMessagesRef.current = false;
          clearInterval(mergeSetsIntervalRef.current);
        }
        return true;
      }
    }
    return false;
  });
  var mergeSetsIntervalRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    return function () {
      clearInterval(mergeSetsIntervalRef.current);
    };
  }, []);
  var restartSetsMergeFuncRef = (0, _react.useRef)(function () {
    clearInterval(mergeSetsIntervalRef.current);
    if (!hasOverlappingRecentMessagesRef.current) return;
  });
  var loadLatestMessagesRef = (0, _react.useRef)((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7() {
    var clearLatest,
      latestSet,
      _args7 = arguments;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          clearLatest = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : false;
          mergeOverlappingMessageSetsRef.current();
          if (clearLatest) {
            latestSet = channel.state.messageSets.find(function (set) {
              return set.isLatest;
            });
            if (latestSet) latestSet.messages = [];
          }
          if (!(channel.state.latestMessages.length === 0)) {
            _context7.next = 6;
            break;
          }
          _context7.next = 6;
          return channel.query({}, 'latest');
        case 6:
          _context7.next = 8;
          return channel.state.loadMessageIntoState('latest');
        case 8:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  })));
  var loadChannel = function loadChannel() {
    return channelQueryCallRef.current((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8() {
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            if (!(!(channel != null && channel.initialized) || !channel.state.isUpToDate)) {
              _context8.next = 5;
              break;
            }
            _context8.next = 3;
            return channel == null ? void 0 : channel.watch();
          case 3:
            _context8.next = 7;
            break;
          case 5:
            _context8.next = 7;
            return channel.state.loadMessageIntoState('latest');
          case 7:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    })), function () {
      channel == null ? void 0 : channel.state.setIsUpToDate(true);
      setHasNoMoreRecentMessagesToLoad(true);
    });
  };
  var reloadThread = function () {
    var _ref12 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee9() {
      var parentID, limit, queryResponse, updatedHasMore, updatedThreadMessages, _yield$channel$getMes, _messages, _messages2, threadMessage, formattedMessage;
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            if (!(!channel || !(thread != null && thread.id))) {
              _context9.next = 2;
              break;
            }
            return _context9.abrupt("return");
          case 2:
            setThreadLoadingMore(true);
            _context9.prev = 3;
            parentID = thread.id;
            limit = 50;
            channel.state.threads[parentID] = [];
            _context9.next = 9;
            return channel.getReplies(parentID, {
              limit: limit
            });
          case 9:
            queryResponse = _context9.sent;
            updatedHasMore = queryResponse.messages.length === limit;
            updatedThreadMessages = channel.state.threads[parentID] || [];
            loadMoreThreadFinished(updatedHasMore, updatedThreadMessages);
            _context9.next = 15;
            return channel.getMessagesById([parentID]);
          case 15:
            _yield$channel$getMes = _context9.sent;
            _messages = _yield$channel$getMes.messages;
            _messages2 = (0, _slicedToArray2["default"])(_messages, 1), threadMessage = _messages2[0];
            if (threadMessage) {
              formattedMessage = channel.state.formatMessage(threadMessage);
              setThread(formattedMessage);
            }
            _context9.next = 27;
            break;
          case 21:
            _context9.prev = 21;
            _context9.t0 = _context9["catch"](3);
            console.warn('Thread loading request failed with error', _context9.t0);
            if (_context9.t0 instanceof Error) {
              setError(_context9.t0);
            } else {
              setError(true);
            }
            setThreadLoadingMore(false);
            throw _context9.t0;
          case 27:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[3, 21]]);
    }));
    return function reloadThread() {
      return _ref12.apply(this, arguments);
    };
  }();
  var resyncChannel = function () {
    var _ref13 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee10() {
      var _messages$, state, oldListTopMessage, oldListTopMessageId, oldListBottomMessage, newListTopMessage, newListBottomMessage, parseMessage, failedMessages, failedThreadMessages, oldListTopMessageCreatedAt, oldListBottomMessageCreatedAt, newListTopMessageCreatedAt, newListBottomMessageCreatedAt, finalMessages, index;
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            if (!(!channel || syncingChannelRef.current)) {
              _context10.next = 2;
              break;
            }
            return _context10.abrupt("return");
          case 2:
            hasOverlappingRecentMessagesRef.current = false;
            clearInterval(mergeSetsIntervalRef.current);
            syncingChannelRef.current = true;
            setError(false);
            _context10.prev = 6;
            _context10.next = 9;
            return channel.watch({
              messages: {
                limit: messages.length + 30
              }
            });
          case 9:
            state = _context10.sent;
            oldListTopMessage = messages[0];
            oldListTopMessageId = (_messages$ = messages[0]) == null ? void 0 : _messages$.id;
            oldListBottomMessage = messages[messages.length - 1];
            newListTopMessage = state.messages[0];
            newListBottomMessage = state.messages[state.messages.length - 1];
            if (!(!oldListTopMessage || !oldListBottomMessage || !newListTopMessage || !newListBottomMessage)) {
              _context10.next = 22;
              break;
            }
            channel.state.clearMessages();
            channel.state.setIsUpToDate(true);
            channel.state.addMessagesSorted(state.messages);
            channel.state.addPinnedMessages(state.pinned_messages);
            copyChannelState();
            return _context10.abrupt("return");
          case 22:
            parseMessage = function parseMessage(message) {
              var _message$pinned_at, _message$updated_at;
              return Object.assign({}, message, {
                created_at: message.created_at.toString(),
                pinned_at: (_message$pinned_at = message.pinned_at) == null ? void 0 : _message$pinned_at.toString(),
                updated_at: (_message$updated_at = message.updated_at) == null ? void 0 : _message$updated_at.toString()
              });
            };
            failedMessages = messages.filter(function (message) {
              return message.status === _utils.MessageStatusTypes.FAILED;
            }).map(parseMessage);
            failedThreadMessages = thread ? threadMessages.filter(function (message) {
              return message.status === _utils.MessageStatusTypes.FAILED;
            }).map(parseMessage) : [];
            oldListTopMessageCreatedAt = oldListTopMessage.created_at;
            oldListBottomMessageCreatedAt = oldListBottomMessage.created_at;
            newListTopMessageCreatedAt = newListTopMessage.created_at ? new Date(newListTopMessage.created_at) : new Date();
            newListBottomMessageCreatedAt = newListBottomMessage != null && newListBottomMessage.created_at ? new Date(newListBottomMessage.created_at) : new Date();
            finalMessages = [];
            if (oldListTopMessage && oldListTopMessageCreatedAt && oldListBottomMessageCreatedAt && newListTopMessageCreatedAt < oldListTopMessageCreatedAt && newListBottomMessageCreatedAt >= oldListBottomMessageCreatedAt) {
              index = state.messages.findIndex(function (message) {
                return message.id === oldListTopMessageId;
              });
              finalMessages = state.messages.slice(index);
            } else {
              finalMessages = state.messages;
            }
            channel.state.setIsUpToDate(true);
            channel.state.clearMessages();
            channel.state.addMessagesSorted(finalMessages);
            channel.state.addPinnedMessages(state.pinned_messages);
            setHasNoMoreRecentMessagesToLoad(true);
            setHasMore(true);
            copyChannelState();
            if (failedMessages.length) {
              channel.state.addMessagesSorted(failedMessages);
              copyChannelState();
            }
            _context10.next = 41;
            return reloadThread();
          case 41:
            if (thread && failedThreadMessages.length) {
              channel.state.addMessagesSorted(failedThreadMessages);
              setThreadMessages((0, _toConsumableArray2["default"])(channel.state.threads[thread.id]));
            }
            _context10.next = 48;
            break;
          case 44:
            _context10.prev = 44;
            _context10.t0 = _context10["catch"](6);
            if (_context10.t0 instanceof Error) {
              setError(_context10.t0);
            } else {
              setError(true);
            }
            setLoading(false);
          case 48:
            syncingChannelRef.current = false;
          case 49:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[6, 44]]);
    }));
    return function resyncChannel() {
      return _ref13.apply(this, arguments);
    };
  }();
  var resyncChannelRef = (0, _react.useRef)(resyncChannel);
  resyncChannelRef.current = resyncChannel;
  (0, _react.useEffect)(function () {
    var connectionChangedHandler = function connectionChangedHandler() {
      if (shouldSyncChannel) {
        resyncChannelRef.current();
      }
    };
    var connectionChangedSubscription;
    if (enableOfflineSupport) {
      connectionChangedSubscription = _DBSyncManager.DBSyncManager.onSyncStatusChange(function (statusChanged) {
        if (statusChanged) {
          connectionChangedHandler();
        }
      });
    } else {
      connectionChangedSubscription = client.on('connection.changed', function (event) {
        if (event.online) {
          connectionChangedHandler();
        }
      });
    }
    return function () {
      connectionChangedSubscription.unsubscribe();
    };
  }, [enableOfflineSupport, shouldSyncChannel]);
  var reloadChannel = function reloadChannel() {
    return channelQueryCallRef.current((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee11() {
      return _regenerator["default"].wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            setLoading(true);
            _context11.next = 3;
            return loadLatestMessagesRef.current(true);
          case 3:
            setLoading(false);
            channel == null ? void 0 : channel.state.setIsUpToDate(true);
            setHasNoMoreRecentMessagesToLoad(true);
          case 6:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    })));
  };
  var queryAtMessage = function () {
    var _ref16 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee12(_ref15) {
      var _ref15$after, after, _ref15$before, before, messageId;
      return _regenerator["default"].wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _ref15$after = _ref15.after, after = _ref15$after === void 0 ? 10 : _ref15$after, _ref15$before = _ref15.before, before = _ref15$before === void 0 ? 10 : _ref15$before, messageId = _ref15.messageId;
            if (channel) {
              _context12.next = 3;
              break;
            }
            return _context12.abrupt("return");
          case 3:
            channel.state.setIsUpToDate(false);
            hasOverlappingRecentMessagesRef.current = false;
            clearInterval(mergeSetsIntervalRef.current);
            channel.state.clearMessages();
            setMessages([]);
            if (messageId) {
              _context12.next = 13;
              break;
            }
            _context12.next = 11;
            return channel.query({
              messages: {
                limit: before
              },
              watch: true
            });
          case 11:
            channel.state.setIsUpToDate(true);
            return _context12.abrupt("return");
          case 13:
            _context12.next = 15;
            return queryBeforeMessage(messageId, before);
          case 15:
            _context12.next = 17;
            return queryAfterMessage(messageId, after);
          case 17:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    return function queryAtMessage(_x3) {
      return _ref16.apply(this, arguments);
    };
  }();
  var queryBeforeMessage = function () {
    var _ref17 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee13(messageId) {
      var limit,
        _args13 = arguments;
      return _regenerator["default"].wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            limit = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : 5;
            if (channel) {
              _context13.next = 3;
              break;
            }
            return _context13.abrupt("return");
          case 3:
            _context13.next = 5;
            return channel.query({
              messages: {
                id_lt: messageId,
                limit: limit
              },
              watch: true
            });
          case 5:
            channel.state.setIsUpToDate(false);
          case 6:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }));
    return function queryBeforeMessage(_x4) {
      return _ref17.apply(this, arguments);
    };
  }();
  var queryAfterMessage = function () {
    var _ref18 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee14(messageId) {
      var limit,
        state,
        currentSet,
        _args14 = arguments;
      return _regenerator["default"].wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            limit = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : 5;
            if (channel) {
              _context14.next = 3;
              break;
            }
            return _context14.abrupt("return");
          case 3:
            _context14.next = 5;
            return channel.query({
              messages: {
                id_gte: messageId,
                limit: limit
              },
              watch: true
            });
          case 5:
            state = _context14.sent;
            if (state.messages.length < limit) {
              currentSet = channel.state.messageSets.find(function (set) {
                return set.isCurrent;
              });
              if (currentSet && !currentSet.isLatest) {
                channel.state.messageSets = channel.state.messageSets.filter(function (set) {
                  return !set.isLatest;
                });
                currentSet.isLatest = true;
              }
              channel.state.setIsUpToDate(true);
              setHasNoMoreRecentMessagesToLoad(true);
            } else {
              splitLatestCurrentMessageSetRef.current();
              channel.state.setIsUpToDate(false);
              setHasNoMoreRecentMessagesToLoad(false);
            }
          case 7:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }));
    return function queryAfterMessage(_x5) {
      return _ref18.apply(this, arguments);
    };
  }();
  var getChannelConfigSafely = function getChannelConfigSafely() {
    try {
      return channel == null ? void 0 : channel.getConfig();
    } catch (_) {
      return null;
    }
  };
  var clientChannelConfig = getChannelConfigSafely();
  var updateMessage = function updateMessage(updatedMessage) {
    var extraState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (channel) {
      channel.state.addMessageSorted(updatedMessage, true);
      if (thread && updatedMessage.parent_id) {
        extraState.threadMessages = channel.state.threads[updatedMessage.parent_id] || [];
        setThreadMessages(extraState.threadMessages);
      }
      setMessages((0, _toConsumableArray2["default"])(channel.state.messages));
    }
  };
  var replaceMessage = function replaceMessage(oldMessage, newMessage) {
    if (channel) {
      channel.state.removeMessage(oldMessage);
      channel.state.addMessageSorted(newMessage, true);
      if (thread && newMessage.parent_id) {
        var _threadMessages = channel.state.threads[newMessage.parent_id] || [];
        setThreadMessages(_threadMessages);
      }
      setMessages(channel.state.messages);
    }
  };
  var createMessagePreview = function createMessagePreview(_ref19) {
    var attachments = _ref19.attachments,
      mentioned_users = _ref19.mentioned_users,
      parent_id = _ref19.parent_id,
      text = _ref19.text,
      extraFields = (0, _objectWithoutProperties2["default"])(_ref19, _excluded);
    var _client$user2 = client.user,
      channel_mutes = _client$user2.channel_mutes,
      devices = _client$user2.devices,
      mutes = _client$user2.mutes,
      messageUser = (0, _objectWithoutProperties2["default"])(_client$user2, _excluded2);
    var preview = Object.assign({
      __html: text,
      attachments: attachments,
      created_at: new Date(),
      html: text,
      id: "".concat(client.userID, "-").concat((0, _utils.generateRandomId)()),
      mentioned_users: (mentioned_users == null ? void 0 : mentioned_users.map(function (userId) {
        return {
          id: userId
        };
      })) || [],
      parent_id: parent_id,
      reactions: [],
      status: _utils.MessageStatusTypes.SENDING,
      text: text,
      type: 'regular',
      user: Object.assign({}, messageUser, {
        id: client.userID
      })
    }, extraFields);
    if (preview.quoted_message_id) {
      var _quotedMessage = messages.find(function (message) {
        return message.id === preview.quoted_message_id;
      });
      preview.quoted_message = _quotedMessage;
    }
    return preview;
  };
  var uploadPendingAttachments = function () {
    var _ref20 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee15(message) {
      var _updatedMessage$attac;
      var updatedMessage, i, _updatedMessage$attac2, attachment, image, file, _image$name, filename, controller, compressedUri, contentType, uploadResponse, _controller, response;
      return _regenerator["default"].wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            updatedMessage = Object.assign({}, message);
            if (!((_updatedMessage$attac = updatedMessage.attachments) != null && _updatedMessage$attac.length)) {
              _context15.next = 48;
              break;
            }
            i = 0;
          case 3:
            if (!(i < ((_updatedMessage$attac2 = updatedMessage.attachments) == null ? void 0 : _updatedMessage$attac2.length))) {
              _context15.next = 48;
              break;
            }
            attachment = updatedMessage.attachments[i];
            image = attachment.originalImage;
            file = attachment.originalFile;
            if (!(attachment.type === _types.FileTypes.Image && image != null && image.uri && attachment.image_url && (0, _utils.isLocalUrl)(attachment.image_url))) {
              _context15.next = 28;
              break;
            }
            filename = (_image$name = image.name) != null ? _image$name : (0, _utils.getFileNameFromPath)(image.uri);
            controller = uploadAbortControllerRef.current.get(filename);
            if (controller) {
              controller.abort();
              uploadAbortControllerRef.current["delete"](filename);
            }
            _context15.next = 13;
            return (0, _compressImage.compressedImageURI)(image, compressImageQuality);
          case 13:
            compressedUri = _context15.sent;
            contentType = (0, _mimeTypes.lookup)(filename) || 'multipart/form-data';
            if (!doImageUploadRequest) {
              _context15.next = 21;
              break;
            }
            _context15.next = 18;
            return doImageUploadRequest(image, channel);
          case 18:
            _context15.t0 = _context15.sent;
            _context15.next = 24;
            break;
          case 21:
            _context15.next = 23;
            return channel.sendImage(compressedUri, filename, contentType);
          case 23:
            _context15.t0 = _context15.sent;
          case 24:
            uploadResponse = _context15.t0;
            attachment.image_url = uploadResponse.file;
            delete attachment.originalFile;
            dbApi.updateMessage({
              message: Object.assign({}, updatedMessage, {
                cid: channel.cid
              })
            });
          case 28:
            if (!((attachment.type === _types.FileTypes.File || attachment.type === _types.FileTypes.Audio || attachment.type === _types.FileTypes.VoiceRecording || attachment.type === _types.FileTypes.Video) && attachment.asset_url && (0, _utils.isLocalUrl)(attachment.asset_url) && file != null && file.uri)) {
              _context15.next = 45;
              break;
            }
            _controller = uploadAbortControllerRef.current.get(file.name);
            if (_controller) {
              _controller.abort();
              uploadAbortControllerRef.current["delete"](file.name);
            }
            if (!doDocUploadRequest) {
              _context15.next = 37;
              break;
            }
            _context15.next = 34;
            return doDocUploadRequest(file, channel);
          case 34:
            _context15.t1 = _context15.sent;
            _context15.next = 40;
            break;
          case 37:
            _context15.next = 39;
            return channel.sendFile(file.uri, file.name, file.mimeType);
          case 39:
            _context15.t1 = _context15.sent;
          case 40:
            response = _context15.t1;
            attachment.asset_url = response.file;
            if (response.thumb_url) {
              attachment.thumb_url = response.thumb_url;
            }
            delete attachment.originalFile;
            dbApi.updateMessage({
              message: Object.assign({}, updatedMessage, {
                cid: channel.cid
              })
            });
          case 45:
            i++;
            _context15.next = 3;
            break;
          case 48:
            return _context15.abrupt("return", updatedMessage);
          case 49:
          case "end":
            return _context15.stop();
        }
      }, _callee15);
    }));
    return function uploadPendingAttachments(_x6) {
      return _ref20.apply(this, arguments);
    };
  }();
  var sendMessageRequest = function () {
    var _ref21 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee16(message, retrying) {
      var _updatedMessage, extraFields, attachments, id, mentioned_users, parent_id, text, mentionedUserIds, _messageData, messageResponse;
      return _regenerator["default"].wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _context16.next = 3;
            return uploadPendingAttachments(message);
          case 3:
            _updatedMessage = _context16.sent;
            extraFields = (0, _omit["default"])(_updatedMessage, ['__html', 'attachments', 'created_at', 'deleted_at', 'html', 'id', 'latest_reactions', 'mentioned_users', 'own_reactions', 'parent_id', 'quoted_message', 'reaction_counts', 'reaction_groups', 'reactions', 'status', 'text', 'type', 'updated_at', 'user']);
            attachments = _updatedMessage.attachments, id = _updatedMessage.id, mentioned_users = _updatedMessage.mentioned_users, parent_id = _updatedMessage.parent_id, text = _updatedMessage.text;
            if (channel.id) {
              _context16.next = 8;
              break;
            }
            return _context16.abrupt("return");
          case 8:
            mentionedUserIds = (mentioned_users == null ? void 0 : mentioned_users.map(function (user) {
              return user.id;
            })) || [];
            _messageData = Object.assign({
              attachments: attachments,
              id: id,
              mentioned_users: mentionedUserIds,
              parent_id: parent_id,
              text: (0, _patchMessageTextCommand.patchMessageTextCommand)(text != null ? text : '', mentionedUserIds)
            }, extraFields);
            messageResponse = {};
            if (!doSendMessageRequest) {
              _context16.next = 17;
              break;
            }
            _context16.next = 14;
            return doSendMessageRequest((channel == null ? void 0 : channel.cid) || '', _messageData);
          case 14:
            messageResponse = _context16.sent;
            _context16.next = 21;
            break;
          case 17:
            if (!channel) {
              _context16.next = 21;
              break;
            }
            _context16.next = 20;
            return channel.sendMessage(_messageData);
          case 20:
            messageResponse = _context16.sent;
          case 21:
            if (messageResponse.message) {
              messageResponse.message.status = _utils.MessageStatusTypes.RECEIVED;
              if (enableOfflineSupport) {
                dbApi.updateMessage({
                  message: Object.assign({}, messageResponse.message, {
                    cid: channel.cid
                  })
                });
              }
              if (retrying) {
                replaceMessage(message, messageResponse.message);
              } else {
                updateMessage(messageResponse.message);
              }
            }
            _context16.next = 30;
            break;
          case 24:
            _context16.prev = 24;
            _context16.t0 = _context16["catch"](0);
            console.log(_context16.t0);
            message.status = _utils.MessageStatusTypes.FAILED;
            updateMessage(Object.assign({}, message, {
              cid: channel.cid
            }));
            if (enableOfflineSupport) {
              dbApi.updateMessage({
                message: Object.assign({}, message, {
                  cid: channel.cid
                })
              });
            }
          case 30:
          case "end":
            return _context16.stop();
        }
      }, _callee16, null, [[0, 24]]);
    }));
    return function sendMessageRequest(_x7, _x8) {
      return _ref21.apply(this, arguments);
    };
  }();
  var sendMessage = function () {
    var _ref22 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee17(message) {
      var _channel$state;
      var messagePreview;
      return _regenerator["default"].wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            if (channel != null && (_channel$state = channel.state) != null && _channel$state.filterErrorMessages) {
              channel.state.filterErrorMessages();
            }
            messagePreview = createMessagePreview(Object.assign({}, message, {
              attachments: message.attachments || []
            }));
            mergeOverlappingMessageSetsRef.current();
            updateMessage(messagePreview, {
              commands: [],
              messageInput: ''
            });
            if (enableOfflineSupport) {
              dbApi.upsertMessages({
                messages: [Object.assign({}, messagePreview, {
                  cid: channel.cid,
                  status: _utils.MessageStatusTypes.FAILED
                })]
              });
            }
            _context17.next = 7;
            return sendMessageRequest(messagePreview);
          case 7:
          case "end":
            return _context17.stop();
        }
      }, _callee17);
    }));
    return function sendMessage(_x9) {
      return _ref22.apply(this, arguments);
    };
  }();
  var retrySendMessage = function () {
    var _ref23 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee18(message) {
      var statusPendingMessage, messageWithoutReservedFields;
      return _regenerator["default"].wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            statusPendingMessage = Object.assign({}, message, {
              status: _utils.MessageStatusTypes.SENDING
            });
            messageWithoutReservedFields = (0, _removeReservedFields.removeReservedFields)(statusPendingMessage);
            if (!(0, _utils.isBouncedMessage)(message)) {
              updateMessage(messageWithoutReservedFields);
            }
            _context18.next = 5;
            return sendMessageRequest(messageWithoutReservedFields, true);
          case 5:
          case "end":
            return _context18.stop();
        }
      }, _callee18);
    }));
    return function retrySendMessage(_x10) {
      return _ref23.apply(this, arguments);
    };
  }();
  var loadMoreFinished = (0, _react.useRef)((0, _debounce["default"])(function (updatedHasMore, newMessages) {
    setLoading(false);
    setLoadingMore(false);
    setError(false);
    setHasMore(updatedHasMore);
    setMessages(newMessages);
  }, defaultDebounceInterval, debounceOptions)).current;
  var loadMore = (0, _react.useCallback)((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee19() {
    var limit,
      currentMessages,
      oldestMessage,
      oldestID,
      queryResponse,
      updatedHasMore,
      _args19 = arguments;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          limit = _args19.length > 0 && _args19[0] !== undefined ? _args19[0] : 20;
          if (!(loadingMore || hasMore === false)) {
            _context19.next = 3;
            break;
          }
          return _context19.abrupt("return");
        case 3:
          currentMessages = channel.state.messages;
          if (currentMessages.length) {
            _context19.next = 6;
            break;
          }
          return _context19.abrupt("return", setLoadingMore(false));
        case 6:
          oldestMessage = currentMessages && currentMessages[0];
          if (!(oldestMessage && oldestMessage.status !== _utils.MessageStatusTypes.RECEIVED)) {
            _context19.next = 9;
            break;
          }
          return _context19.abrupt("return", setLoadingMore(false));
        case 9:
          setLoadingMore(true);
          oldestID = oldestMessage && oldestMessage.id;
          _context19.prev = 11;
          if (!channel) {
            _context19.next = 18;
            break;
          }
          _context19.next = 15;
          return channel.query({
            messages: {
              id_lt: oldestID,
              limit: limit
            }
          });
        case 15:
          queryResponse = _context19.sent;
          updatedHasMore = queryResponse.messages.length === limit;
          loadMoreFinished(updatedHasMore, channel.state.messages);
        case 18:
          _context19.next = 25;
          break;
        case 20:
          _context19.prev = 20;
          _context19.t0 = _context19["catch"](11);
          if (_context19.t0 instanceof Error) {
            setError(_context19.t0);
          } else {
            setError(true);
          }
          setLoadingMore(false);
          throw _context19.t0;
        case 25:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[11, 20]]);
  })), [channelId, hasMore, loadingMore]);
  var loadMoreRecent = (0, _react.useCallback)((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee20() {
    var limit,
      latestMessageSet,
      latestLengthBeforeMerge,
      didMerge,
      currentMessages,
      recentMessage,
      queryResponse,
      gotAllRecentMessages,
      currentSet,
      _args20 = arguments;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          limit = _args20.length > 0 && _args20[0] !== undefined ? _args20[0] : 5;
          latestMessageSet = channel.state.messageSets.find(function (set) {
            return set.isLatest;
          });
          latestLengthBeforeMerge = (latestMessageSet == null ? void 0 : latestMessageSet.messages.length) || 0;
          didMerge = mergeOverlappingMessageSetsRef.current(true);
          if (!didMerge) {
            _context20.next = 12;
            break;
          }
          if (!(latestMessageSet && latestLengthBeforeMerge >= limit)) {
            _context20.next = 12;
            break;
          }
          setLoadingMoreRecent(true);
          channel.state.setIsUpToDate(true);
          setHasNoMoreRecentMessagesToLoad(true);
          loadMoreRecentFinished(channel.state.messages);
          restartSetsMergeFuncRef.current();
          return _context20.abrupt("return");
        case 12:
          if (!channel.state.isUpToDate) {
            _context20.next = 15;
            break;
          }
          setLoadingMoreRecent(false);
          return _context20.abrupt("return");
        case 15:
          currentMessages = channel.state.messages;
          recentMessage = currentMessages[currentMessages.length - 1];
          if (!((recentMessage == null ? void 0 : recentMessage.status) !== _utils.MessageStatusTypes.RECEIVED)) {
            _context20.next = 20;
            break;
          }
          setLoadingMoreRecent(false);
          return _context20.abrupt("return");
        case 20:
          setLoadingMoreRecent(true);
          _context20.prev = 21;
          if (!channel) {
            _context20.next = 32;
            break;
          }
          _context20.next = 25;
          return channel.query({
            messages: {
              id_gte: recentMessage.id,
              limit: limit
            },
            watch: true
          });
        case 25:
          queryResponse = _context20.sent;
          gotAllRecentMessages = queryResponse.messages.length < limit;
          currentSet = channel.state.messageSets.find(function (set) {
            return set.isCurrent;
          });
          if (gotAllRecentMessages && currentSet && !currentSet.isLatest) {
            channel.state.messageSets = channel.state.messageSets.filter(function (set) {
              return !set.isLatest;
            });
            currentSet.isLatest = true;
          }
          channel.state.setIsUpToDate(gotAllRecentMessages);
          setHasNoMoreRecentMessagesToLoad(gotAllRecentMessages);
          loadMoreRecentFinished(channel.state.messages);
        case 32:
          _context20.next = 40;
          break;
        case 34:
          _context20.prev = 34;
          _context20.t0 = _context20["catch"](21);
          console.warn('Message pagination request failed with error', _context20.t0);
          if (_context20.t0 instanceof Error) {
            setError(_context20.t0);
          } else {
            setError(true);
          }
          setLoadingMoreRecent(false);
          throw _context20.t0;
        case 40:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[21, 34]]);
  })), [channelId, hasNoMoreRecentMessagesToLoad]);
  var loadMoreRecentFinished = (0, _react.useRef)((0, _debounce["default"])(function (newMessages) {
    setLoadingMoreRecent(false);
    setMessages(newMessages);
    setError(false);
  }, defaultDebounceInterval, debounceOptions)).current;
  var editMessage = function editMessage(updatedMessage) {
    return doUpdateMessageRequest ? doUpdateMessageRequest((channel == null ? void 0 : channel.cid) || '', updatedMessage) : client.updateMessage(updatedMessage);
  };
  var setEditingState = function setEditingState(message) {
    clearQuotedMessageState();
    setEditing(message);
  };
  var setQuotedMessageState = function setQuotedMessageState(messageOrBoolean) {
    setQuotedMessage(messageOrBoolean);
  };
  var clearEditingState = function clearEditingState() {
    return setEditing(undefined);
  };
  var clearQuotedMessageState = function clearQuotedMessageState() {
    return setQuotedMessage(false);
  };
  var removeMessage = function removeMessage(message) {
    if (channel) {
      channel.state.removeMessage(message);
      setMessages(channel.state.messages);
      if (thread) {
        setThreadMessages(channel.state.threads[thread.id] || []);
      }
    }
    if (enableOfflineSupport) {
      dbApi.deleteMessage({
        id: message.id
      });
    }
  };
  var sendReaction = function () {
    var _ref26 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee21(type, messageId) {
      var payload;
      return _regenerator["default"].wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            if (!(!(channel != null && channel.id) || !client.user)) {
              _context21.next = 2;
              break;
            }
            throw new Error('Channel has not been initialized');
          case 2:
            payload = [messageId, {
              type: type
            }, {
              enforce_unique: enforceUniqueReaction
            }];
            if (enableOfflineSupport) {
              _context21.next = 7;
              break;
            }
            _context21.next = 6;
            return channel.sendReaction.apply(channel, payload);
          case 6:
            return _context21.abrupt("return");
          case 7:
            (0, _addReactionToLocalState.addReactionToLocalState)({
              channel: channel,
              enforceUniqueReaction: enforceUniqueReaction,
              messageId: messageId,
              reactionType: type,
              user: client.user
            });
            setMessages(channel.state.messages);
            _context21.next = 11;
            return _DBSyncManager.DBSyncManager.queueTask({
              client: client,
              task: {
                channelId: channel.id,
                channelType: channel.type,
                messageId: messageId,
                payload: payload,
                type: 'send-reaction'
              }
            });
          case 11:
          case "end":
            return _context21.stop();
        }
      }, _callee21);
    }));
    return function sendReaction(_x11, _x12) {
      return _ref26.apply(this, arguments);
    };
  }();
  var deleteMessage = function () {
    var _ref27 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee22(message) {
      var _data;
      return _regenerator["default"].wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            if (channel.id) {
              _context22.next = 2;
              break;
            }
            throw new Error('Channel has not been initialized yet');
          case 2:
            if (enableOfflineSupport) {
              _context22.next = 9;
              break;
            }
            if (!(message.status === _utils.MessageStatusTypes.FAILED)) {
              _context22.next = 6;
              break;
            }
            removeMessage(message);
            return _context22.abrupt("return");
          case 6:
            _context22.next = 8;
            return client.deleteMessage(message.id);
          case 8:
            return _context22.abrupt("return");
          case 9:
            if (!(message.status === _utils.MessageStatusTypes.FAILED)) {
              _context22.next = 14;
              break;
            }
            _DBSyncManager.DBSyncManager.dropPendingTasks({
              messageId: message.id
            });
            removeMessage(message);
            _context22.next = 19;
            break;
          case 14:
            updateMessage(Object.assign({}, message, {
              cid: channel.cid,
              deleted_at: new Date().toISOString(),
              type: 'deleted'
            }));
            _context22.next = 17;
            return _DBSyncManager.DBSyncManager.queueTask({
              client: client,
              task: {
                channelId: channel.id,
                channelType: channel.type,
                messageId: message.id,
                payload: [message.id],
                type: 'delete-message'
              }
            });
          case 17:
            _data = _context22.sent;
            if (_data != null && _data.message) {
              updateMessage(Object.assign({}, _data.message));
            }
          case 19:
          case "end":
            return _context22.stop();
        }
      }, _callee22);
    }));
    return function deleteMessage(_x13) {
      return _ref27.apply(this, arguments);
    };
  }();
  var deleteReaction = function () {
    var _ref28 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee23(type, messageId) {
      var payload;
      return _regenerator["default"].wrap(function _callee23$(_context23) {
        while (1) switch (_context23.prev = _context23.next) {
          case 0:
            if (!(!(channel != null && channel.id) || !client.user)) {
              _context23.next = 2;
              break;
            }
            throw new Error('Channel has not been initialized');
          case 2:
            payload = [messageId, type];
            if (enableOfflineSupport) {
              _context23.next = 7;
              break;
            }
            _context23.next = 6;
            return channel.deleteReaction.apply(channel, payload);
          case 6:
            return _context23.abrupt("return");
          case 7:
            (0, _removeReactionFromLocalState.removeReactionFromLocalState)({
              channel: channel,
              messageId: messageId,
              reactionType: type,
              user: client.user
            });
            setMessages(channel.state.messages);
            _context23.next = 11;
            return _DBSyncManager.DBSyncManager.queueTask({
              client: client,
              task: {
                channelId: channel.id,
                channelType: channel.type,
                messageId: messageId,
                payload: payload,
                type: 'delete-reaction'
              }
            });
          case 11:
          case "end":
            return _context23.stop();
        }
      }, _callee23);
    }));
    return function deleteReaction(_x14, _x15) {
      return _ref28.apply(this, arguments);
    };
  }();
  var openThread = (0, _react.useCallback)(function (message) {
    var _channel$state2;
    var newThreadMessages = message != null && message.id ? (channel == null ? void 0 : (_channel$state2 = channel.state) == null ? void 0 : _channel$state2.threads[message.id]) || [] : [];
    setThread(message);
    setThreadMessages(newThreadMessages);
  }, [setThread, setThreadMessages]);
  var closeThread = (0, _react.useCallback)(function () {
    setThread(null);
    setThreadMessages([]);
  }, [setThread, setThreadMessages]);
  var loadMoreThreadFinished = (0, _react.useRef)((0, _debounce["default"])(function (newThreadHasMore, updatedThreadMessages) {
    setThreadHasMore(newThreadHasMore);
    setThreadLoadingMore(false);
    setThreadMessages(updatedThreadMessages);
  }, defaultDebounceInterval, debounceOptions)).current;
  var loadMoreThread = function () {
    var _ref29 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee24() {
      var _threadMessages$, parentID, oldestMessageID, limit, queryResponse, updatedHasMore, updatedThreadMessages;
      return _regenerator["default"].wrap(function _callee24$(_context24) {
        while (1) switch (_context24.prev = _context24.next) {
          case 0:
            if (!(threadLoadingMore || !(thread != null && thread.id))) {
              _context24.next = 2;
              break;
            }
            return _context24.abrupt("return");
          case 2:
            setThreadLoadingMore(true);
            _context24.prev = 3;
            if (!channel) {
              _context24.next = 15;
              break;
            }
            parentID = thread.id;
            channel.state.threads[parentID] = threadMessages;
            oldestMessageID = threadMessages == null ? void 0 : (_threadMessages$ = threadMessages[0]) == null ? void 0 : _threadMessages$.id;
            limit = 50;
            _context24.next = 11;
            return channel.getReplies(parentID, {
              id_lt: oldestMessageID,
              limit: limit
            });
          case 11:
            queryResponse = _context24.sent;
            updatedHasMore = queryResponse.messages.length === limit;
            updatedThreadMessages = channel.state.threads[parentID] || [];
            loadMoreThreadFinished(updatedHasMore, updatedThreadMessages);
          case 15:
            _context24.next = 23;
            break;
          case 17:
            _context24.prev = 17;
            _context24.t0 = _context24["catch"](3);
            console.warn('Message pagination request failed with error', _context24.t0);
            if (_context24.t0 instanceof Error) {
              setError(_context24.t0);
            } else {
              setError(true);
            }
            setThreadLoadingMore(false);
            throw _context24.t0;
          case 23:
          case "end":
            return _context24.stop();
        }
      }, _callee24, null, [[3, 17]]);
    }));
    return function loadMoreThread() {
      return _ref29.apply(this, arguments);
    };
  }();
  var disabledValue = (0, _react.useMemo)(function () {
    var _channel$data;
    return !!(channel != null && (_channel$data = channel.data) != null && _channel$data.frozen) && disableIfFrozenChannel;
  }, [(_channel$data2 = channel.data) == null ? void 0 : _channel$data2.frozen, disableIfFrozenChannel]);
  var ownCapabilitiesContext = (0, _useCreateOwnCapabilitiesContext.useCreateOwnCapabilitiesContext)({
    channel: channel,
    overrideCapabilities: overrideOwnCapabilities
  });
  var channelContext = (0, _useCreateChannelContext.useCreateChannelContext)({
    channel: channel,
    disabled: disabledValue,
    EmptyStateIndicator: EmptyStateIndicator,
    enableMessageGroupingByUser: enableMessageGroupingByUser,
    enforceUniqueReaction: enforceUniqueReaction,
    error: error,
    giphyEnabled: giphyEnabled != null ? giphyEnabled : !!((_ref30 = (clientChannelConfig == null ? void 0 : clientChannelConfig.commands) || []) != null && _ref30.some(function (command) {
      return command.name === 'giphy';
    })),
    hideDateSeparators: hideDateSeparators,
    hideStickyDateHeader: hideStickyDateHeader,
    isAdmin: isAdmin,
    isChannelActive: shouldSyncChannel,
    isModerator: isModerator,
    isOwner: isOwner,
    lastRead: lastRead,
    loadChannelAroundMessage: loadChannelAroundMessage,
    loadChannelAtMessage: loadChannelAtMessage,
    loading: loading,
    LoadingIndicator: LoadingIndicator,
    markRead: markRead,
    maxTimeBetweenGroupedMessages: maxTimeBetweenGroupedMessages,
    members: members,
    NetworkDownIndicator: NetworkDownIndicator,
    read: read,
    reloadChannel: reloadChannel,
    scrollToFirstUnreadThreshold: scrollToFirstUnreadThreshold,
    setLastRead: setLastRead,
    setTargetedMessage: setTargetedMessage,
    StickyHeader: StickyHeader,
    targetedMessage: targetedMessage,
    threadList: threadList,
    uploadAbortControllerRef: uploadAbortControllerRef,
    watcherCount: watcherCount,
    watchers: watchers
  });
  var sendMessageRef = (0, _react.useRef)(sendMessage);
  sendMessageRef.current = sendMessage;
  var inputMessageInputContext = (0, _useCreateInputMessageInputContext.useCreateInputMessageInputContext)({
    additionalTextInputProps: additionalTextInputProps,
    asyncMessagesLockDistance: asyncMessagesLockDistance,
    asyncMessagesMinimumPressDuration: asyncMessagesMinimumPressDuration,
    asyncMessagesMultiSendEnabled: asyncMessagesMultiSendEnabled,
    asyncMessagesSlideToCancelDistance: asyncMessagesSlideToCancelDistance,
    AttachButton: AttachButton,
    AudioAttachmentUploadPreview: AudioAttachmentUploadPreview,
    AudioRecorder: AudioRecorder,
    audioRecordingEnabled: audioRecordingEnabled,
    AudioRecordingInProgress: AudioRecordingInProgress,
    AudioRecordingLockIndicator: AudioRecordingLockIndicator,
    AudioRecordingPreview: AudioRecordingPreview,
    AudioRecordingWaveform: AudioRecordingWaveform,
    autoCompleteSuggestionsLimit: autoCompleteSuggestionsLimit,
    autoCompleteTriggerSettings: autoCompleteTriggerSettings,
    channelId: channelId,
    clearEditingState: clearEditingState,
    clearQuotedMessageState: clearQuotedMessageState,
    CommandsButton: CommandsButton,
    compressImageQuality: compressImageQuality,
    CooldownTimer: CooldownTimer,
    doDocUploadRequest: doDocUploadRequest,
    doImageUploadRequest: doImageUploadRequest,
    editing: editing,
    editMessage: editMessage,
    emojiSearchIndex: emojiSearchIndex,
    FileUploadPreview: FileUploadPreview,
    handleAttachButtonPress: handleAttachButtonPress,
    hasCameraPicker: hasCameraPicker,
    hasCommands: hasCommands,
    hasFilePicker: hasFilePicker,
    hasImagePicker: hasImagePicker,
    ImageUploadPreview: ImageUploadPreview,
    initialValue: initialValue,
    Input: Input,
    InputButtons: InputButtons,
    InputEditingStateHeader: InputEditingStateHeader,
    InputGiphySearch: InputGiphySearch,
    InputReplyStateHeader: InputReplyStateHeader,
    maxMessageLength: (_ref31 = maxMessageLengthProp != null ? maxMessageLengthProp : clientChannelConfig == null ? void 0 : clientChannelConfig.max_message_length) != null ? _ref31 : undefined,
    maxNumberOfFiles: maxNumberOfFiles,
    mentionAllAppUsersEnabled: mentionAllAppUsersEnabled,
    mentionAllAppUsersQuery: mentionAllAppUsersQuery,
    MoreOptionsButton: MoreOptionsButton,
    numberOfLines: numberOfLines,
    onChangeText: onChangeText,
    quotedMessage: quotedMessage,
    SendButton: SendButton,
    sendImageAsync: sendImageAsync,
    sendMessage: function sendMessage() {
      return sendMessageRef.current.apply(sendMessageRef, arguments);
    },
    SendMessageDisallowedIndicator: SendMessageDisallowedIndicator,
    setInputRef: setInputRef,
    setQuotedMessageState: setQuotedMessageState,
    ShowThreadMessageInChannelButton: ShowThreadMessageInChannelButton,
    StartAudioRecordingButton: StartAudioRecordingButton,
    UploadProgressIndicator: UploadProgressIndicator
  });
  var messageListContext = (0, _useCreatePaginatedMessageListContext.useCreatePaginatedMessageListContext)({
    channelId: channelId,
    hasMore: hasMore,
    hasNoMoreRecentMessagesToLoad: hasNoMoreRecentMessagesToLoad,
    loadingMore: loadingMoreProp !== undefined ? loadingMoreProp : loadingMore,
    loadingMoreRecent: loadingMoreRecentProp !== undefined ? loadingMoreRecentProp : loadingMoreRecent,
    loadMore: loadMore,
    loadMoreRecent: loadMoreRecent,
    messages: messages,
    setLoadingMore: setLoadingMore,
    setLoadingMoreRecent: setLoadingMoreRecent
  });
  var messagesContext = (0, _useCreateMessagesContext.useCreateMessagesContext)({
    additionalTouchableProps: additionalTouchableProps,
    Attachment: Attachment,
    AttachmentActions: AttachmentActions,
    AudioAttachment: AudioAttachment,
    Card: Card,
    CardCover: CardCover,
    CardFooter: CardFooter,
    CardHeader: CardHeader,
    channelId: channelId,
    DateHeader: DateHeader,
    deletedMessagesVisibilityType: deletedMessagesVisibilityType,
    deleteMessage: deleteMessage,
    deleteReaction: deleteReaction,
    disableTypingIndicator: disableTypingIndicator,
    dismissKeyboardOnMessageTouch: dismissKeyboardOnMessageTouch,
    enableMessageGroupingByUser: enableMessageGroupingByUser,
    FileAttachment: FileAttachment,
    FileAttachmentGroup: FileAttachmentGroup,
    FileAttachmentIcon: FileAttachmentIcon,
    FlatList: FlatList,
    forceAlignMessages: forceAlignMessages,
    Gallery: Gallery,
    getMessagesGroupStyles: getMessagesGroupStyles,
    Giphy: Giphy,
    giphyVersion: giphyVersion,
    handleBan: handleBan,
    handleBlock: handleBlock,
    handleCopy: handleCopy,
    handleDelete: handleDelete,
    handleEdit: handleEdit,
    handleFlag: handleFlag,
    handleMute: handleMute,
    handlePinMessage: handlePinMessage,
    handleQuotedReply: handleQuotedReply,
    handleReaction: handleReaction,
    handleRetry: handleRetry,
    handleThreadReply: handleThreadReply,
    ImageLoadingFailedIndicator: ImageLoadingFailedIndicator,
    ImageLoadingIndicator: ImageLoadingIndicator,
    initialScrollToFirstUnreadMessage: !messageId && initialScrollToFirstUnreadMessage,
    InlineDateSeparator: InlineDateSeparator,
    InlineUnreadIndicator: InlineUnreadIndicator,
    isAttachmentEqual: isAttachmentEqual,
    legacyImageViewerSwipeBehaviour: legacyImageViewerSwipeBehaviour,
    markdownRules: markdownRules,
    Message: Message,
    messageActions: messageActions,
    MessageAvatar: MessageAvatar,
    MessageBounce: MessageBounce,
    MessageContent: MessageContent,
    messageContentOrder: messageContentOrder,
    MessageDeleted: MessageDeleted,
    MessageEditedTimestamp: MessageEditedTimestamp,
    MessageError: MessageError,
    MessageFooter: MessageFooter,
    MessageHeader: MessageHeader,
    MessageList: MessageList,
    MessagePinnedHeader: MessagePinnedHeader,
    MessageReplies: MessageReplies,
    MessageRepliesAvatars: MessageRepliesAvatars,
    MessageSimple: MessageSimple,
    MessageStatus: MessageStatus,
    MessageSystem: MessageSystem,
    MessageText: MessageText,
    MessageTimestamp: MessageTimestamp,
    myMessageTheme: myMessageTheme,
    onLongPressMessage: onLongPressMessage,
    onPressInMessage: onPressInMessage,
    onPressMessage: onPressMessage,
    OverlayReactionList: OverlayReactionList,
    ReactionList: ReactionList,
    removeMessage: removeMessage,
    Reply: Reply,
    retrySendMessage: retrySendMessage,
    ScrollToBottomButton: ScrollToBottomButton,
    selectReaction: selectReaction,
    sendReaction: sendReaction,
    setEditingState: setEditingState,
    setQuotedMessageState: setQuotedMessageState,
    supportedReactions: supportedReactions,
    targetedMessage: targetedMessage,
    TypingIndicator: TypingIndicator,
    TypingIndicatorContainer: TypingIndicatorContainer,
    updateMessage: updateMessage,
    UrlPreview: UrlPreview,
    VideoThumbnail: VideoThumbnail
  });
  var suggestionsContext = {
    AutoCompleteSuggestionHeader: AutoCompleteSuggestionHeader,
    AutoCompleteSuggestionItem: AutoCompleteSuggestionItem,
    AutoCompleteSuggestionList: AutoCompleteSuggestionList
  };
  var threadContext = (0, _useCreateThreadContext.useCreateThreadContext)({
    allowThreadMessagesInChannel: allowThreadMessagesInChannel,
    closeThread: closeThread,
    loadMoreThread: loadMoreThread,
    openThread: openThread,
    reloadThread: reloadThread,
    setThreadLoadingMore: setThreadLoadingMore,
    thread: thread,
    threadHasMore: threadHasMore,
    threadLoadingMore: threadLoadingMore,
    threadMessages: threadMessages
  });
  var typingContext = (0, _useCreateTypingContext.useCreateTypingContext)({
    typing: typing
  });
  if (deleted) return null;
  if (!channel || error && messages.length === 0) {
    return (0, _jsxRuntime.jsx)(LoadingErrorIndicator, {
      error: error,
      listType: "message",
      retry: reloadChannel
    });
  }
  if (!(channel != null && channel.cid) || !channel.watch) {
    return (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.selectChannel, {
        color: black
      }, selectChannel],
      testID: "no-channel",
      children: t('Please select a channel first')
    });
  }
  return (0, _jsxRuntime.jsx)(KeyboardCompatibleView, Object.assign({
    behavior: keyboardBehavior,
    enabled: !disableKeyboardCompatibleView,
    keyboardVerticalOffset: keyboardVerticalOffset
  }, additionalKeyboardAvoidingViewProps, {
    children: (0, _jsxRuntime.jsx)(_ChannelContext.ChannelProvider, {
      value: channelContext,
      children: (0, _jsxRuntime.jsx)(_OwnCapabilitiesContext.OwnCapabilitiesProvider, {
        value: ownCapabilitiesContext,
        children: (0, _jsxRuntime.jsx)(_TypingContext.TypingProvider, {
          value: typingContext,
          children: (0, _jsxRuntime.jsx)(_PaginatedMessageListContext.PaginatedMessageListProvider, {
            value: messageListContext,
            children: (0, _jsxRuntime.jsx)(_MessagesContext.MessagesProvider, {
              value: messagesContext,
              children: (0, _jsxRuntime.jsx)(_ThreadContext.ThreadProvider, {
                value: threadContext,
                children: (0, _jsxRuntime.jsx)(_SuggestionsContext.SuggestionsProvider, {
                  value: suggestionsContext,
                  children: (0, _jsxRuntime.jsx)(_MessageInputContext.MessageInputProvider, {
                    value: inputMessageInputContext,
                    children: (0, _jsxRuntime.jsx)(_reactNative.View, {
                      style: {
                        height: '100%'
                      },
                      children: children
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  }));
};
var Channel = function Channel(props) {
  var _props$thread, _props$thread2;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client,
    enableOfflineSupport = _useChatContext.enableOfflineSupport;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var shouldSyncChannel = (_props$thread = props.thread) != null && _props$thread.id ? !!props.threadList : true;
  var _useChannelState = (0, _useChannelState2.useChannelState)(props.channel, props.threadList ? (_props$thread2 = props.thread) == null ? void 0 : _props$thread2.id : undefined),
    members = _useChannelState.members,
    messages = _useChannelState.messages,
    read = _useChannelState.read,
    setMembers = _useChannelState.setMembers,
    setMessages = _useChannelState.setMessages,
    setRead = _useChannelState.setRead,
    setThreadMessages = _useChannelState.setThreadMessages,
    setTyping = _useChannelState.setTyping,
    setWatcherCount = _useChannelState.setWatcherCount,
    setWatchers = _useChannelState.setWatchers,
    threadMessages = _useChannelState.threadMessages,
    typing = _useChannelState.typing,
    watcherCount = _useChannelState.watcherCount,
    watchers = _useChannelState.watchers;
  return (0, _jsxRuntime.jsx)(ChannelWithContext, Object.assign({
    client: client,
    enableOfflineSupport: enableOfflineSupport,
    t: t
  }, props, {
    shouldSyncChannel: shouldSyncChannel,
    members: members,
    messages: props.messages || messages,
    read: read,
    setMembers: setMembers,
    setMessages: setMessages,
    setRead: setRead,
    setThreadMessages: setThreadMessages,
    setTyping: setTyping,
    setWatcherCount: setWatcherCount,
    setWatchers: setWatchers,
    threadMessages: threadMessages,
    typing: typing,
    watcherCount: watcherCount,
    watchers: watchers
  }));
};
exports.Channel = Channel;
//# sourceMappingURL=Channel.js.map