"use strict";
cc._RF.push(module, '484catbAbJCg4Ac4ycFbtOo', 'LinkPiece');
// src/link/LinkPiece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var LinkConstants_1 = require("./LinkConstants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.herosAtlas = null;
        _this.x = 0;
        _this.y = 0;
        _this.type = 0;
        _this.state = LinkConstants_1.PIECE_STATE.IDLE;
        return _this;
    }
    Piece.prototype.init = function (x, y, type, state) {
        if (state === void 0) { state = LinkConstants_1.PIECE_STATE.IDLE; }
        this.x = x;
        this.y = y;
        this.setType(type);
        this.setState(state);
    };
    Piece.prototype.setType = function (type) {
        this.type = type;
        if (type === 0) {
            this.sprite.spriteFrame = null;
        }
        else {
            this.sprite.spriteFrame = this.herosAtlas.getSpriteFrame("hero_" + type);
        }
    };
    Piece.prototype.setState = function (state) {
        if (state === this.state) {
            return;
        }
        this.state = state;
        if (state === LinkConstants_1.PIECE_STATE.IDLE) {
            this.node.color = cc.Color.WHITE;
        }
        else if (state === LinkConstants_1.PIECE_STATE.PRESS) {
            this.node.color = cc.Color.GRAY;
        }
    };
    __decorate([
        property(cc.Sprite)
    ], Piece.prototype, "sprite", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], Piece.prototype, "herosAtlas", void 0);
    Piece = __decorate([
        ccclass
    ], Piece);
    return Piece;
}(cc.Component));
exports.Piece = Piece;

cc._RF.pop();