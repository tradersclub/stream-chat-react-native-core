Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(client) {
  var channel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  client.dispatchEvent({
    channel: channel,
    cid: channel.cid,
    type: 'notification.message_new'
  });
};
exports["default"] = _default;
//# sourceMappingURL=notificationMessageNew.js.map