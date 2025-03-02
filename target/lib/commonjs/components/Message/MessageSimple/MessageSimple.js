var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageSimple = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _MessageContext = require("../../../contexts/messageContext/MessageContext");
var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageSimple.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  lastMessageContainer: {
    marginBottom: 12
  },
  messageGroupedSingleOrBottomContainer: {
    marginBottom: 8
  },
  messageGroupedTopContainer: {}
});
var MessageSimpleWithContext = function MessageSimpleWithContext(props) {
  var _channel$state$messag;
  var alignment = props.alignment,
    channel = props.channel,
    enableMessageGroupingByUser = props.enableMessageGroupingByUser,
    groupStyles = props.groupStyles,
    hasReactions = props.hasReactions,
    message = props.message,
    MessageAvatar = props.MessageAvatar,
    MessageContent = props.MessageContent,
    ReactionList = props.ReactionList;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme$messa = _useTheme.theme.messageSimple,
    container = _useTheme$theme$messa.container,
    lastMessageContainer = _useTheme$theme$messa.lastMessageContainer,
    messageGroupedSingleOrBottomContainer = _useTheme$theme$messa.messageGroupedSingleOrBottomContainer,
    messageGroupedTopContainer = _useTheme$theme$messa.messageGroupedTopContainer;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    messageContentWidth = _useState2[0],
    setMessageContentWidth = _useState2[1];
  var isVeryLastMessage = (channel == null ? void 0 : (_channel$state$messag = channel.state.messages[(channel == null ? void 0 : channel.state.messages.length) - 1]) == null ? void 0 : _channel$state$messag.id) === message.id;
  var messageGroupedSingleOrBottom = groupStyles.includes('single') || groupStyles.includes('bottom');
  var showReactions = message.type !== 'deleted' && hasReactions && ReactionList;
  var lastMessageInMessageListStyles = [styles.lastMessageContainer, lastMessageContainer];
  var messageGroupedSingleOrBottomStyles = [styles.messageGroupedSingleOrBottomContainer, messageGroupedSingleOrBottomContainer];
  var messageGroupedTopStyles = [styles.messageGroupedTopContainer, messageGroupedTopContainer];
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.container, messageGroupedSingleOrBottom ? isVeryLastMessage && enableMessageGroupingByUser ? lastMessageInMessageListStyles : messageGroupedSingleOrBottomStyles : messageGroupedTopStyles, {
        justifyContent: alignment === 'left' ? 'flex-start' : 'flex-end',
        marginTop: showReactions ? 2 : 0
      }, container],
      testID: "message-simple-wrapper",
      children: [alignment === 'left' && (0, _jsxRuntime.jsx)(MessageAvatar, {}), (0, _jsxRuntime.jsx)(MessageContent, {
        setMessageContentWidth: setMessageContentWidth
      }), showReactions && (0, _jsxRuntime.jsx)(ReactionList, {
        messageContentWidth: messageContentWidth
      })]
    })
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var _prevMessage$quoted_m, _nextMessage$quoted_m, _prevMessage$quoted_m2, _nextMessage$quoted_m2;
  var prevChannel = prevProps.channel,
    prevGroupStyles = prevProps.groupStyles,
    prevHasReactions = prevProps.hasReactions,
    prevIsEditedMessageOpen = prevProps.isEditedMessageOpen,
    prevMessage = prevProps.message,
    prevMyMessageTheme = prevProps.myMessageTheme;
  var nextChannel = nextProps.channel,
    nextGroupStyles = nextProps.groupStyles,
    nextHasReactions = nextProps.hasReactions,
    nextIsEditedMessageOpen = nextProps.isEditedMessageOpen,
    nextMessage = nextProps.message,
    nextMyMessageTheme = nextProps.myMessageTheme;
  var hasReactionsEqual = prevHasReactions === nextHasReactions;
  if (!hasReactionsEqual) return false;
  var repliesEqual = prevMessage.reply_count === nextMessage.reply_count;
  if (!repliesEqual) return false;
  var groupStylesEqual = JSON.stringify(prevGroupStyles) === JSON.stringify(nextGroupStyles);
  if (!groupStylesEqual) return false;
  var isEditedMessageOpenEqual = prevIsEditedMessageOpen === nextIsEditedMessageOpen;
  if (!isEditedMessageOpenEqual) return false;
  var isPrevMessageTypeDeleted = prevMessage.type === 'deleted';
  var isNextMessageTypeDeleted = nextMessage.type === 'deleted';
  var messageEqual = isPrevMessageTypeDeleted === isNextMessageTypeDeleted && prevMessage.status === nextMessage.status && prevMessage.type === nextMessage.type && prevMessage.text === nextMessage.text && prevMessage.i18n === nextMessage.i18n;
  if (!messageEqual) return false;
  var isPrevQuotedMessageTypeDeleted = ((_prevMessage$quoted_m = prevMessage.quoted_message) == null ? void 0 : _prevMessage$quoted_m.type) === 'deleted';
  var isNextQuotedMessageTypeDeleted = ((_nextMessage$quoted_m = nextMessage.quoted_message) == null ? void 0 : _nextMessage$quoted_m.type) === 'deleted';
  var quotedMessageEqual = ((_prevMessage$quoted_m2 = prevMessage.quoted_message) == null ? void 0 : _prevMessage$quoted_m2.id) === ((_nextMessage$quoted_m2 = nextMessage.quoted_message) == null ? void 0 : _nextMessage$quoted_m2.id) && isPrevQuotedMessageTypeDeleted === isNextQuotedMessageTypeDeleted;
  if (!quotedMessageEqual) return false;
  var channelEqual = (prevChannel == null ? void 0 : prevChannel.state.messages.length) === (nextChannel == null ? void 0 : nextChannel.state.messages.length);
  if (!channelEqual) return false;
  var prevMessageAttachments = prevMessage.attachments;
  var nextMessageAttachments = nextMessage.attachments;
  var attachmentsEqual = Array.isArray(prevMessageAttachments) && Array.isArray(nextMessageAttachments) ? prevMessageAttachments.length === nextMessageAttachments.length && prevMessageAttachments.every(function (attachment, index) {
    var attachmentKeysEqual = attachment.image_url === nextMessageAttachments[index].image_url && attachment.og_scrape_url === nextMessageAttachments[index].og_scrape_url && attachment.thumb_url === nextMessageAttachments[index].thumb_url && attachment.type === nextMessageAttachments[index].type;
    return attachmentKeysEqual;
  }) : prevMessageAttachments === nextMessageAttachments;
  if (!attachmentsEqual) return false;
  var latestReactionsEqual = Array.isArray(prevMessage.latest_reactions) && Array.isArray(nextMessage.latest_reactions) ? prevMessage.latest_reactions.length === nextMessage.latest_reactions.length && prevMessage.latest_reactions.every(function (_ref, index) {
    var _nextMessage$latest_r;
    var type = _ref.type;
    return type === ((_nextMessage$latest_r = nextMessage.latest_reactions) == null ? void 0 : _nextMessage$latest_r[index].type);
  }) : prevMessage.latest_reactions === nextMessage.latest_reactions;
  if (!latestReactionsEqual) return false;
  var messageThemeEqual = JSON.stringify(prevMyMessageTheme) === JSON.stringify(nextMyMessageTheme);
  if (!messageThemeEqual) return false;
  return true;
};
var MemoizedMessageSimple = _react["default"].memo(MessageSimpleWithContext, areEqual);
var MessageSimple = function MessageSimple(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    alignment = _useMessageContext.alignment,
    channel = _useMessageContext.channel,
    groupStyles = _useMessageContext.groupStyles,
    hasReactions = _useMessageContext.hasReactions,
    isEditedMessageOpen = _useMessageContext.isEditedMessageOpen,
    message = _useMessageContext.message;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    enableMessageGroupingByUser = _useMessagesContext.enableMessageGroupingByUser,
    MessageAvatar = _useMessagesContext.MessageAvatar,
    MessageContent = _useMessagesContext.MessageContent,
    myMessageTheme = _useMessagesContext.myMessageTheme,
    ReactionList = _useMessagesContext.ReactionList;
  return (0, _jsxRuntime.jsx)(MemoizedMessageSimple, Object.assign({
    alignment: alignment,
    channel: channel,
    enableMessageGroupingByUser: enableMessageGroupingByUser,
    groupStyles: groupStyles,
    hasReactions: hasReactions,
    isEditedMessageOpen: isEditedMessageOpen,
    message: message,
    MessageAvatar: MessageAvatar,
    MessageContent: MessageContent,
    myMessageTheme: myMessageTheme,
    ReactionList: ReactionList
  }, props));
};
exports.MessageSimple = MessageSimple;
MessageSimple.displayName = 'MessageSimple{messageSimple{container}}';
//# sourceMappingURL=MessageSimple.js.map