var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachmentTypeIconMap = exports.ThreadListItemComponent = exports.ThreadListItem = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _contexts = require("../../contexts");
var _ThreadListItemContext = require("../../contexts/threadsContext/ThreadListItemContext");
var _ThreadsContext = require("../../contexts/threadsContext/ThreadsContext");
var _hooks = require("../../hooks");
var _icons = require("../../icons");
var _getDateString = require("../../utils/i18n/getDateString");
var _Avatar = require("../Avatar/Avatar");
var _useChannelPreviewDisplayName = require("../ChannelPreview/hooks/useChannelPreviewDisplayName");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ThreadList/ThreadListItem.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var styles = _reactNative.StyleSheet.create({
  boldText: {
    fontSize: 14,
    fontWeight: '500'
  },
  contentRow: {
    flexDirection: 'row',
    marginTop: 6
  },
  contentTextWrapper: {
    flex: 1,
    marginLeft: 8
  },
  dateText: {
    alignSelf: 'flex-end'
  },
  headerRow: {
    flexDirection: 'row'
  },
  infoRow: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  lastReplyText: {
    flex: 1,
    fontSize: 14,
    marginTop: 4
  },
  parentMessageText: {
    flex: 1,
    fontSize: 12
  },
  touchableWrapper: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 14
  },
  unreadBubbleWrapper: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 50,
    height: 22,
    justifyContent: 'center',
    width: 22
  }
});
var attachmentTypeIconMap = {
  audio: '🔈',
  file: '📄',
  image: '📷',
  video: '🎥',
  voiceRecording: '🎙️'
};
exports.attachmentTypeIconMap = attachmentTypeIconMap;
var getTitleFromMessage = function getTitleFromMessage(_ref) {
  var _message$attachments, _attachmentTypeIconMa, _ref2, _message$user;
  var currentUserId = _ref.currentUserId,
    message = _ref.message,
    t = _ref.t;
  var attachment = message == null ? void 0 : (_message$attachments = message.attachments) == null ? void 0 : _message$attachments.at(0);
  var attachmentIcon = attachment ? "".concat((_attachmentTypeIconMa = attachmentTypeIconMap[(_ref2 = attachment.type) != null ? _ref2 : 'file']) != null ? _attachmentTypeIconMa : attachmentTypeIconMap.file, " ") : '';
  var messageBelongsToCurrentUserPrefix = (message == null ? void 0 : (_message$user = message.user) == null ? void 0 : _message$user.id) === currentUserId ? "".concat(t('You'), ": ") : '';
  if (message != null && message.deleted_at && message.parent_id) return "".concat(messageBelongsToCurrentUserPrefix).concat(t('This reply was deleted'), ".");
  if (message != null && message.deleted_at && !message.parent_id) return "".concat(messageBelongsToCurrentUserPrefix).concat(t('The source message was deleted'), ".");
  if ((attachment == null ? void 0 : attachment.type) === 'voiceRecording') return "".concat(attachmentIcon).concat(messageBelongsToCurrentUserPrefix).concat(t('Voice message'), ".");
  return "".concat(attachmentIcon).concat(messageBelongsToCurrentUserPrefix).concat((message == null ? void 0 : message.text) || (attachment == null ? void 0 : attachment.fallback) || 'N/A');
};
var ThreadListItemComponent = function ThreadListItemComponent() {
  var _lastReply$user, _lastReply$user2, _lastReply$user3;
  var _useThreadListItemCon = (0, _ThreadListItemContext.useThreadListItemContext)(),
    channel = _useThreadListItemCon.channel,
    dateString = _useThreadListItemCon.dateString,
    deletedAtDateString = _useThreadListItemCon.deletedAtDateString,
    lastReply = _useThreadListItemCon.lastReply,
    ownUnreadMessageCount = _useThreadListItemCon.ownUnreadMessageCount,
    parentMessage = _useThreadListItemCon.parentMessage,
    thread = _useThreadListItemCon.thread;
  var displayName = (0, _useChannelPreviewDisplayName.useChannelPreviewDisplayName)(channel);
  var _useThreadsContext = (0, _ThreadsContext.useThreadsContext)(),
    onThreadSelect = _useThreadsContext.onThreadSelect;
  var _useChatContext = (0, _contexts.useChatContext)(),
    client = _useChatContext.client;
  var _useTranslationContex = (0, _contexts.useTranslationContext)(),
    t = _useTranslationContex.t;
  var _useTheme = (0, _contexts.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_red = _useTheme$theme$color.accent_red,
    text_low_emphasis = _useTheme$theme$color.text_low_emphasis,
    white = _useTheme$theme$color.white,
    threadListItem = _useTheme$theme.threadListItem;
  return (0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
    onPress: function onPress() {
      if (onThreadSelect) {
        onThreadSelect({
          thread: parentMessage,
          threadInstance: thread
        }, channel);
      }
    },
    style: [styles.touchableWrapper, threadListItem.touchableWrapper],
    testID: "thread-list-item",
    children: [(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.headerRow, threadListItem.headerRow],
      children: [(0, _jsxRuntime.jsx)(_icons.MessageBubble, {}), (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.boldText, {
          color: text_low_emphasis
        }, threadListItem.boldText],
        children: displayName || 'N/A'
      })]
    }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.infoRow, threadListItem.infoRow],
      children: [(0, _jsxRuntime.jsxs)(_reactNative.Text, {
        numberOfLines: 1,
        style: [styles.parentMessageText, {
          color: text_low_emphasis
        }, threadListItem.parentMessageText],
        children: [t('replied to'), ": ", getTitleFromMessage({
          message: parentMessage,
          t: t
        })]
      }), ownUnreadMessageCount > 0 && !deletedAtDateString ? (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.unreadBubbleWrapper, {
          backgroundColor: accent_red
        }, threadListItem.unreadBubbleWrapper],
        children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [{
            color: white
          }, threadListItem.unreadBubbleText],
          children: ownUnreadMessageCount
        })
      }) : null]
    }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.contentRow, threadListItem.contentRow],
      children: [(0, _jsxRuntime.jsx)(_Avatar.Avatar, {
        image: lastReply == null ? void 0 : (_lastReply$user = lastReply.user) == null ? void 0 : _lastReply$user.image,
        online: lastReply == null ? void 0 : (_lastReply$user2 = lastReply.user) == null ? void 0 : _lastReply$user2.online,
        size: 40
      }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: [styles.contentTextWrapper, threadListItem.contentTextWrapper],
        children: [(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.boldText, {
            color: text_low_emphasis
          }, threadListItem.boldText],
          children: lastReply == null ? void 0 : (_lastReply$user3 = lastReply.user) == null ? void 0 : _lastReply$user3.name
        }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
          style: [styles.headerRow, threadListItem.headerRow],
          children: [(0, _jsxRuntime.jsx)(_reactNative.Text, {
            numberOfLines: 1,
            style: [styles.lastReplyText, {
              color: text_low_emphasis
            }, threadListItem.lastReplyText],
            children: deletedAtDateString ? 'This thread was deleted.' : getTitleFromMessage({
              currentUserId: client.userID,
              message: lastReply,
              t: t
            })
          }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [styles.dateText, {
              color: text_low_emphasis
            }, threadListItem.dateText],
            children: deletedAtDateString != null ? deletedAtDateString : dateString
          })]
        })]
      })]
    })]
  });
};
exports.ThreadListItemComponent = ThreadListItemComponent;
var ThreadListItem = function ThreadListItem(props) {
  var _useChatContext2 = (0, _contexts.useChatContext)(),
    client = _useChatContext2.client;
  var _useTranslationContex2 = (0, _contexts.useTranslationContext)(),
    t = _useTranslationContex2.t,
    tDateTimeParser = _useTranslationContex2.tDateTimeParser;
  var thread = props.thread,
    _props$timestampTrans = props.timestampTranslationKey,
    timestampTranslationKey = _props$timestampTrans === void 0 ? 'timestamp/ThreadListItem' : _props$timestampTrans;
  var _useThreadsContext2 = (0, _ThreadsContext.useThreadsContext)(),
    _useThreadsContext2$T = _useThreadsContext2.ThreadListItem,
    ThreadListItem = _useThreadsContext2$T === void 0 ? ThreadListItemComponent : _useThreadsContext2$T;
  var selector = (0, _react.useCallback)(function (nextValue) {
    var _nextValue$read$clien;
    return [nextValue.replies.at(-1), client.userID && ((_nextValue$read$clien = nextValue.read[client.userID]) == null ? void 0 : _nextValue$read$clien.unreadMessageCount) || 0, nextValue.parentMessage, nextValue.channel, nextValue.deletedAt];
  }, [client]);
  var _useStateStore = (0, _hooks.useStateStore)(thread.state, selector),
    _useStateStore2 = (0, _slicedToArray2["default"])(_useStateStore, 5),
    lastReply = _useStateStore2[0],
    ownUnreadMessageCount = _useStateStore2[1],
    parentMessage = _useStateStore2[2],
    channel = _useStateStore2[3],
    deletedAt = _useStateStore2[4];
  var timestamp = lastReply == null ? void 0 : lastReply.created_at;
  var dateString = (0, _react.useMemo)(function () {
    return (0, _getDateString.getDateString)({
      date: timestamp,
      t: t,
      tDateTimeParser: tDateTimeParser,
      timestampTranslationKey: timestampTranslationKey
    });
  }, [timestamp, t, tDateTimeParser, timestampTranslationKey]);
  var deletedAtDateString = (0, _react.useMemo)(function () {
    return (0, _getDateString.getDateString)({
      date: deletedAt,
      t: t,
      tDateTimeParser: tDateTimeParser,
      timestampTranslationKey: timestampTranslationKey
    });
  }, [deletedAt, t, tDateTimeParser, timestampTranslationKey]);
  return (0, _jsxRuntime.jsx)(_ThreadListItemContext.ThreadListItemProvider, {
    value: {
      channel: channel,
      dateString: dateString,
      deletedAtDateString: deletedAtDateString,
      lastReply: lastReply,
      ownUnreadMessageCount: ownUnreadMessageCount,
      parentMessage: parentMessage,
      thread: thread
    },
    children: (0, _jsxRuntime.jsx)(ThreadListItem, {})
  });
};
exports.ThreadListItem = ThreadListItem;
//# sourceMappingURL=ThreadListItem.js.map