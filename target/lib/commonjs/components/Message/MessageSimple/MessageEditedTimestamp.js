var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageEditedTimestamp = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _MessageContext = require("../../../contexts/messageContext/MessageContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _utils = require("../../../utils/utils");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageEditedTimestamp.tsx";
var MessageEditedTimestamp = function MessageEditedTimestamp(props) {
  var propMessage = props.message,
    MessageTimestamp = props.MessageTimestamp;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    grey = _useTheme$theme.colors.grey,
    _useTheme$theme$messa = _useTheme$theme.messageSimple.content,
    editedLabel = _useTheme$theme$messa.editedLabel,
    editedTimestampContainer = _useTheme$theme$messa.editedTimestampContainer;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    contextMessage = _useMessageContext.message;
  var message = propMessage || contextMessage;
  if (!(0, _utils.isEditedMessage)(message)) {
    return null;
  }
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, editedTimestampContainer],
    children: [(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.text, {
        color: grey
      }, editedLabel],
      children: t('Edited') + ' '
    }), MessageTimestamp && (0, _jsxRuntime.jsx)(MessageTimestamp, {
      timestamp: message.message_text_updated_at,
      timestampTranslationKey: "timestamp/MessageEditedTimestamp"
    })]
  });
};
exports.MessageEditedTimestamp = MessageEditedTimestamp;
var styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  text: {
    fontSize: 12
  }
});
//# sourceMappingURL=MessageEditedTimestamp.js.map