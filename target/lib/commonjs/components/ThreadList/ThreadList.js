var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThreadList = exports.DefaultThreadListLoadingNextIndicator = exports.DefaultThreadListLoadingIndicator = exports.DefaultThreadListEmptyPlaceholder = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ThreadListItem = require("./ThreadListItem");
var _ThreadListUnreadBanner = require("./ThreadListUnreadBanner");
var _contexts = require("../../contexts");
var _ThreadsContext = require("../../contexts/threadsContext/ThreadsContext");
var _hooks = require("../../hooks");
var _EmptyStateIndicator = require("../Indicators/EmptyStateIndicator");
var _LoadingIndicator = require("../Indicators/LoadingIndicator");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ThreadList/ThreadList.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var selector = function selector(nextValue) {
  return [nextValue.threads, nextValue.pagination.isLoading, nextValue.pagination.isLoadingNext];
};
var DefaultThreadListEmptyPlaceholder = function DefaultThreadListEmptyPlaceholder() {
  return (0, _jsxRuntime.jsx)(_EmptyStateIndicator.EmptyStateIndicator, {
    listType: "threads"
  });
};
exports.DefaultThreadListEmptyPlaceholder = DefaultThreadListEmptyPlaceholder;
var DefaultThreadListLoadingIndicator = function DefaultThreadListLoadingIndicator() {
  return (0, _jsxRuntime.jsx)(_LoadingIndicator.LoadingIndicator, {
    listType: "threads"
  });
};
exports.DefaultThreadListLoadingIndicator = DefaultThreadListLoadingIndicator;
var DefaultThreadListLoadingNextIndicator = function DefaultThreadListLoadingNextIndicator() {
  return (0, _jsxRuntime.jsx)(_LoadingIndicator.LoadingIndicator, {});
};
exports.DefaultThreadListLoadingNextIndicator = DefaultThreadListLoadingNextIndicator;
var DefaultThreadListItem = function DefaultThreadListItem(props) {
  return (0, _jsxRuntime.jsx)(_ThreadListItem.ThreadListItem, {
    thread: props.item
  });
};
var ThreadListComponent = function ThreadListComponent() {
  var _useThreadsContext = (0, _ThreadsContext.useThreadsContext)(),
    additionalFlatListProps = _useThreadsContext.additionalFlatListProps,
    isLoading = _useThreadsContext.isLoading,
    isLoadingNext = _useThreadsContext.isLoadingNext,
    loadMore = _useThreadsContext.loadMore,
    _useThreadsContext$Th = _useThreadsContext.ThreadListEmptyPlaceholder,
    ThreadListEmptyPlaceholder = _useThreadsContext$Th === void 0 ? DefaultThreadListEmptyPlaceholder : _useThreadsContext$Th,
    _useThreadsContext$Th2 = _useThreadsContext.ThreadListLoadingIndicator,
    ThreadListLoadingIndicator = _useThreadsContext$Th2 === void 0 ? DefaultThreadListLoadingIndicator : _useThreadsContext$Th2,
    _useThreadsContext$Th3 = _useThreadsContext.ThreadListLoadingMoreIndicator,
    ThreadListLoadingMoreIndicator = _useThreadsContext$Th3 === void 0 ? DefaultThreadListLoadingNextIndicator : _useThreadsContext$Th3,
    _useThreadsContext$Th4 = _useThreadsContext.ThreadListUnreadBanner,
    ThreadListUnreadBanner = _useThreadsContext$Th4 === void 0 ? _ThreadListUnreadBanner.ThreadListUnreadBanner : _useThreadsContext$Th4,
    threads = _useThreadsContext.threads;
  if (isLoading) {
    return (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: {
        flex: 1
      },
      children: (0, _jsxRuntime.jsx)(ThreadListLoadingIndicator, {})
    });
  }
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(ThreadListUnreadBanner, {}), (0, _jsxRuntime.jsx)(_reactNative.FlatList, Object.assign({
      contentContainerStyle: {
        flexGrow: 1
      },
      data: threads,
      keyExtractor: function keyExtractor(props) {
        return props.id;
      },
      ListEmptyComponent: ThreadListEmptyPlaceholder,
      ListFooterComponent: isLoadingNext ? ThreadListLoadingMoreIndicator : null,
      onEndReached: loadMore,
      renderItem: DefaultThreadListItem,
      testID: "thread-flatlist"
    }, additionalFlatListProps))]
  });
};
var ThreadList = function ThreadList(props) {
  var _props$isFocused = props.isFocused,
    isFocused = _props$isFocused === void 0 ? true : _props$isFocused,
    _props$ThreadList = props.ThreadList,
    ThreadList = _props$ThreadList === void 0 ? ThreadListComponent : _props$ThreadList;
  var _useChatContext = (0, _contexts.useChatContext)(),
    client = _useChatContext.client;
  (0, _react.useEffect)(function () {
    if (!client) return;
    if (isFocused) {
      client.threads.activate();
    } else {
      client.threads.deactivate();
    }
  }, [client, isFocused]);
  (0, _react.useEffect)(function () {
    if (!client) return;
    var listener = client.on('connection.recovered', function () {
      client.threads.reload({
        force: true
      });
    });
    client.threads.reload({
      force: true
    });
    return function () {
      client.threads.deactivate();
      listener.unsubscribe();
    };
  }, [client]);
  var _useStateStore = (0, _hooks.useStateStore)(client.threads.state, selector),
    _useStateStore2 = (0, _slicedToArray2["default"])(_useStateStore, 3),
    threads = _useStateStore2[0],
    isLoading = _useStateStore2[1],
    isLoadingNext = _useStateStore2[2];
  return (0, _jsxRuntime.jsx)(_ThreadsContext.ThreadsProvider, {
    value: Object.assign({
      isLoading: isLoading,
      isLoadingNext: isLoadingNext,
      loadMore: client.threads.loadNextPage,
      threads: threads
    }, props),
    children: (0, _jsxRuntime.jsx)(ThreadList, {})
  });
};
exports.ThreadList = ThreadList;
//# sourceMappingURL=ThreadList.js.map