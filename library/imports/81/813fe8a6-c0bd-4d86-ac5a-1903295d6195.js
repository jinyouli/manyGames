"use strict";
cc._RF.push(module, '813feimwL1NhqxaGQMpXWGV', 'MinePiece');
// src/mine/MinePiece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var MineConstans_1 = require("./MineConstans");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pieceSprite = null;
        _this.picPending = null;
        _this.picFlag = null;
        _this.picDeath = null;
        _this.picOpen0 = null;
        _this.picOpen1 = null;
        _this.picOpen2 = null;
        _this.picOpen3 = null;
        _this.picOpen4 = null;
        _this.picOpen5 = null;
        _this.picOpen6 = null;
        _this.picOpen7 = null;
        _this.picOpen8 = null;
        _this.x = 0;
        _this.y = 0;
        _this._state = MineConstans_1.PIECE_STATE.PENDING;
        _this._type = MineConstans_1.PIECE_TYPE.OPEN0;
        return _this;
    }
    Object.defineProperty(Piece.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
            switch (this.state) {
                case MineConstans_1.PIECE_STATE.PENDING:
                    this.pieceSprite.spriteFrame = this.picPending;
                    break;
                case MineConstans_1.PIECE_STATE.FLAG:
                    this.pieceSprite.spriteFrame = this.picFlag;
                    break;
                case MineConstans_1.PIECE_STATE.OPEN:
                    this.setSpriteByType();
                    break;
                default:
                    cc.error("unknown state!");
                    break;
            }
        },
        enumerable: false,
        configurable: true
    });
    Piece.prototype.setSpriteByType = function () {
        switch (this.type) {
            case MineConstans_1.PIECE_TYPE.OPEN0:
                this.pieceSprite.spriteFrame = this.picOpen0;
                break;
            case MineConstans_1.PIECE_TYPE.OPEN1:
                this.pieceSprite.spriteFrame = this.picOpen1;
                break;
            case MineConstans_1.PIECE_TYPE.OPEN2:
                this.pieceSprite.spriteFrame = this.picOpen2;
                break;
            case MineConstans_1.PIECE_TYPE.OPEN3:
                this.pieceSprite.spriteFrame = this.picOpen3;
                break;
            case MineConstans_1.PIECE_TYPE.OPEN4:
                this.pieceSprite.spriteFrame = this.picOpen4;
                break;
            case MineConstans_1.PIECE_TYPE.OPEN5:
                this.pieceSprite.spriteFrame = this.picOpen5;
                break;
            case MineConstans_1.PIECE_TYPE.OPEN6:
                this.pieceSprite.spriteFrame = this.picOpen6;
                break;
            case MineConstans_1.PIECE_TYPE.OPEN7:
                this.pieceSprite.spriteFrame = this.picOpen7;
                break;
            case MineConstans_1.PIECE_TYPE.OPEN8:
                this.pieceSprite.spriteFrame = this.picOpen8;
                break;
            case MineConstans_1.PIECE_TYPE.BOMB:
                this.pieceSprite.spriteFrame = this.picDeath;
        }
    };
    Object.defineProperty(Piece.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.setSpriteByType();
        },
        enumerable: false,
        configurable: true
    });
    Piece.prototype.init = function (x, y, type, state) {
        this.x = x;
        this.y = y;
        this.state = state;
        this.type = type;
    };
    __decorate([
        property(cc.Sprite)
    ], Piece.prototype, "pieceSprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picPending", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picFlag", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picDeath", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen0", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen2", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen3", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen4", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen5", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen6", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen7", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen8", void 0);
    Piece = __decorate([
        ccclass
    ], Piece);
    return Piece;
}(cc.Component));
exports.Piece = Piece;

cc._RF.pop();