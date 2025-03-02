var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputGiphySearch = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _MessageInputContext = require("../../../contexts/messageInputContext/MessageInputContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _icons = require("../../../icons");
var _AutoCompleteInput = require("../../AutoCompleteInput/AutoCompleteInput");
var _useCountdown2 = require("../hooks/useCountdown");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/components/InputGiphySearch.tsx";
var styles = _reactNative.StyleSheet.create({
  autoCompleteInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 10
  },
  giphyContainer: {
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    marginRight: 8,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  giphyText: {
    fontSize: 12,
    fontWeight: 'bold'
  }
});
var InputGiphySearch = function InputGiphySearch(_ref) {
  var propAdditionalTextInputProps = _ref.additionalTextInputProps,
    propCooldownEndsAt = _ref.cooldownEndsAt,
    disabled = _ref.disabled,
    propSetGiphyActive = _ref.setGiphyActive,
    propSetShowMoreOptions = _ref.setShowMoreOptions;
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
    contextAdditionalTextInputProps = _useMessageInputConte.additionalTextInputProps,
    contextCooldownEndsAt = _useMessageInputConte.cooldownEndsAt,
    contextSetGiphyActive = _useMessageInputConte.setGiphyActive,
    contextSetShowMoreOptions = _useMessageInputConte.setShowMoreOptions;
  var additionalTextInputProps = propAdditionalTextInputProps || contextAdditionalTextInputProps;
  var cooldownEndsAt = propCooldownEndsAt || contextCooldownEndsAt;
  var setGiphyActive = propSetGiphyActive || contextSetGiphyActive;
  var setShowMoreOptions = propSetShowMoreOptions || contextSetShowMoreOptions;
  var _useCountdown = (0, _useCountdown2.useCountdown)(cooldownEndsAt),
    cooldownRemainingSeconds = _useCountdown.seconds;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    grey = _useTheme$theme$color.grey,
    white = _useTheme$theme$color.white,
    _useTheme$theme$messa = _useTheme$theme.messageInput,
    autoCompleteInputContainer = _useTheme$theme$messa.autoCompleteInputContainer,
    _useTheme$theme$messa2 = _useTheme$theme$messa.giphyCommandInput,
    giphyContainer = _useTheme$theme$messa2.giphyContainer,
    giphyText = _useTheme$theme$messa2.giphyText;
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.autoCompleteInputContainer, autoCompleteInputContainer],
    children: [(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.giphyContainer, {
        backgroundColor: accent_blue
      }, giphyContainer],
      children: [(0, _jsxRuntime.jsx)(_icons.GiphyLightning, {
        fill: white,
        size: 16
      }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.giphyText, {
          color: white
        }, giphyText],
        children: "GIPHY"
      })]
    }), (0, _jsxRuntime.jsx)(_AutoCompleteInput.AutoCompleteInput, {
      additionalTextInputProps: additionalTextInputProps,
      cooldownActive: !!cooldownRemainingSeconds
    }), (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      disabled: disabled,
      onPress: function onPress() {
        setGiphyActive(false);
        setShowMoreOptions(true);
      },
      testID: "close-button",
      children: (0, _jsxRuntime.jsx)(_icons.CircleClose, {
        height: 20,
        pathFill: grey,
        width: 20
      })
    })]
  });
};
exports.InputGiphySearch = InputGiphySearch;
InputGiphySearch.displayName = 'InputGiphySearch{messageInput}';
//# sourceMappingURL=InputGiphySearch.js.map