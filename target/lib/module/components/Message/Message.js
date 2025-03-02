var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _useCreateMessageContext = require("./hooks/useCreateMessageContext");
var _useMessageActionHandlers = require("./hooks/useMessageActionHandlers");
var _useMessageActions2 = require("./hooks/useMessageActions");
var _useProcessReactions2 = require("./hooks/useProcessReactions");
var _messageActions = require("./utils/messageActions");
var _ChannelContext = require("../../contexts/channelContext/ChannelContext");
var _ChatContext = require("../../contexts/chatContext/ChatContext");
var _KeyboardContext = require("../../contexts/keyboardContext/KeyboardContext");
var _MessageContext = require("../../contexts/messageContext/MessageContext");
var _MessageOverlayContext = require("../../contexts/messageOverlayContext/MessageOverlayContext");
var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");
var _OverlayContext = require("../../contexts/overlayContext/OverlayContext");
var _OwnCapabilitiesContext = require("../../contexts/ownCapabilitiesContext/OwnCapabilitiesContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _ThreadContext = require("../../contexts/threadContext/ThreadContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _native = require("../../native");
var _types = require("../../types/types");
var _utils = require("../../utils/utils");
var _useMessageList = require("../MessageList/hooks/useMessageList");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/Message.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var MessageWithContext = function MessageWithContext(props) {
  var _message$user;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isBounceDialogOpen = _useState2[0],
    setIsBounceDialogOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isEditedMessageOpen = _useState4[0],
    setIsEditedMessageOpen = _useState4[1];
  var isMessageTypeDeleted = props.message.type === 'deleted';
  var channel = props.channel,
    chatContext = props.chatContext,
    deleteMessageFromContext = props.deleteMessage,
    deleteReaction = props.deleteReaction,
    dismissKeyboard = props.dismissKeyboard,
    dismissKeyboardOnMessageTouch = props.dismissKeyboardOnMessageTouch,
    _props$enableLongPres = props.enableLongPress,
    enableLongPress = _props$enableLongPres === void 0 ? true : _props$enableLongPres,
    enforceUniqueReaction = props.enforceUniqueReaction,
    _props$forceAlignMess = props.forceAlignMessages,
    forceAlignMessages = _props$forceAlignMess === void 0 ? false : _props$forceAlignMess,
    goToMessage = props.goToMessage,
    _props$groupStyles = props.groupStyles,
    groupStyles = _props$groupStyles === void 0 ? ['bottom'] : _props$groupStyles,
    handleBan = props.handleBan,
    handleBlock = props.handleBlock,
    handleCopy = props.handleCopy,
    handleDelete = props.handleDelete,
    handleEdit = props.handleEdit,
    handleFlag = props.handleFlag,
    handleMute = props.handleMute,
    handlePinMessage = props.handlePinMessage,
    handleQuotedReply = props.handleQuotedReply,
    handleReactionProp = props.handleReaction,
    handleRetry = props.handleRetry,
    handleThreadReply = props.handleThreadReply,
    isTargetedMessage = props.isTargetedMessage,
    lastReceivedId = props.lastReceivedId,
    members = props.members,
    message = props.message,
    _props$messageActions = props.messageActions,
    messageActionsProp = _props$messageActions === void 0 ? _messageActions.messageActions : _props$messageActions,
    MessageBounce = props.MessageBounce,
    messageContentOrderProp = props.messageContentOrder,
    messagesContext = props.messagesContext,
    MessageSimple = props.MessageSimple,
    onLongPressProp = props.onLongPress,
    onLongPressMessageProp = props.onLongPressMessage,
    onPressProp = props.onPress,
    onPressInProp = props.onPressIn,
    onPressInMessageProp = props.onPressInMessage,
    onPressMessageProp = props.onPressMessage,
    onThreadSelect = props.onThreadSelect,
    openThread = props.openThread,
    OverlayReactionList = props.OverlayReactionList,
    preventPress = props.preventPress,
    removeMessage = props.removeMessage,
    retrySendMessage = props.retrySendMessage,
    selectReaction = props.selectReaction,
    sendReaction = props.sendReaction,
    setData = props.setData,
    setEditingState = props.setEditingState,
    setOverlay = props.setOverlay,
    setQuotedMessageState = props.setQuotedMessageState,
    showAvatar = props.showAvatar,
    showMessageStatus = props.showMessageStatus,
    showUnreadUnderlay = props.showUnreadUnderlay,
    style = props.style,
    supportedReactions = props.supportedReactions,
    t = props.t,
    _props$threadList = props.threadList,
    threadList = _props$threadList === void 0 ? false : _props$threadList,
    updateMessage = props.updateMessage;
  var client = chatContext.client;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    bg_gradient_start = _useTheme$theme$color.bg_gradient_start,
    targetedMessageBackground = _useTheme$theme$color.targetedMessageBackground,
    _useTheme$theme$messa = _useTheme$theme.messageSimple,
    targetedMessageContainer = _useTheme$theme$messa.targetedMessageContainer,
    targetedMessageUnderlay = _useTheme$theme$messa.targetedMessageUnderlay;
  var actionsEnabled = message.type === 'regular' && message.status === _utils.MessageStatusTypes.RECEIVED;
  var isMyMessage = client && message && client.userID === ((_message$user = message.user) == null ? void 0 : _message$user.id);
  var handleAction = function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(name, value) {
      var data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!message.id) {
              _context.next = 5;
              break;
            }
            _context.next = 3;
            return channel == null ? void 0 : channel.sendAction(message.id, (0, _defineProperty2["default"])({}, name, value));
          case 3:
            data = _context.sent;
            if (data != null && data.message) {
              updateMessage(data.message);
            } else {
              removeMessage({
                id: message.id,
                parent_id: message.parent_id
              });
            }
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleAction(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var onPressQuotedMessage = function onPressQuotedMessage(quotedMessage) {
    if (!goToMessage) return;
    goToMessage(quotedMessage.id);
  };
  var errorOrFailed = message.type === 'error' || message.status === _utils.MessageStatusTypes.FAILED;
  var _onPress = function onPress() {
    var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : errorOrFailed;
    if (dismissKeyboardOnMessageTouch) {
      _reactNative.Keyboard.dismiss();
    }
    if ((0, _utils.isEditedMessage)(message)) {
      setIsEditedMessageOpen(function (prevState) {
        return !prevState;
      });
    }
    var quotedMessage = message.quoted_message;
    if (error) {
      if ((0, _utils.isBlockedMessage)(message)) {
        return;
      }
      if ((0, _utils.isBouncedMessage)(message)) {
        setIsBounceDialogOpen(true);
        return;
      }
      showMessageOverlay(true, true);
    } else if (quotedMessage) {
      onPressQuotedMessage(quotedMessage);
    }
  };
  var alignment = forceAlignMessages && (forceAlignMessages === 'left' || forceAlignMessages === 'right') ? forceAlignMessages : isMyMessage ? 'right' : 'left';
  var attachments = !isMessageTypeDeleted && Array.isArray(message.attachments) ? message.attachments.reduce(function (acc, cur) {
    if (cur.type === _types.FileTypes.File) {
      acc.files.push(cur);
      acc.other = [];
    } else if (cur.type === _types.FileTypes.Video && !cur.og_scrape_url && (0, _native.isVideoPackageAvailable)()) {
      acc.videos.push({
        image_url: cur.asset_url,
        thumb_url: cur.thumb_url,
        type: _types.FileTypes.Video
      });
      acc.other = [];
    } else if (cur.type === _types.FileTypes.Video && !cur.og_scrape_url) {
      acc.files.push(cur);
      acc.other = [];
    } else if (cur.type === _types.FileTypes.Audio || cur.type === _types.FileTypes.VoiceRecording) {
      acc.files.push(cur);
    } else if (cur.type === _types.FileTypes.Image && !cur.title_link && !cur.og_scrape_url) {
      if (cur.image_url || cur.thumb_url) {
        acc.images.push(cur);
        acc.other = [];
      }
    } else if (!acc.files.length && !acc.images.length && !acc.videos.length) {
      acc.other.push(cur);
    }
    return acc;
  }, {
    files: [],
    images: [],
    other: [],
    videos: []
  }) : {
    files: [],
    images: [],
    other: [],
    videos: []
  };
  var hasAttachmentActions = !isMessageTypeDeleted && Array.isArray(message.attachments) && message.attachments.some(function (attachment) {
    return attachment.actions && attachment.actions.length;
  });
  var messageContentOrder = messageContentOrderProp.filter(function (content) {
    if (content === 'quoted_reply') {
      return !!message.quoted_message;
    }
    switch (content) {
      case 'attachments':
        return !!attachments.other.length;
      case 'files':
        return !!attachments.files.length;
      case 'gallery':
        return !!attachments.images.length || !!attachments.videos.length;
      case 'text':
      default:
        return !!message.text;
    }
  });
  var emojiOnlyText = (0, _react.useMemo)(function () {
    if (!message.text) return false;
    return (0, _utils.hasOnlyEmojis)(message.text);
  }, [message.text]);
  var onlyEmojis = !attachments.files.length && !attachments.images.length && !attachments.other.length && emojiOnlyText;
  var onOpenThread = function onOpenThread() {
    if (onThreadSelect) {
      onThreadSelect(message);
    }
    if (openThread) {
      openThread(message);
    }
  };
  var _useProcessReactions = (0, _useProcessReactions2.useProcessReactions)({
      latest_reactions: message.latest_reactions,
      own_reactions: message.own_reactions,
      reaction_groups: message.reaction_groups
    }),
    existingReactions = _useProcessReactions.existingReactions,
    hasReactions = _useProcessReactions.hasReactions;
  var reactions = hasReactions ? existingReactions : [];
  var ownCapabilities = (0, _OwnCapabilitiesContext.useOwnCapabilitiesContext)();
  var _useMessageActionHand = (0, _useMessageActionHandlers.useMessageActionHandlers)({
      channel: channel,
      client: client,
      deleteMessage: deleteMessageFromContext,
      deleteReaction: deleteReaction,
      enforceUniqueReaction: enforceUniqueReaction,
      message: message,
      retrySendMessage: retrySendMessage,
      sendReaction: sendReaction,
      setEditingState: setEditingState,
      setQuotedMessageState: setQuotedMessageState,
      supportedReactions: supportedReactions
    }),
    handleCopyMessage = _useMessageActionHand.handleCopyMessage,
    handleDeleteMessage = _useMessageActionHand.handleDeleteMessage,
    handleEditMessage = _useMessageActionHand.handleEditMessage,
    handleFlagMessage = _useMessageActionHand.handleFlagMessage,
    handleQuotedReplyMessage = _useMessageActionHand.handleQuotedReplyMessage,
    handleResendMessage = _useMessageActionHand.handleResendMessage,
    handleToggleBanUser = _useMessageActionHand.handleToggleBanUser,
    handleToggleMuteUser = _useMessageActionHand.handleToggleMuteUser,
    handleTogglePinMessage = _useMessageActionHand.handleTogglePinMessage,
    handleToggleReaction = _useMessageActionHand.handleToggleReaction;
  var _useMessageActions = (0, _useMessageActions2.useMessageActions)({
      channel: channel,
      client: client,
      deleteMessage: deleteMessageFromContext,
      deleteReaction: deleteReaction,
      enforceUniqueReaction: enforceUniqueReaction,
      handleBan: handleBan,
      handleBlock: handleBlock,
      handleCopy: handleCopy,
      handleDelete: handleDelete,
      handleEdit: handleEdit,
      handleFlag: handleFlag,
      handleMute: handleMute,
      handlePinMessage: handlePinMessage,
      handleQuotedReply: handleQuotedReply,
      handleReaction: handleReactionProp,
      handleRetry: handleRetry,
      handleThreadReply: handleThreadReply,
      message: message,
      onThreadSelect: onThreadSelect,
      openThread: openThread,
      removeMessage: removeMessage,
      retrySendMessage: retrySendMessage,
      selectReaction: selectReaction,
      sendReaction: sendReaction,
      setEditingState: setEditingState,
      setOverlay: setOverlay,
      setQuotedMessageState: setQuotedMessageState,
      supportedReactions: supportedReactions,
      t: t,
      updateMessage: updateMessage
    }),
    banUser = _useMessageActions.banUser,
    blockUser = _useMessageActions.blockUser,
    copyMessage = _useMessageActions.copyMessage,
    deleteMessage = _useMessageActions.deleteMessage,
    editMessage = _useMessageActions.editMessage,
    flagMessage = _useMessageActions.flagMessage,
    handleReaction = _useMessageActions.handleReaction,
    muteUser = _useMessageActions.muteUser,
    pinMessage = _useMessageActions.pinMessage,
    quotedReply = _useMessageActions.quotedReply,
    retry = _useMessageActions.retry,
    threadReply = _useMessageActions.threadReply,
    unpinMessage = _useMessageActions.unpinMessage;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    userLanguage = _useTranslationContex.userLanguage;
  var showMessageOverlay = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
      var isMessageActionsVisible,
        error,
        isThreadMessage,
        dismissOverlay,
        messageActions,
        _args2 = arguments;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            isMessageActionsVisible = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : true;
            error = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : errorOrFailed;
            _context2.next = 4;
            return dismissKeyboard();
          case 4:
            isThreadMessage = threadList || !!message.parent_id;
            dismissOverlay = function dismissOverlay() {
              return setOverlay('none');
            };
            messageActions = typeof messageActionsProp !== 'function' ? messageActionsProp : messageActionsProp({
              banUser: banUser,
              blockUser: blockUser,
              copyMessage: copyMessage,
              deleteMessage: deleteMessage,
              dismissOverlay: dismissOverlay,
              editMessage: editMessage,
              error: error,
              flagMessage: flagMessage,
              isMessageActionsVisible: isMessageActionsVisible,
              isMyMessage: isMyMessage,
              isThreadMessage: isThreadMessage,
              message: message,
              messageReactions: isMessageActionsVisible === false,
              muteUser: muteUser,
              ownCapabilities: ownCapabilities,
              pinMessage: pinMessage,
              quotedReply: quotedReply,
              retry: retry,
              threadReply: threadReply,
              unpinMessage: unpinMessage
            });
            setData({
              alignment: alignment,
              chatContext: chatContext,
              clientId: client.userID,
              files: attachments.files,
              groupStyles: groupStyles,
              handleReaction: ownCapabilities.sendReaction ? handleReaction : undefined,
              images: attachments.images,
              message: message,
              messageActions: messageActions == null ? void 0 : messageActions.filter(Boolean),
              messageContext: Object.assign({}, messageContext, {
                preventPress: true
              }),
              messageReactionTitle: !error && !isMessageActionsVisible ? t('Message Reactions') : undefined,
              messagesContext: Object.assign({}, messagesContext, {
                messageContentOrder: messageContentOrder
              }),
              onlyEmojis: onlyEmojis,
              otherAttachments: attachments.other,
              OverlayReactionList: OverlayReactionList,
              ownCapabilities: ownCapabilities,
              supportedReactions: supportedReactions,
              threadList: threadList,
              userLanguage: userLanguage,
              videos: attachments.videos
            });
            setOverlay('message');
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function showMessageOverlay() {
      return _ref2.apply(this, arguments);
    };
  }();
  var actionHandlers = {
    copyMessage: handleCopyMessage,
    deleteMessage: handleDeleteMessage,
    editMessage: handleEditMessage,
    flagMessage: handleFlagMessage,
    pinMessage: handleTogglePinMessage,
    quotedReply: handleQuotedReplyMessage,
    resendMessage: handleResendMessage,
    showMessageOverlay: showMessageOverlay,
    threadReply: handleThreadReply,
    toggleBanUser: handleToggleBanUser,
    toggleMuteUser: handleToggleMuteUser,
    toggleReaction: handleToggleReaction,
    unpinMessage: handleTogglePinMessage
  };
  var onLongPressMessage = hasAttachmentActions || (0, _utils.isBlockedMessage)(message) ? function () {
    return null;
  } : onLongPressMessageProp ? function (payload) {
    return onLongPressMessageProp({
      actionHandlers: actionHandlers,
      defaultHandler: (payload == null ? void 0 : payload.defaultHandler) || showMessageOverlay,
      emitter: (payload == null ? void 0 : payload.emitter) || 'message',
      event: payload == null ? void 0 : payload.event,
      message: message
    });
  } : onLongPressProp ? function (payload) {
    return onLongPressProp({
      actionHandlers: actionHandlers,
      defaultHandler: (payload == null ? void 0 : payload.defaultHandler) || showMessageOverlay,
      emitter: (payload == null ? void 0 : payload.emitter) || 'message',
      event: payload == null ? void 0 : payload.event
    });
  } : enableLongPress ? function () {
    if ((0, _utils.isBouncedMessage)(message)) {
      setIsBounceDialogOpen(true);
      return;
    }
    (0, _native.triggerHaptic)('impactMedium');
    showMessageOverlay(true);
  } : function () {
    return null;
  };
  var messageContext = (0, _useCreateMessageContext.useCreateMessageContext)({
    actionsEnabled: actionsEnabled,
    alignment: alignment,
    channel: channel,
    files: attachments.files,
    goToMessage: goToMessage,
    groupStyles: groupStyles,
    handleAction: handleAction,
    handleCopyMessage: handleCopyMessage,
    handleDeleteMessage: handleDeleteMessage,
    handleEditMessage: handleEditMessage,
    handleFlagMessage: handleFlagMessage,
    handleQuotedReplyMessage: handleQuotedReplyMessage,
    handleResendMessage: handleResendMessage,
    handleToggleBanUser: handleToggleBanUser,
    handleToggleMuteUser: handleToggleMuteUser,
    handleToggleReaction: handleToggleReaction,
    hasReactions: hasReactions,
    images: attachments.images,
    isEditedMessageOpen: isEditedMessageOpen,
    isMyMessage: isMyMessage,
    lastGroupMessage: (groupStyles == null ? void 0 : groupStyles[0]) === 'single' || (groupStyles == null ? void 0 : groupStyles[0]) === 'bottom',
    lastReceivedId: lastReceivedId,
    members: members,
    message: message,
    messageContentOrder: messageContentOrder,
    myMessageTheme: messagesContext.myMessageTheme,
    onLongPress: onLongPressMessage,
    onlyEmojis: onlyEmojis,
    onOpenThread: onOpenThread,
    onPress: function onPress(payload) {
      var onPressArgs = {
        actionHandlers: actionHandlers,
        additionalInfo: payload.additionalInfo,
        defaultHandler: payload.defaultHandler || _onPress,
        emitter: payload.emitter || 'message',
        event: payload.event,
        message: message
      };
      var handleOnPress = function handleOnPress() {
        if (onPressProp) return onPressProp(onPressArgs);
        if (onPressMessageProp) return onPressMessageProp(onPressArgs);
        if (payload.defaultHandler) return payload.defaultHandler();
        return _onPress();
      };
      handleOnPress();
    },
    onPressIn: onPressInProp || onPressInMessageProp ? function (payload) {
      var onPressInArgs = {
        actionHandlers: actionHandlers,
        defaultHandler: payload.defaultHandler,
        emitter: payload.emitter || 'message',
        event: payload.event,
        message: message
      };
      var handleOnpressIn = function handleOnpressIn() {
        if (onPressInProp) return onPressInProp(onPressInArgs);
        if (onPressInMessageProp) return onPressInMessageProp(onPressInArgs);
      };
      handleOnpressIn();
    } : null,
    otherAttachments: attachments.other,
    preventPress: preventPress,
    reactions: reactions,
    setIsEditedMessageOpen: setIsEditedMessageOpen,
    showAvatar: showAvatar,
    showMessageOverlay: showMessageOverlay,
    showMessageStatus: typeof showMessageStatus === 'boolean' ? showMessageStatus : isMyMessage,
    threadList: threadList,
    videos: attachments.videos
  });
  if (!(isMessageTypeDeleted || messageContentOrder.length)) return null;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [message.pinned && Object.assign({}, targetedMessageContainer, {
      backgroundColor: targetedMessageBackground
    })],
    testID: "message-wrapper",
    children: (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [style, {
        backgroundColor: showUnreadUnderlay ? bg_gradient_start : undefined
      }],
      children: (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [isTargetedMessage ? Object.assign({
          backgroundColor: targetedMessageBackground
        }, targetedMessageUnderlay) : {}],
        children: (0, _jsxRuntime.jsxs)(_MessageContext.MessageProvider, {
          value: messageContext,
          children: [(0, _jsxRuntime.jsx)(MessageSimple, {}), isBounceDialogOpen && (0, _jsxRuntime.jsx)(MessageBounce, {
            setIsBounceDialogOpen: setIsBounceDialogOpen
          })]
        })
      })
    })
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var _prevMessage$quoted_m, _nextMessage$quoted_m, _prevMessage$quoted_m2, _nextMessage$quoted_m2, _prevMessage$user, _nextMessage$user;
  var prevMutedUsers = prevProps.chatContext.mutedUsers,
    prevGoToMessage = prevProps.goToMessage,
    prevGroupStyles = prevProps.groupStyles,
    isAttachmentEqual = prevProps.isAttachmentEqual,
    prevIsTargetedMessage = prevProps.isTargetedMessage,
    prevLastReceivedId = prevProps.lastReceivedId,
    prevMembers = prevProps.members,
    prevMessage = prevProps.message,
    prevMessagesContext = prevProps.messagesContext,
    prevShowUnreadUnderlay = prevProps.showUnreadUnderlay,
    prevT = prevProps.t;
  var nextMutedUsers = nextProps.chatContext.mutedUsers,
    nextGoToMessage = nextProps.goToMessage,
    nextGroupStyles = nextProps.groupStyles,
    nextIsTargetedMessage = nextProps.isTargetedMessage,
    nextLastReceivedId = nextProps.lastReceivedId,
    nextMembers = nextProps.members,
    nextMessage = nextProps.message,
    nextMessagesContext = nextProps.messagesContext,
    nextShowUnreadUnderlay = nextProps.showUnreadUnderlay,
    nextT = nextProps.t;
  var membersEqual = Object.keys(prevMembers).length === Object.keys(nextMembers).length;
  if (!membersEqual) return false;
  var repliesEqual = prevMessage.reply_count === nextMessage.reply_count;
  if (!repliesEqual) return false;
  var lastReceivedIdChangedAndMatters = prevLastReceivedId !== nextLastReceivedId && (prevLastReceivedId === prevMessage.id || prevLastReceivedId === nextMessage.id || nextLastReceivedId === prevMessage.id || nextLastReceivedId === nextMessage.id);
  if (lastReceivedIdChangedAndMatters) return false;
  var goToMessageChangedAndMatters = nextMessage.quoted_message_id && prevGoToMessage !== nextGoToMessage;
  if (goToMessageChangedAndMatters) return false;
  var groupStylesEqual = prevGroupStyles.length === nextGroupStyles.length && prevGroupStyles[0] === nextGroupStyles[0];
  if (!groupStylesEqual) return false;
  var isPrevMessageTypeDeleted = prevMessage.type === 'deleted';
  var isNextMessageTypeDeleted = nextMessage.type === 'deleted';
  var messageEqual = isPrevMessageTypeDeleted === isNextMessageTypeDeleted && ((0, _useMessageList.isMessageWithStylesReadByAndDateSeparator)(prevMessage) && prevMessage.readBy) === ((0, _useMessageList.isMessageWithStylesReadByAndDateSeparator)(nextMessage) && nextMessage.readBy) && prevMessage.status === nextMessage.status && prevMessage.type === nextMessage.type && prevMessage.text === nextMessage.text && prevMessage.pinned === nextMessage.pinned && "".concat(prevMessage == null ? void 0 : prevMessage.updated_at) === "".concat(nextMessage == null ? void 0 : nextMessage.updated_at) && prevMessage.i18n === nextMessage.i18n;
  if (!messageEqual) return false;
  var isPrevQuotedMessageTypeDeleted = ((_prevMessage$quoted_m = prevMessage.quoted_message) == null ? void 0 : _prevMessage$quoted_m.type) === 'deleted';
  var isNextQuotedMessageTypeDeleted = ((_nextMessage$quoted_m = nextMessage.quoted_message) == null ? void 0 : _nextMessage$quoted_m.type) === 'deleted';
  var quotedMessageEqual = ((_prevMessage$quoted_m2 = prevMessage.quoted_message) == null ? void 0 : _prevMessage$quoted_m2.id) === ((_nextMessage$quoted_m2 = nextMessage.quoted_message) == null ? void 0 : _nextMessage$quoted_m2.id) && isPrevQuotedMessageTypeDeleted === isNextQuotedMessageTypeDeleted;
  if (!quotedMessageEqual) return false;
  var messageUserBannedEqual = ((_prevMessage$user = prevMessage.user) == null ? void 0 : _prevMessage$user.banned) === ((_nextMessage$user = nextMessage.user) == null ? void 0 : _nextMessage$user.banned);
  if (!messageUserBannedEqual) return false;
  var prevMessageAttachments = prevMessage.attachments;
  var nextMessageAttachments = nextMessage.attachments;
  var attachmentsEqual = Array.isArray(prevMessageAttachments) && Array.isArray(nextMessageAttachments) && prevMessageAttachments.length === nextMessageAttachments.length && prevMessageAttachments.every(function (attachment, index) {
    var attachmentKeysEqual = attachment.type === _types.FileTypes.Image ? attachment.image_url === nextMessageAttachments[index].image_url && attachment.thumb_url === nextMessageAttachments[index].thumb_url : attachment.type === nextMessageAttachments[index].type;
    if (isAttachmentEqual) return attachmentKeysEqual && !!isAttachmentEqual(attachment, nextMessageAttachments[index]);
    return attachmentKeysEqual;
  }) || prevMessageAttachments === nextMessageAttachments;
  if (!attachmentsEqual) return false;
  var latestReactionsEqual = Array.isArray(prevMessage.latest_reactions) && Array.isArray(nextMessage.latest_reactions) ? prevMessage.latest_reactions.length === nextMessage.latest_reactions.length && prevMessage.latest_reactions.every(function (_ref3, index) {
    var _nextMessage$latest_r;
    var type = _ref3.type;
    return type === ((_nextMessage$latest_r = nextMessage.latest_reactions) == null ? void 0 : _nextMessage$latest_r[index].type);
  }) : prevMessage.latest_reactions === nextMessage.latest_reactions;
  if (!latestReactionsEqual) return false;
  var mutedUserSame = prevMutedUsers.length === nextMutedUsers.length || prevMutedUsers.some(function (mutedUser) {
    var _prevMessage$user2;
    return mutedUser.target.id === ((_prevMessage$user2 = prevMessage.user) == null ? void 0 : _prevMessage$user2.id);
  }) === nextMutedUsers.some(function (mutedUser) {
    var _nextMessage$user2;
    return mutedUser.target.id === ((_nextMessage$user2 = nextMessage.user) == null ? void 0 : _nextMessage$user2.id);
  });
  if (!mutedUserSame) return false;
  var showUnreadUnderlayEqual = prevShowUnreadUnderlay === nextShowUnreadUnderlay;
  if (!showUnreadUnderlayEqual) return false;
  var tEqual = prevT === nextT;
  if (!tEqual) return false;
  var targetedMessageEqual = prevIsTargetedMessage === nextIsTargetedMessage;
  if (!targetedMessageEqual) return false;
  var prevMyMessageTheme = JSON.stringify(prevMessagesContext == null ? void 0 : prevMessagesContext.myMessageTheme);
  var nextMyMessageTheme = JSON.stringify(nextMessagesContext == null ? void 0 : nextMessagesContext.myMessageTheme);
  var messageThemeEqual = prevMyMessageTheme === nextMyMessageTheme;
  if (!messageThemeEqual) return false;
  return true;
};
var MemoizedMessage = _react["default"].memo(MessageWithContext, areEqual);
var Message = function Message(props) {
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
    channel = _useChannelContext.channel,
    enforceUniqueReaction = _useChannelContext.enforceUniqueReaction,
    members = _useChannelContext.members;
  var chatContext = (0, _ChatContext.useChatContext)();
  var _useKeyboardContext = (0, _KeyboardContext.useKeyboardContext)(),
    dismissKeyboard = _useKeyboardContext.dismissKeyboard;
  var _useMessageOverlayCon = (0, _MessageOverlayContext.useMessageOverlayContext)(),
    setData = _useMessageOverlayCon.setData;
  var messagesContext = (0, _MessagesContext.useMessagesContext)();
  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
    setOverlay = _useOverlayContext.setOverlay;
  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
    openThread = _useThreadContext.openThread;
  var _useTranslationContex2 = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex2.t;
  return (0, _jsxRuntime.jsx)(MemoizedMessage, Object.assign({}, messagesContext, {
    channel: channel,
    chatContext: chatContext,
    dismissKeyboard: dismissKeyboard,
    enforceUniqueReaction: enforceUniqueReaction,
    members: members,
    messagesContext: messagesContext,
    openThread: openThread,
    setData: setData,
    setOverlay: setOverlay,
    t: t
  }, props));
};
exports.Message = Message;
//# sourceMappingURL=Message.js.map