var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageList = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _useMessageList2 = require("./hooks/useMessageList");
var _useShouldScrollToRecentOnNewOwnMessage = require("./hooks/useShouldScrollToRecentOnNewOwnMessage");
var _InlineLoadingMoreIndicator = require("./InlineLoadingMoreIndicator");
var _InlineLoadingMoreRecentIndicator = require("./InlineLoadingMoreRecentIndicator");
var _InlineLoadingMoreThreadIndicator = require("./InlineLoadingMoreThreadIndicator");
var _getLastReceivedMessage = require("./utils/getLastReceivedMessage");
var _AttachmentPickerContext = require("../../contexts/attachmentPickerContext/AttachmentPickerContext");
var _ChannelContext = require("../../contexts/channelContext/ChannelContext");
var _ChatContext = require("../../contexts/chatContext/ChatContext");
var _DebugContext = require("../../contexts/debugContext/DebugContext");
var _ImageGalleryContext = require("../../contexts/imageGalleryContext/ImageGalleryContext");
var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");
var _OverlayContext = require("../../contexts/overlayContext/OverlayContext");
var _PaginatedMessageListContext = require("../../contexts/paginatedMessageListContext/PaginatedMessageListContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _ThreadContext = require("../../contexts/threadContext/ThreadContext");
var _types = require("../../types/types");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["contentContainerStyle", "style"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/MessageList.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var WAIT_FOR_SCROLL_TO_OFFSET_TIMEOUT = 150;
var MAX_RETRIES_AFTER_SCROLL_FAILURE = 10;
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%'
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 4
  },
  flex: {
    flex: 1
  },
  invertAndroid: {
    transform: [{
      scaleX: -1
    }, {
      scaleY: -1
    }]
  },
  listContainer: {
    flex: 1,
    width: '100%'
  },
  stickyHeader: {
    position: 'absolute',
    top: 0
  }
});
var InvertedCellRendererComponent = function InvertedCellRendererComponent(props) {
  return (0, _jsxRuntime.jsx)(_reactNative.View, Object.assign({}, props, {
    style: styles.invertAndroid
  }));
};
var keyExtractor = function keyExtractor(item) {
  if (item.id) return item.id;
  if (item.created_at) return typeof item.created_at === 'string' ? item.created_at : item.created_at.toISOString();
  return Date.now().toString();
};
var flatListViewabilityConfig = {
  viewAreaCoveragePercentThreshold: 1
};
var MessageListWithContext = function MessageListWithContext(props) {
  var _getLastReceivedMessa;
  var LoadingMoreIndicator = props.threadList ? _InlineLoadingMoreThreadIndicator.InlineLoadingMoreThreadIndicator : _InlineLoadingMoreIndicator.InlineLoadingMoreIndicator;
  var additionalFlatListProps = props.additionalFlatListProps,
    channel = props.channel,
    client = props.client,
    closePicker = props.closePicker,
    DateHeader = props.DateHeader,
    disabled = props.disabled,
    disableTypingIndicator = props.disableTypingIndicator,
    EmptyStateIndicator = props.EmptyStateIndicator,
    FlatList = props.FlatList,
    _props$FooterComponen = props.FooterComponent,
    FooterComponent = _props$FooterComponen === void 0 ? LoadingMoreIndicator : _props$FooterComponen,
    hasNoMoreRecentMessagesToLoad = props.hasNoMoreRecentMessagesToLoad,
    _props$HeaderComponen = props.HeaderComponent,
    HeaderComponent = _props$HeaderComponen === void 0 ? _InlineLoadingMoreRecentIndicator.InlineLoadingMoreRecentIndicator : _props$HeaderComponen,
    hideStickyDateHeader = props.hideStickyDateHeader,
    initialScrollToFirstUnreadMessage = props.initialScrollToFirstUnreadMessage,
    InlineDateSeparator = props.InlineDateSeparator,
    InlineUnreadIndicator = props.InlineUnreadIndicator,
    _props$inverted = props.inverted,
    inverted = _props$inverted === void 0 ? true : _props$inverted,
    _props$isListActive = props.isListActive,
    isListActive = _props$isListActive === void 0 ? false : _props$isListActive,
    legacyImageViewerSwipeBehaviour = props.legacyImageViewerSwipeBehaviour,
    loadChannelAroundMessage = props.loadChannelAroundMessage,
    loading = props.loading,
    LoadingIndicator = props.LoadingIndicator,
    loadMore = props.loadMore,
    loadMoreRecent = props.loadMoreRecent,
    loadMoreThread = props.loadMoreThread,
    markRead = props.markRead,
    Message = props.Message,
    MessageSystem = props.MessageSystem,
    myMessageTheme = props.myMessageTheme,
    NetworkDownIndicator = props.NetworkDownIndicator,
    noGroupByUser = props.noGroupByUser,
    onListScroll = props.onListScroll,
    onThreadSelect = props.onThreadSelect,
    overlay = props.overlay,
    reloadChannel = props.reloadChannel,
    ScrollToBottomButton = props.ScrollToBottomButton,
    selectedPicker = props.selectedPicker,
    setFlatListRef = props.setFlatListRef,
    setMessages = props.setMessages,
    setSelectedPicker = props.setSelectedPicker,
    setTargetedMessage = props.setTargetedMessage,
    StickyHeader = props.StickyHeader,
    targetedMessage = props.targetedMessage,
    thread = props.thread,
    _props$threadList = props.threadList,
    threadList = _props$threadList === void 0 ? false : _props$threadList,
    TypingIndicator = props.TypingIndicator,
    TypingIndicatorContainer = props.TypingIndicatorContainer;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme;
  var white_snow = theme.colors.white_snow,
    _theme$messageList = theme.messageList,
    container = _theme$messageList.container,
    contentContainer = _theme$messageList.contentContainer,
    listContainer = _theme$messageList.listContainer,
    messageContainer = _theme$messageList.messageContainer,
    screenPadding = theme.screenPadding;
  var myMessageThemeString = (0, _react.useMemo)(function () {
    return JSON.stringify(myMessageTheme);
  }, [myMessageTheme]);
  var modifiedTheme = (0, _react.useMemo)(function () {
    return (0, _ThemeContext.mergeThemes)({
      style: myMessageTheme,
      theme: theme
    });
  }, [myMessageThemeString, theme]);
  var _useMessageList = (0, _useMessageList2.useMessageList)({
      noGroupByUser: noGroupByUser,
      threadList: threadList
    }),
    processedMessageList = _useMessageList.processedMessageList,
    rawMessageList = _useMessageList.rawMessageList;
  var messageListLengthBeforeUpdate = (0, _react.useRef)(0);
  var messageListLengthAfterUpdate = processedMessageList.length;
  var topMessageBeforeUpdate = (0, _react.useRef)();
  var latestNonCurrentMessageBeforeUpdateRef = (0, _react.useRef)();
  var topMessageAfterUpdate = rawMessageList[0];
  var shouldScrollToRecentOnNewOwnMessageRef = (0, _useShouldScrollToRecentOnNewOwnMessage.useShouldScrollToRecentOnNewOwnMessage)(rawMessageList, client.userID);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    autoscrollToRecent = _useState2[0],
    setAutoscrollToRecent = _useState2[1];
  var onStartReachedTracker = (0, _react.useRef)({});
  var onEndReachedTracker = (0, _react.useRef)({});
  var onStartReachedInPromise = (0, _react.useRef)(null);
  var onEndReachedInPromise = (0, _react.useRef)(null);
  var flatListRef = (0, _react.useRef)(null);
  var _useState3 = (0, _react.useState)(!initialScrollToFirstUnreadMessage),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isInitialScrollDone = _useState4[0],
    setInitialScrollDone = _useState4[1];
  var channelResyncScrollSet = (0, _react.useRef)(true);
  var scrollToDebounceTimeoutRef = (0, _react.useRef)();
  var initialScrollSettingTimeoutRef = (0, _react.useRef)();
  var onScrollEventTimeoutRef = (0, _react.useRef)();
  var messageIdLastScrolledToRef = (0, _react.useRef)();
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    hasMoved = _useState6[0],
    setHasMoved = _useState6[1];
  var _useState7 = (0, _react.useState)((_getLastReceivedMessa = (0, _getLastReceivedMessage.getLastReceivedMessage)(processedMessageList)) == null ? void 0 : _getLastReceivedMessa.id),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    lastReceivedId = _useState8[0],
    setLastReceivedId = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    scrollToBottomButtonVisible = _useState10[0],
    setScrollToBottomButtonVisible = _useState10[1];
  var _useState11 = (0, _react.useState)(),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    stickyHeaderDate = _useState12[0],
    setStickyHeaderDate = _useState12[1];
  var stickyHeaderDateRef = (0, _react.useRef)();
  var channelRef = (0, _react.useRef)(channel);
  channelRef.current = channel;
  var updateStickyHeaderDateIfNeeded = function updateStickyHeaderDateIfNeeded(viewableItems) {
    if (viewableItems.length) {
      var _lastItem$item, _stickyHeaderDateRef$;
      var lastItem = viewableItems.pop();
      var isMessageTypeDeleted = lastItem.item.type === 'deleted';
      if (lastItem != null && (_lastItem$item = lastItem.item) != null && _lastItem$item.created_at && !isMessageTypeDeleted && typeof lastItem.item.created_at !== 'string' && lastItem.item.created_at.toDateString() !== ((_stickyHeaderDateRef$ = stickyHeaderDateRef.current) == null ? void 0 : _stickyHeaderDateRef$.toDateString())) {
        stickyHeaderDateRef.current = lastItem.item.created_at;
        setStickyHeaderDate(lastItem.item.created_at);
      }
    }
  };
  var onViewableItemsChanged = (0, _react.useRef)(function (_ref) {
    var viewableItems = _ref.viewableItems;
    if (_reactNative.Platform.OS === 'android' && viewableItems != null && viewableItems.length && (viewableItems == null ? void 0 : viewableItems.length) >= messageListLengthBeforeUpdate.current) {
      channel.markRead();
    }
    if (viewableItems && !hideStickyDateHeader) {
      updateStickyHeaderDateIfNeeded(viewableItems);
    }
  });
  var resetPaginationTrackersRef = (0, _react.useRef)(function () {
    onStartReachedTracker.current = {};
    onEndReachedTracker.current = {};
  });
  (0, _react.useEffect)(function () {
    if (disabled) {
      setScrollToBottomButtonVisible(false);
    }
  }, [disabled]);
  (0, _react.useEffect)(function () {
    var getShouldMarkReadAutomatically = function getShouldMarkReadAutomatically() {
      if (loading || !channel) {
        return false;
      } else if (channel.countUnread() > 0) {
        if (!initialScrollToFirstUnreadMessage) {
          return true;
        } else {
          if (scrollToBottomButtonVisible) return false;
          return isInitialScrollDone;
        }
      }
      return false;
    };
    if (getShouldMarkReadAutomatically()) {
      markRead();
    }
  }, [loading, scrollToBottomButtonVisible, isInitialScrollDone]);
  (0, _react.useEffect)(function () {
    var lastReceivedMessage = (0, _getLastReceivedMessage.getLastReceivedMessage)(processedMessageList);
    setLastReceivedId(lastReceivedMessage == null ? void 0 : lastReceivedMessage.id);
    var scrollToBottomIfNeeded = function scrollToBottomIfNeeded() {
      var _topMessageBeforeUpda;
      if (!client || !channel || rawMessageList.length === 0) {
        return;
      }
      var isMessageRemovedFromMessageList = messageListLengthAfterUpdate < messageListLengthBeforeUpdate.current;
      if (isMessageRemovedFromMessageList || (_topMessageBeforeUpda = topMessageBeforeUpdate.current) != null && _topMessageBeforeUpda.created_at && topMessageAfterUpdate != null && topMessageAfterUpdate.created_at && topMessageBeforeUpdate.current.created_at < topMessageAfterUpdate.created_at) {
        channelResyncScrollSet.current = false;
        setScrollToBottomButtonVisible(false);
        resetPaginationTrackersRef.current();
        setTimeout(function () {
          var _flatListRef$current;
          (_flatListRef$current = flatListRef.current) == null ? void 0 : _flatListRef$current.scrollToOffset({
            offset: 0
          });
        }, 50);
        setTimeout(function () {
          channelResyncScrollSet.current = true;
          if (channel.countUnread() > 0) {
            markRead();
          }
        }, 500);
      }
    };
    if (threadList || hasNoMoreRecentMessagesToLoad) {
      scrollToBottomIfNeeded();
    } else {
      setScrollToBottomButtonVisible(false);
    }
    if (!hasNoMoreRecentMessagesToLoad && flatListRef.current && messageListLengthBeforeUpdate.current === 0 && messageListLengthAfterUpdate < 10) {
      maybeCallOnStartReached(10);
    }
    messageListLengthBeforeUpdate.current = messageListLengthAfterUpdate;
    topMessageBeforeUpdate.current = topMessageAfterUpdate;
  }, [threadList, hasNoMoreRecentMessagesToLoad, messageListLengthAfterUpdate, topMessageAfterUpdate == null ? void 0 : topMessageAfterUpdate.id]);
  (0, _react.useEffect)(function () {
    if (!rawMessageList.length) return;
    if (threadList) {
      setAutoscrollToRecent(true);
      return;
    }
    var notLatestSet = channel.state.messages !== channel.state.latestMessages;
    if (notLatestSet) {
      latestNonCurrentMessageBeforeUpdateRef.current = channel.state.latestMessages[channel.state.latestMessages.length - 1];
      setAutoscrollToRecent(false);
      setScrollToBottomButtonVisible(true);
      return;
    }
    var latestNonCurrentMessageBeforeUpdate = latestNonCurrentMessageBeforeUpdateRef.current;
    latestNonCurrentMessageBeforeUpdateRef.current = undefined;
    var latestCurrentMessageAfterUpdate = rawMessageList[rawMessageList.length - 1];
    if (!latestCurrentMessageAfterUpdate) {
      setAutoscrollToRecent(true);
      return;
    }
    var didMergeMessageSetsWithNoUpdates = (latestNonCurrentMessageBeforeUpdate == null ? void 0 : latestNonCurrentMessageBeforeUpdate.id) === latestCurrentMessageAfterUpdate.id;
    setAutoscrollToRecent(!didMergeMessageSetsWithNoUpdates);
    if (!didMergeMessageSetsWithNoUpdates) {
      var shouldScrollToRecentOnNewOwnMessage = shouldScrollToRecentOnNewOwnMessageRef.current();
      if (shouldScrollToRecentOnNewOwnMessage) {
        setTimeout(function () {
          var _flatListRef$current2;
          (_flatListRef$current2 = flatListRef.current) == null ? void 0 : _flatListRef$current2.scrollToOffset({
            animated: true,
            offset: 0
          });
        }, 150);
      }
    }
  }, [rawMessageList, threadList]);
  var shouldApplyAndroidWorkaround = inverted && _reactNative.Platform.OS === 'android';
  var renderItem = function renderItem(_ref2) {
    var _message$user;
    var index = _ref2.index,
      message = _ref2.item;
    if (!channel || channel.disconnected || !channel.initialized && !channel.offlineMode) return null;
    var unreadCount = channel.countUnread();
    var lastRead = channel.lastRead();
    function isMessageUnread(messageArrayIndex) {
      var isLatestMessageSetShown = !!channel.state.messageSets.find(function (set) {
        return set.isCurrent && set.isLatest;
      });
      if (!isLatestMessageSetShown) {
        var msg = processedMessageList == null ? void 0 : processedMessageList[messageArrayIndex];
        if (channel.state.latestMessages.length !== 0 && unreadCount > channel.state.latestMessages.length) {
          return messageArrayIndex <= unreadCount - channel.state.latestMessages.length - 1;
        } else if (lastRead && msg != null && msg.created_at) {
          return lastRead < msg.created_at;
        }
        return false;
      } else {
        return messageArrayIndex <= unreadCount - 1;
      }
    }
    var isCurrentMessageUnread = isMessageUnread(index);
    var showUnreadUnderlay = !channel.muteStatus().muted && isCurrentMessageUnread && scrollToBottomButtonVisible;
    var insertInlineUnreadIndicator = showUnreadUnderlay && !isMessageUnread(index + 1);
    if (message.type === 'system') {
      return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [(0, _jsxRuntime.jsx)(_reactNative.View, {
          testID: "message-list-item-".concat(index),
          children: (0, _jsxRuntime.jsx)(MessageSystem, {
            message: message,
            style: [{
              paddingHorizontal: screenPadding
            }, messageContainer]
          })
        }), insertInlineUnreadIndicator && (0, _jsxRuntime.jsx)(InlineUnreadIndicator, {})]
      });
    }
    var wrapMessageInTheme = client.userID === ((_message$user = message.user) == null ? void 0 : _message$user.id) && !!myMessageTheme;
    var renderDateSeperator = (0, _useMessageList2.isMessageWithStylesReadByAndDateSeparator)(message) && message.dateSeparator && (0, _jsxRuntime.jsx)(InlineDateSeparator, {
      date: message.dateSeparator
    });
    var renderMessage = (0, _jsxRuntime.jsx)(Message, {
      goToMessage: goToMessage,
      groupStyles: (0, _useMessageList2.isMessageWithStylesReadByAndDateSeparator)(message) ? message.groupStyles : [],
      isTargetedMessage: targetedMessage === message.id,
      lastReceivedId: lastReceivedId === message.id || message.quoted_message_id ? lastReceivedId : undefined,
      message: message,
      onThreadSelect: onThreadSelect,
      showUnreadUnderlay: showUnreadUnderlay,
      style: [{
        paddingHorizontal: screenPadding
      }, messageContainer],
      threadList: threadList
    });
    return wrapMessageInTheme ? (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [shouldApplyAndroidWorkaround && renderDateSeperator, (0, _jsxRuntime.jsx)(_ThemeContext.ThemeProvider, {
        mergedStyle: modifiedTheme,
        children: (0, _jsxRuntime.jsx)(_reactNative.View, {
          testID: "message-list-item-".concat(index),
          children: renderMessage
        })
      }), !shouldApplyAndroidWorkaround && renderDateSeperator, insertInlineUnreadIndicator && (0, _jsxRuntime.jsx)(InlineUnreadIndicator, {})]
    }) : (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [(0, _jsxRuntime.jsxs)(_reactNative.View, {
        testID: "message-list-item-".concat(index),
        children: [shouldApplyAndroidWorkaround && renderDateSeperator, renderMessage]
      }), !shouldApplyAndroidWorkaround && renderDateSeperator, insertInlineUnreadIndicator && (0, _jsxRuntime.jsx)(InlineUnreadIndicator, {})]
    });
  };
  var maybeCallOnStartReached = function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(limit) {
      var callback, onError;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(processedMessageList != null && processedMessageList.length && onStartReachedTracker.current[processedMessageList.length])) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            if (processedMessageList != null && processedMessageList.length) {
              onStartReachedTracker.current[processedMessageList.length] = true;
            }
            callback = function callback() {
              onStartReachedInPromise.current = null;
              return Promise.resolve();
            };
            onError = function onError() {
              setTimeout(function () {
                onStartReachedTracker.current = {};
              }, 2000);
            };
            if (!onEndReachedInPromise.current) {
              _context.next = 8;
              break;
            }
            _context.next = 8;
            return onEndReachedInPromise.current;
          case 8:
            onStartReachedInPromise.current = loadMoreRecent(limit).then(callback)["catch"](onError);
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function maybeCallOnStartReached(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var maybeCallOnEndReached = function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
      var callback, onError;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(processedMessageList != null && processedMessageList.length && onEndReachedTracker.current[processedMessageList.length])) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            if (processedMessageList != null && processedMessageList.length) {
              onEndReachedTracker.current[processedMessageList.length] = true;
            }
            callback = function callback() {
              onEndReachedInPromise.current = null;
              return Promise.resolve();
            };
            onError = function onError() {
              setTimeout(function () {
                onEndReachedTracker.current = {};
              }, 2000);
            };
            if (!onStartReachedInPromise.current) {
              _context2.next = 8;
              break;
            }
            _context2.next = 8;
            return onStartReachedInPromise.current;
          case 8:
            onEndReachedInPromise.current = (threadList ? loadMoreThread() : loadMore()).then(callback)["catch"](onError);
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function maybeCallOnEndReached() {
      return _ref4.apply(this, arguments);
    };
  }();
  var onUserScrollEvent = function onUserScrollEvent(event) {
    var nativeEvent = event.nativeEvent;
    clearTimeout(onScrollEventTimeoutRef.current);
    var offset = nativeEvent.contentOffset.y;
    var visibleLength = nativeEvent.layoutMeasurement.height;
    var contentLength = nativeEvent.contentSize.height;
    if (!channel || !channelResyncScrollSet.current) {
      return;
    }
    var isScrollAtStart = offset < 100;
    var isScrollAtEnd = contentLength - visibleLength - offset < 100;
    if (isScrollAtStart) {
      maybeCallOnStartReached();
    }
    if (isScrollAtEnd) {
      maybeCallOnEndReached();
    }
  };
  var handleScroll = function handleScroll(event) {
    var offset = event.nativeEvent.contentOffset.y;
    var messageListHasMessages = processedMessageList.length > 0;
    var isScrollAtBottom = offset <= 150;
    var notLatestSet = channel.state.messages !== channel.state.latestMessages;
    var showScrollToBottomButton = messageListHasMessages && (!threadList && notLatestSet || !isScrollAtBottom || !hasNoMoreRecentMessagesToLoad);
    setScrollToBottomButtonVisible(showScrollToBottomButton);
    var shouldMarkRead = !threadList && !notLatestSet && offset <= 0 && hasNoMoreRecentMessagesToLoad && channel.countUnread() > 0;
    if (shouldMarkRead) {
      markRead();
    }
    setInitialScrollDone(false);
    if (onListScroll) {
      onListScroll(event);
    }
  };
  var goToNewMessages = function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
      var isNotLatestSet;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            isNotLatestSet = channel.state.messages !== channel.state.latestMessages;
            if (!(isNotLatestSet && hasNoMoreRecentMessagesToLoad)) {
              _context3.next = 5;
              break;
            }
            loadChannelAroundMessage({});
            _context3.next = 12;
            break;
          case 5:
            if (hasNoMoreRecentMessagesToLoad) {
              _context3.next = 11;
              break;
            }
            resetPaginationTrackersRef.current();
            _context3.next = 9;
            return reloadChannel();
          case 9:
            _context3.next = 12;
            break;
          case 11:
            if (flatListRef.current) {
              flatListRef.current.scrollToOffset({
                offset: 0
              });
            }
          case 12:
            setScrollToBottomButtonVisible(false);
            if (!threadList) {
              markRead();
            }
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function goToNewMessages() {
      return _ref5.apply(this, arguments);
    };
  }();
  var scrollToIndexFailedRetryCountRef = (0, _react.useRef)(0);
  var failScrollTimeoutId = (0, _react.useRef)();
  var onScrollToIndexFailedRef = (0, _react.useRef)(function (info) {
    if (!flatListRef.current) return;
    flatListRef.current.scrollToOffset({
      animated: false,
      offset: info.averageItemLength * info.index
    });
    failScrollTimeoutId.current = setTimeout(function () {
      try {
        var _flatListRef$current3;
        (_flatListRef$current3 = flatListRef.current) == null ? void 0 : _flatListRef$current3.scrollToIndex({
          animated: false,
          index: info.index,
          viewPosition: 0.5
        });
        if (messageIdLastScrolledToRef.current) {
          setTargetedMessage(messageIdLastScrolledToRef.current);
        }
        scrollToIndexFailedRetryCountRef.current = 0;
      } catch (e) {
        if (!onScrollToIndexFailedRef.current || scrollToIndexFailedRetryCountRef.current > MAX_RETRIES_AFTER_SCROLL_FAILURE) {
          scrollToIndexFailedRetryCountRef.current = 0;
          return;
        }
        scrollToIndexFailedRetryCountRef.current += 1;
        onScrollToIndexFailedRef.current(info);
      }
    }, WAIT_FOR_SCROLL_TO_OFFSET_TIMEOUT);
  });
  var goToMessage = function goToMessage(messageId) {
    var indexOfParentInMessageList = processedMessageList.findIndex(function (message) {
      return (message == null ? void 0 : message.id) === messageId;
    });
    if (indexOfParentInMessageList !== -1 && flatListRef.current) {
      clearTimeout(failScrollTimeoutId.current);
      scrollToIndexFailedRetryCountRef.current = 0;
      messageIdLastScrolledToRef.current = messageId;
      setTargetedMessage(messageId);
      flatListRef.current.scrollToIndex({
        animated: true,
        index: indexOfParentInMessageList,
        viewPosition: 0.5
      });
      return;
    }
    loadChannelAroundMessage({
      messageId: messageId
    });
  };
  (0, _react.useEffect)(function () {
    scrollToDebounceTimeoutRef.current = setTimeout(function () {
      if (initialScrollToFirstUnreadMessage) {
        clearTimeout(initialScrollSettingTimeoutRef.current);
        initialScrollSettingTimeoutRef.current = setTimeout(function () {
          setInitialScrollDone(true);
        }, 2000);
      }
      var messageIdToScroll;
      if (targetedMessage && messageIdLastScrolledToRef.current !== targetedMessage) {
        messageIdToScroll = targetedMessage;
      }
      if (!messageIdToScroll) return;
      var indexOfParentInMessageList = processedMessageList.findIndex(function (message) {
        return (message == null ? void 0 : message.id) === messageIdToScroll;
      });
      if (indexOfParentInMessageList !== -1 && flatListRef.current) {
        clearTimeout(scrollToDebounceTimeoutRef.current);
        clearTimeout(failScrollTimeoutId.current);
        messageIdLastScrolledToRef.current = messageIdToScroll;
        scrollToIndexFailedRetryCountRef.current = 0;
        flatListRef.current.scrollToIndex({
          animated: false,
          index: indexOfParentInMessageList,
          viewPosition: 0.5
        });
      }
      loadChannelAroundMessage({
        messageId: messageIdToScroll
      });
    }, 50);
  }, [targetedMessage, initialScrollToFirstUnreadMessage]);
  var messagesWithImages = legacyImageViewerSwipeBehaviour && processedMessageList.filter(function (message) {
    var isMessageTypeDeleted = message.type === 'deleted';
    if (!isMessageTypeDeleted && message.attachments) {
      return message.attachments.some(function (attachment) {
        return attachment.type === _types.FileTypes.Image && !attachment.title_link && !attachment.og_scrape_url && (attachment.image_url || attachment.thumb_url);
      });
    }
    return false;
  });
  var imageString = legacyImageViewerSwipeBehaviour && messagesWithImages && messagesWithImages.map(function (message) {
    var _message$attachments;
    return (_message$attachments = message.attachments) == null ? void 0 : _message$attachments.map(function (attachment) {
      return attachment.image_url || attachment.thumb_url || '';
    }).join();
  }).join();
  var numberOfMessagesWithImages = legacyImageViewerSwipeBehaviour && messagesWithImages && messagesWithImages.length;
  var threadExists = !!thread;
  (0, _react.useEffect)(function () {
    if (legacyImageViewerSwipeBehaviour && isListActive && (threadList && thread || !threadList && !thread)) {
      setMessages(messagesWithImages);
    }
  }, [imageString, isListActive, legacyImageViewerSwipeBehaviour, numberOfMessagesWithImages, threadExists, threadList]);
  var dismissImagePicker = function dismissImagePicker() {
    if (!hasMoved && selectedPicker) {
      setSelectedPicker(undefined);
      closePicker();
    }
  };
  var onScrollBeginDrag = function onScrollBeginDrag(event) {
    !hasMoved && selectedPicker && setHasMoved(true);
    onUserScrollEvent(event);
  };
  var onScrollEndDrag = function onScrollEndDrag(event) {
    hasMoved && selectedPicker && setHasMoved(false);
    onUserScrollEvent(event);
  };
  var refCallback = function refCallback(ref) {
    flatListRef.current = ref;
    if (setFlatListRef) {
      setFlatListRef(ref);
    }
  };
  var debugRef = (0, _DebugContext.useDebugContext)();
  var isDebugModeEnabled = __DEV__ && debugRef && debugRef.current;
  if (isDebugModeEnabled) {
    if (debugRef.current.setEventType) debugRef.current.setEventType('send');
    if (debugRef.current.setSendEventParams) debugRef.current.setSendEventParams({
      action: thread ? 'ThreadList' : 'Messages',
      data: processedMessageList
    });
  }
  var ListFooterComponent = (0, _react.useCallback)(function () {
    return (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: shouldApplyAndroidWorkaround ? styles.invertAndroid : undefined,
      children: (0, _jsxRuntime.jsx)(FooterComponent, {})
    });
  }, [shouldApplyAndroidWorkaround, FooterComponent]);
  var ListHeaderComponent = (0, _react.useCallback)(function () {
    return (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: shouldApplyAndroidWorkaround ? styles.invertAndroid : undefined,
      children: (0, _jsxRuntime.jsx)(HeaderComponent, {})
    });
  }, [shouldApplyAndroidWorkaround, HeaderComponent]);
  var additionalFlatListPropsExcludingStyle;
  if (additionalFlatListProps) {
    var contentContainerStyle = additionalFlatListProps.contentContainerStyle,
      style = additionalFlatListProps.style,
      rest = (0, _objectWithoutProperties2["default"])(additionalFlatListProps, _excluded);
    additionalFlatListPropsExcludingStyle = rest;
  }
  if (!FlatList) return null;
  if (loading) {
    return (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.container, {
        backgroundColor: white_snow
      }, container],
      children: (0, _jsxRuntime.jsx)(LoadingIndicator, {
        listType: "message"
      })
    });
  }
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, {
      backgroundColor: white_snow
    }, container],
    testID: "message-flat-list-wrapper",
    children: [processedMessageList.length === 0 && !thread ? (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.flex, {
        backgroundColor: white_snow
      }],
      testID: "empty-state",
      children: EmptyStateIndicator ? (0, _jsxRuntime.jsx)(EmptyStateIndicator, {
        listType: "message"
      }) : null
    }) : (0, _jsxRuntime.jsx)(FlatList, Object.assign({
      CellRendererComponent: shouldApplyAndroidWorkaround ? InvertedCellRendererComponent : undefined,
      contentContainerStyle: [styles.contentContainer, additionalFlatListProps == null ? void 0 : additionalFlatListProps.contentContainerStyle, contentContainer],
      data: processedMessageList,
      extraData: disabled || !hasNoMoreRecentMessagesToLoad,
      inverted: shouldApplyAndroidWorkaround ? false : inverted,
      keyboardShouldPersistTaps: "handled",
      keyExtractor: keyExtractor,
      ListFooterComponent: ListFooterComponent,
      ListHeaderComponent: ListHeaderComponent,
      maintainVisibleContentPosition: {
        autoscrollToTopThreshold: autoscrollToRecent ? 10 : undefined,
        minIndexForVisible: 1
      },
      maxToRenderPerBatch: 30,
      onMomentumScrollEnd: onUserScrollEvent,
      onScroll: handleScroll,
      onScrollBeginDrag: onScrollBeginDrag,
      onScrollEndDrag: onScrollEndDrag,
      onScrollToIndexFailed: onScrollToIndexFailedRef.current,
      onTouchEnd: dismissImagePicker,
      onViewableItemsChanged: onViewableItemsChanged.current,
      ref: refCallback,
      renderItem: renderItem,
      scrollEnabled: overlay === 'none',
      showsVerticalScrollIndicator: !shouldApplyAndroidWorkaround,
      style: [styles.listContainer, listContainer, additionalFlatListProps == null ? void 0 : additionalFlatListProps.style, shouldApplyAndroidWorkaround ? styles.invertAndroid : undefined],
      testID: "message-flat-list",
      viewabilityConfig: flatListViewabilityConfig
    }, additionalFlatListPropsExcludingStyle)), !loading && (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.stickyHeader,
        children: messageListLengthAfterUpdate && StickyHeader ? (0, _jsxRuntime.jsx)(StickyHeader, {
          date: stickyHeaderDate,
          DateHeader: DateHeader
        }) : null
      }), !disableTypingIndicator && TypingIndicator && (0, _jsxRuntime.jsx)(TypingIndicatorContainer, {
        children: (0, _jsxRuntime.jsx)(TypingIndicator, {})
      }), (0, _jsxRuntime.jsx)(ScrollToBottomButton, {
        onPress: goToNewMessages,
        showNotification: scrollToBottomButtonVisible,
        unreadCount: threadList ? 0 : channel == null ? void 0 : channel.countUnread()
      })]
    }), (0, _jsxRuntime.jsx)(NetworkDownIndicator, {})]
  });
};
var MessageList = function MessageList(props) {
  var _useAttachmentPickerC = (0, _AttachmentPickerContext.useAttachmentPickerContext)(),
    closePicker = _useAttachmentPickerC.closePicker,
    selectedPicker = _useAttachmentPickerC.selectedPicker,
    setSelectedPicker = _useAttachmentPickerC.setSelectedPicker;
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
    channel = _useChannelContext.channel,
    disabled = _useChannelContext.disabled,
    EmptyStateIndicator = _useChannelContext.EmptyStateIndicator,
    enableMessageGroupingByUser = _useChannelContext.enableMessageGroupingByUser,
    error = _useChannelContext.error,
    hideStickyDateHeader = _useChannelContext.hideStickyDateHeader,
    isChannelActive = _useChannelContext.isChannelActive,
    loadChannelAroundMessage = _useChannelContext.loadChannelAroundMessage,
    loading = _useChannelContext.loading,
    LoadingIndicator = _useChannelContext.LoadingIndicator,
    markRead = _useChannelContext.markRead,
    NetworkDownIndicator = _useChannelContext.NetworkDownIndicator,
    reloadChannel = _useChannelContext.reloadChannel,
    scrollToFirstUnreadThreshold = _useChannelContext.scrollToFirstUnreadThreshold,
    setTargetedMessage = _useChannelContext.setTargetedMessage,
    StickyHeader = _useChannelContext.StickyHeader,
    targetedMessage = _useChannelContext.targetedMessage,
    threadList = _useChannelContext.threadList;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  var _useImageGalleryConte = (0, _ImageGalleryContext.useImageGalleryContext)(),
    setMessages = _useImageGalleryConte.setMessages;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    DateHeader = _useMessagesContext.DateHeader,
    disableTypingIndicator = _useMessagesContext.disableTypingIndicator,
    FlatList = _useMessagesContext.FlatList,
    initialScrollToFirstUnreadMessage = _useMessagesContext.initialScrollToFirstUnreadMessage,
    InlineDateSeparator = _useMessagesContext.InlineDateSeparator,
    InlineUnreadIndicator = _useMessagesContext.InlineUnreadIndicator,
    legacyImageViewerSwipeBehaviour = _useMessagesContext.legacyImageViewerSwipeBehaviour,
    Message = _useMessagesContext.Message,
    MessageSystem = _useMessagesContext.MessageSystem,
    myMessageTheme = _useMessagesContext.myMessageTheme,
    ScrollToBottomButton = _useMessagesContext.ScrollToBottomButton,
    TypingIndicator = _useMessagesContext.TypingIndicator,
    TypingIndicatorContainer = _useMessagesContext.TypingIndicatorContainer;
  var _usePaginatedMessageL = (0, _PaginatedMessageListContext.usePaginatedMessageListContext)(),
    hasNoMoreRecentMessagesToLoad = _usePaginatedMessageL.hasNoMoreRecentMessagesToLoad,
    loadMore = _usePaginatedMessageL.loadMore,
    loadMoreRecent = _usePaginatedMessageL.loadMoreRecent;
  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
    overlay = _useOverlayContext.overlay;
  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
    loadMoreThread = _useThreadContext.loadMoreThread,
    thread = _useThreadContext.thread;
  return (0, _jsxRuntime.jsx)(MessageListWithContext, Object.assign({
    channel: channel,
    client: client,
    closePicker: closePicker,
    DateHeader: DateHeader,
    disabled: disabled,
    disableTypingIndicator: disableTypingIndicator,
    EmptyStateIndicator: EmptyStateIndicator,
    enableMessageGroupingByUser: enableMessageGroupingByUser,
    error: error,
    FlatList: FlatList,
    hasNoMoreRecentMessagesToLoad: hasNoMoreRecentMessagesToLoad,
    hideStickyDateHeader: hideStickyDateHeader,
    initialScrollToFirstUnreadMessage: initialScrollToFirstUnreadMessage,
    InlineDateSeparator: InlineDateSeparator,
    InlineUnreadIndicator: InlineUnreadIndicator,
    isListActive: isChannelActive,
    legacyImageViewerSwipeBehaviour: legacyImageViewerSwipeBehaviour,
    loadChannelAroundMessage: loadChannelAroundMessage,
    loading: loading,
    LoadingIndicator: LoadingIndicator,
    loadMore: loadMore,
    loadMoreRecent: loadMoreRecent,
    loadMoreThread: loadMoreThread,
    markRead: markRead,
    Message: Message,
    MessageSystem: MessageSystem,
    myMessageTheme: myMessageTheme,
    NetworkDownIndicator: NetworkDownIndicator,
    overlay: overlay,
    reloadChannel: reloadChannel,
    ScrollToBottomButton: ScrollToBottomButton,
    scrollToFirstUnreadThreshold: scrollToFirstUnreadThreshold,
    selectedPicker: selectedPicker,
    setMessages: setMessages,
    setSelectedPicker: setSelectedPicker,
    setTargetedMessage: setTargetedMessage,
    StickyHeader: StickyHeader,
    targetedMessage: targetedMessage,
    thread: thread,
    threadList: threadList,
    TypingIndicator: TypingIndicator,
    TypingIndicatorContainer: TypingIndicatorContainer
  }, props, {
    noGroupByUser: !enableMessageGroupingByUser || props.noGroupByUser
  }));
};
exports.MessageList = MessageList;
//# sourceMappingURL=MessageList.js.map