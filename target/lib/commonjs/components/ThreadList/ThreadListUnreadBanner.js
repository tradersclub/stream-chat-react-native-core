var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThreadListUnreadBanner = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _contexts = require("../../contexts");
var _hooks = require("../../hooks");
var _icons = require("../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ThreadList/ThreadListUnreadBanner.tsx";
var styles = _reactNative.StyleSheet.create({
  text: {
    alignSelf: 'flex-start',
    flex: 1,
    fontSize: 16
  },
  touchableWrapper: {
    borderRadius: 16,
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 6,
    paddingHorizontal: 16,
    paddingVertical: 14
  }
});
var selector = function selector(nextValue) {
  return [nextValue.unseenThreadIds];
};
var ThreadListUnreadBanner = function ThreadListUnreadBanner() {
  var _useChatContext = (0, _contexts.useChatContext)(),
    client = _useChatContext.client;
  var _useTheme = (0, _contexts.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    text_high_emphasis = _useTheme$theme$color.text_high_emphasis,
    white = _useTheme$theme$color.white,
    threadListUnreadBanner = _useTheme$theme.threadListUnreadBanner;
  var _useStateStore = (0, _hooks.useStateStore)(client.threads.state, selector),
    _useStateStore2 = (0, _slicedToArray2["default"])(_useStateStore, 1),
    unseenThreadIds = _useStateStore2[0];
  if (!unseenThreadIds.length) {
    return null;
  }
  return (0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
    onPress: function onPress() {
      return client.threads.reload();
    },
    style: [styles.touchableWrapper, {
      backgroundColor: text_high_emphasis
    }, threadListUnreadBanner.touchableWrapper],
    children: [(0, _jsxRuntime.jsxs)(_reactNative.Text, {
      style: [styles.text, {
        color: white
      }, threadListUnreadBanner.text],
      children: [unseenThreadIds.length, " unread threads"]
    }), (0, _jsxRuntime.jsx)(_icons.Reload, {
      pathFill: white
    })]
  });
};
exports.ThreadListUnreadBanner = ThreadListUnreadBanner;
//# sourceMappingURL=ThreadListUnreadBanner.js.map