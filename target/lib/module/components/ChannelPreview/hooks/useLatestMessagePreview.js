var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLatestMessagePreview = exports.MessageReadStatus = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = require("react");
var _ChatContext = require("../../../contexts/chatContext/ChatContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _useTranslatedMessage = require("../../../hooks/useTranslatedMessage");
var _utils = require("../../../utils/utils");
var getMessageSenderName = function getMessageSenderName(message, currentUserId, t, membersLength) {
  var _message$user;
  if ((message == null ? void 0 : (_message$user = message.user) == null ? void 0 : _message$user.id) === currentUserId) {
    return t('You');
  }
  if (membersLength > 2) {
    var _message$user2, _message$user3, _message$user4;
    return (message == null ? void 0 : (_message$user2 = message.user) == null ? void 0 : _message$user2.name) || (message == null ? void 0 : (_message$user3 = message.user) == null ? void 0 : _message$user3.username) || (message == null ? void 0 : (_message$user4 = message.user) == null ? void 0 : _message$user4.id) || '';
  }
  return '';
};
var getMentionUsers = function getMentionUsers(mentionedUser) {
  if (Array.isArray(mentionedUser)) {
    var mentionUserString = mentionedUser.reduce(function (acc, cur) {
      var userName = cur.name || cur.id || '';
      if (userName) {
        acc += "".concat(acc.length ? '|' : '', "@").concat(userName);
      }
      return acc;
    }, '');
    return mentionUserString.replace(/[.*+?^${}()|[\]\\]/g, function (match) {
      return '\\' + match;
    });
  }
  return '';
};
var getLatestMessageDisplayText = function getLatestMessageDisplayText(channel, client, message, t) {
  var _message$attachments;
  if (!message) return [{
    bold: false,
    text: t('Nothing yet...')
  }];
  var isMessageTypeDeleted = message.type === 'deleted';
  if (isMessageTypeDeleted) return [{
    bold: false,
    text: t('Message deleted')
  }];
  var currentUserId = client == null ? void 0 : client.userID;
  var members = Object.keys(channel.state.members);
  var messageSender = getMessageSenderName(message, currentUserId, t, members.length);
  var messageSenderText = messageSender ? "".concat(messageSender === t('You') ? '' : '@').concat(messageSender, ": ") : '';
  var boldOwner = messageSenderText.includes('@');
  if (message.text) {
    var shortenedText = message.text.substring(0, 100).replace(/\n/g, ' ');
    var mentionedUsers = getMentionUsers(message.mentioned_users);
    var regEx = new RegExp("^(".concat(mentionedUsers, ")"));
    return [{
      bold: boldOwner,
      text: messageSenderText
    }].concat((0, _toConsumableArray2["default"])(shortenedText.split('').reduce(function (acc, cur, index) {
      if (cur === '@' && mentionedUsers && regEx.test(shortenedText.substring(index))) {
        acc.push({
          bold: true,
          text: cur
        });
      } else if (mentionedUsers && regEx.test(acc[acc.length - 1].text)) {
        acc.push({
          bold: false,
          text: cur
        });
      } else {
        acc[acc.length - 1].text += cur;
      }
      return acc;
    }, [{
      bold: false,
      text: ''
    }])));
  }
  if (message.command) {
    return [{
      bold: boldOwner,
      text: messageSenderText
    }, {
      bold: false,
      text: "/".concat(message.command)
    }];
  }
  if ((_message$attachments = message.attachments) != null && _message$attachments.length) {
    return [{
      bold: boldOwner,
      text: messageSenderText
    }, {
      bold: false,
      text: t('🏙 Attachment...')
    }];
  }
  return [{
    bold: boldOwner,
    text: messageSenderText
  }, {
    bold: false,
    text: t('Empty message...')
  }];
};
var MessageReadStatus = function (MessageReadStatus) {
  MessageReadStatus[MessageReadStatus["NOT_SENT_BY_CURRENT_USER"] = 0] = "NOT_SENT_BY_CURRENT_USER";
  MessageReadStatus[MessageReadStatus["UNREAD"] = 1] = "UNREAD";
  MessageReadStatus[MessageReadStatus["READ"] = 2] = "READ";
  return MessageReadStatus;
}({});
exports.MessageReadStatus = MessageReadStatus;
var getLatestMessageReadStatus = function getLatestMessageReadStatus(channel, client, message, readEvents) {
  var _message$user5;
  var currentUserId = client.userID;
  if (!message || currentUserId !== ((_message$user5 = message.user) == null ? void 0 : _message$user5.id) || readEvents === false) {
    return MessageReadStatus.NOT_SENT_BY_CURRENT_USER;
  }
  var readList = Object.assign({}, channel.state.read);
  if (currentUserId) {
    delete readList[currentUserId];
  }
  var messageUpdatedAt = message.updated_at ? typeof message.updated_at === 'string' ? new Date(message.updated_at) : message.updated_at : undefined;
  return Object.values(readList).some(function (_ref) {
    var last_read = _ref.last_read;
    return messageUpdatedAt && messageUpdatedAt < last_read;
  }) ? MessageReadStatus.READ : MessageReadStatus.UNREAD;
};
var getLatestMessagePreview = function getLatestMessagePreview(params) {
  var channel = params.channel,
    client = params.client,
    lastMessage = params.lastMessage,
    readEvents = params.readEvents,
    t = params.t;
  var messages = channel.state.messages;
  if (!messages.length && !lastMessage) {
    return {
      created_at: '',
      messageObject: undefined,
      previews: [{
        bold: false,
        text: t('Nothing yet...')
      }],
      status: MessageReadStatus.NOT_SENT_BY_CURRENT_USER
    };
  }
  var channelStateLastMessage = messages.length ? messages[messages.length - 1] : undefined;
  var message = lastMessage !== undefined ? lastMessage : channelStateLastMessage;
  return {
    created_at: message == null ? void 0 : message.created_at,
    messageObject: message,
    previews: getLatestMessageDisplayText(channel, client, message, t),
    status: getLatestMessageReadStatus(channel, client, message, readEvents)
  };
};
var useLatestMessagePreview = function useLatestMessagePreview(channel, forceUpdate, lastMessage) {
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var channelConfigExists = typeof (channel == null ? void 0 : channel.getConfig) === 'function';
  var translatedLastMessage = (0, _useTranslatedMessage.useTranslatedMessage)(lastMessage);
  var channelLastMessageString = translatedLastMessage ? (0, _utils.stringifyMessage)(translatedLastMessage) : '';
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    readEvents = _useState2[0],
    setReadEvents = _useState2[1];
  var _useState3 = (0, _react.useState)({
      created_at: '',
      messageObject: undefined,
      previews: [{
        bold: false,
        text: ''
      }],
      status: MessageReadStatus.NOT_SENT_BY_CURRENT_USER
    }),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    latestMessagePreview = _useState4[0],
    setLatestMessagePreview = _useState4[1];
  var readStatus = getLatestMessageReadStatus(channel, client, translatedLastMessage, readEvents);
  (0, _react.useEffect)(function () {
    if (channelConfigExists) {
      var _channel$getConfig;
      var read_events = (_channel$getConfig = channel.getConfig()) == null ? void 0 : _channel$getConfig.read_events;
      if (typeof read_events === 'boolean') {
        setReadEvents(read_events);
      }
    }
  }, [channelConfigExists]);
  (0, _react.useEffect)(function () {
    return setLatestMessagePreview(getLatestMessagePreview({
      channel: channel,
      client: client,
      lastMessage: translatedLastMessage,
      readEvents: readEvents,
      t: t
    }));
  }, [channelLastMessageString, forceUpdate, readEvents, readStatus]);
  return latestMessagePreview;
};
exports.useLatestMessagePreview = useLatestMessagePreview;
//# sourceMappingURL=useLatestMessagePreview.js.map