var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUploadPreview = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _UploadProgressIndicator = require("./UploadProgressIndicator");
var _contexts = require("../../contexts");
var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");
var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _Close = require("../../icons/Close");
var _Warning = require("../../icons/Warning");
var _native = require("../../native");
var _getTrimmedAttachmentTitle = require("../../utils/getTrimmedAttachmentTitle");
var _utils = require("../../utils/utils");
var _FileAttachment = require("../Attachment/FileAttachment");
var _WritingDirectionAwareText = require("../RTLComponents/WritingDirectionAwareText");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/FileUploadPreview.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var FILE_PREVIEW_HEIGHT = 60;
var WARNING_ICON_SIZE = 16;
var styles = _reactNative.StyleSheet.create({
  dismiss: {
    borderRadius: 24,
    height: 24,
    marginRight: 4,
    position: 'absolute',
    right: 8,
    top: 8,
    width: 24
  },
  fileContainer: {
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 8
  },
  fileIcon: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  filenameText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  fileSizeText: {
    fontSize: 12,
    marginTop: 10
  },
  fileTextContainer: {
    justifyContent: 'space-around',
    marginVertical: 10,
    paddingHorizontal: 10
  },
  flatList: {
    marginBottom: 12,
    maxHeight: FILE_PREVIEW_HEIGHT * 2.5 + 16
  },
  overlay: {
    borderRadius: 12,
    marginHorizontal: 8,
    marginTop: 2
  },
  unsupportedFile: {
    flexDirection: 'row',
    paddingTop: 10
  },
  unsupportedFileText: {
    fontSize: 12,
    marginHorizontal: 4
  },
  warningIconStyle: {
    borderRadius: 24,
    marginTop: 2
  }
});
var UnsupportedFileTypeOrFileSizeIndicator = function UnsupportedFileTypeOrFileSizeIndicator(_ref) {
  var indicatorType = _ref.indicatorType,
    item = _ref.item;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_red = _useTheme$theme$color.accent_red,
    grey = _useTheme$theme$color.grey,
    grey_dark = _useTheme$theme$color.grey_dark,
    fileSizeText = _useTheme$theme.messageInput.fileUploadPreview.fileSizeText;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  return indicatorType === _utils.ProgressIndicatorTypes.NOT_SUPPORTED ? (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.unsupportedFile,
    children: [(0, _jsxRuntime.jsx)(_Warning.Warning, {
      height: WARNING_ICON_SIZE,
      pathFill: accent_red,
      style: styles.warningIconStyle,
      width: WARNING_ICON_SIZE
    }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.unsupportedFileText, {
        color: grey_dark
      }],
      children: t('File type not supported')
    })]
  }) : (0, _jsxRuntime.jsx)(_WritingDirectionAwareText.WritingDirectionAwareText, {
    style: [styles.fileSizeText, {
      color: grey
    }, fileSizeText],
    children: item.file.duration ? (0, _utils.getDurationLabelFromDuration)(item.file.duration) : (0, _FileAttachment.getFileSizeDisplayText)(item.file.size)
  });
};
var FileUploadPreviewWithContext = function FileUploadPreviewWithContext(props) {
  var AudioAttachmentUploadPreview = props.AudioAttachmentUploadPreview,
    enableOfflineSupport = props.enableOfflineSupport,
    FileAttachmentIcon = props.FileAttachmentIcon,
    fileUploads = props.fileUploads,
    removeFile = props.removeFile,
    setFileUploads = props.setFileUploads,
    uploadFile = props.uploadFile;
  var flatListRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    flatListWidth = _useState2[0],
    setFlatListWidth = _useState2[1];
  (0, _react.useEffect)(function () {
    setFileUploads(fileUploads.map(function (file) {
      return Object.assign({}, file, {
        duration: file.duration || 0,
        paused: true,
        progress: 0
      });
    }));
  }, [fileUploads.length]);
  var onLoad = function onLoad(index, duration) {
    setFileUploads(function (prevFileUploads) {
      return prevFileUploads.map(function (fileUpload) {
        return Object.assign({}, fileUpload, {
          duration: fileUpload.id === index ? duration : fileUpload.duration,
          file: Object.assign({}, fileUpload.file, {
            duration: fileUpload.id === index ? duration : fileUpload.duration
          })
        });
      });
    });
  };
  var onProgress = function onProgress(index, currentTime, hasEnd) {
    setFileUploads(function (prevFileUploads) {
      return prevFileUploads.map(function (fileUpload) {
        return Object.assign({}, fileUpload, {
          progress: fileUpload.id === index ? hasEnd ? 1 : currentTime ? currentTime / fileUpload.duration : 0 : fileUpload.progress
        });
      });
    });
  };
  var onPlayPause = function onPlayPause(index, pausedStatus) {
    if (pausedStatus === false) {
      setFileUploads(function (prevFileUploads) {
        return prevFileUploads.map(function (fileUpload) {
          return Object.assign({}, fileUpload, {
            paused: fileUpload.id !== index
          });
        });
      });
    } else {
      setFileUploads(function (prevFileUploads) {
        return prevFileUploads.map(function (fileUpload) {
          return Object.assign({}, fileUpload, {
            paused: true
          });
        });
      });
    }
  };
  var _useTheme2 = (0, _ThemeContext.useTheme)(),
    _useTheme2$theme = _useTheme2.theme,
    _useTheme2$theme$colo = _useTheme2$theme.colors,
    black = _useTheme2$theme$colo.black,
    grey_dark = _useTheme2$theme$colo.grey_dark,
    grey_gainsboro = _useTheme2$theme$colo.grey_gainsboro,
    grey_whisper = _useTheme2$theme$colo.grey_whisper,
    _useTheme2$theme$mess = _useTheme2$theme.messageInput.fileUploadPreview,
    dismiss = _useTheme2$theme$mess.dismiss,
    fileContainer = _useTheme2$theme$mess.fileContainer,
    filenameText = _useTheme2$theme$mess.filenameText,
    fileTextContainer = _useTheme2$theme$mess.fileTextContainer,
    flatList = _useTheme2$theme$mess.flatList;
  var renderItem = function renderItem(_ref2) {
    var _item$file$mimeType;
    var item = _ref2.item;
    var indicatorType = (0, _utils.getIndicatorTypeForFileState)(item.state, enableOfflineSupport);
    return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [(0, _jsxRuntime.jsx)(_UploadProgressIndicator.UploadProgressIndicator, {
        action: function action() {
          uploadFile({
            newFile: item
          });
        },
        style: styles.overlay,
        type: indicatorType,
        children: (_item$file$mimeType = item.file.mimeType) != null && _item$file$mimeType.startsWith('audio/') && (0, _native.isAudioPackageAvailable)() ? (0, _jsxRuntime.jsx)(AudioAttachmentUploadPreview, {
          hideProgressBar: true,
          item: item,
          onLoad: onLoad,
          onPlayPause: onPlayPause,
          onProgress: onProgress,
          testID: "audio-attachment-upload-preview"
        }) : (0, _jsxRuntime.jsxs)(_reactNative.View, {
          style: [styles.fileContainer, {
            borderColor: grey_whisper
          }, fileContainer],
          children: [(0, _jsxRuntime.jsx)(_reactNative.View, {
            style: styles.fileIcon,
            children: (0, _jsxRuntime.jsx)(FileAttachmentIcon, {
              mimeType: item.file.mimeType
            })
          }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
            style: [styles.fileTextContainer, fileTextContainer],
            children: [(0, _jsxRuntime.jsx)(_reactNative.Text, {
              numberOfLines: 1,
              style: [styles.filenameText, {
                color: black,
                width: flatListWidth - 16 - 40 - 24 - 24
              }, _reactNative.I18nManager.isRTL ? {
                writingDirection: 'rtl'
              } : {
                writingDirection: 'ltr'
              }, filenameText],
              children: (0, _getTrimmedAttachmentTitle.getTrimmedAttachmentTitle)(item.file.name)
            }), indicatorType !== null && (0, _jsxRuntime.jsx)(UnsupportedFileTypeOrFileSizeIndicator, {
              indicatorType: indicatorType,
              item: item
            })]
          })]
        })
      }), (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
        onPress: function onPress() {
          removeFile(item.id);
        },
        style: [styles.dismiss, {
          backgroundColor: grey_gainsboro
        }, dismiss],
        testID: "remove-file-upload-preview",
        children: (0, _jsxRuntime.jsx)(_Close.Close, {
          pathFill: grey_dark
        })
      })]
    });
  };
  var fileUploadsLength = fileUploads.length;
  (0, _react.useEffect)(function () {
    if (fileUploadsLength && flatListRef.current) {
      setTimeout(function () {
        var _flatListRef$current;
        return (_flatListRef$current = flatListRef.current) == null ? void 0 : _flatListRef$current.scrollToEnd();
      }, 1);
    }
  }, [fileUploadsLength]);
  return fileUploadsLength ? (0, _jsxRuntime.jsx)(_reactNative.FlatList, {
    data: fileUploads,
    getItemLayout: function getItemLayout(_, index) {
      return {
        index: index,
        length: FILE_PREVIEW_HEIGHT + 8,
        offset: (FILE_PREVIEW_HEIGHT + 8) * index
      };
    },
    keyExtractor: function keyExtractor(item) {
      return "".concat(item.id);
    },
    onLayout: function onLayout(_ref3) {
      var width = _ref3.nativeEvent.layout.width;
      setFlatListWidth(width);
    },
    ref: flatListRef,
    renderItem: renderItem,
    style: [styles.flatList, flatList]
  }) : null;
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevFileUploads = prevProps.fileUploads;
  var nextFileUploads = nextProps.fileUploads;
  return prevFileUploads.length === nextFileUploads.length && prevFileUploads.every(function (prevFileUpload, index) {
    return prevFileUpload.state === nextFileUploads[index].state && prevFileUpload.paused === nextFileUploads[index].paused && prevFileUpload.progress === nextFileUploads[index].progress && prevFileUpload.duration === nextFileUploads[index].duration;
  });
};
var MemoizedFileUploadPreview = _react["default"].memo(FileUploadPreviewWithContext, areEqual);
var FileUploadPreview = function FileUploadPreview(props) {
  var _useChatContext = (0, _contexts.useChatContext)(),
    enableOfflineSupport = _useChatContext.enableOfflineSupport;
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
    AudioAttachmentUploadPreview = _useMessageInputConte.AudioAttachmentUploadPreview,
    fileUploads = _useMessageInputConte.fileUploads,
    removeFile = _useMessageInputConte.removeFile,
    setFileUploads = _useMessageInputConte.setFileUploads,
    uploadFile = _useMessageInputConte.uploadFile;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    FileAttachmentIcon = _useMessagesContext.FileAttachmentIcon;
  return (0, _jsxRuntime.jsx)(MemoizedFileUploadPreview, Object.assign({
    AudioAttachmentUploadPreview: AudioAttachmentUploadPreview,
    FileAttachmentIcon: FileAttachmentIcon,
    fileUploads: fileUploads,
    removeFile: removeFile,
    setFileUploads: setFileUploads,
    uploadFile: uploadFile,
    enableOfflineSupport: enableOfflineSupport
  }, props));
};
exports.FileUploadPreview = FileUploadPreview;
FileUploadPreview.displayName = 'FileUploadPreview{messageInput{fileUploadPreview}}';
//# sourceMappingURL=FileUploadPreview.js.map