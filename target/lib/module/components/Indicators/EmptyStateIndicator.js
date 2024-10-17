var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyStateIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _useViewport2 = require("../../hooks/useViewport");
var _MessageIcon = require("../../icons/MessageIcon");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Indicators/EmptyStateIndicator.tsx";
var styles = _reactNative.StyleSheet.create({
  channelContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  channelDetails: {
    fontSize: 14,
    textAlign: 'center'
  },
  channelTitle: {
    fontSize: 16,
    paddingBottom: 8,
    paddingTop: 16
  }
});
var EmptyStateIndicator = function EmptyStateIndicator(_ref) {
  var listType = _ref.listType;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    black = _useTheme$theme$color.black,
    grey = _useTheme$theme$color.grey,
    grey_gainsboro = _useTheme$theme$color.grey_gainsboro,
    _useTheme$theme$empty = _useTheme$theme.emptyStateIndicator,
    channelContainer = _useTheme$theme$empty.channelContainer,
    channelDetails = _useTheme$theme$empty.channelDetails,
    channelTitle = _useTheme$theme$empty.channelTitle;
  var _useViewport = (0, _useViewport2.useViewport)(),
    vw = _useViewport.vw;
  var width = vw(33);
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  switch (listType) {
    case 'channel':
      return (0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: [styles.channelContainer, channelContainer],
        children: [(0, _jsxRuntime.jsx)(_MessageIcon.MessageIcon, {
          height: width,
          pathFill: grey_gainsboro,
          width: width
        }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.channelTitle, {
            color: black
          }, channelTitle],
          testID: "empty-channel-state-title",
          children: t("Let's start chatting!")
        }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.channelDetails, {
            color: grey,
            width: vw(66)
          }, channelDetails],
          testID: "empty-channel-state-details",
          children: t('How about sending your first message to a friend?')
        })]
      });
    case 'message':
      return null;
    default:
      return (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: {
          color: black
        },
        children: "No items exist"
      });
  }
};
exports.EmptyStateIndicator = EmptyStateIndicator;
//# sourceMappingURL=EmptyStateIndicator.js.map