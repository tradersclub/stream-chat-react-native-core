var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelPreview = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _useLatestMessagePreview = require("./hooks/useLatestMessagePreview");
var _ChannelsContext = require("../../contexts/channelsContext/ChannelsContext");
var _ChatContext = require("../../contexts/chatContext/ChatContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelPreview/ChannelPreview.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ChannelPreviewWithContext = function ChannelPreviewWithContext(props) {
  var channel = props.channel,
    client = props.client,
    channelListForceUpdate = props.forceUpdate,
    Preview = props.Preview;
  var _useState = (0, _react.useState)(channel.state.messages[channel.state.messages.length - 1]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    lastMessage = _useState2[0],
    setLastMessage = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    forceUpdate = _useState4[0],
    setForceUpdate = _useState4[1];
  var _useState5 = (0, _react.useState)(channel.countUnread()),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    unread = _useState6[0],
    setUnread = _useState6[1];
  var latestMessagePreview = (0, _useLatestMessagePreview.useLatestMessagePreview)(channel, forceUpdate, lastMessage);
  var channelLastMessage = channel.lastMessage();
  var channelLastMessageString = "".concat(channelLastMessage == null ? void 0 : channelLastMessage.id).concat(channelLastMessage == null ? void 0 : channelLastMessage.updated_at);
  (0, _react.useEffect)(function () {
    var _client$on = client.on('notification.mark_read', function () {
        setUnread(channel.countUnread());
      }),
      unsubscribe = _client$on.unsubscribe;
    return unsubscribe;
  }, []);
  (0, _react.useEffect)(function () {
    if (channelLastMessage && (channelLastMessage.id !== (lastMessage == null ? void 0 : lastMessage.id) || channelLastMessage.updated_at !== (lastMessage == null ? void 0 : lastMessage.updated_at))) {
      setLastMessage(channelLastMessage);
    }
    var newUnreadCount = channel.countUnread();
    setUnread(newUnreadCount);
  }, [channelLastMessageString, channelListForceUpdate]);
  (0, _react.useEffect)(function () {
    var handleNewMessageEvent = function handleNewMessageEvent(event) {
      var message = event.message;
      if (message && (!message.parent_id || message.show_in_channel)) {
        setLastMessage(event.message);
        setUnread(channel.countUnread());
      }
    };
    var handleUpdatedOrDeletedMessage = function handleUpdatedOrDeletedMessage(event) {
      setLastMessage(function (prevLastMessage) {
        var _event$message;
        if ((prevLastMessage == null ? void 0 : prevLastMessage.id) === ((_event$message = event.message) == null ? void 0 : _event$message.id)) {
          return event.message;
        }
        return prevLastMessage;
      });
    };
    var listeners = [channel.on('message.new', handleNewMessageEvent), channel.on('message.updated', handleUpdatedOrDeletedMessage), channel.on('message.deleted', handleUpdatedOrDeletedMessage)];
    return function () {
      return listeners.forEach(function (l) {
        return l.unsubscribe();
      });
    };
  }, []);
  (0, _react.useEffect)(function () {
    var handleReadEvent = function handleReadEvent(event) {
      var _event$user, _event$user2;
      if (((_event$user = event.user) == null ? void 0 : _event$user.id) === client.userID) {
        setUnread(0);
      } else if ((_event$user2 = event.user) != null && _event$user2.id) {
        setForceUpdate(function (prev) {
          return prev + 1;
        });
      }
    };
    var listener = channel.on('message.read', handleReadEvent);
    return function () {
      return listener.unsubscribe();
    };
  }, []);
  return (0, _jsxRuntime.jsx)(Preview, {
    channel: channel,
    latestMessagePreview: latestMessagePreview,
    unread: unread
  });
};
var ChannelPreview = function ChannelPreview(props) {
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  var _useChannelsContext = (0, _ChannelsContext.useChannelsContext)(),
    forceUpdate = _useChannelsContext.forceUpdate,
    Preview = _useChannelsContext.Preview;
  return (0, _jsxRuntime.jsx)(ChannelPreviewWithContext, Object.assign({
    client: client,
    forceUpdate: forceUpdate,
    Preview: Preview
  }, props));
};
exports.ChannelPreview = ChannelPreview;
//# sourceMappingURL=ChannelPreview.js.map