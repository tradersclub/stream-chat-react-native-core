var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringifyMessage = exports.reduceMessagesToString = exports.queryUsersDebounced = exports.queryMembersDebounced = exports.makeImageCompatibleUrl = exports.isMentionTrigger = exports.isLocalUrl = exports.isEmojiTrigger = exports.isEditedMessage = exports.isCommandTrigger = exports.isBouncedMessage = exports.isBlockedMessage = exports.hasOnlyEmojis = exports.getUrlWithoutParams = exports.getIndicatorTypeForFileState = exports.getFileNameFromPath = exports.getDurationLabelFromDuration = exports.generateRandomId = exports.defaultEmojiSearchIndex = exports.ProgressIndicatorTypes = exports.MessageStatusTypes = exports.FileState = exports.ACITriggerSettings = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _emojiRegex = _interopRequireDefault(require("emoji-regex"));
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _emojiData = require("../emoji-data");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var FileState = Object.freeze({
  FINISHED: 'finished',
  NOT_SUPPORTED: 'not_supported',
  UPLOAD_FAILED: 'upload_failed',
  UPLOADED: 'uploaded',
  UPLOADING: 'uploading'
});
exports.FileState = FileState;
var ProgressIndicatorTypes = Object.freeze({
  IN_PROGRESS: 'in_progress',
  INACTIVE: 'inactive',
  NOT_SUPPORTED: 'not_supported',
  RETRY: 'retry'
});
exports.ProgressIndicatorTypes = ProgressIndicatorTypes;
var MessageStatusTypes = {
  FAILED: 'failed',
  RECEIVED: 'received',
  SENDING: 'sending'
};
exports.MessageStatusTypes = MessageStatusTypes;
var getIndicatorTypeForFileState = function getIndicatorTypeForFileState(fileState, enableOfflineSupport) {
  var _indicatorMap;
  var indicatorMap = (_indicatorMap = {}, (0, _defineProperty2["default"])(_indicatorMap, FileState.UPLOADING, enableOfflineSupport ? ProgressIndicatorTypes.INACTIVE : ProgressIndicatorTypes.IN_PROGRESS), (0, _defineProperty2["default"])(_indicatorMap, FileState.UPLOAD_FAILED, enableOfflineSupport ? ProgressIndicatorTypes.INACTIVE : ProgressIndicatorTypes.RETRY), (0, _defineProperty2["default"])(_indicatorMap, FileState.NOT_SUPPORTED, ProgressIndicatorTypes.NOT_SUPPORTED), (0, _defineProperty2["default"])(_indicatorMap, FileState.UPLOADED, ProgressIndicatorTypes.INACTIVE), (0, _defineProperty2["default"])(_indicatorMap, FileState.FINISHED, ProgressIndicatorTypes.INACTIVE), _indicatorMap);
  return indicatorMap[fileState];
};
exports.getIndicatorTypeForFileState = getIndicatorTypeForFileState;
var isBlockedMessage = function isBlockedMessage(message) {
  var pattern = /\bMessage was blocked by moderation policies\b/;
  return message.type === 'error' && message.text && pattern.test(message.text);
};
exports.isBlockedMessage = isBlockedMessage;
var isBouncedMessage = function isBouncedMessage(message) {
  return message.type === 'error' && message.moderation_details !== undefined;
};
exports.isBouncedMessage = isBouncedMessage;
var isEditedMessage = function isEditedMessage(message) {
  return !!message.message_text_updated_at;
};
exports.isEditedMessage = isEditedMessage;
var defaultAutoCompleteSuggestionsLimit = 10;
var defaultMentionAllAppUsersQuery = {
  filters: {},
  options: {},
  sort: {}
};
var isUserResponse = function isUserResponse(user) {
  return user !== undefined;
};
var getCommands = function getCommands(channel) {
  var _channel$getConfig;
  return ((_channel$getConfig = channel.getConfig()) == null ? void 0 : _channel$getConfig.commands) || [];
};
var getMembers = function getMembers(channel) {
  var members = channel.state.members;
  return Object.values(members).length ? Object.values(members).filter(function (member) {
    return member.user;
  }).map(function (member) {
    return member.user;
  }) : [];
};
var getWatchers = function getWatchers(channel) {
  var watchers = channel.state.watchers;
  return Object.values(watchers).length ? (0, _toConsumableArray2["default"])(Object.values(watchers)) : [];
};
var getMembersAndWatchers = function getMembersAndWatchers(channel) {
  var users = [].concat((0, _toConsumableArray2["default"])(getMembers(channel)), (0, _toConsumableArray2["default"])(getWatchers(channel)));
  return Object.values(users.reduce(function (acc, cur) {
    if (!acc[cur.id]) {
      acc[cur.id] = cur;
    }
    return acc;
  }, {}));
};
var queryMembers = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(channel, query, onReady) {
    var options,
      _options$limit,
      limit,
      response,
      _users,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
          _options$limit = options.limit, limit = _options$limit === void 0 ? defaultAutoCompleteSuggestionsLimit : _options$limit;
          if (!(typeof query === 'string')) {
            _context.next = 9;
            break;
          }
          _context.next = 5;
          return channel.queryMembers({
            name: {
              $autocomplete: query
            }
          }, {}, {
            limit: limit
          });
        case 5:
          response = _context.sent;
          _users = [];
          response.members.forEach(function (member) {
            return isUserResponse(member.user) && _users.push(member.user);
          });
          if (onReady && _users) {
            onReady(_users);
          }
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function queryMembers(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var queryMembersDebounced = (0, _debounce["default"])(queryMembers, 200, {
  leading: false,
  trailing: true
});
exports.queryMembersDebounced = queryMembersDebounced;
var queryUsers = function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(client, query, onReady) {
    var options,
      _options$limit2,
      limit,
      _options$mentionAllAp,
      mentionAllAppUsersQuery,
      filters,
      response,
      _users2,
      _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          options = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};
          if (!(typeof query === 'string')) {
            _context2.next = 11;
            break;
          }
          _options$limit2 = options.limit, limit = _options$limit2 === void 0 ? defaultAutoCompleteSuggestionsLimit : _options$limit2, _options$mentionAllAp = options.mentionAllAppUsersQuery, mentionAllAppUsersQuery = _options$mentionAllAp === void 0 ? defaultMentionAllAppUsersQuery : _options$mentionAllAp;
          filters = Object.assign({
            id: {
              $ne: client.userID
            }
          }, mentionAllAppUsersQuery == null ? void 0 : mentionAllAppUsersQuery.filters);
          if (query) {
            filters.$or = [{
              id: {
                $autocomplete: query
              }
            }, {
              name: {
                $autocomplete: query
              }
            }];
          }
          _context2.next = 7;
          return client.queryUsers(filters, Object.assign({
            id: 1
          }, mentionAllAppUsersQuery == null ? void 0 : mentionAllAppUsersQuery.sort), Object.assign({
            limit: limit
          }, mentionAllAppUsersQuery == null ? void 0 : mentionAllAppUsersQuery.options));
        case 7:
          response = _context2.sent;
          _users2 = [];
          response.users.forEach(function (user) {
            return isUserResponse(user) && _users2.push(user);
          });
          if (onReady && _users2) {
            onReady(_users2);
          }
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function queryUsers(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var queryUsersDebounced = (0, _debounce["default"])(queryUsers, 200, {
  leading: false,
  trailing: true
});
exports.queryUsersDebounced = queryUsersDebounced;
var isCommandTrigger = function isCommandTrigger(trigger) {
  return trigger === '/';
};
exports.isCommandTrigger = isCommandTrigger;
var isEmojiTrigger = function isEmojiTrigger(trigger) {
  return trigger === ':';
};
exports.isEmojiTrigger = isEmojiTrigger;
var isMentionTrigger = function isMentionTrigger(trigger) {
  return trigger === '@';
};
exports.isMentionTrigger = isMentionTrigger;
var defaultEmojiSearchIndex = {
  search: function search(query) {
    var results = [];
    var _loop = function _loop(emoji) {
      if (results.length >= 10) return {
        v: results
      };
      if (emoji.names.some(function (name) {
        return name.includes(query);
      })) {
        if (emoji.skins) {
          results.push(Object.assign({}, emoji, {
            name: "".concat(emoji.name, "-tone-1"),
            skins: undefined
          }));
          emoji.skins.forEach(function (tone, index) {
            return results.push(Object.assign({}, emoji, {
              name: "".concat(emoji.name, "-tone-").concat(index + 2),
              skins: undefined,
              unicode: tone
            }));
          });
        } else {
          results.push(emoji);
        }
      }
    };
    var _iterator = _createForOfIteratorHelper(_emojiData.compiledEmojis),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var emoji = _step.value;
        var _ret = _loop(emoji);
        if ((0, _typeof2["default"])(_ret) === "object") return _ret.v;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return results;
  }
};
exports.defaultEmojiSearchIndex = defaultEmojiSearchIndex;
var ACITriggerSettings = function ACITriggerSettings(_ref3) {
  var channel = _ref3.channel,
    client = _ref3.client,
    emojiSearchIndex = _ref3.emojiSearchIndex,
    onMentionSelectItem = _ref3.onMentionSelectItem;
  return {
    '/': {
      dataProvider: function dataProvider(query, text, onReady) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        if (text.indexOf('/') !== 0) return [];
        var _options$limit3 = options.limit,
          limit = _options$limit3 === void 0 ? defaultAutoCompleteSuggestionsLimit : _options$limit3;
        var selectedCommands = !query ? getCommands(channel) : getCommands(channel).filter(function (command) {
          var _command$name;
          return query && ((_command$name = command.name) == null ? void 0 : _command$name.indexOf(query)) !== -1;
        });
        selectedCommands.sort(function (a, b) {
          var _a$name, _b$name;
          var nameA = ((_a$name = a.name) == null ? void 0 : _a$name.toLowerCase()) || '';
          var nameB = ((_b$name = b.name) == null ? void 0 : _b$name.toLowerCase()) || '';
          if (query && nameA.indexOf(query) === 0) {
            nameA = "0".concat(nameA);
          }
          if (query && nameB.indexOf(query) === 0) {
            nameB = "0".concat(nameB);
          }
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        var result = selectedCommands.slice(0, limit);
        if (onReady) {
          onReady(result, query);
        }
        return result;
      },
      output: function output(entity) {
        return {
          caretPosition: 'next',
          key: "".concat(entity.name),
          text: "/".concat(entity.name)
        };
      },
      type: 'command'
    },
    ':': {
      dataProvider: function () {
        var _dataProvider = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(query, _, onReady) {
          var _yield$emojiSearchInd;
          var emojis;
          return _regenerator["default"].wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (query) {
                  _context3.next = 2;
                  break;
                }
                return _context3.abrupt("return", []);
              case 2:
                _context3.next = 4;
                return emojiSearchIndex == null ? void 0 : emojiSearchIndex.search(query);
              case 4:
                _context3.t0 = _yield$emojiSearchInd = _context3.sent;
                if (!(_context3.t0 != null)) {
                  _context3.next = 9;
                  break;
                }
                _context3.t1 = _yield$emojiSearchInd;
                _context3.next = 10;
                break;
              case 9:
                _context3.t1 = [];
              case 10:
                emojis = _context3.t1;
                if (onReady) {
                  onReady(emojis, query);
                }
                return _context3.abrupt("return", emojis);
              case 13:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        function dataProvider(_x7, _x8, _x9) {
          return _dataProvider.apply(this, arguments);
        }
        return dataProvider;
      }(),
      output: function output(entity) {
        return {
          caretPosition: 'next',
          key: entity.name,
          text: entity.unicode
        };
      },
      type: 'emoji'
    },
    '@': {
      callback: function callback(item) {
        onMentionSelectItem(item);
      },
      dataProvider: function dataProvider(query, _, onReady) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
          limit: defaultAutoCompleteSuggestionsLimit,
          mentionAllAppUsersEnabled: false,
          mentionAllAppUsersQuery: defaultMentionAllAppUsersQuery
        };
        if (options != null && options.mentionAllAppUsersEnabled) {
          return queryUsersDebounced(client, query, function (data) {
            if (onReady) {
              onReady(data, query);
            }
          }, {
            limit: options.limit,
            mentionAllAppUsersQuery: options.mentionAllAppUsersQuery
          });
        }
        if (!query || Object.values(channel.state.members).length < 100) {
          var _users3 = getMembersAndWatchers(channel);
          var matchingUsers = _users3.filter(function (user) {
            var _user$name;
            if (!query) return true;
            if (((_user$name = user.name) == null ? void 0 : _user$name.toLowerCase().indexOf(query.toLowerCase())) !== -1) {
              return true;
            }
            if (user.id.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
              return true;
            }
            return false;
          });
          var _data = matchingUsers.slice(0, options == null ? void 0 : options.limit);
          if (onReady) {
            onReady(_data, query);
          }
          return _data;
        }
        return queryMembersDebounced(channel, query, function (data) {
          if (onReady) {
            onReady(data, query);
          }
        }, {
          limit: options.limit
        });
      },
      output: function output(entity) {
        return {
          caretPosition: 'next',
          key: entity.id,
          text: "@".concat(entity.name || entity.id)
        };
      },
      type: 'mention'
    }
  };
};
exports.ACITriggerSettings = ACITriggerSettings;
var makeImageCompatibleUrl = function makeImageCompatibleUrl(url) {
  return (url.indexOf('//') === 0 ? "https:".concat(url) : url).trim();
};
exports.makeImageCompatibleUrl = makeImageCompatibleUrl;
var getUrlWithoutParams = function getUrlWithoutParams(url) {
  if (!url) return url;
  var indexOfQuestion = url.indexOf('?');
  if (indexOfQuestion === -1) return url;
  return url.substring(0, url.indexOf('?'));
};
exports.getUrlWithoutParams = getUrlWithoutParams;
var isLocalUrl = function isLocalUrl(url) {
  return url.indexOf('http') !== 0;
};
exports.isLocalUrl = isLocalUrl;
var generateRandomId = function generateRandomId() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return a ? ((Number(a) ^ Math.random() * 16) >> Number(a) / 4).toString(16) : "".concat(1e7, "-", 1e3, "-", 4e3, "-", 8e3, "-", 1e11).replace(/[018]/g, generateRandomId);
};
exports.generateRandomId = generateRandomId;
var hasOnlyEmojis = function hasOnlyEmojis(text) {
  try {
    var emojiOnlyString = (0, _toConsumableArray2["default"])(text.matchAll((0, _emojiRegex["default"])())).join('');
    var originalTextWithNoSpaces = text.replaceAll(/\s/g, '');
    return emojiOnlyString.length !== 0 && emojiOnlyString.length === originalTextWithNoSpaces.length;
  } catch (e) {
    return false;
  }
};
exports.hasOnlyEmojis = hasOnlyEmojis;
var stringifyMessage = function stringifyMessage(_ref4) {
  var deleted_at = _ref4.deleted_at,
    i18n = _ref4.i18n,
    latest_reactions = _ref4.latest_reactions,
    reaction_groups = _ref4.reaction_groups,
    readBy = _ref4.readBy,
    reply_count = _ref4.reply_count,
    status = _ref4.status,
    text = _ref4.text,
    type = _ref4.type,
    updated_at = _ref4.updated_at;
  return "".concat(latest_reactions ? latest_reactions.map(function (_ref5) {
    var type = _ref5.type,
      user = _ref5.user;
    return "".concat(type).concat(user == null ? void 0 : user.id);
  }).join() : '').concat(reaction_groups ? Object.entries(reaction_groups).flatMap(function (_ref6) {
    var _ref7 = (0, _slicedToArray2["default"])(_ref6, 2),
      type = _ref7[0],
      _ref7$ = _ref7[1],
      count = _ref7$.count,
      first_reaction_at = _ref7$.first_reaction_at,
      last_reaction_at = _ref7$.last_reaction_at;
    return "".concat(type).concat(count).concat(first_reaction_at).concat(last_reaction_at);
  }).join() : '').concat(type).concat(deleted_at).concat(text).concat(readBy).concat(reply_count).concat(status).concat(updated_at).concat(JSON.stringify(i18n));
};
exports.stringifyMessage = stringifyMessage;
var reduceMessagesToString = function reduceMessagesToString(messages) {
  return messages.map(stringifyMessage).join();
};
exports.reduceMessagesToString = reduceMessagesToString;
var getFileNameFromPath = function getFileNameFromPath(path) {
  var pattern = /[^/]+\.[^/]+$/;
  var match = path.match(pattern);
  return match ? match[0] : '';
};
exports.getFileNameFromPath = getFileNameFromPath;
var getDurationLabelFromDuration = function getDurationLabelFromDuration(duration) {
  var ONE_HOUR_IN_SECONDS = 3600;
  var ONE_HOUR_IN_MILLISECONDS = ONE_HOUR_IN_SECONDS * 1000;
  var durationLabel = '00:00';
  var isDurationLongerThanHour = duration / ONE_HOUR_IN_MILLISECONDS >= 1;
  var formattedDurationParam = isDurationLongerThanHour ? 'HH:mm:ss' : 'mm:ss';
  var formattedVideoDuration = _dayjs["default"].duration(duration, 'milliseconds').format(formattedDurationParam);
  durationLabel = formattedVideoDuration;
  return durationLabel;
};
exports.getDurationLabelFromDuration = getDurationLabelFromDuration;
//# sourceMappingURL=utils.js.map