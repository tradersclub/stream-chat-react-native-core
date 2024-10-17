var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineDateSeparator = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/InlineDateSeparator.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    height: 16,
    justifyContent: 'center',
    marginVertical: 4,
    paddingHorizontal: 8
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});
var InlineDateSeparator = function InlineDateSeparator(_ref) {
  var date = _ref.date;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    overlay = _useTheme$theme$color.overlay,
    white = _useTheme$theme$color.white,
    _useTheme$theme$inlin = _useTheme$theme.inlineDateSeparator,
    container = _useTheme$theme$inlin.container,
    text = _useTheme$theme$inlin.text;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    tDateTimeParser = _useTranslationContex.tDateTimeParser;
  if (!date) {
    return null;
  }
  var dateFormat = date.getFullYear() === new Date().getFullYear() ? 'MMM D' : 'MMM D, YYYY';
  var tDate = tDateTimeParser(date);
  var dateString = (0, _TranslationContext.isDayOrMoment)(tDate) ? tDate.format(dateFormat) : new Date(tDate).toDateString();
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.container, {
      backgroundColor: overlay
    }, container],
    testID: "date-separator",
    children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.text, {
        color: white
      }, text],
      children: dateString
    })
  });
};
exports.InlineDateSeparator = InlineDateSeparator;
//# sourceMappingURL=InlineDateSeparator.js.map