var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachmentPickerSelectionBar = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _AttachmentPickerContext = require("../../../contexts/attachmentPickerContext/AttachmentPickerContext");
var _MessageInputContext = require("../../../contexts/messageInputContext/MessageInputContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AttachmentPicker/components/AttachmentPickerSelectionBar.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 6
  },
  icon: {
    marginHorizontal: 12
  }
});
var AttachmentPickerSelectionBar = function AttachmentPickerSelectionBar() {
  var _useAttachmentPickerC = (0, _AttachmentPickerContext.useAttachmentPickerContext)(),
    attachmentSelectionBarHeight = _useAttachmentPickerC.attachmentSelectionBarHeight,
    CameraSelectorIcon = _useAttachmentPickerC.CameraSelectorIcon,
    closePicker = _useAttachmentPickerC.closePicker,
    FileSelectorIcon = _useAttachmentPickerC.FileSelectorIcon,
    ImageSelectorIcon = _useAttachmentPickerC.ImageSelectorIcon,
    selectedPicker = _useAttachmentPickerC.selectedPicker,
    setSelectedPicker = _useAttachmentPickerC.setSelectedPicker;
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
    hasCameraPicker = _useMessageInputConte.hasCameraPicker,
    hasFilePicker = _useMessageInputConte.hasFilePicker,
    imageUploads = _useMessageInputConte.imageUploads,
    pickFile = _useMessageInputConte.pickFile,
    takeAndUploadImage = _useMessageInputConte.takeAndUploadImage;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme$attac = _useTheme.theme.attachmentSelectionBar,
    container = _useTheme$theme$attac.container,
    icon = _useTheme$theme$attac.icon;
  var setImagePicker = function setImagePicker() {
    if (selectedPicker === 'images') {
      setSelectedPicker(undefined);
      closePicker();
    } else {
      setSelectedPicker('images');
    }
  };
  var openFilePicker = function openFilePicker() {
    setSelectedPicker(undefined);
    closePicker();
    pickFile();
  };
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, container, {
      height: attachmentSelectionBarHeight
    }],
    children: [(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      hitSlop: {
        bottom: 15,
        top: 15
      },
      onPress: setImagePicker,
      testID: "upload-photo-touchable",
      children: (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.icon, icon],
        children: (0, _jsxRuntime.jsx)(ImageSelectorIcon, {
          numberOfImageUploads: imageUploads.length,
          selectedPicker: selectedPicker
        })
      })
    }), hasFilePicker ? (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      hitSlop: {
        bottom: 15,
        top: 15
      },
      onPress: openFilePicker,
      testID: "upload-file-touchable",
      children: (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.icon, icon],
        children: (0, _jsxRuntime.jsx)(FileSelectorIcon, {
          numberOfImageUploads: imageUploads.length,
          selectedPicker: selectedPicker
        })
      })
    }) : null, hasCameraPicker ? (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      hitSlop: {
        bottom: 15,
        top: 15
      },
      onPress: takeAndUploadImage,
      testID: "take-photo-touchable",
      children: (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.icon, icon],
        children: (0, _jsxRuntime.jsx)(CameraSelectorIcon, {
          numberOfImageUploads: imageUploads.length,
          selectedPicker: selectedPicker
        })
      })
    }) : null]
  });
};
exports.AttachmentPickerSelectionBar = AttachmentPickerSelectionBar;
//# sourceMappingURL=AttachmentPickerSelectionBar.js.map