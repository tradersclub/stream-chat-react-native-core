var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageSystem = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/MessageSystem.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  line: {
    flex: 1,
    height: 0.5
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textContainer: {
    flex: 3,
    marginTop: 10
  }
});
var MessageSystem = function MessageSystem(props) {
  var _message$text;
  var formatDate = props.formatDate,
    message = props.message,
    style = props.style;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    grey = _useTheme$theme$color.grey,
    grey_whisper = _useTheme$theme$color.grey_whisper,
    _useTheme$theme$messa = _useTheme$theme.messageList.messageSystem,
    container = _useTheme$theme$messa.container,
    dateText = _useTheme$theme$messa.dateText,
    line = _useTheme$theme$messa.line,
    text = _useTheme$theme$messa.text,
    textContainer = _useTheme$theme$messa.textContainer;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    tDateTimeParser = _useTranslationContex.tDateTimeParser;
  var createdAt = message.created_at;
  var parsedDate = tDateTimeParser(createdAt);
  var date = formatDate && createdAt ? formatDate(createdAt) : parsedDate && (0, _TranslationContext.isDayOrMoment)(parsedDate) ? parsedDate.calendar().toUpperCase() : parsedDate;
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, style, container],
    testID: "message-system",
    children: [(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.line, {
        backgroundColor: grey_whisper
      }, line]
    }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.textContainer, textContainer],
      children: [(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.text, {
          color: grey
        }, text],
        children: ((_message$text = message.text) == null ? void 0 : _message$text.toUpperCase()) || ''
      }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.text, {
          color: grey
        }, dateText],
        children: date.toString()
      })]
    }), (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.line, {
        backgroundColor: grey_whisper
      }, line]
    })]
  });
};
exports.MessageSystem = MessageSystem;
MessageSystem.displayName = 'MessageSystem{messageList{messageSystem}}';
//# sourceMappingURL=MessageSystem.js.map