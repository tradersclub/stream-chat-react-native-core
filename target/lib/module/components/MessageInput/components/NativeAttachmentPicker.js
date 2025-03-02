var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NativeAttachmentPicker = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _MessageInputContext = require("../../../contexts/messageInputContext/MessageInputContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _CameraSelectorIcon = require("../../AttachmentPicker/components/CameraSelectorIcon");
var _FileSelectorIcon = require("../../AttachmentPicker/components/FileSelectorIcon");
var _ImageSelectorIcon = require("../../AttachmentPicker/components/ImageSelectorIcon");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/components/NativeAttachmentPicker.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var TOP_PADDING = 4;
var ATTACH_MARGIN_BOTTOM = 4;
var NativeAttachmentPicker = function NativeAttachmentPicker(_ref) {
  var _attachButtonLayoutRe, _attachButtonLayoutRe2, _attachButtonLayoutRe3;
  var attachButtonLayoutRectangle = _ref.attachButtonLayoutRectangle,
    onRequestedClose = _ref.onRequestedClose;
  var size = (_attachButtonLayoutRe = attachButtonLayoutRectangle == null ? void 0 : attachButtonLayoutRectangle.width) != null ? _attachButtonLayoutRe : 0;
  var attachButtonItemSize = 40;
  var NUMBER_OF_BUTTONS = 3;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    grey_whisper = _useTheme$theme.colors.grey_whisper,
    _useTheme$theme$messa = _useTheme$theme.messageInput.nativeAttachmentPicker,
    buttonContainer = _useTheme$theme$messa.buttonContainer,
    buttonDimmerStyleTheme = _useTheme$theme$messa.buttonDimmerStyle,
    container = _useTheme$theme$messa.container;
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
    hasFilePicker = _useMessageInputConte.hasFilePicker,
    hasImagePicker = _useMessageInputConte.hasImagePicker,
    pickAndUploadImageFromNativePicker = _useMessageInputConte.pickAndUploadImageFromNativePicker,
    pickFile = _useMessageInputConte.pickFile,
    takeAndUploadImage = _useMessageInputConte.takeAndUploadImage;
  var popupHeight = TOP_PADDING + ATTACH_MARGIN_BOTTOM * NUMBER_OF_BUTTONS + attachButtonItemSize * NUMBER_OF_BUTTONS;
  var containerPopupStyle = {
    borderTopEndRadius: size / 2,
    borderTopStartRadius: size / 2,
    height: popupHeight,
    left: attachButtonLayoutRectangle == null ? void 0 : attachButtonLayoutRectangle.x,
    top: ((_attachButtonLayoutRe2 = attachButtonLayoutRectangle == null ? void 0 : attachButtonLayoutRectangle.y) != null ? _attachButtonLayoutRe2 : 0) - popupHeight,
    width: size
  };
  var elasticAnimRef = (0, _react.useRef)(new _reactNative.Animated.Value(0.5));
  (0, _react.useEffect)(function () {
    _reactNative.Animated.timing(elasticAnimRef.current, {
      duration: 150,
      easing: _reactNative.Easing.linear,
      toValue: 1,
      useNativeDriver: true
    }).start();
  }, []);
  var buttonStyle = {
    borderRadius: attachButtonItemSize / 2,
    height: attachButtonItemSize,
    width: attachButtonItemSize
  };
  var buttonDimmerStyle = Object.assign({}, styles.attachButtonDimmer, {
    height: size,
    left: attachButtonLayoutRectangle == null ? void 0 : attachButtonLayoutRectangle.x,
    top: (_attachButtonLayoutRe3 = attachButtonLayoutRectangle == null ? void 0 : attachButtonLayoutRectangle.y) != null ? _attachButtonLayoutRe3 : 0 - popupHeight + size,
    width: size
  });
  var onClose = function onClose(_ref2) {
    var onPressHandler = _ref2.onPressHandler;
    if (onPressHandler) {
      onPressHandler();
    }
    _reactNative.Animated.timing(elasticAnimRef.current, {
      duration: 150,
      easing: _reactNative.Easing.linear,
      toValue: 0.2,
      useNativeDriver: true
    }).start(onRequestedClose);
  };
  var buttons = [];
  if (hasImagePicker) {
    buttons.push({
      icon: (0, _jsxRuntime.jsx)(_ImageSelectorIcon.ImageSelectorIcon, {}),
      id: 'Image',
      onPressHandler: pickAndUploadImageFromNativePicker
    });
  }
  if (hasFilePicker) {
    buttons.push({
      icon: (0, _jsxRuntime.jsx)(_FileSelectorIcon.FileSelectorIcon, {}),
      id: 'File',
      onPressHandler: pickFile
    });
  }
  buttons.push({
    icon: (0, _jsxRuntime.jsx)(_CameraSelectorIcon.CameraSelectorIcon, {}),
    id: 'Camera',
    onPressHandler: takeAndUploadImage
  });
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
      onPress: function onPress() {
        onClose({});
      },
      style: [styles.container, containerPopupStyle, container],
      children: buttons.map(function (_ref3) {
        var icon = _ref3.icon,
          id = _ref3.id,
          onPressHandler = _ref3.onPressHandler;
        return (0, _jsxRuntime.jsx)(_reactNative.Pressable, {
          onPress: function onPress() {
            return onClose({
              onPressHandler: onPressHandler
            });
          },
          children: (0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
            style: [styles.buttonContainer, buttonStyle, {
              backgroundColor: grey_whisper
            }, {
              transform: [{
                scaleY: elasticAnimRef.current
              }, {
                scaleX: elasticAnimRef.current
              }]
            }, buttonContainer],
            children: icon
          })
        }, id);
      })
    }), (0, _jsxRuntime.jsx)(_reactNative.Pressable, {
      onPress: function onPress() {
        return onClose({});
      },
      style: [buttonDimmerStyle, buttonDimmerStyleTheme]
    })]
  });
};
exports.NativeAttachmentPicker = NativeAttachmentPicker;
var styles = _reactNative.StyleSheet.create({
  attachButtonDimmer: {
    opacity: 0,
    position: 'absolute'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: ATTACH_MARGIN_BOTTOM
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: TOP_PADDING,
    position: 'absolute'
  }
});
//# sourceMappingURL=NativeAttachmentPicker.js.map