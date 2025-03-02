var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageInput = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _useAudioController2 = require("./hooks/useAudioController");
var _useCountdown2 = require("./hooks/useCountdown");
var _contexts = require("../../contexts");
var _AttachmentPickerContext = require("../../contexts/attachmentPickerContext/AttachmentPickerContext");
var _ChannelContext = require("../../contexts/channelContext/ChannelContext");
var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");
var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");
var _SuggestionsContext = require("../../contexts/suggestionsContext/SuggestionsContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _ThreadContext = require("../../contexts/threadContext/ThreadContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _native = require("../../native");
var _AutoCompleteInput = require("../AutoCompleteInput/AutoCompleteInput");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/MessageInput.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var styles = _reactNative.StyleSheet.create({
  attachmentSeparator: {
    borderBottomWidth: 1,
    marginBottom: 10
  },
  autoCompleteInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16
  },
  composerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    borderTopWidth: 1,
    padding: 10
  },
  inputBoxContainer: {
    borderRadius: 20,
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 10
  },
  micButtonContainer: {},
  optionsContainer: {
    flexDirection: 'row'
  },
  replyContainer: {
    paddingBottom: 12,
    paddingHorizontal: 8
  },
  sendButtonContainer: {},
  suggestionsListContainer: {
    position: 'absolute',
    width: '100%'
  }
});
var MessageInputWithContext = function MessageInputWithContext(props) {
  var additionalTextInputProps = props.additionalTextInputProps,
    asyncIds = props.asyncIds,
    asyncMessagesLockDistance = props.asyncMessagesLockDistance,
    asyncMessagesMinimumPressDuration = props.asyncMessagesMinimumPressDuration,
    asyncMessagesMultiSendEnabled = props.asyncMessagesMultiSendEnabled,
    asyncMessagesSlideToCancelDistance = props.asyncMessagesSlideToCancelDistance,
    asyncUploads = props.asyncUploads,
    AttachmentPickerSelectionBar = props.AttachmentPickerSelectionBar,
    AudioRecorder = props.AudioRecorder,
    audioRecordingEnabled = props.audioRecordingEnabled,
    AudioRecordingInProgress = props.AudioRecordingInProgress,
    AudioRecordingLockIndicator = props.AudioRecordingLockIndicator,
    AudioRecordingPreview = props.AudioRecordingPreview,
    AutoCompleteSuggestionList = props.AutoCompleteSuggestionList,
    closeAttachmentPicker = props.closeAttachmentPicker,
    cooldownEndsAt = props.cooldownEndsAt,
    CooldownTimer = props.CooldownTimer,
    editing = props.editing,
    FileUploadPreview = props.FileUploadPreview,
    fileUploads = props.fileUploads,
    giphyActive = props.giphyActive,
    ImageUploadPreview = props.ImageUploadPreview,
    imageUploads = props.imageUploads,
    Input = props.Input,
    inputBoxRef = props.inputBoxRef,
    InputButtons = props.InputButtons,
    InputEditingStateHeader = props.InputEditingStateHeader,
    InputGiphySearch = props.InputGiphySearch,
    InputReplyStateHeader = props.InputReplyStateHeader,
    isOnline = props.isOnline,
    isValidMessage = props.isValidMessage,
    maxNumberOfFiles = props.maxNumberOfFiles,
    members = props.members,
    mentionedUsers = props.mentionedUsers,
    numberOfUploads = props.numberOfUploads,
    quotedMessage = props.quotedMessage,
    removeFile = props.removeFile,
    removeImage = props.removeImage,
    Reply = props.Reply,
    resetInput = props.resetInput,
    SendButton = props.SendButton,
    sending = props.sending,
    sendMessageAsync = props.sendMessageAsync,
    setShowMoreOptions = props.setShowMoreOptions,
    ShowThreadMessageInChannelButton = props.ShowThreadMessageInChannelButton,
    StartAudioRecordingButton = props.StartAudioRecordingButton,
    suggestions = props.suggestions,
    text = props.text,
    thread = props.thread,
    threadList = props.threadList,
    triggerType = props.triggerType,
    uploadNewFile = props.uploadNewFile,
    uploadNewImage = props.uploadNewImage,
    watchers = props.watchers;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    height = _useState2[0],
    setHeight = _useState2[1];
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    border = _useTheme$theme$color.border,
    grey_whisper = _useTheme$theme$color.grey_whisper,
    white = _useTheme$theme$color.white,
    white_smoke = _useTheme$theme$color.white_smoke,
    _useTheme$theme$messa = _useTheme$theme.messageInput,
    attachmentSelectionBar = _useTheme$theme$messa.attachmentSelectionBar,
    attachmentSeparator = _useTheme$theme$messa.attachmentSeparator,
    autoCompleteInputContainer = _useTheme$theme$messa.autoCompleteInputContainer,
    composerContainer = _useTheme$theme$messa.composerContainer,
    container = _useTheme$theme$messa.container,
    focusedInputBoxContainer = _useTheme$theme$messa.focusedInputBoxContainer,
    inputBoxContainer = _useTheme$theme$messa.inputBoxContainer,
    micButtonContainer = _useTheme$theme$messa.micButtonContainer,
    optionsContainer = _useTheme$theme$messa.optionsContainer,
    replyContainer = _useTheme$theme$messa.replyContainer,
    sendButtonContainer = _useTheme$theme$messa.sendButtonContainer,
    suggestionListContainer = _useTheme$theme$messa.suggestionsListContainer.container;
  var _useAttachmentPickerC = (0, _AttachmentPickerContext.useAttachmentPickerContext)(),
    attachmentPickerBottomSheetHeight = _useAttachmentPickerC.attachmentPickerBottomSheetHeight,
    attachmentSelectionBarHeight = _useAttachmentPickerC.attachmentSelectionBarHeight,
    bottomInset = _useAttachmentPickerC.bottomInset,
    selectedFiles = _useAttachmentPickerC.selectedFiles,
    selectedImages = _useAttachmentPickerC.selectedImages,
    selectedPicker = _useAttachmentPickerC.selectedPicker,
    setMaxNumberOfFiles = _useAttachmentPickerC.setMaxNumberOfFiles,
    setSelectedFiles = _useAttachmentPickerC.setSelectedFiles,
    setSelectedImages = _useAttachmentPickerC.setSelectedImages;
  var _useCountdown = (0, _useCountdown2.useCountdown)(cooldownEndsAt),
    cooldownRemainingSeconds = _useCountdown.seconds;
  (0, _react.useEffect)(function () {
    setMaxNumberOfFiles(maxNumberOfFiles != null ? maxNumberOfFiles : 10);
    return closeAttachmentPicker;
  }, []);
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    hasResetImages = _useState4[0],
    setHasResetImages = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    hasResetFiles = _useState6[0],
    setHasResetFiles = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    focused = _useState8[0],
    setFocused = _useState8[1];
  var selectedImagesLength = hasResetImages ? selectedImages.length : 0;
  var imageUploadsLength = hasResetImages ? imageUploads.length : 0;
  var selectedFilesLength = hasResetFiles ? selectedFiles.length : 0;
  var fileUploadsLength = hasResetFiles ? fileUploads.length : 0;
  var imagesForInput = !!thread && !!threadList || !thread && !threadList;
  (0, _react.useEffect)(function () {
    setSelectedImages([]);
    if (imageUploads.length) {
      imageUploads.forEach(function (image) {
        return removeImage(image.id);
      });
    }
    return function () {
      return setSelectedImages([]);
    };
  }, []);
  (0, _react.useEffect)(function () {
    setSelectedFiles([]);
    if (fileUploads.length) {
      fileUploads.forEach(function (file) {
        return removeFile(file.id);
      });
    }
    return function () {
      return setSelectedFiles([]);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (hasResetImages === false && imageUploadsLength === 0 && selectedImagesLength === 0) {
      setHasResetImages(true);
    }
  }, [imageUploadsLength, selectedImagesLength]);
  (0, _react.useEffect)(function () {
    if (hasResetFiles === false && fileUploadsLength === 0 && selectedFilesLength === 0) {
      setHasResetFiles(true);
    }
  }, [fileUploadsLength, selectedFilesLength]);
  (0, _react.useEffect)(function () {
    if (imagesForInput === false && imageUploadsLength) {
      imageUploads.forEach(function (image) {
        return removeImage(image.id);
      });
    }
  }, [imagesForInput, imageUploadsLength]);
  var uploadImagesHandler = function uploadImagesHandler() {
    var imageToUpload = selectedImages.find(function (selectedImage) {
      var uploadedImage = imageUploads.find(function (imageUpload) {
        return imageUpload.file.uri === selectedImage.uri || imageUpload.url === selectedImage.uri;
      });
      return !uploadedImage;
    });
    if (imageToUpload) uploadNewImage(imageToUpload);
  };
  var removeImagesHandler = function removeImagesHandler() {
    var imagesToRemove = imageUploads.filter(function (imageUpload) {
      return !selectedImages.find(function (selectedImage) {
        return selectedImage.uri === imageUpload.file.uri || selectedImage.uri === imageUpload.url;
      });
    });
    imagesToRemove.forEach(function (image) {
      return removeImage(image.id);
    });
  };
  var uploadFilesHandler = function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var fileToUpload;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            fileToUpload = selectedFiles.find(function (selectedFile) {
              var uploadedFile = fileUploads.find(function (fileUpload) {
                return fileUpload.file.uri === selectedFile.uri || fileUpload.url === selectedFile.uri;
              });
              return !uploadedFile;
            });
            if (!fileToUpload) {
              _context.next = 4;
              break;
            }
            _context.next = 4;
            return uploadNewFile(fileToUpload);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function uploadFilesHandler() {
      return _ref.apply(this, arguments);
    };
  }();
  var removeFilesHandler = function removeFilesHandler() {
    var filesToRemove = fileUploads.filter(function (fileUpload) {
      return !selectedFiles.find(function (selectedFile) {
        return selectedFile.uri === fileUpload.file.uri || selectedFile.uri === fileUpload.url;
      });
    });
    filesToRemove.forEach(function (file) {
      return removeFile(file.id);
    });
  };
  (0, _react.useEffect)(function () {
    var uploadOrRemoveImage = function () {
      var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!imagesForInput) {
                _context2.next = 7;
                break;
              }
              if (!(selectedImagesLength > imageUploadsLength)) {
                _context2.next = 6;
                break;
              }
              _context2.next = 4;
              return uploadImagesHandler();
            case 4:
              _context2.next = 7;
              break;
            case 6:
              removeImagesHandler();
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function uploadOrRemoveImage() {
        return _ref2.apply(this, arguments);
      };
    }();
    if (!(0, _native.isImageMediaLibraryAvailable)()) return;
    uploadOrRemoveImage();
  }, [selectedImagesLength]);
  (0, _react.useEffect)(function () {
    var uploadOrRemoveFile = function () {
      var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(selectedFilesLength > fileUploadsLength)) {
                _context3.next = 5;
                break;
              }
              _context3.next = 3;
              return uploadFilesHandler();
            case 3:
              _context3.next = 6;
              break;
            case 5:
              removeFilesHandler();
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function uploadOrRemoveFile() {
        return _ref3.apply(this, arguments);
      };
    }();
    uploadOrRemoveFile();
  }, [selectedFilesLength]);
  (0, _react.useEffect)(function () {
    if (imagesForInput && (0, _native.isImageMediaLibraryAvailable)()) {
      if (imageUploadsLength < selectedImagesLength) {
        var updatedSelectedImages = selectedImages.filter(function (selectedImage) {
          var uploadedImage = imageUploads.find(function (imageUpload) {
            return imageUpload.file.uri === selectedImage.uri || imageUpload.url === selectedImage.uri;
          });
          return uploadedImage;
        });
        setSelectedImages(updatedSelectedImages);
      } else if (imageUploadsLength > selectedImagesLength) {
        setSelectedImages(imageUploads.map(function (imageUpload) {
          return {
            height: imageUpload.file.height,
            source: imageUpload.file.source,
            uri: imageUpload.url || imageUpload.file.uri,
            width: imageUpload.file.width
          };
        }).filter(Boolean));
      }
    }
  }, [imageUploadsLength]);
  (0, _react.useEffect)(function () {
    if ((0, _native.isImageMediaLibraryAvailable)()) {
      if (fileUploadsLength < selectedFilesLength) {
        var updatedSelectedFiles = selectedFiles.filter(function (selectedFile) {
          var uploadedFile = fileUploads.find(function (fileUpload) {
            return fileUpload.file.uri === selectedFile.uri || fileUpload.url === selectedFile.uri;
          });
          return uploadedFile;
        });
        setSelectedFiles(updatedSelectedFiles);
      } else if (fileUploadsLength > selectedFilesLength) {
        setSelectedFiles(fileUploads.map(function (fileUpload) {
          return {
            duration: fileUpload.file.duration,
            mimeType: fileUpload.file.mimeType,
            name: fileUpload.file.name,
            size: fileUpload.file.size,
            uri: fileUpload.file.uri
          };
        }));
      }
    }
  }, [fileUploadsLength]);
  var editingExists = !!editing;
  (0, _react.useEffect)(function () {
    if (editing && inputBoxRef.current) {
      inputBoxRef.current.focus();
    }
    if (!editing && (giphyActive || fileUploads.length > 0 || mentionedUsers.length > 0 || imageUploads.length > 0 || numberOfUploads > 0) && resetInput) {
      resetInput();
    }
  }, [editingExists]);
  var asyncIdsString = asyncIds.join();
  var asyncUploadsString = Object.values(asyncUploads).map(function (_ref4) {
    var state = _ref4.state,
      url = _ref4.url;
    return "".concat(state).concat(url);
  }).join();
  (0, _react.useEffect)(function () {
    if (Object.keys(asyncUploads).length) {
      sending.current = true;
      asyncIds.forEach(function (id) {
        return sendMessageAsync(id);
      });
      sending.current = false;
    }
  }, [asyncIdsString, asyncUploadsString, sendMessageAsync]);
  var getMembers = function getMembers() {
    var result = [];
    if (members && Object.values(members).length) {
      Object.values(members).forEach(function (member) {
        if (member.user) {
          result.push(member.user);
        }
      });
    }
    return result;
  };
  var getUsers = function getUsers() {
    var users = [].concat((0, _toConsumableArray2["default"])(getMembers()), (0, _toConsumableArray2["default"])(getWatchers()));
    var uniqueUsers = {};
    var _iterator = _createForOfIteratorHelper(users),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var user = _step.value;
        if (user && !uniqueUsers[user.id]) {
          uniqueUsers[user.id] = user;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var usersArray = Object.values(uniqueUsers);
    return usersArray;
  };
  var getWatchers = function getWatchers() {
    var result = [];
    if (watchers && Object.values(watchers).length) {
      result.push.apply(result, (0, _toConsumableArray2["default"])(Object.values(watchers)));
    }
    return result;
  };
  var additionalTextInputContainerProps = Object.assign({}, additionalTextInputProps);
  var memoizedAdditionalTextInputProps = (0, _react.useMemo)(function () {
    return Object.assign({}, additionalTextInputProps, {
      onBlur: function onBlur(event) {
        if (additionalTextInputProps != null && additionalTextInputProps.onBlur) {
          additionalTextInputProps == null ? void 0 : additionalTextInputProps.onBlur(event);
        }
        if (setFocused) setFocused(false);
        setShowMoreOptions(true);
      },
      onFocus: function onFocus(event) {
        if (additionalTextInputProps != null && additionalTextInputProps.onFocus) {
          additionalTextInputProps.onFocus(event);
        }
        if (setFocused) setFocused(true);
      }
    });
  }, [additionalTextInputProps]);
  var _useAudioController = (0, _useAudioController2.useAudioController)(),
    deleteVoiceRecording = _useAudioController.deleteVoiceRecording,
    micLocked = _useAudioController.micLocked,
    onVoicePlayerPlayPause = _useAudioController.onVoicePlayerPlayPause,
    paused = _useAudioController.paused,
    permissionsGranted = _useAudioController.permissionsGranted,
    position = _useAudioController.position,
    progress = _useAudioController.progress,
    recording = _useAudioController.recording,
    recordingDuration = _useAudioController.recordingDuration,
    recordingStatus = _useAudioController.recordingStatus,
    setMicLocked = _useAudioController.setMicLocked,
    startVoiceRecording = _useAudioController.startVoiceRecording,
    stopVoiceRecording = _useAudioController.stopVoiceRecording,
    uploadVoiceRecording = _useAudioController.uploadVoiceRecording,
    waveformData = _useAudioController.waveformData;
  var isSendingButtonVisible = function isSendingButtonVisible() {
    if (audioRecordingEnabled) {
      if (recording) {
        return false;
      }
      if (text && text.trim()) {
        return true;
      }
      var imagesAndFiles = [].concat((0, _toConsumableArray2["default"])(imageUploads), (0, _toConsumableArray2["default"])(fileUploads));
      if (imagesAndFiles.length === 0) return false;
    }
    return true;
  };
  var micPositionX = (0, _reactNativeReanimated.useSharedValue)(0);
  var micPositionY = (0, _reactNativeReanimated.useSharedValue)(0);
  var X_AXIS_POSITION = -asyncMessagesSlideToCancelDistance;
  var Y_AXIS_POSITION = -asyncMessagesLockDistance;
  var resetAudioRecording = function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return deleteVoiceRecording();
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function resetAudioRecording() {
      return _ref5.apply(this, arguments);
    };
  }();
  var micLockHandler = function micLockHandler() {
    setMicLocked(true);
    (0, _native.triggerHaptic)('impactMedium');
  };
  var panGestureMic = _reactNativeGestureHandler.Gesture.Pan().activateAfterLongPress(asyncMessagesMinimumPressDuration + 100).onChange(function (event) {
    var newPositionX = event.translationX;
    var newPositionY = event.translationY;
    if (newPositionX <= 0 && newPositionX >= X_AXIS_POSITION) {
      micPositionX.value = newPositionX;
    }
    if (newPositionY <= 0 && newPositionY >= Y_AXIS_POSITION) {
      micPositionY.value = newPositionY;
    }
  }).onEnd(function () {
    var belowThresholdY = micPositionY.value > Y_AXIS_POSITION / 2;
    var belowThresholdX = micPositionX.value > X_AXIS_POSITION / 2;
    if (belowThresholdY && belowThresholdX) {
      micPositionY.value = (0, _reactNativeReanimated.withSpring)(0);
      micPositionX.value = (0, _reactNativeReanimated.withSpring)(0);
      if (recordingStatus === 'recording') {
        (0, _reactNativeReanimated.runOnJS)(uploadVoiceRecording)(asyncMessagesMultiSendEnabled);
      }
      return;
    }
    if (!belowThresholdY) {
      micPositionY.value = (0, _reactNativeReanimated.withSpring)(Y_AXIS_POSITION);
      (0, _reactNativeReanimated.runOnJS)(micLockHandler)();
    }
    if (!belowThresholdX) {
      micPositionX.value = (0, _reactNativeReanimated.withSpring)(X_AXIS_POSITION);
      (0, _reactNativeReanimated.runOnJS)(resetAudioRecording)();
    }
    micPositionX.value = 0;
    micPositionY.value = 0;
  }).onStart(function () {
    micPositionX.value = 0;
    micPositionY.value = 0;
    (0, _reactNativeReanimated.runOnJS)(setMicLocked)(false);
  });
  var animatedStyles = {
    lockIndicator: (0, _reactNativeReanimated.useAnimatedStyle)(function () {
      return {
        transform: [{
          translateY: (0, _reactNativeReanimated.interpolate)(micPositionY.value, [0, Y_AXIS_POSITION], [0, Y_AXIS_POSITION], _reactNativeReanimated.Extrapolation.CLAMP)
        }]
      };
    }),
    micButton: (0, _reactNativeReanimated.useAnimatedStyle)(function () {
      return {
        opacity: (0, _reactNativeReanimated.interpolate)(micPositionX.value, [0, X_AXIS_POSITION], [1, 0], _reactNativeReanimated.Extrapolation.CLAMP),
        transform: [{
          translateX: micPositionX.value
        }, {
          translateY: micPositionY.value
        }],
        zIndex: 2
      };
    }),
    slideToCancel: (0, _reactNativeReanimated.useAnimatedStyle)(function () {
      return {
        opacity: (0, _reactNativeReanimated.interpolate)(micPositionX.value, [0, X_AXIS_POSITION], [1, 0], _reactNativeReanimated.Extrapolation.CLAMP),
        transform: [{
          translateX: (0, _reactNativeReanimated.interpolate)(micPositionX.value, [0, X_AXIS_POSITION], [0, X_AXIS_POSITION / 2], _reactNativeReanimated.Extrapolation.CLAMP)
        }]
      };
    })
  };
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsxs)(_reactNative.View, {
      onLayout: function onLayout(_ref6) {
        var newHeight = _ref6.nativeEvent.layout.height;
        return setHeight(newHeight);
      },
      style: [styles.container, {
        backgroundColor: white,
        borderColor: border
      }, container],
      children: [editing && (0, _jsxRuntime.jsx)(InputEditingStateHeader, {}), quotedMessage && (0, _jsxRuntime.jsx)(InputReplyStateHeader, {}), recording && (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [(0, _jsxRuntime.jsx)(AudioRecordingLockIndicator, {
          messageInputHeight: height,
          micLocked: micLocked,
          style: animatedStyles.lockIndicator
        }), recordingStatus === 'stopped' ? (0, _jsxRuntime.jsx)(AudioRecordingPreview, {
          onVoicePlayerPlayPause: onVoicePlayerPlayPause,
          paused: paused,
          position: position,
          progress: progress,
          waveformData: waveformData
        }) : micLocked ? (0, _jsxRuntime.jsx)(AudioRecordingInProgress, {
          recordingDuration: recordingDuration,
          waveformData: waveformData
        }) : null]
      }), (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.composerContainer, composerContainer],
        children: Input ? (0, _jsxRuntime.jsx)(Input, {
          additionalTextInputProps: additionalTextInputContainerProps,
          getUsers: getUsers
        }) : (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [recording ? (0, _jsxRuntime.jsx)(AudioRecorder, {
            deleteVoiceRecording: deleteVoiceRecording,
            micLocked: micLocked,
            recording: recording,
            recordingDuration: recordingDuration,
            recordingStopped: recordingStatus === 'stopped',
            slideToCancelStyle: animatedStyles.slideToCancel,
            stopVoiceRecording: stopVoiceRecording,
            uploadVoiceRecording: uploadVoiceRecording
          }) : (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [(0, _jsxRuntime.jsx)(_reactNative.View, {
              style: [styles.optionsContainer, optionsContainer],
              children: InputButtons && (0, _jsxRuntime.jsx)(InputButtons, {})
            }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
              style: [styles.inputBoxContainer, {
                borderColor: grey_whisper,
                paddingVertical: giphyActive ? 8 : 12
              }, inputBoxContainer, focused ? focusedInputBoxContainer : null],
              children: [(typeof editing !== 'boolean' && (editing == null ? void 0 : editing.quoted_message) || quotedMessage) && (0, _jsxRuntime.jsx)(_reactNative.View, {
                style: [styles.replyContainer, replyContainer],
                children: (0, _jsxRuntime.jsx)(Reply, {})
              }), imageUploads.length ? (0, _jsxRuntime.jsx)(ImageUploadPreview, {}) : null, imageUploads.length && fileUploads.length ? (0, _jsxRuntime.jsx)(_reactNative.View, {
                style: [styles.attachmentSeparator, {
                  borderBottomColor: grey_whisper,
                  marginHorizontal: giphyActive ? 8 : 12
                }, attachmentSeparator]
              }) : null, fileUploads.length ? (0, _jsxRuntime.jsx)(FileUploadPreview, {}) : null, giphyActive ? (0, _jsxRuntime.jsx)(InputGiphySearch, {
                disabled: !isOnline
              }) : (0, _jsxRuntime.jsx)(_reactNative.View, {
                style: [styles.autoCompleteInputContainer, autoCompleteInputContainer],
                children: (0, _jsxRuntime.jsx)(_AutoCompleteInput.AutoCompleteInput, {
                  additionalTextInputProps: memoizedAdditionalTextInputProps,
                  cooldownActive: !!cooldownRemainingSeconds
                })
              })]
            })]
          }), isSendingButtonVisible() && (cooldownRemainingSeconds ? (0, _jsxRuntime.jsx)(CooldownTimer, {
            seconds: cooldownRemainingSeconds
          }) : (0, _jsxRuntime.jsx)(_reactNative.View, {
            style: [styles.sendButtonContainer, sendButtonContainer],
            children: (0, _jsxRuntime.jsx)(SendButton, {
              disabled: sending.current || !isValidMessage() || giphyActive && !isOnline
            })
          })), audioRecordingEnabled && !micLocked && (0, _jsxRuntime.jsx)(_reactNativeGestureHandler.GestureDetector, {
            gesture: panGestureMic,
            children: (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
              style: [styles.micButtonContainer, animatedStyles.micButton, micButtonContainer],
              children: (0, _jsxRuntime.jsx)(StartAudioRecordingButton, {
                permissionsGranted: permissionsGranted,
                recording: recording,
                startVoiceRecording: startVoiceRecording
              })
            })
          })]
        })
      }), (0, _jsxRuntime.jsx)(ShowThreadMessageInChannelButton, {
        threadList: threadList
      })]
    }), triggerType && suggestions ? (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.suggestionsListContainer, {
        bottom: height
      }, suggestionListContainer],
      children: (0, _jsxRuntime.jsx)(AutoCompleteSuggestionList, {
        active: !!suggestions,
        data: suggestions.data,
        onSelect: suggestions.onSelect,
        queryText: suggestions.queryText,
        triggerType: triggerType
      })
    }) : null, selectedPicker && (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [{
        backgroundColor: white_smoke,
        height: attachmentPickerBottomSheetHeight + attachmentSelectionBarHeight - bottomInset
      }, attachmentSelectionBar],
      children: (0, _jsxRuntime.jsx)(AttachmentPickerSelectionBar, {})
    })]
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevAdditionalTextInputProps = prevProps.additionalTextInputProps,
    prevAsyncMessagesLockDistance = prevProps.asyncMessagesLockDistance,
    prevAsyncMessagesMinimumPressDuration = prevProps.asyncMessagesMinimumPressDuration,
    prevAsyncMessagesSlideToCancelDistance = prevProps.asyncMessagesSlideToCancelDistance,
    prevAsyncUploads = prevProps.asyncUploads,
    prevAsyncMessagesEnabled = prevProps.audioRecordingEnabled,
    prevEditing = prevProps.editing,
    prevFileUploads = prevProps.fileUploads,
    prevGiphyActive = prevProps.giphyActive,
    prevImageUploads = prevProps.imageUploads,
    prevIsOnline = prevProps.isOnline,
    prevIsValidMessage = prevProps.isValidMessage,
    prevMentionedUsers = prevProps.mentionedUsers,
    prevQuotedMessage = prevProps.quotedMessage,
    prevSending = prevProps.sending,
    prevShowMoreOptions = prevProps.showMoreOptions,
    prevSuggestions = prevProps.suggestions,
    prevT = prevProps.t,
    prevThread = prevProps.thread,
    prevThreadList = prevProps.threadList;
  var nextAdditionalTextInputProps = nextProps.additionalTextInputProps,
    nextAsyncMessagesLockDistance = nextProps.asyncMessagesLockDistance,
    nextAsyncMessagesMinimumPressDuration = nextProps.asyncMessagesMinimumPressDuration,
    nextAsyncMessagesSlideToCancelDistance = nextProps.asyncMessagesSlideToCancelDistance,
    nextAsyncUploads = nextProps.asyncUploads,
    nextAsyncMessagesEnabled = nextProps.audioRecordingEnabled,
    nextEditing = nextProps.editing,
    nextFileUploads = nextProps.fileUploads,
    nextGiphyActive = nextProps.giphyActive,
    nextImageUploads = nextProps.imageUploads,
    nextIsOnline = nextProps.isOnline,
    nextIsValidMessage = nextProps.isValidMessage,
    nextMentionedUsers = nextProps.mentionedUsers,
    nextQuotedMessage = nextProps.quotedMessage,
    nextSending = nextProps.sending,
    nextShowMoreOptions = nextProps.showMoreOptions,
    nextSuggestions = nextProps.suggestions,
    nextT = nextProps.t,
    nextThread = nextProps.thread,
    nextThreadList = nextProps.threadList;
  var tEqual = prevT === nextT;
  if (!tEqual) return false;
  var additionalTextInputPropsEven = prevAdditionalTextInputProps === nextAdditionalTextInputProps;
  if (!additionalTextInputPropsEven) return false;
  var asyncMessagesEnabledEqual = prevAsyncMessagesEnabled === nextAsyncMessagesEnabled;
  if (!asyncMessagesEnabledEqual) return false;
  var asyncMessagesLockDistanceEqual = prevAsyncMessagesLockDistance === nextAsyncMessagesLockDistance;
  if (!asyncMessagesLockDistanceEqual) return false;
  var asyncMessagesMinimumPressDurationEqual = prevAsyncMessagesMinimumPressDuration === nextAsyncMessagesMinimumPressDuration;
  if (!asyncMessagesMinimumPressDurationEqual) return false;
  var asyncMessagesSlideToCancelDistanceEqual = prevAsyncMessagesSlideToCancelDistance === nextAsyncMessagesSlideToCancelDistance;
  if (!asyncMessagesSlideToCancelDistanceEqual) return false;
  var editingEqual = !!prevEditing === !!nextEditing;
  if (!editingEqual) return false;
  var imageUploadsEqual = prevImageUploads.length === nextImageUploads.length;
  if (!imageUploadsEqual) return false;
  var giphyActiveEqual = prevGiphyActive === nextGiphyActive;
  if (!giphyActiveEqual) return false;
  var quotedMessageEqual = !!prevQuotedMessage && !!nextQuotedMessage && typeof prevQuotedMessage !== 'boolean' && typeof nextQuotedMessage !== 'boolean' ? prevQuotedMessage.id === nextQuotedMessage.id : !!prevQuotedMessage === !!nextQuotedMessage;
  if (!quotedMessageEqual) return false;
  var sendingEqual = prevSending.current === nextSending.current;
  if (!sendingEqual) return false;
  var showMoreOptionsEqual = prevShowMoreOptions === nextShowMoreOptions;
  if (!showMoreOptionsEqual) return false;
  var isOnlineEqual = prevIsOnline === nextIsOnline;
  if (!isOnlineEqual) return false;
  var isValidMessageEqual = prevIsValidMessage() === nextIsValidMessage();
  if (!isValidMessageEqual) return false;
  var asyncUploadsEqual = Object.keys(prevAsyncUploads).every(function (key) {
    return prevAsyncUploads[key].state === nextAsyncUploads[key].state && prevAsyncUploads[key].url === nextAsyncUploads[key].url;
  });
  if (!asyncUploadsEqual) return false;
  var fileUploadsEqual = prevFileUploads.length === nextFileUploads.length;
  if (!fileUploadsEqual) return false;
  var mentionedUsersEqual = prevMentionedUsers.length === nextMentionedUsers.length;
  if (!mentionedUsersEqual) return false;
  var suggestionsEqual = !!(prevSuggestions != null && prevSuggestions.data) && !!(nextSuggestions != null && nextSuggestions.data) ? prevSuggestions.data.length === nextSuggestions.data.length && prevSuggestions.data.every(function (_ref7, index) {
    var name = _ref7.name;
    return name === nextSuggestions.data[index].name;
  }) : !!prevSuggestions === !!nextSuggestions;
  if (!suggestionsEqual) return false;
  var threadEqual = (prevThread == null ? void 0 : prevThread.id) === (nextThread == null ? void 0 : nextThread.id) && (prevThread == null ? void 0 : prevThread.text) === (nextThread == null ? void 0 : nextThread.text) && (prevThread == null ? void 0 : prevThread.reply_count) === (nextThread == null ? void 0 : nextThread.reply_count);
  if (!threadEqual) return false;
  var threadListEqual = prevThreadList === nextThreadList;
  if (!threadListEqual) return false;
  return true;
};
var MemoizedMessageInput = _react["default"].memo(MessageInputWithContext, areEqual);
var MessageInput = function MessageInput(props) {
  var _useAttachmentPickerC2 = (0, _AttachmentPickerContext.useAttachmentPickerContext)(),
    AttachmentPickerSelectionBar = _useAttachmentPickerC2.AttachmentPickerSelectionBar;
  var _useChatContext = (0, _contexts.useChatContext)(),
    isOnline = _useChatContext.isOnline;
  var ownCapabilities = (0, _contexts.useOwnCapabilitiesContext)();
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
    disabled = _useChannelContext.disabled,
    members = _useChannelContext.members,
    threadList = _useChannelContext.threadList,
    watchers = _useChannelContext.watchers;
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
    additionalTextInputProps = _useMessageInputConte.additionalTextInputProps,
    asyncIds = _useMessageInputConte.asyncIds,
    asyncMessagesLockDistance = _useMessageInputConte.asyncMessagesLockDistance,
    asyncMessagesMinimumPressDuration = _useMessageInputConte.asyncMessagesMinimumPressDuration,
    asyncMessagesMultiSendEnabled = _useMessageInputConte.asyncMessagesMultiSendEnabled,
    asyncMessagesSlideToCancelDistance = _useMessageInputConte.asyncMessagesSlideToCancelDistance,
    asyncUploads = _useMessageInputConte.asyncUploads,
    AudioRecorder = _useMessageInputConte.AudioRecorder,
    audioRecordingEnabled = _useMessageInputConte.audioRecordingEnabled,
    AudioRecordingInProgress = _useMessageInputConte.AudioRecordingInProgress,
    AudioRecordingLockIndicator = _useMessageInputConte.AudioRecordingLockIndicator,
    AudioRecordingPreview = _useMessageInputConte.AudioRecordingPreview,
    AudioRecordingWaveform = _useMessageInputConte.AudioRecordingWaveform,
    clearEditingState = _useMessageInputConte.clearEditingState,
    clearQuotedMessageState = _useMessageInputConte.clearQuotedMessageState,
    closeAttachmentPicker = _useMessageInputConte.closeAttachmentPicker,
    cooldownEndsAt = _useMessageInputConte.cooldownEndsAt,
    CooldownTimer = _useMessageInputConte.CooldownTimer,
    editing = _useMessageInputConte.editing,
    FileUploadPreview = _useMessageInputConte.FileUploadPreview,
    fileUploads = _useMessageInputConte.fileUploads,
    giphyActive = _useMessageInputConte.giphyActive,
    ImageUploadPreview = _useMessageInputConte.ImageUploadPreview,
    imageUploads = _useMessageInputConte.imageUploads,
    Input = _useMessageInputConte.Input,
    inputBoxRef = _useMessageInputConte.inputBoxRef,
    InputButtons = _useMessageInputConte.InputButtons,
    InputEditingStateHeader = _useMessageInputConte.InputEditingStateHeader,
    InputGiphySearch = _useMessageInputConte.InputGiphySearch,
    InputReplyStateHeader = _useMessageInputConte.InputReplyStateHeader,
    isValidMessage = _useMessageInputConte.isValidMessage,
    maxNumberOfFiles = _useMessageInputConte.maxNumberOfFiles,
    mentionedUsers = _useMessageInputConte.mentionedUsers,
    numberOfUploads = _useMessageInputConte.numberOfUploads,
    quotedMessage = _useMessageInputConte.quotedMessage,
    removeFile = _useMessageInputConte.removeFile,
    removeImage = _useMessageInputConte.removeImage,
    resetInput = _useMessageInputConte.resetInput,
    SendButton = _useMessageInputConte.SendButton,
    sending = _useMessageInputConte.sending,
    sendMessageAsync = _useMessageInputConte.sendMessageAsync,
    SendMessageDisallowedIndicator = _useMessageInputConte.SendMessageDisallowedIndicator,
    setGiphyActive = _useMessageInputConte.setGiphyActive,
    setShowMoreOptions = _useMessageInputConte.setShowMoreOptions,
    showMoreOptions = _useMessageInputConte.showMoreOptions,
    ShowThreadMessageInChannelButton = _useMessageInputConte.ShowThreadMessageInChannelButton,
    StartAudioRecordingButton = _useMessageInputConte.StartAudioRecordingButton,
    text = _useMessageInputConte.text,
    uploadNewFile = _useMessageInputConte.uploadNewFile,
    uploadNewImage = _useMessageInputConte.uploadNewImage;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    Reply = _useMessagesContext.Reply;
  var _useSuggestionsContex = (0, _SuggestionsContext.useSuggestionsContext)(),
    AutoCompleteSuggestionHeader = _useSuggestionsContex.AutoCompleteSuggestionHeader,
    AutoCompleteSuggestionItem = _useSuggestionsContex.AutoCompleteSuggestionItem,
    AutoCompleteSuggestionList = _useSuggestionsContex.AutoCompleteSuggestionList,
    suggestions = _useSuggestionsContex.suggestions,
    triggerType = _useSuggestionsContex.triggerType;
  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
    thread = _useThreadContext.thread;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  if (!editing && disabled && !ownCapabilities.sendMessage && SendMessageDisallowedIndicator) {
    return (0, _jsxRuntime.jsx)(SendMessageDisallowedIndicator, {});
  }
  return (0, _jsxRuntime.jsx)(MemoizedMessageInput, Object.assign({
    additionalTextInputProps: additionalTextInputProps,
    asyncIds: asyncIds,
    asyncMessagesLockDistance: asyncMessagesLockDistance,
    asyncMessagesMinimumPressDuration: asyncMessagesMinimumPressDuration,
    asyncMessagesMultiSendEnabled: asyncMessagesMultiSendEnabled,
    asyncMessagesSlideToCancelDistance: asyncMessagesSlideToCancelDistance,
    asyncUploads: asyncUploads,
    AttachmentPickerSelectionBar: AttachmentPickerSelectionBar,
    AudioRecorder: AudioRecorder,
    audioRecordingEnabled: audioRecordingEnabled,
    AudioRecordingInProgress: AudioRecordingInProgress,
    AudioRecordingLockIndicator: AudioRecordingLockIndicator,
    AudioRecordingPreview: AudioRecordingPreview,
    AudioRecordingWaveform: AudioRecordingWaveform,
    AutoCompleteSuggestionHeader: AutoCompleteSuggestionHeader,
    AutoCompleteSuggestionItem: AutoCompleteSuggestionItem,
    AutoCompleteSuggestionList: AutoCompleteSuggestionList,
    clearEditingState: clearEditingState,
    clearQuotedMessageState: clearQuotedMessageState,
    closeAttachmentPicker: closeAttachmentPicker,
    cooldownEndsAt: cooldownEndsAt,
    CooldownTimer: CooldownTimer,
    editing: editing,
    FileUploadPreview: FileUploadPreview,
    fileUploads: fileUploads,
    giphyActive: giphyActive,
    ImageUploadPreview: ImageUploadPreview,
    imageUploads: imageUploads,
    Input: Input,
    inputBoxRef: inputBoxRef,
    InputButtons: InputButtons,
    InputEditingStateHeader: InputEditingStateHeader,
    InputGiphySearch: InputGiphySearch,
    InputReplyStateHeader: InputReplyStateHeader,
    isOnline: isOnline,
    isValidMessage: isValidMessage,
    maxNumberOfFiles: maxNumberOfFiles,
    members: members,
    mentionedUsers: mentionedUsers,
    numberOfUploads: numberOfUploads,
    quotedMessage: quotedMessage,
    removeFile: removeFile,
    removeImage: removeImage,
    Reply: Reply,
    resetInput: resetInput,
    SendButton: SendButton,
    sending: sending,
    sendMessageAsync: sendMessageAsync,
    SendMessageDisallowedIndicator: SendMessageDisallowedIndicator,
    setGiphyActive: setGiphyActive,
    setShowMoreOptions: setShowMoreOptions,
    showMoreOptions: showMoreOptions,
    ShowThreadMessageInChannelButton: ShowThreadMessageInChannelButton,
    StartAudioRecordingButton: StartAudioRecordingButton,
    suggestions: suggestions,
    t: t,
    text: text,
    thread: thread,
    threadList: threadList,
    triggerType: triggerType,
    uploadNewFile: uploadNewFile,
    uploadNewImage: uploadNewImage,
    watchers: watchers
  }, props));
};
exports.MessageInput = MessageInput;
MessageInput.displayName = 'MessageInput{messageInput}';
//# sourceMappingURL=MessageInput.js.map