var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStorableToMessage = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _mapStorableToReaction = require("./mapStorableToReaction");
var _mapStorableToUser = require("./mapStorableToUser");
var _excluded = ["createdAt", "deletedAt", "extraData", "messageTextUpdatedAt", "reactionGroups", "updatedAt", "user"];
var mapStorableToMessage = function mapStorableToMessage(_ref) {
  var currentUserId = _ref.currentUserId,
    messageRow = _ref.messageRow,
    reactionRows = _ref.reactionRows;
  var createdAt = messageRow.createdAt,
    deletedAt = messageRow.deletedAt,
    extraData = messageRow.extraData,
    messageTextUpdatedAt = messageRow.messageTextUpdatedAt,
    reactionGroups = messageRow.reactionGroups,
    updatedAt = messageRow.updatedAt,
    user = messageRow.user,
    rest = (0, _objectWithoutProperties2["default"])(messageRow, _excluded);
  var latestReactions = (reactionRows == null ? void 0 : reactionRows.map(function (reaction) {
    return (0, _mapStorableToReaction.mapStorableToReaction)(reaction);
  })) || [];
  var ownReactions = latestReactions.filter(function (reaction) {
    var _reaction$user;
    return ((_reaction$user = reaction.user) == null ? void 0 : _reaction$user.id) === currentUserId;
  });
  return Object.assign({}, rest, {
    attachments: messageRow.attachments ? JSON.parse(messageRow.attachments) : [],
    created_at: createdAt,
    deleted_at: deletedAt,
    latest_reactions: latestReactions,
    message_text_updated_at: messageTextUpdatedAt,
    own_reactions: ownReactions,
    reaction_groups: reactionGroups ? JSON.parse(reactionGroups) : {},
    updated_at: updatedAt,
    user: (0, _mapStorableToUser.mapStorableToUser)(user)
  }, extraData ? JSON.parse(extraData) : {});
};
exports.mapStorableToMessage = mapStorableToMessage;
//# sourceMappingURL=mapStorableToMessage.js.map