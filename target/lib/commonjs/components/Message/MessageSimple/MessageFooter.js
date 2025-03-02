var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageFooter = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _MessageContext = require("../../../contexts/messageContext/MessageContext");
var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _icons = require("../../../icons");
var _utils = require("../../../utils/utils");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageFooter.tsx";
var OnlyVisibleToYouComponent = function OnlyVisibleToYouComponent(_ref) {
  var alignment = _ref.alignment;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    grey_dark = _useTheme$theme.colors.grey_dark,
    _useTheme$theme$messa = _useTheme$theme.messageSimple.content,
    deletedMetaText = _useTheme$theme$messa.deletedMetaText,
    eyeIcon = _useTheme$theme$messa.eyeIcon,
    metaText = _useTheme$theme$messa.metaText;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_icons.Eye, Object.assign({
      pathFill: grey_dark
    }, eyeIcon)), (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [{
        color: grey_dark,
        textAlign: alignment
      }, metaText, deletedMetaText],
      testID: "only-visible-to-you",
      children: t('Only visible to you')
    })]
  });
};
var MessageFooterWithContext = function MessageFooterWithContext(props) {
  var _message$user;
  var alignment = props.alignment,
    date = props.date,
    deletedMessagesVisibilityType = props.deletedMessagesVisibilityType,
    formattedDate = props.formattedDate,
    isDeleted = props.isDeleted,
    isEditedMessageOpen = props.isEditedMessageOpen,
    lastGroupMessage = props.lastGroupMessage,
    members = props.members,
    message = props.message,
    MessageEditedTimestamp = props.MessageEditedTimestamp,
    MessageStatus = props.MessageStatus,
    MessageTimestamp = props.MessageTimestamp,
    otherAttachments = props.otherAttachments,
    showMessageStatus = props.showMessageStatus;
  var _useTheme2 = (0, _ThemeContext.useTheme)(),
    _useTheme2$theme = _useTheme2.theme,
    grey = _useTheme2$theme.colors.grey,
    _useTheme2$theme$mess = _useTheme2$theme.messageSimple.content,
    editedLabel = _useTheme2$theme$mess.editedLabel,
    messageUser = _useTheme2$theme$mess.messageUser,
    metaContainer = _useTheme2$theme$mess.metaContainer,
    metaText = _useTheme2$theme$mess.metaText;
  var _useTranslationContex2 = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex2.t;
  if (isDeleted) {
    return (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.container, metaContainer],
      testID: "message-deleted",
      children: [deletedMessagesVisibilityType === 'sender' && (0, _jsxRuntime.jsx)(OnlyVisibleToYouComponent, {
        alignment: alignment
      }), (0, _jsxRuntime.jsx)(MessageTimestamp, {
        formattedDate: formattedDate,
        timestamp: date
      })]
    });
  }
  if (lastGroupMessage === false && message.status === _utils.MessageStatusTypes.RECEIVED) {
    return null;
  }
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.container, metaContainer],
      testID: "message-status-time",
      children: [otherAttachments.length && otherAttachments[0].actions ? (0, _jsxRuntime.jsx)(OnlyVisibleToYouComponent, {
        alignment: alignment
      }) : null, Object.keys(members).length > 2 && alignment === 'left' && (_message$user = message.user) != null && _message$user.name ? (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.text, {
          color: grey
        }, messageUser],
        children: message.user.name
      }) : null, showMessageStatus && (0, _jsxRuntime.jsx)(MessageStatus, {}), (0, _jsxRuntime.jsx)(MessageTimestamp, {
        formattedDate: formattedDate,
        timestamp: date
      }), (0, _utils.isEditedMessage)(message) && !isEditedMessageOpen && (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.dotText, {
            color: grey,
            textAlign: alignment
          }, metaText],
          children: "\u2981"
        }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.text, {
            color: grey,
            textAlign: alignment
          }, editedLabel],
          children: t('Edited')
        })]
      })]
    }), isEditedMessageOpen && (0, _jsxRuntime.jsx)(MessageEditedTimestamp, {
      message: message,
      MessageTimestamp: MessageTimestamp
    })]
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var _prevOtherAttachments, _prevOtherAttachments2, _nextOtherAttachments, _nextOtherAttachments2;
  var prevAlignment = prevProps.alignment,
    prevDate = prevProps.date,
    prevFormattedDate = prevProps.formattedDate,
    prevIsEditedMessageOpen = prevProps.isEditedMessageOpen,
    prevLastGroupMessage = prevProps.lastGroupMessage,
    prevMembers = prevProps.members,
    prevMessage = prevProps.message,
    prevOtherAttachments = prevProps.otherAttachments,
    prevShowMessageStatus = prevProps.showMessageStatus;
  var nextAlignment = nextProps.alignment,
    nextDate = nextProps.date,
    nextFormattedDate = nextProps.formattedDate,
    nextIsEditedMessageOpen = nextProps.isEditedMessageOpen,
    nextLastGroupMessage = nextProps.lastGroupMessage,
    nextMembers = nextProps.members,
    nextMessage = nextProps.message,
    nextOtherAttachments = nextProps.otherAttachments,
    nextShowMessageStatus = nextProps.showMessageStatus;
  var alignmentEqual = prevAlignment === nextAlignment;
  if (!alignmentEqual) return false;
  var isEditedMessageOpenEqual = prevIsEditedMessageOpen === nextIsEditedMessageOpen;
  if (!isEditedMessageOpenEqual) return false;
  var membersEqual = Object.keys(prevMembers).length === Object.keys(nextMembers).length;
  if (!membersEqual) return false;
  var lastGroupMessageEqual = prevLastGroupMessage === nextLastGroupMessage;
  if (!lastGroupMessageEqual) return false;
  var deletedMessagesVisibilityTypeEqual = prevProps.deletedMessagesVisibilityType === nextProps.deletedMessagesVisibilityType;
  if (!deletedMessagesVisibilityTypeEqual) return false;
  var isPrevMessageTypeDeleted = prevMessage.type === 'deleted';
  var isNextMessageTypeDeleted = nextMessage.type === 'deleted';
  var messageEqual = isPrevMessageTypeDeleted === isNextMessageTypeDeleted && prevMessage.reply_count === nextMessage.reply_count && prevMessage.status === nextMessage.status && prevMessage.type === nextMessage.type && prevMessage.text === nextMessage.text && prevMessage.pinned === nextMessage.pinned;
  if (!messageEqual) return false;
  var otherAttachmentsEqual = prevOtherAttachments.length === nextOtherAttachments.length && (prevOtherAttachments == null ? void 0 : (_prevOtherAttachments = prevOtherAttachments[0]) == null ? void 0 : (_prevOtherAttachments2 = _prevOtherAttachments.actions) == null ? void 0 : _prevOtherAttachments2.length) === (nextOtherAttachments == null ? void 0 : (_nextOtherAttachments = nextOtherAttachments[0]) == null ? void 0 : (_nextOtherAttachments2 = _nextOtherAttachments.actions) == null ? void 0 : _nextOtherAttachments2.length);
  if (!otherAttachmentsEqual) return false;
  var showMessageStatusEqual = prevShowMessageStatus === nextShowMessageStatus;
  if (!showMessageStatusEqual) return false;
  var dateEqual = prevDate === nextDate;
  if (!dateEqual) return false;
  var formattedDateEqual = prevFormattedDate === nextFormattedDate;
  if (!formattedDateEqual) return false;
  return true;
};
var MemoizedMessageFooter = _react["default"].memo(MessageFooterWithContext, areEqual);
var MessageFooter = function MessageFooter(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    alignment = _useMessageContext.alignment,
    isEditedMessageOpen = _useMessageContext.isEditedMessageOpen,
    lastGroupMessage = _useMessageContext.lastGroupMessage,
    members = _useMessageContext.members,
    message = _useMessageContext.message,
    otherAttachments = _useMessageContext.otherAttachments,
    showMessageStatus = _useMessageContext.showMessageStatus;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    deletedMessagesVisibilityType = _useMessagesContext.deletedMessagesVisibilityType,
    MessageEditedTimestamp = _useMessagesContext.MessageEditedTimestamp,
    MessageStatus = _useMessagesContext.MessageStatus,
    MessageTimestamp = _useMessagesContext.MessageTimestamp;
  return (0, _jsxRuntime.jsx)(MemoizedMessageFooter, Object.assign({
    alignment: alignment,
    deletedMessagesVisibilityType: deletedMessagesVisibilityType,
    isEditedMessageOpen: isEditedMessageOpen,
    lastGroupMessage: lastGroupMessage,
    members: members,
    message: message,
    MessageEditedTimestamp: MessageEditedTimestamp,
    MessageStatus: MessageStatus,
    MessageTimestamp: MessageTimestamp,
    otherAttachments: otherAttachments,
    showMessageStatus: showMessageStatus
  }, props));
};
exports.MessageFooter = MessageFooter;
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4
  },
  dotText: {
    paddingHorizontal: 4
  },
  text: {
    fontSize: 12
  }
});
//# sourceMappingURL=MessageFooter.js.map