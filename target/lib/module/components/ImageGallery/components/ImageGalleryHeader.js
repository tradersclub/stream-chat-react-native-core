var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageGalleryHeader = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _OverlayContext = require("../../../contexts/overlayContext/OverlayContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _icons = require("../../../icons");
var _getDateString = require("../../../utils/i18n/getDateString");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ImageGallery/components/ImageGalleryHeader.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ReanimatedSafeAreaView = _reactNativeReanimated["default"].createAnimatedComponent ? _reactNativeReanimated["default"].createAnimatedComponent(_reactNative.SafeAreaView) : _reactNative.SafeAreaView;
var styles = _reactNative.StyleSheet.create({
  centerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  date: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
    opacity: 0.5
  },
  innerContainer: {
    flexDirection: 'row',
    height: 56
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 8
  },
  rightContainer: {
    marginRight: 8,
    width: 24
  },
  userName: {
    fontSize: 16,
    fontWeight: '700'
  }
});
var ImageGalleryHeader = function ImageGalleryHeader(props) {
  var _photo$user, _photo$user2;
  var centerElement = props.centerElement,
    CloseIcon = props.CloseIcon,
    leftElement = props.leftElement,
    opacity = props.opacity,
    photo = props.photo,
    rightElement = props.rightElement,
    visible = props.visible;
  var _useState = (0, _react.useState)(200),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    height = _useState2[0],
    setHeight = _useState2[1];
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    black = _useTheme$theme$color.black,
    white = _useTheme$theme$color.white,
    _useTheme$theme$image = _useTheme$theme.imageGallery.header,
    centerContainer = _useTheme$theme$image.centerContainer,
    container = _useTheme$theme$image.container,
    dateText = _useTheme$theme$image.dateText,
    innerContainer = _useTheme$theme$image.innerContainer,
    leftContainer = _useTheme$theme$image.leftContainer,
    rightContainer = _useTheme$theme$image.rightContainer,
    usernameText = _useTheme$theme$image.usernameText;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t,
    tDateTimeParser = _useTranslationContex.tDateTimeParser;
  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
    setOverlay = _useOverlayContext.setOverlay;
  var date = (0, _react.useMemo)(function () {
    return (0, _getDateString.getDateString)({
      date: photo == null ? void 0 : photo.created_at,
      t: t,
      tDateTimeParser: tDateTimeParser,
      timestampTranslationKey: 'timestamp/ImageGalleryHeader'
    });
  }, [photo == null ? void 0 : photo.created_at, t, tDateTimeParser]);
  var headerStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      opacity: opacity.value,
      transform: [{
        translateY: (0, _reactNativeReanimated.interpolate)(visible.value, [0, 1], [-height, 0], _reactNativeReanimated.Extrapolate.CLAMP)
      }]
    };
  });
  var hideOverlay = function hideOverlay() {
    setOverlay('none');
  };
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    onLayout: function onLayout(event) {
      return setHeight(event.nativeEvent.layout.height);
    },
    pointerEvents: 'box-none',
    children: (0, _jsxRuntime.jsx)(ReanimatedSafeAreaView, {
      style: [{
        backgroundColor: white
      }, container, headerStyle],
      children: (0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: [styles.innerContainer, innerContainer],
        children: [leftElement ? leftElement({
          hideOverlay: hideOverlay,
          photo: photo
        }) : (0, _jsxRuntime.jsx)(_reactNative.Pressable, {
          accessibilityLabel: "Hide Overlay",
          onPress: hideOverlay,
          children: (0, _jsxRuntime.jsx)(_reactNative.View, {
            style: [styles.leftContainer, leftContainer],
            children: CloseIcon ? CloseIcon : (0, _jsxRuntime.jsx)(_icons.Close, {})
          })
        }), centerElement ? centerElement({
          hideOverlay: hideOverlay,
          photo: photo
        }) : (0, _jsxRuntime.jsxs)(_reactNative.View, {
          style: [styles.centerContainer, centerContainer],
          children: [(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [styles.userName, {
              color: black
            }, usernameText],
            children: (photo == null ? void 0 : (_photo$user = photo.user) == null ? void 0 : _photo$user.name) || (photo == null ? void 0 : (_photo$user2 = photo.user) == null ? void 0 : _photo$user2.id) || t('Unknown User')
          }), date && (0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [styles.date, {
              color: black
            }, dateText],
            children: date
          })]
        }), rightElement ? rightElement({
          hideOverlay: hideOverlay,
          photo: photo
        }) : (0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [styles.rightContainer, rightContainer]
        })]
      })
    })
  });
};
exports.ImageGalleryHeader = ImageGalleryHeader;
ImageGalleryHeader.displayName = 'ImageGalleryHeader{imageGallery{header}}';
//# sourceMappingURL=ImageGalleryHeader.js.map