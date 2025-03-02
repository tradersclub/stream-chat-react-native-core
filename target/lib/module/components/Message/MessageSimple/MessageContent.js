var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageContent = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _MessageTextContainer = require("./MessageTextContainer");
var _MessageContext = require("../../../contexts/messageContext/MessageContext");
var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _useViewport2 = require("../../../hooks/useViewport");
var _utils = require("../../../utils/utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["borderBottomLeftRadius", "borderBottomRightRadius", "borderRadius", "borderRadiusL", "borderRadiusS", "borderTopLeftRadius", "borderTopRightRadius"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageContent.tsx";
var styles = _reactNative.StyleSheet.create({
  containerInner: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderWidth: 1,
    overflow: 'hidden'
  },
  leftAlignContent: {
    justifyContent: 'flex-start'
  },
  leftAlignItems: {
    alignItems: 'flex-start'
  },
  replyBorder: {
    borderLeftWidth: 1,
    bottom: 0,
    position: 'absolute'
  },
  replyContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingTop: 8
  },
  rightAlignContent: {
    justifyContent: 'flex-end'
  },
  rightAlignItems: {
    alignItems: 'flex-end'
  }
});
var MessageContentWithContext = function MessageContentWithContext(props) {
  var _groupStyles$;
  var additionalTouchableProps = props.additionalTouchableProps,
    alignment = props.alignment,
    Attachment = props.Attachment,
    FileAttachmentGroup = props.FileAttachmentGroup,
    Gallery = props.Gallery,
    groupStyles = props.groupStyles,
    hasReactions = props.hasReactions,
    isMyMessage = props.isMyMessage,
    lastGroupMessage = props.lastGroupMessage,
    members = props.members,
    message = props.message,
    messageContentOrder = props.messageContentOrder,
    MessageDeleted = props.MessageDeleted,
    MessageError = props.MessageError,
    MessageFooter = props.MessageFooter,
    MessageHeader = props.MessageHeader,
    MessagePinnedHeader = props.MessagePinnedHeader,
    MessageReplies = props.MessageReplies,
    MessageStatus = props.MessageStatus,
    _onLongPress = props.onLongPress,
    onlyEmojis = props.onlyEmojis,
    _onPress = props.onPress,
    _onPressIn = props.onPressIn,
    otherAttachments = props.otherAttachments,
    preventPress = props.preventPress,
    Reply = props.Reply,
    setMessageContentWidth = props.setMessageContentWidth,
    showMessageStatus = props.showMessageStatus,
    threadList = props.threadList;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    blue_alice = _useTheme$theme$color.blue_alice,
    grey_gainsboro = _useTheme$theme$color.grey_gainsboro,
    grey_whisper = _useTheme$theme$color.grey_whisper,
    transparent = _useTheme$theme$color.transparent,
    white = _useTheme$theme$color.white,
    _useTheme$theme$messa = _useTheme$theme.messageSimple,
    _useTheme$theme$messa2 = _useTheme$theme$messa.content,
    _useTheme$theme$messa3 = _useTheme$theme$messa2.container,
    borderBottomLeftRadius = _useTheme$theme$messa3.borderBottomLeftRadius,
    borderBottomRightRadius = _useTheme$theme$messa3.borderBottomRightRadius,
    borderRadius = _useTheme$theme$messa3.borderRadius,
    borderRadiusL = _useTheme$theme$messa3.borderRadiusL,
    borderRadiusS = _useTheme$theme$messa3.borderRadiusS,
    borderTopLeftRadius = _useTheme$theme$messa3.borderTopLeftRadius,
    borderTopRightRadius = _useTheme$theme$messa3.borderTopRightRadius,
    container = (0, _objectWithoutProperties2["default"])(_useTheme$theme$messa3, _excluded),
    containerInner = _useTheme$theme$messa2.containerInner,
    errorContainer = _useTheme$theme$messa2.errorContainer,
    receiverMessageBackgroundColor = _useTheme$theme$messa2.receiverMessageBackgroundColor,
    replyBorder = _useTheme$theme$messa2.replyBorder,
    replyContainer = _useTheme$theme$messa2.replyContainer,
    senderMessageBackgroundColor = _useTheme$theme$messa2.senderMessageBackgroundColor,
    wrapper = _useTheme$theme$messa2.wrapper,
    _useTheme$theme$messa4 = _useTheme$theme$messa.reactionList,
    radius = _useTheme$theme$messa4.radius,
    reactionSize = _useTheme$theme$messa4.reactionSize;
  var _useViewport = (0, _useViewport2.useViewport)(),
    vw = _useViewport.vw;
  var onLayout = function onLayout(_ref) {
    var width = _ref.nativeEvent.layout.width;
    setMessageContentWidth(width);
  };
  var error = message.type === 'error' || message.status === _utils.MessageStatusTypes.FAILED;
  var groupStyle = "".concat(alignment, "_").concat(groupStyles == null ? void 0 : (_groupStyles$ = groupStyles[0]) == null ? void 0 : _groupStyles$.toLowerCase == null ? void 0 : _groupStyles$.toLowerCase());
  var hasThreadReplies = !!(message != null && message.reply_count);
  var noBorder = onlyEmojis && !message.quoted_message;
  if (otherAttachments.length) {
    if (otherAttachments[0].type === 'giphy' && !isMyMessage) {
      noBorder = false;
    } else {
      noBorder = true;
    }
  }
  var isMessageTypeDeleted = message.type === 'deleted';
  if (isMessageTypeDeleted) {
    return (0, _jsxRuntime.jsx)(MessageDeleted, {
      date: message.created_at,
      groupStyle: groupStyle,
      noBorder: noBorder,
      onLayout: onLayout
    });
  }
  var isMessageReceivedOrErrorType = !isMyMessage || error;
  var backgroundColor = senderMessageBackgroundColor || grey_gainsboro;
  if (onlyEmojis && !message.quoted_message) {
    backgroundColor = transparent;
  } else if (otherAttachments.length) {
    if (otherAttachments[0].type === 'giphy') {
      backgroundColor = message.quoted_message ? grey_gainsboro : transparent;
    } else {
      backgroundColor = blue_alice;
    }
  } else if (isMessageReceivedOrErrorType) {
    backgroundColor = receiverMessageBackgroundColor || white;
  }
  var repliesCurveColor = !isMessageReceivedOrErrorType ? backgroundColor : grey_gainsboro;
  var getBorderRadius = function getBorderRadius() {
    var groupPosition = groupStyles == null ? void 0 : groupStyles[0];
    var isBottomOrSingle = groupPosition === 'single' || groupPosition === 'bottom';
    var borderBottomLeftRadius = borderRadiusL;
    var borderBottomRightRadius = borderRadiusL;
    if (isBottomOrSingle && (!hasThreadReplies || threadList)) {
      if (isMyMessage) {
        borderBottomRightRadius = borderRadiusS;
      } else {
        borderBottomLeftRadius = borderRadiusS;
      }
    }
    return {
      borderBottomLeftRadius: borderBottomLeftRadius,
      borderBottomRightRadius: borderBottomRightRadius
    };
  };
  var getBorderRadiusFromTheme = function getBorderRadiusFromTheme() {
    var bordersFromTheme = {
      borderBottomLeftRadius: borderBottomLeftRadius,
      borderBottomRightRadius: borderBottomRightRadius,
      borderRadius: borderRadius,
      borderTopLeftRadius: borderTopLeftRadius,
      borderTopRightRadius: borderTopRightRadius
    };
    for (var key in bordersFromTheme) {
      if (bordersFromTheme[key] === undefined) {
        delete bordersFromTheme[key];
      }
    }
    return bordersFromTheme;
  };
  return (0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, Object.assign({
    activeOpacity: 0.7,
    disabled: preventPress,
    onLongPress: function onLongPress(event) {
      if (_onLongPress) {
        _onLongPress({
          emitter: 'messageContent',
          event: event
        });
      }
    },
    onPress: function onPress(event) {
      if (_onPress) {
        _onPress({
          emitter: 'messageContent',
          event: event
        });
      }
    },
    onPressIn: function onPressIn(event) {
      if (_onPressIn) {
        _onPressIn({
          emitter: 'messageContent',
          event: event
        });
      }
    },
    testID: "message-content"
  }, additionalTouchableProps, {
    style: [isMyMessage ? styles.rightAlignItems : styles.leftAlignItems, {
      paddingTop: hasReactions ? reactionSize / 2 + radius : 2
    }, error ? errorContainer : {}, container],
    children: [MessageHeader && (0, _jsxRuntime.jsx)(MessageHeader, {
      alignment: alignment,
      date: message.created_at,
      isDeleted: isMessageTypeDeleted,
      lastGroupMessage: lastGroupMessage,
      members: members,
      message: message,
      MessageStatus: MessageStatus,
      otherAttachments: otherAttachments,
      showMessageStatus: showMessageStatus
    }), message.pinned && (0, _jsxRuntime.jsx)(MessagePinnedHeader, {}), (0, _jsxRuntime.jsxs)(_reactNative.View, {
      onLayout: onLayout,
      style: wrapper,
      children: [hasThreadReplies && !threadList && !noBorder && (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.replyBorder, {
          borderColor: repliesCurveColor,
          height: borderRadiusL,
          left: alignment === 'left' ? 0 : undefined,
          right: alignment === 'right' ? 0 : undefined
        }, replyBorder]
      }), (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.containerInner, Object.assign({
          backgroundColor: backgroundColor,
          borderColor: isMessageReceivedOrErrorType ? grey_whisper : backgroundColor
        }, getBorderRadius(), getBorderRadiusFromTheme()), noBorder ? {
          borderWidth: 0
        } : {}, containerInner],
        testID: "message-content-wrapper",
        children: messageContentOrder.map(function (messageContentType, messageContentOrderIndex) {
          switch (messageContentType) {
            case 'quoted_reply':
              return message.quoted_message && (0, _jsxRuntime.jsx)(_reactNative.View, {
                style: [styles.replyContainer, replyContainer],
                children: (0, _jsxRuntime.jsx)(Reply, {
                  styles: {
                    messageContainer: {
                      maxWidth: vw(60)
                    }
                  }
                })
              }, "quoted_reply_".concat(messageContentOrderIndex));
            case 'attachments':
              return otherAttachments.map(function (attachment, attachmentIndex) {
                return (0, _jsxRuntime.jsx)(Attachment, {
                  attachment: attachment
                }, "".concat(message.id, "-").concat(attachmentIndex));
              });
            case 'files':
              return (0, _jsxRuntime.jsx)(FileAttachmentGroup, {
                messageId: message.id
              }, "file_attachment_group_".concat(messageContentOrderIndex));
            case 'gallery':
              return (0, _jsxRuntime.jsx)(Gallery, {}, "gallery_".concat(messageContentOrderIndex));
            case 'text':
            default:
              return otherAttachments.length && otherAttachments[0].actions ? null : (0, _jsxRuntime.jsx)(_MessageTextContainer.MessageTextContainer, {}, "message_text_container_".concat(messageContentOrderIndex));
          }
        })
      }), error && (0, _jsxRuntime.jsx)(MessageError, {})]
    }), (0, _jsxRuntime.jsx)(MessageReplies, {
      noBorder: noBorder,
      repliesCurveColor: repliesCurveColor
    }), (0, _jsxRuntime.jsx)(MessageFooter, {
      date: message.created_at,
      isDeleted: !!isMessageTypeDeleted
    })]
  }));
};
var areEqual = function areEqual(prevProps, nextProps) {
  var _prevOtherAttachments, _prevOtherAttachments2, _nextOtherAttachments, _nextOtherAttachments2, _prevMessage$quoted_m, _nextMessage$quoted_m, _prevMessage$quoted_m2, _nextMessage$quoted_m2;
  var prevGoToMessage = prevProps.goToMessage,
    prevGroupStyles = prevProps.groupStyles,
    prevHasReactions = prevProps.hasReactions,
    isAttachmentEqual = prevProps.isAttachmentEqual,
    prevIsEditedMessageOpen = prevProps.isEditedMessageOpen,
    prevLastGroupMessage = prevProps.lastGroupMessage,
    prevMembers = prevProps.members,
    prevMessage = prevProps.message,
    prevMessageContentOrder = prevProps.messageContentOrder,
    prevMyMessageTheme = prevProps.myMessageTheme,
    prevOnlyEmojis = prevProps.onlyEmojis,
    prevOtherAttachments = prevProps.otherAttachments,
    prevT = prevProps.t;
  var nextGoToMessage = nextProps.goToMessage,
    nextGroupStyles = nextProps.groupStyles,
    nextHasReactions = nextProps.hasReactions,
    nextIsEditedMessageOpen = nextProps.isEditedMessageOpen,
    nextLastGroupMessage = nextProps.lastGroupMessage,
    nextMembers = nextProps.members,
    nextMessage = nextProps.message,
    nextMessageContentOrder = nextProps.messageContentOrder,
    nextMyMessageTheme = nextProps.myMessageTheme,
    nextOnlyEmojis = nextProps.onlyEmojis,
    nextOtherAttachments = nextProps.otherAttachments,
    nextT = nextProps.t;
  var hasReactionsEqual = prevHasReactions === nextHasReactions;
  if (!hasReactionsEqual) return false;
  var lastGroupMessageEqual = prevLastGroupMessage === nextLastGroupMessage;
  if (!lastGroupMessageEqual) return false;
  var goToMessageChangedAndMatters = nextMessage.quoted_message_id && prevGoToMessage !== nextGoToMessage;
  if (goToMessageChangedAndMatters) return false;
  var isEditedMessageOpenEqual = prevIsEditedMessageOpen === nextIsEditedMessageOpen;
  if (!isEditedMessageOpenEqual) return false;
  var onlyEmojisEqual = prevOnlyEmojis === nextOnlyEmojis;
  if (!onlyEmojisEqual) return false;
  var otherAttachmentsEqual = prevOtherAttachments.length === nextOtherAttachments.length && (prevOtherAttachments == null ? void 0 : (_prevOtherAttachments = prevOtherAttachments[0]) == null ? void 0 : (_prevOtherAttachments2 = _prevOtherAttachments.actions) == null ? void 0 : _prevOtherAttachments2.length) === (nextOtherAttachments == null ? void 0 : (_nextOtherAttachments = nextOtherAttachments[0]) == null ? void 0 : (_nextOtherAttachments2 = _nextOtherAttachments.actions) == null ? void 0 : _nextOtherAttachments2.length);
  if (!otherAttachmentsEqual) return false;
  var membersEqual = Object.keys(prevMembers).length === Object.keys(nextMembers).length;
  if (!membersEqual) return false;
  var groupStylesEqual = prevGroupStyles.length === nextGroupStyles.length && (prevGroupStyles == null ? void 0 : prevGroupStyles[0]) === (nextGroupStyles == null ? void 0 : nextGroupStyles[0]);
  if (!groupStylesEqual) return false;
  var isPrevMessageTypeDeleted = prevMessage.type === 'deleted';
  var isNextMessageTypeDeleted = nextMessage.type === 'deleted';
  var messageEqual = isPrevMessageTypeDeleted === isNextMessageTypeDeleted && prevMessage.reply_count === nextMessage.reply_count && prevMessage.status === nextMessage.status && prevMessage.type === nextMessage.type && prevMessage.text === nextMessage.text && prevMessage.pinned === nextMessage.pinned && prevMessage.i18n === nextMessage.i18n;
  if (!messageEqual) return false;
  var isPrevQuotedMessageTypeDeleted = ((_prevMessage$quoted_m = prevMessage.quoted_message) == null ? void 0 : _prevMessage$quoted_m.type) === 'deleted';
  var isNextQuotedMessageTypeDeleted = ((_nextMessage$quoted_m = nextMessage.quoted_message) == null ? void 0 : _nextMessage$quoted_m.type) === 'deleted';
  var quotedMessageEqual = ((_prevMessage$quoted_m2 = prevMessage.quoted_message) == null ? void 0 : _prevMessage$quoted_m2.id) === ((_nextMessage$quoted_m2 = nextMessage.quoted_message) == null ? void 0 : _nextMessage$quoted_m2.id) && isPrevQuotedMessageTypeDeleted === isNextQuotedMessageTypeDeleted;
  if (!quotedMessageEqual) return false;
  var prevMessageAttachments = prevMessage.attachments;
  var nextMessageAttachments = nextMessage.attachments;
  var attachmentsEqual = Array.isArray(prevMessageAttachments) && Array.isArray(nextMessageAttachments) ? prevMessageAttachments.length === nextMessageAttachments.length && prevMessageAttachments.every(function (attachment, index) {
    var attachmentKeysEqual = attachment.image_url === nextMessageAttachments[index].image_url && attachment.og_scrape_url === nextMessageAttachments[index].og_scrape_url && attachment.thumb_url === nextMessageAttachments[index].thumb_url && attachment.type === nextMessageAttachments[index].type;
    if (isAttachmentEqual) return attachmentKeysEqual && !!isAttachmentEqual(attachment, nextMessageAttachments[index]);
    return attachmentKeysEqual;
  }) : prevMessageAttachments === nextMessageAttachments;
  if (!attachmentsEqual) return false;
  var latestReactionsEqual = Array.isArray(prevMessage.latest_reactions) && Array.isArray(nextMessage.latest_reactions) ? prevMessage.latest_reactions.length === nextMessage.latest_reactions.length && prevMessage.latest_reactions.every(function (_ref2, index) {
    var _nextMessage$latest_r;
    var type = _ref2.type;
    return type === ((_nextMessage$latest_r = nextMessage.latest_reactions) == null ? void 0 : _nextMessage$latest_r[index].type);
  }) : prevMessage.latest_reactions === nextMessage.latest_reactions;
  if (!latestReactionsEqual) return false;
  var messageContentOrderEqual = prevMessageContentOrder.length === nextMessageContentOrder.length && prevMessageContentOrder.every(function (messageContentType, index) {
    return messageContentType === nextMessageContentOrder[index];
  });
  if (!messageContentOrderEqual) return false;
  var tEqual = prevT === nextT;
  if (!tEqual) return false;
  var messageThemeEqual = JSON.stringify(prevMyMessageTheme) === JSON.stringify(nextMyMessageTheme);
  if (!messageThemeEqual) return false;
  return true;
};
var MemoizedMessageContent = _react["default"].memo(MessageContentWithContext, areEqual);
var MessageContent = function MessageContent(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    alignment = _useMessageContext.alignment,
    goToMessage = _useMessageContext.goToMessage,
    groupStyles = _useMessageContext.groupStyles,
    hasReactions = _useMessageContext.hasReactions,
    isEditedMessageOpen = _useMessageContext.isEditedMessageOpen,
    isMyMessage = _useMessageContext.isMyMessage,
    lastGroupMessage = _useMessageContext.lastGroupMessage,
    lastReceivedId = _useMessageContext.lastReceivedId,
    members = _useMessageContext.members,
    message = _useMessageContext.message,
    messageContentOrder = _useMessageContext.messageContentOrder,
    onLongPress = _useMessageContext.onLongPress,
    onlyEmojis = _useMessageContext.onlyEmojis,
    onPress = _useMessageContext.onPress,
    onPressIn = _useMessageContext.onPressIn,
    otherAttachments = _useMessageContext.otherAttachments,
    preventPress = _useMessageContext.preventPress,
    showMessageStatus = _useMessageContext.showMessageStatus,
    threadList = _useMessageContext.threadList;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    additionalTouchableProps = _useMessagesContext.additionalTouchableProps,
    Attachment = _useMessagesContext.Attachment,
    FileAttachmentGroup = _useMessagesContext.FileAttachmentGroup,
    Gallery = _useMessagesContext.Gallery,
    isAttachmentEqual = _useMessagesContext.isAttachmentEqual,
    MessageDeleted = _useMessagesContext.MessageDeleted,
    MessageError = _useMessagesContext.MessageError,
    MessageFooter = _useMessagesContext.MessageFooter,
    MessageHeader = _useMessagesContext.MessageHeader,
    MessagePinnedHeader = _useMessagesContext.MessagePinnedHeader,
    MessageReplies = _useMessagesContext.MessageReplies,
    MessageStatus = _useMessagesContext.MessageStatus,
    myMessageTheme = _useMessagesContext.myMessageTheme,
    Reply = _useMessagesContext.Reply;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  return (0, _jsxRuntime.jsx)(MemoizedMessageContent, Object.assign({
    additionalTouchableProps: additionalTouchableProps,
    alignment: alignment,
    Attachment: Attachment,
    FileAttachmentGroup: FileAttachmentGroup,
    Gallery: Gallery,
    goToMessage: goToMessage,
    groupStyles: groupStyles,
    hasReactions: hasReactions,
    isAttachmentEqual: isAttachmentEqual,
    isEditedMessageOpen: isEditedMessageOpen,
    isMyMessage: isMyMessage,
    lastGroupMessage: lastGroupMessage,
    lastReceivedId: lastReceivedId,
    members: members,
    message: message,
    messageContentOrder: messageContentOrder,
    MessageDeleted: MessageDeleted,
    MessageError: MessageError,
    MessageFooter: MessageFooter,
    MessageHeader: MessageHeader,
    MessagePinnedHeader: MessagePinnedHeader,
    MessageReplies: MessageReplies,
    MessageStatus: MessageStatus,
    myMessageTheme: myMessageTheme,
    onLongPress: onLongPress,
    onlyEmojis: onlyEmojis,
    onPress: onPress,
    onPressIn: onPressIn,
    otherAttachments: otherAttachments,
    preventPress: preventPress,
    Reply: Reply,
    showMessageStatus: showMessageStatus,
    t: t,
    threadList: threadList
  }, props));
};
exports.MessageContent = MessageContent;
MessageContent.displayName = 'MessageContent{messageSimple{content}}';
//# sourceMappingURL=MessageContent.js.map