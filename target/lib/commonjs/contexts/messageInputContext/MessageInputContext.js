var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMessageInputContext = exports.useMessageInputContext = exports.MessageInputProvider = exports.MessageInputContext = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _uniq = _interopRequireDefault(require("lodash/uniq"));
var _mimeTypes = require("mime-types");
var _streamChat = require("stream-chat");
var _useCreateMessageInputContext = require("./hooks/useCreateMessageInputContext");
var _useMessageDetailsForState = require("./hooks/useMessageDetailsForState");
var _parseLinks = require("../../components/Message/MessageSimple/utils/parseLinks");
var _useCooldown2 = require("../../components/MessageInput/hooks/useCooldown");
var _native = require("../../native");
var _compressImage = require("../../utils/compressImage");
var _removeReservedFields = require("../../utils/removeReservedFields");
var _utils = require("../../utils/utils");
var _AttachmentPickerContext = require("../attachmentPickerContext/AttachmentPickerContext");
var _ChannelContext = require("../channelContext/ChannelContext");
var _ChatContext = require("../chatContext/ChatContext");
var _MessagesContext = require("../messagesContext/MessagesContext");
var _OwnCapabilitiesContext = require("../ownCapabilitiesContext/OwnCapabilitiesContext");
var _ThreadContext = require("../threadContext/ThreadContext");
var _TranslationContext = require("../translationContext/TranslationContext");
var _defaultBaseContextValue = require("../utils/defaultBaseContextValue");
var _getDisplayName = require("../utils/getDisplayName");
var _isTestEnvironment = require("../utils/isTestEnvironment");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/messageInputContext/MessageInputContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var MessageInputContext = _react["default"].createContext(_defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE);
exports.MessageInputContext = MessageInputContext;
var MessageInputProvider = function MessageInputProvider(_ref) {
  var _getFileUploadConfig, _getFileUploadConfig2, _getImageUploadConfig, _getImageUploadConfig2;
  var children = _ref.children,
    value = _ref.value;
  var _useAttachmentPickerC = (0, _AttachmentPickerContext.useAttachmentPickerContext)(),
    closePicker = _useAttachmentPickerC.closePicker,
    openPicker = _useAttachmentPickerC.openPicker,
    selectedPicker = _useAttachmentPickerC.selectedPicker,
    setSelectedPicker = _useAttachmentPickerC.setSelectedPicker;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    appSettings = _useChatContext.appSettings,
    client = _useChatContext.client,
    enableOfflineSupport = _useChatContext.enableOfflineSupport;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    removeMessage = _useMessagesContext.removeMessage;
  var getFileUploadConfig = function getFileUploadConfig() {
    var _appSettings$app;
    var fileConfig = appSettings == null ? void 0 : (_appSettings$app = appSettings.app) == null ? void 0 : _appSettings$app.file_upload_config;
    if (fileConfig !== null || fileConfig !== undefined) {
      return fileConfig;
    } else {
      return {};
    }
  };
  var blockedFileExtensionTypes = (_getFileUploadConfig = getFileUploadConfig()) == null ? void 0 : _getFileUploadConfig.blocked_file_extensions;
  var blockedFileMimeTypes = (_getFileUploadConfig2 = getFileUploadConfig()) == null ? void 0 : _getFileUploadConfig2.blocked_mime_types;
  var getImageUploadConfig = function getImageUploadConfig() {
    var _appSettings$app2;
    var imageConfig = appSettings == null ? void 0 : (_appSettings$app2 = appSettings.app) == null ? void 0 : _appSettings$app2.image_upload_config;
    if (imageConfig !== null || imageConfig !== undefined) {
      return imageConfig;
    }
    return {};
  };
  var blockedImageExtensionTypes = (_getImageUploadConfig = getImageUploadConfig()) == null ? void 0 : _getImageUploadConfig.blocked_file_extensions;
  var blockedImageMimeTypes = (_getImageUploadConfig2 = getImageUploadConfig()) == null ? void 0 : _getImageUploadConfig2.blocked_mime_types;
  var channelCapabities = (0, _OwnCapabilitiesContext.useOwnCapabilitiesContext)();
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
    channel = _useChannelContext.channel,
    giphyEnabled = _useChannelContext.giphyEnabled,
    uploadAbortControllerRef = _useChannelContext.uploadAbortControllerRef;
  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
    thread = _useThreadContext.thread;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var inputBoxRef = (0, _react.useRef)(null);
  var sending = (0, _react.useRef)(false);
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    asyncIds = _useState2[0],
    setAsyncIds = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    asyncUploads = _useState4[0],
    setAsyncUploads = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    giphyActive = _useState6[0],
    setGiphyActive = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    sendThreadMessageInChannel = _useState8[0],
    setSendThreadMessageInChannel = _useState8[1];
  var editing = value.editing,
    hasFilePicker = value.hasFilePicker,
    hasImagePicker = value.hasImagePicker,
    initialValue = value.initialValue;
  var _useMessageDetailsFor = (0, _useMessageDetailsForState.useMessageDetailsForState)(editing, initialValue),
    fileUploads = _useMessageDetailsFor.fileUploads,
    imageUploads = _useMessageDetailsFor.imageUploads,
    mentionedUsers = _useMessageDetailsFor.mentionedUsers,
    numberOfUploads = _useMessageDetailsFor.numberOfUploads,
    setFileUploads = _useMessageDetailsFor.setFileUploads,
    setImageUploads = _useMessageDetailsFor.setImageUploads,
    setMentionedUsers = _useMessageDetailsFor.setMentionedUsers,
    setNumberOfUploads = _useMessageDetailsFor.setNumberOfUploads,
    setShowMoreOptions = _useMessageDetailsFor.setShowMoreOptions,
    setText = _useMessageDetailsFor.setText,
    showMoreOptions = _useMessageDetailsFor.showMoreOptions,
    text = _useMessageDetailsFor.text;
  var _useCooldown = (0, _useCooldown2.useCooldown)(),
    cooldownEndsAt = _useCooldown.endsAt,
    startCooldown = _useCooldown.start;
  var threadId = thread == null ? void 0 : thread.id;
  (0, _react.useEffect)(function () {
    setSendThreadMessageInChannel(false);
  }, [threadId]);
  var appendText = function appendText(newText) {
    setText(function (prevText) {
      return "".concat(prevText).concat(newText);
    });
  };
  var isValidMessage = function isValidMessage() {
    if (text && text.trim()) {
      return true;
    }
    var imagesAndFiles = [].concat((0, _toConsumableArray2["default"])(imageUploads), (0, _toConsumableArray2["default"])(fileUploads));
    if (imagesAndFiles.length === 0) return false;
    if (enableOfflineSupport) {
      var _iterator = _createForOfIteratorHelper(imagesAndFiles),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _file = _step.value;
          if (_file.state === _utils.FileState.NOT_SUPPORTED) {
            return false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return true;
    }
    var _iterator2 = _createForOfIteratorHelper(imagesAndFiles),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _file2 = _step2.value;
        if (!_file2 || _file2.state === _utils.FileState.UPLOAD_FAILED) {
          continue;
        }
        if (_file2.state === _utils.FileState.UPLOADING) {
          return false;
        }
        return true;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return false;
  };
  var onChange = function onChange(newText) {
    if (sending.current) {
      return;
    }
    setText(newText);
    if (newText && channel && channelCapabities.sendTypingEvents) {
      (0, _streamChat.logChatPromiseExecution)(channel.keystroke(thread == null ? void 0 : thread.id), 'start typing event');
    }
    if (value.onChangeText) {
      value.onChangeText(newText);
    }
  };
  var openCommandsPicker = function openCommandsPicker() {
    appendText('/');
    if (inputBoxRef.current) {
      inputBoxRef.current.focus();
    }
  };
  var openMentionsPicker = function openMentionsPicker() {
    appendText('@');
    if (inputBoxRef.current) {
      inputBoxRef.current.focus();
    }
  };
  var openAttachmentPicker = function openAttachmentPicker() {
    if (hasImagePicker) {
      _reactNative.Keyboard.dismiss();
      setSelectedPicker('images');
      openPicker();
    } else if (hasFilePicker) {
      pickFile();
    }
  };
  var closeAttachmentPicker = function closeAttachmentPicker() {
    setSelectedPicker(undefined);
    closePicker();
  };
  var toggleAttachmentPicker = function toggleAttachmentPicker() {
    if (selectedPicker) {
      closeAttachmentPicker();
    } else {
      openAttachmentPicker();
    }
  };
  var onSelectItem = function onSelectItem(item) {
    setMentionedUsers(function (prevMentionedUsers) {
      return [].concat((0, _toConsumableArray2["default"])(prevMentionedUsers), [item.id]);
    });
  };
  var pickFile = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var result, MEGA_BYTES_TO_BYTES, MAX_FILE_SIZE_TO_UPLOAD_IN_MB, totalFileSize;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(_native.pickDocument === null)) {
              _context.next = 3;
              break;
            }
            console.log('The file picker is not installed. Check our Getting Started documentation to install it.');
            return _context.abrupt("return");
          case 3:
            if (!(numberOfUploads >= value.maxNumberOfFiles)) {
              _context.next = 6;
              break;
            }
            _reactNative.Alert.alert('Maximum number of files reached');
            return _context.abrupt("return");
          case 6:
            _context.next = 8;
            return (0, _native.pickDocument)({
              maxNumberOfFiles: value.maxNumberOfFiles - numberOfUploads
            });
          case 8:
            result = _context.sent;
            MEGA_BYTES_TO_BYTES = 1024 * 1024;
            MAX_FILE_SIZE_TO_UPLOAD_IN_MB = 100;
            if (!result.cancelled && result.assets) {
              totalFileSize = result.assets.reduce(function (acc, asset) {
                return acc + Number(asset.size);
              }, 0);
              if (totalFileSize / MEGA_BYTES_TO_BYTES > MAX_FILE_SIZE_TO_UPLOAD_IN_MB) {
                _reactNative.Alert.alert(t("Maximum file size upload limit reached. Please upload a file below {{MAX_FILE_SIZE_TO_UPLOAD_IN_MB}} MB.", {
                  MAX_FILE_SIZE_TO_UPLOAD_IN_MB: MAX_FILE_SIZE_TO_UPLOAD_IN_MB
                }));
              } else {
                result.assets.forEach(function (asset) {
                  uploadNewFile(asset);
                });
              }
            }
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function pickFile() {
      return _ref2.apply(this, arguments);
    };
  }();
  var removeFile = function removeFile(id) {
    if (fileUploads.some(function (file) {
      return file.id === id;
    })) {
      setFileUploads(function (prevFileUploads) {
        return prevFileUploads.filter(function (file) {
          return file.id !== id;
        });
      });
      setNumberOfUploads(function (prevNumberOfUploads) {
        return prevNumberOfUploads - 1;
      });
    }
  };
  var removeImage = function removeImage(id) {
    if (imageUploads.some(function (image) {
      return image.id === id;
    })) {
      setImageUploads(function (prevImageUploads) {
        return prevImageUploads.filter(function (image) {
          return image.id !== id;
        });
      });
      setNumberOfUploads(function (prevNumberOfUploads) {
        return prevNumberOfUploads - 1;
      });
    }
  };
  var resetInput = function resetInput() {
    var pendingAttachments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    setFileUploads([]);
    setGiphyActive(false);
    setShowMoreOptions(true);
    setImageUploads([]);
    setMentionedUsers([]);
    setNumberOfUploads(function (prevNumberOfUploads) {
      return prevNumberOfUploads - ((pendingAttachments == null ? void 0 : pendingAttachments.length) || 0);
    });
    setText('');
    if (value.editing) {
      value.clearEditingState();
    }
  };
  var mapImageUploadToAttachment = function mapImageUploadToAttachment(image) {
    var mime_type = (0, _mimeTypes.lookup)(image.file.name);
    var name = image.file.name;
    return {
      fallback: name,
      image_url: image.url,
      mime_type: mime_type ? mime_type : undefined,
      original_height: image.height,
      original_width: image.width,
      originalImage: image.file,
      type: 'image'
    };
  };
  var mapFileUploadToAttachment = function mapFileUploadToAttachment(file) {
    if (file.type === 'image') {
      return {
        fallback: file.file.name,
        image_url: file.url,
        mime_type: file.file.mimeType,
        originalFile: file.file,
        type: 'image'
      };
    } else if (file.type === 'audio') {
      return {
        asset_url: file.url || file.file.uri,
        duration: file.file.duration,
        file_size: file.file.size,
        mime_type: file.file.mimeType,
        originalFile: file.file,
        title: file.file.name,
        type: 'audio'
      };
    } else if (file.type === 'video') {
      return {
        asset_url: file.url || file.file.uri,
        duration: file.file.duration,
        file_size: file.file.size,
        mime_type: file.file.mimeType,
        originalFile: file.file,
        thumb_url: file.thumb_url,
        title: file.file.name,
        type: 'video'
      };
    } else if (file.type === 'voiceRecording') {
      return {
        asset_url: file.url || file.file.uri,
        duration: file.file.duration,
        file_size: file.file.size,
        mime_type: file.file.mimeType,
        originalFile: file.file,
        title: file.file.name,
        type: 'voiceRecording',
        waveform_data: file.file.waveform_data
      };
    } else {
      return {
        asset_url: file.url || file.file.uri,
        file_size: file.file.size,
        mime_type: file.file.mimeType,
        originalFile: file.file,
        title: file.file.name,
        type: 'file'
      };
    }
  };
  var sendMessage = function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
      var _ref4,
        customMessageData,
        linkInfos,
        prevText,
        attachments,
        _loop,
        _iterator3,
        _step3,
        _image,
        _ret,
        _iterator4,
        _step4,
        _file3,
        message,
        updatedMessage,
        updateMessagePromise,
        _args3 = arguments;
      return _regenerator["default"].wrap(function _callee2$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _ref4 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, customMessageData = _ref4.customMessageData;
            if (!sending.current) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return");
          case 3:
            linkInfos = (0, _parseLinks.parseLinksFromText)(text);
            if (!(!channelCapabities.sendLinks && linkInfos.length > 0)) {
              _context3.next = 7;
              break;
            }
            _reactNative.Alert.alert(t('Links are disabled'), t('Sending links is not allowed in this conversation'));
            return _context3.abrupt("return");
          case 7:
            sending.current = true;
            startCooldown();
            prevText = giphyEnabled && giphyActive ? "/giphy ".concat(text) : text;
            setText('');
            if (inputBoxRef.current) {
              inputBoxRef.current.clear();
            }
            attachments = [];
            _loop = _regenerator["default"].mark(function _loop(_image) {
              return _regenerator["default"].wrap(function _loop$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!enableOfflineSupport) {
                      _context2.next = 5;
                      break;
                    }
                    if (!(_image.state === _utils.FileState.NOT_SUPPORTED)) {
                      _context2.next = 3;
                      break;
                    }
                    return _context2.abrupt("return", {
                      v: void 0
                    });
                  case 3:
                    attachments.push(mapImageUploadToAttachment(_image));
                    return _context2.abrupt("return", "continue");
                  case 5:
                    if (!((!_image || _image.state === _utils.FileState.UPLOAD_FAILED) && !enableOfflineSupport)) {
                      _context2.next = 7;
                      break;
                    }
                    return _context2.abrupt("return", "continue");
                  case 7:
                    if (!(_image.state === _utils.FileState.UPLOADING)) {
                      _context2.next = 14;
                      break;
                    }
                    if (!value.sendImageAsync) {
                      _context2.next = 12;
                      break;
                    }
                    setAsyncIds(function (prevAsyncIds) {
                      return [].concat((0, _toConsumableArray2["default"])(prevAsyncIds), [_image.id]);
                    });
                    _context2.next = 14;
                    break;
                  case 12:
                    sending.current = false;
                    return _context2.abrupt("return", {
                      v: setText(prevText)
                    });
                  case 14:
                    if (_image.state === _utils.FileState.UPLOADED || _image.state === _utils.FileState.FINISHED) {
                      attachments.push(mapImageUploadToAttachment(_image));
                    }
                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }, _loop);
            });
            _iterator3 = _createForOfIteratorHelper(imageUploads);
            _context3.prev = 15;
            _iterator3.s();
          case 17:
            if ((_step3 = _iterator3.n()).done) {
              _context3.next = 27;
              break;
            }
            _image = _step3.value;
            return _context3.delegateYield(_loop(_image), "t0", 20);
          case 20:
            _ret = _context3.t0;
            if (!(_ret === "continue")) {
              _context3.next = 23;
              break;
            }
            return _context3.abrupt("continue", 25);
          case 23:
            if (!((0, _typeof2["default"])(_ret) === "object")) {
              _context3.next = 25;
              break;
            }
            return _context3.abrupt("return", _ret.v);
          case 25:
            _context3.next = 17;
            break;
          case 27:
            _context3.next = 32;
            break;
          case 29:
            _context3.prev = 29;
            _context3.t1 = _context3["catch"](15);
            _iterator3.e(_context3.t1);
          case 32:
            _context3.prev = 32;
            _iterator3.f();
            return _context3.finish(32);
          case 35:
            _iterator4 = _createForOfIteratorHelper(fileUploads);
            _context3.prev = 36;
            _iterator4.s();
          case 38:
            if ((_step4 = _iterator4.n()).done) {
              _context3.next = 53;
              break;
            }
            _file3 = _step4.value;
            if (!enableOfflineSupport) {
              _context3.next = 45;
              break;
            }
            if (!(_file3.state === _utils.FileState.NOT_SUPPORTED)) {
              _context3.next = 43;
              break;
            }
            return _context3.abrupt("return");
          case 43:
            attachments.push(mapFileUploadToAttachment(_file3));
            return _context3.abrupt("continue", 51);
          case 45:
            if (!(!_file3 || _file3.state === _utils.FileState.UPLOAD_FAILED)) {
              _context3.next = 47;
              break;
            }
            return _context3.abrupt("continue", 51);
          case 47:
            if (!(_file3.state === _utils.FileState.UPLOADING)) {
              _context3.next = 50;
              break;
            }
            sending.current = false;
            return _context3.abrupt("return");
          case 50:
            if (_file3.state === _utils.FileState.UPLOADED || _file3.state === _utils.FileState.FINISHED) {
              attachments.push(mapFileUploadToAttachment(_file3));
            }
          case 51:
            _context3.next = 38;
            break;
          case 53:
            _context3.next = 58;
            break;
          case 55:
            _context3.prev = 55;
            _context3.t2 = _context3["catch"](36);
            _iterator4.e(_context3.t2);
          case 58:
            _context3.prev = 58;
            _iterator4.f();
            return _context3.finish(58);
          case 61:
            if (!(!prevText && attachments.length === 0)) {
              _context3.next = 64;
              break;
            }
            sending.current = false;
            return _context3.abrupt("return");
          case 64:
            message = value.editing;
            if (message && message.type !== 'error') {
              updatedMessage = Object.assign({}, message, {
                attachments: attachments,
                mentioned_users: mentionedUsers,
                quoted_message: undefined,
                text: prevText
              }, customMessageData);
              value.clearEditingState();
              updateMessagePromise = value.editMessage((0, _removeReservedFields.removeReservedFields)(updatedMessage)).then(value.clearEditingState);
              resetInput(attachments);
              (0, _streamChat.logChatPromiseExecution)(updateMessagePromise, 'update message');
              sending.current = false;
            } else {
              try {
                if (message && (0, _utils.isBouncedMessage)(message)) {
                  removeMessage(message);
                }
                value.sendMessage(Object.assign({
                  attachments: attachments,
                  mentioned_users: (0, _uniq["default"])(mentionedUsers),
                  parent_id: thread == null ? void 0 : thread.id,
                  quoted_message_id: typeof value.quotedMessage === 'boolean' ? undefined : value.quotedMessage.id,
                  show_in_channel: sendThreadMessageInChannel || undefined,
                  text: prevText
                }, customMessageData));
                value.clearQuotedMessageState();
                sending.current = false;
                resetInput(attachments);
              } catch (_error) {
                sending.current = false;
                if (value.quotedMessage && typeof value.quotedMessage !== 'boolean') {
                  value.setQuotedMessageState(value.quotedMessage);
                }
                setText(prevText.slice(giphyEnabled && giphyActive ? 7 : 0));
                console.log('Failed to send message');
              }
            }
          case 66:
          case "end":
            return _context3.stop();
        }
      }, _callee2, null, [[15, 29, 32, 35], [36, 55, 58, 61]]);
    }));
    return function sendMessage() {
      return _ref3.apply(this, arguments);
    };
  }();
  var sendMessageAsync = function sendMessageAsync(id) {
    var image = asyncUploads[id];
    if (!image || image.state === _utils.FileState.UPLOAD_FAILED) {
      return;
    }
    if (image.state === _utils.FileState.UPLOADED || image.state === _utils.FileState.FINISHED) {
      var attachments = [{
        image_url: image.url,
        type: 'image'
      }];
      startCooldown();
      try {
        value.sendMessage({
          attachments: attachments,
          mentioned_users: [],
          parent_id: thread == null ? void 0 : thread.id,
          quoted_message_id: typeof value.quotedMessage === 'boolean' ? undefined : value.quotedMessage.id,
          show_in_channel: sendThreadMessageInChannel || undefined,
          text: ''
        });
        setAsyncIds(function (prevAsyncIds) {
          return prevAsyncIds.splice(prevAsyncIds.indexOf(id), 1);
        });
        setAsyncUploads(function (prevAsyncUploads) {
          delete prevAsyncUploads[id];
          return prevAsyncUploads;
        });
        setNumberOfUploads(function (prevNumberOfUploads) {
          return prevNumberOfUploads - 1;
        });
      } catch (_error) {
        console.log('Failed');
      }
    }
  };
  var setInputBoxRef = function setInputBoxRef(ref) {
    inputBoxRef.current = ref;
    if (value.setInputRef) {
      value.setInputRef(ref);
    }
  };
  var getTriggerSettings = function getTriggerSettings() {
    var triggerSettings = {};
    if (channel) {
      if (value.autoCompleteTriggerSettings) {
        triggerSettings = value.autoCompleteTriggerSettings({
          channel: channel,
          client: client,
          emojiSearchIndex: value.emojiSearchIndex,
          onMentionSelectItem: onSelectItem
        });
      } else {
        triggerSettings = (0, _utils.ACITriggerSettings)({
          channel: channel,
          client: client,
          emojiSearchIndex: value.emojiSearchIndex,
          onMentionSelectItem: onSelectItem
        });
      }
    }
    return triggerSettings;
  };
  var triggerSettings = getTriggerSettings();
  var updateMessage = function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            if (!value.editing) {
              _context4.next = 4;
              break;
            }
            _context4.next = 4;
            return client.updateMessage(Object.assign({}, value.editing, {
              quoted_message: undefined,
              text: giphyEnabled && giphyActive ? "/giphy ".concat(text) : text
            }));
          case 4:
            value.clearEditingState();
            resetInput();
            _context4.next = 11;
            break;
          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee3, null, [[0, 8]]);
    }));
    return function updateMessage() {
      return _ref5.apply(this, arguments);
    };
  }();
  var regexCondition = /File (extension \.\w{2,4}|type \S+) is not supported/;
  var getUploadSetStateAction = function getUploadSetStateAction(id, fileState) {
    var extraData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return function (prevUploads) {
      return prevUploads.map(function (prevUpload) {
        if (prevUpload.id === id) {
          return Object.assign({}, prevUpload, extraData, {
            state: fileState
          });
        }
        return prevUpload;
      });
    };
  };
  var handleFileOrImageUploadError = function handleFileOrImageUploadError(error, isImageError, id) {
    if (isImageError) {
      setNumberOfUploads(function (prevNumberOfUploads) {
        return prevNumberOfUploads - 1;
      });
      if (error instanceof Error) {
        if (regexCondition.test(error.message)) {
          return setImageUploads(getUploadSetStateAction(id, _utils.FileState.NOT_SUPPORTED));
        }
        return setImageUploads(getUploadSetStateAction(id, _utils.FileState.UPLOAD_FAILED));
      }
    } else {
      setNumberOfUploads(function (prevNumberOfUploads) {
        return prevNumberOfUploads - 1;
      });
      if (error instanceof Error) {
        if (regexCondition.test(error.message)) {
          return setFileUploads(getUploadSetStateAction(id, _utils.FileState.NOT_SUPPORTED));
        }
        return setFileUploads(getUploadSetStateAction(id, _utils.FileState.UPLOAD_FAILED));
      }
    }
  };
  var uploadFile = function () {
    var _ref7 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(_ref6) {
      var newFile, file, id, response, _file$mimeType, compressedUri, extraData;
      return _regenerator["default"].wrap(function _callee4$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            newFile = _ref6.newFile;
            file = newFile.file, id = newFile.id;
            setFileUploads(getUploadSetStateAction(id, _utils.FileState.UPLOADING));
            response = {};
            _context5.prev = 4;
            if (!value.doDocUploadRequest) {
              _context5.next = 11;
              break;
            }
            _context5.next = 8;
            return value.doDocUploadRequest(file, channel);
          case 8:
            response = _context5.sent;
            _context5.next = 26;
            break;
          case 11:
            if (!(channel && file.uri)) {
              _context5.next = 26;
              break;
            }
            uploadAbortControllerRef.current.set(file.name, client.createAbortControllerForNextRequest());
            if (!((_file$mimeType = file.mimeType) != null && _file$mimeType.includes('image'))) {
              _context5.next = 22;
              break;
            }
            _context5.next = 16;
            return (0, _compressImage.compressedImageURI)(file, value.compressImageQuality);
          case 16:
            compressedUri = _context5.sent;
            _context5.next = 19;
            return channel.sendFile(compressedUri, file.name, file.mimeType);
          case 19:
            response = _context5.sent;
            _context5.next = 25;
            break;
          case 22:
            _context5.next = 24;
            return channel.sendFile(file.uri, file.name, file.mimeType);
          case 24:
            response = _context5.sent;
          case 25:
            uploadAbortControllerRef.current["delete"](file.name);
          case 26:
            extraData = {
              thumb_url: response.thumb_url,
              url: response.file
            };
            setFileUploads(getUploadSetStateAction(id, _utils.FileState.UPLOADED, extraData));
            _context5.next = 36;
            break;
          case 30:
            _context5.prev = 30;
            _context5.t0 = _context5["catch"](4);
            if (!(_context5.t0 instanceof Error && (_context5.t0.name === 'AbortError' || _context5.t0.name === 'CanceledError'))) {
              _context5.next = 35;
              break;
            }
            uploadAbortControllerRef.current["delete"](file.name);
            return _context5.abrupt("return");
          case 35:
            handleFileOrImageUploadError(_context5.t0, false, id);
          case 36:
          case "end":
            return _context5.stop();
        }
      }, _callee4, null, [[4, 30]]);
    }));
    return function uploadFile(_x) {
      return _ref7.apply(this, arguments);
    };
  }();
  var uploadImage = function () {
    var _ref9 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5(_ref8) {
      var _file$name;
      var newImage, _ref10, file, id, response, uri, filename, compressedUri, contentType, newImageUploads;
      return _regenerator["default"].wrap(function _callee5$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            newImage = _ref8.newImage;
            _ref10 = newImage || {}, file = _ref10.file, id = _ref10.id;
            if (file) {
              _context6.next = 4;
              break;
            }
            return _context6.abrupt("return");
          case 4:
            response = {};
            uri = file.uri || '';
            filename = (_file$name = file.name) != null ? _file$name : uri.replace(/^(file:\/\/|content:\/\/)/, '');
            _context6.prev = 7;
            _context6.next = 10;
            return (0, _compressImage.compressedImageURI)(file, value.compressImageQuality);
          case 10:
            compressedUri = _context6.sent;
            contentType = (0, _mimeTypes.lookup)(filename) || 'multipart/form-data';
            if (!value.doImageUploadRequest) {
              _context6.next = 18;
              break;
            }
            _context6.next = 15;
            return value.doImageUploadRequest(file, channel);
          case 15:
            response = _context6.sent;
            _context6.next = 29;
            break;
          case 18:
            if (!(compressedUri && channel)) {
              _context6.next = 29;
              break;
            }
            if (!value.sendImageAsync) {
              _context6.next = 24;
              break;
            }
            uploadAbortControllerRef.current.set(filename, client.createAbortControllerForNextRequest());
            channel.sendImage(compressedUri, filename, contentType).then(function (res) {
              uploadAbortControllerRef.current["delete"](filename);
              if (asyncIds.includes(id)) {
                setAsyncUploads(function (prevAsyncUploads) {
                  prevAsyncUploads[id] = Object.assign({}, prevAsyncUploads[id], {
                    state: _utils.FileState.UPLOADED,
                    url: res.file
                  });
                  return prevAsyncUploads;
                });
              } else {
                var newImageUploads = getUploadSetStateAction(id, _utils.FileState.UPLOADED, {
                  url: res.file
                });
                setImageUploads(newImageUploads);
              }
            }, function () {
              uploadAbortControllerRef.current["delete"](filename);
            });
            _context6.next = 29;
            break;
          case 24:
            uploadAbortControllerRef.current.set(filename, client.createAbortControllerForNextRequest());
            _context6.next = 27;
            return channel.sendImage(compressedUri, filename, contentType);
          case 27:
            response = _context6.sent;
            uploadAbortControllerRef.current["delete"](filename);
          case 29:
            if (Object.keys(response).length) {
              newImageUploads = getUploadSetStateAction(id, _utils.FileState.UPLOADED, {
                height: file.height,
                url: response.file,
                width: file.width
              });
              setImageUploads(newImageUploads);
            }
            _context6.next = 38;
            break;
          case 32:
            _context6.prev = 32;
            _context6.t0 = _context6["catch"](7);
            if (!(_context6.t0 instanceof Error && (_context6.t0.name === 'AbortError' || _context6.t0.name === 'CanceledError'))) {
              _context6.next = 37;
              break;
            }
            uploadAbortControllerRef.current["delete"](filename);
            return _context6.abrupt("return");
          case 37:
            handleFileOrImageUploadError(_context6.t0, true, id);
          case 38:
          case "end":
            return _context6.stop();
        }
      }, _callee5, null, [[7, 32]]);
    }));
    return function uploadImage(_x2) {
      return _ref9.apply(this, arguments);
    };
  }();
  var uploadNewFile = function () {
    var _ref11 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6(file) {
      var _file$mimeType2;
      var id, isBlockedFileExtension, isBlockedFileMimeType, fileState, fileType, newFile;
      return _regenerator["default"].wrap(function _callee6$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            id = (0, _utils.generateRandomId)();
            isBlockedFileExtension = blockedFileExtensionTypes == null ? void 0 : blockedFileExtensionTypes.some(function (fileExtensionType) {
              var _file$name2;
              return (_file$name2 = file.name) == null ? void 0 : _file$name2.includes(fileExtensionType);
            });
            isBlockedFileMimeType = blockedFileMimeTypes == null ? void 0 : blockedFileMimeTypes.some(function (mimeType) {
              var _file$name3;
              return (_file$name3 = file.name) == null ? void 0 : _file$name3.includes(mimeType);
            });
            fileState = isBlockedFileExtension || isBlockedFileMimeType ? _utils.FileState.NOT_SUPPORTED : _utils.FileState.UPLOADING;
            fileType = file.type || ((_file$mimeType2 = file.mimeType) == null ? void 0 : _file$mimeType2.split('/')[0]);
            newFile = {
              duration: file.duration || 0,
              file: file,
              id: file.id || id,
              state: fileState,
              type: fileType
            };
            _context7.next = 8;
            return Promise.all([setFileUploads(function (prevFileUploads) {
              return prevFileUploads.concat([newFile]);
            }), setNumberOfUploads(function (prevNumberOfUploads) {
              return prevNumberOfUploads + 1;
            })]);
          case 8:
            if (!isBlockedFileExtension) {
              uploadFile({
                newFile: newFile
              });
            }
          case 9:
          case "end":
            return _context7.stop();
        }
      }, _callee6);
    }));
    return function uploadNewFile(_x3) {
      return _ref11.apply(this, arguments);
    };
  }();
  var uploadNewImage = function () {
    var _ref12 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7(image) {
      var id, isBlockedImageMimeType, isBlockedImageExtension, imageState, newImage;
      return _regenerator["default"].wrap(function _callee7$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            id = (0, _utils.generateRandomId)();
            isBlockedImageMimeType = blockedImageMimeTypes == null ? void 0 : blockedImageMimeTypes.some(function (mimeType) {
              var _image$uri;
              return (_image$uri = image.uri) == null ? void 0 : _image$uri.includes(mimeType);
            });
            isBlockedImageExtension = blockedImageExtensionTypes == null ? void 0 : blockedImageExtensionTypes.some(function (imageExtensionType) {
              var _image$uri2;
              return (_image$uri2 = image.uri) == null ? void 0 : _image$uri2.includes(imageExtensionType);
            });
            imageState = isBlockedImageExtension || isBlockedImageMimeType ? _utils.FileState.NOT_SUPPORTED : _utils.FileState.UPLOADING;
            newImage = {
              file: image,
              height: image.height,
              id: id,
              state: imageState,
              url: image.uri,
              width: image.width
            };
            _context8.next = 7;
            return Promise.all([setImageUploads(function (prevImageUploads) {
              return prevImageUploads.concat([newImage]);
            }), setNumberOfUploads(function (prevNumberOfUploads) {
              return prevNumberOfUploads + 1;
            })]);
          case 7:
            if (!isBlockedImageExtension) {
              uploadImage({
                newImage: newImage
              });
            }
          case 8:
          case "end":
            return _context8.stop();
        }
      }, _callee7);
    }));
    return function uploadNewImage(_x4) {
      return _ref12.apply(this, arguments);
    };
  }();
  var messageInputContext = (0, _useCreateMessageInputContext.useCreateMessageInputContext)(Object.assign({
    appendText: appendText,
    asyncIds: asyncIds,
    asyncUploads: asyncUploads,
    closeAttachmentPicker: closeAttachmentPicker,
    cooldownEndsAt: cooldownEndsAt,
    fileUploads: fileUploads,
    giphyActive: giphyActive,
    imageUploads: imageUploads,
    inputBoxRef: inputBoxRef,
    isValidMessage: isValidMessage,
    mentionedUsers: mentionedUsers,
    numberOfUploads: numberOfUploads,
    onChange: onChange,
    onSelectItem: onSelectItem,
    openAttachmentPicker: openAttachmentPicker,
    openCommandsPicker: openCommandsPicker,
    openFilePicker: pickFile,
    openMentionsPicker: openMentionsPicker,
    pickFile: pickFile,
    removeFile: removeFile,
    removeImage: removeImage,
    resetInput: resetInput,
    selectedPicker: selectedPicker,
    sending: sending,
    sendMessageAsync: sendMessageAsync,
    sendThreadMessageInChannel: sendThreadMessageInChannel,
    setAsyncIds: setAsyncIds,
    setAsyncUploads: setAsyncUploads,
    setFileUploads: setFileUploads,
    setGiphyActive: setGiphyActive,
    setImageUploads: setImageUploads,
    setInputBoxRef: setInputBoxRef,
    setMentionedUsers: setMentionedUsers,
    setNumberOfUploads: setNumberOfUploads,
    setSendThreadMessageInChannel: setSendThreadMessageInChannel,
    setShowMoreOptions: setShowMoreOptions,
    setText: setText,
    showMoreOptions: showMoreOptions,
    text: text,
    thread: thread,
    toggleAttachmentPicker: toggleAttachmentPicker,
    triggerSettings: triggerSettings,
    updateMessage: updateMessage,
    uploadFile: uploadFile,
    uploadImage: uploadImage,
    uploadNewFile: uploadNewFile,
    uploadNewImage: uploadNewImage
  }, value, {
    sendMessage: sendMessage
  }));
  return (0, _jsxRuntime.jsx)(MessageInputContext.Provider, {
    value: messageInputContext,
    children: children
  });
};
exports.MessageInputProvider = MessageInputProvider;
var useMessageInputContext = function useMessageInputContext() {
  var contextValue = (0, _react.useContext)(MessageInputContext);
  if (contextValue === _defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE && !(0, _isTestEnvironment.isTestEnvironment)()) {
    throw new Error("The useMessageInputContext hook was called outside of the MessageInputContext provider. Make sure you have configured Channel component correctly - https://getstream.io/chat/docs/sdk/reactnative/basics/hello_stream_chat/#channel");
  }
  return contextValue;
};
exports.useMessageInputContext = useMessageInputContext;
var withMessageInputContext = function withMessageInputContext(Component) {
  var WithMessageInputContextComponent = function WithMessageInputContextComponent(props) {
    var messageInputContext = useMessageInputContext();
    return (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, messageInputContext));
  };
  WithMessageInputContextComponent.displayName = "WithMessageInputContext".concat((0, _getDisplayName.getDisplayName)(Component));
  return WithMessageInputContextComponent;
};
exports.withMessageInputContext = withMessageInputContext;
//# sourceMappingURL=MessageInputContext.js.map