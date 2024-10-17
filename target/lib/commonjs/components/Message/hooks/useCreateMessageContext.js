Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateMessageContext = void 0;
var _react = require("react");
var _useMessageList = require("../../MessageList/hooks/useMessageList");
var useCreateMessageContext = function useCreateMessageContext(_ref) {
  var _message$quoted_messa;
  var actionsEnabled = _ref.actionsEnabled,
    alignment = _ref.alignment,
    channel = _ref.channel,
    disabled = _ref.disabled,
    files = _ref.files,
    goToMessage = _ref.goToMessage,
    groupStyles = _ref.groupStyles,
    handleAction = _ref.handleAction,
    handleDeleteMessage = _ref.handleDeleteMessage,
    handleEditMessage = _ref.handleEditMessage,
    handleQuotedReplyMessage = _ref.handleQuotedReplyMessage,
    handleResendMessage = _ref.handleResendMessage,
    handleToggleBanUser = _ref.handleToggleBanUser,
    handleToggleMuteUser = _ref.handleToggleMuteUser,
    handleToggleReaction = _ref.handleToggleReaction,
    hasReactions = _ref.hasReactions,
    images = _ref.images,
    isMyMessage = _ref.isMyMessage,
    lastGroupMessage = _ref.lastGroupMessage,
    lastReceivedId = _ref.lastReceivedId,
    members = _ref.members,
    message = _ref.message,
    messageContentOrder = _ref.messageContentOrder,
    myMessageTheme = _ref.myMessageTheme,
    onLongPress = _ref.onLongPress,
    onlyEmojis = _ref.onlyEmojis,
    onOpenThread = _ref.onOpenThread,
    onPress = _ref.onPress,
    onPressIn = _ref.onPressIn,
    otherAttachments = _ref.otherAttachments,
    preventPress = _ref.preventPress,
    reactions = _ref.reactions,
    showAvatar = _ref.showAvatar,
    showMessageOverlay = _ref.showMessageOverlay,
    showMessageStatus = _ref.showMessageStatus,
    threadList = _ref.threadList,
    videos = _ref.videos;
  var groupStylesLength = groupStyles.length;
  var reactionsValue = reactions.map(function (_ref2) {
    var own = _ref2.own,
      type = _ref2.type;
    return "".concat(own).concat(type);
  }).join();
  var latestReactions = message.latest_reactions ? message.latest_reactions : undefined;
  var readBy = (0, _useMessageList.isMessageWithStylesReadByAndDateSeparator)(message) && message.readBy;
  var messageValue = "".concat(latestReactions ? latestReactions.map(function (_ref3) {
    var type = _ref3.type,
      user = _ref3.user;
    return "".concat(type).concat(user == null ? void 0 : user.id);
  }).join() : '').concat(message.updated_at).concat(message.deleted_at).concat(readBy).concat(message.status).concat(message.type).concat(message.text).concat(message.reply_count);
  var membersValue = JSON.stringify(members);
  var myMessageThemeString = (0, _react.useMemo)(function () {
    return JSON.stringify(myMessageTheme);
  }, [myMessageTheme]);
  var quotedMessageDeletedValue = (_message$quoted_messa = message.quoted_message) == null ? void 0 : _message$quoted_messa.deleted_at;
  var messageContext = (0, _react.useMemo)(function () {
    return {
      actionsEnabled: actionsEnabled,
      alignment: alignment,
      channel: channel,
      disabled: disabled,
      files: files,
      goToMessage: goToMessage,
      groupStyles: groupStyles,
      handleAction: handleAction,
      handleDeleteMessage: handleDeleteMessage,
      handleEditMessage: handleEditMessage,
      handleQuotedReplyMessage: handleQuotedReplyMessage,
      handleResendMessage: handleResendMessage,
      handleToggleBanUser: handleToggleBanUser,
      handleToggleMuteUser: handleToggleMuteUser,
      handleToggleReaction: handleToggleReaction,
      hasReactions: hasReactions,
      images: images,
      isMyMessage: isMyMessage,
      lastGroupMessage: lastGroupMessage,
      lastReceivedId: lastReceivedId,
      members: members,
      message: message,
      messageContentOrder: messageContentOrder,
      myMessageTheme: myMessageTheme,
      onLongPress: onLongPress,
      onlyEmojis: onlyEmojis,
      onOpenThread: onOpenThread,
      onPress: onPress,
      onPressIn: onPressIn,
      otherAttachments: otherAttachments,
      preventPress: preventPress,
      reactions: reactions,
      showAvatar: showAvatar,
      showMessageOverlay: showMessageOverlay,
      showMessageStatus: showMessageStatus,
      threadList: threadList,
      videos: videos
    };
  }, [actionsEnabled, quotedMessageDeletedValue, alignment, disabled, goToMessage, groupStylesLength, hasReactions, lastGroupMessage, lastReceivedId, membersValue, messageValue, myMessageThemeString, reactionsValue, showAvatar, showMessageStatus, threadList]);
  return messageContext;
};
exports.useCreateMessageContext = useCreateMessageContext;
//# sourceMappingURL=useCreateMessageContext.js.map