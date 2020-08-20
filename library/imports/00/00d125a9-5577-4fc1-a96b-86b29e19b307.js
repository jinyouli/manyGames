"use strict";
cc._RF.push(module, '00d12WpVXdPwalrhrKeGbMH', 'SnakePiece');
// src/snake/SnakePiece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var SnakeConstants_1 = require("./SnakeConstants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.picFood = null;
        _this.picSnakeHeadRight = null;
        _this.picSnakeBodyH = null;
        _this.picSnakeJointRight = null;
        _this.picSnakeTailUp = null;
        _this.x = 0;
        _this.y = 0;
        _this._inDir = SnakeConstants_1.DIRECTION.RIGHT;
        _this._outDir = SnakeConstants_1.DIRECTION.RIGHT;
        return _this;
    }
    Object.defineProperty(Piece.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "inDir", {
        get: function () {
            return this._inDir;
        },
        set: function (value) {
            this._inDir = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "outDir", {
        get: function () {
            return this._outDir;
        },
        set: function (value) {
            this._outDir = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Piece.prototype.init = function (type, outDir, inDir) {
        if (outDir === void 0) { outDir = SnakeConstants_1.DIRECTION.RIGHT; }
        if (inDir === void 0) { inDir = SnakeConstants_1.DIRECTION.RIGHT; }
        this._type = type;
        this._inDir = inDir;
        this._outDir = outDir;
        this.render();
    };
    Piece.prototype.render = function () {
        switch (this.type) {
            case SnakeConstants_1.PIECE_TYPE.BLANK:
                this.sprite.spriteFrame = null;
                this.rotateOther();
                break;
            case SnakeConstants_1.PIECE_TYPE.FOOD:
                this.sprite.spriteFrame = this.picFood;
                this.rotateOther();
                break;
            case SnakeConstants_1.PIECE_TYPE.SNAKE_HEAD:
                this.sprite.spriteFrame = this.picSnakeHeadRight;
                this.rotateHeadByDir(this.outDir);
                break;
            case SnakeConstants_1.PIECE_TYPE.SNAKE_BODY:
                if (this.inDir === this.outDir) {
                    this.sprite.spriteFrame = this.picSnakeBodyH;
                    this.rotateBodyByDir(this.outDir);
                }
                else {
                    this.sprite.spriteFrame = this.picSnakeJointRight;
                    this.rotateJointByDir(this.inDir, this.outDir);
                }
                break;
            case SnakeConstants_1.PIECE_TYPE.SNAKE_TAIL:
                this.sprite.spriteFrame = this.picSnakeTailUp;
                this.rotateTailByDir(this.outDir);
                break;
            default:
                cc.error("wrong piece type!");
        }
    };
    Piece.prototype.rotateHeadByDir = function (dir) {
        switch (dir) {
            case SnakeConstants_1.DIRECTION.RIGHT:
                this.node.rotation = 0;
                break;
            case SnakeConstants_1.DIRECTION.DOWN:
                this.node.rotation = 90;
                break;
            case SnakeConstants_1.DIRECTION.LEFT:
                this.node.rotation = 180;
                break;
            case SnakeConstants_1.DIRECTION.UP:
                this.node.rotation = 270;
                break;
        }
    };
    Piece.prototype.rotateBodyByDir = function (dir) {
        switch (dir) {
            case SnakeConstants_1.DIRECTION.RIGHT:
                this.node.rotation = 0;
                break;
            case SnakeConstants_1.DIRECTION.LEFT:
                this.node.rotation = 180;
                break;
            case SnakeConstants_1.DIRECTION.DOWN:
                this.node.rotation = 90;
            case SnakeConstants_1.DIRECTION.UP:
                this.node.rotation = 270;
                break;
        }
    };
    Piece.prototype.rotateJointByDir = function (inDir, outDir) {
        if (inDir === SnakeConstants_1.DIRECTION.UP && outDir === SnakeConstants_1.DIRECTION.RIGHT || inDir === SnakeConstants_1.DIRECTION.LEFT && outDir === SnakeConstants_1.DIRECTION.DOWN) {
            this.node.rotation = 0;
        }
        else if (inDir === SnakeConstants_1.DIRECTION.RIGHT && outDir === SnakeConstants_1.DIRECTION.DOWN || inDir === SnakeConstants_1.DIRECTION.UP && outDir === SnakeConstants_1.DIRECTION.LEFT) {
            this.node.rotation = 90;
        }
        else if (inDir === SnakeConstants_1.DIRECTION.RIGHT && outDir === SnakeConstants_1.DIRECTION.UP || inDir === SnakeConstants_1.DIRECTION.DOWN && outDir === SnakeConstants_1.DIRECTION.LEFT) {
            this.node.rotation = 180;
        }
        else if (inDir === SnakeConstants_1.DIRECTION.DOWN && outDir === SnakeConstants_1.DIRECTION.RIGHT || inDir === SnakeConstants_1.DIRECTION.LEFT && outDir === SnakeConstants_1.DIRECTION.UP) {
            this.node.rotation = 270;
        }
    };
    Piece.prototype.rotateTailByDir = function (dir) {
        switch (dir) {
            case SnakeConstants_1.DIRECTION.UP:
                this.node.rotation = 0;
                break;
            case SnakeConstants_1.DIRECTION.RIGHT:
                this.node.rotation = 90;
                break;
            case SnakeConstants_1.DIRECTION.DOWN:
                this.node.rotation = 180;
                break;
            case SnakeConstants_1.DIRECTION.LEFT:
                this.node.rotation = 270;
                break;
        }
    };
    Piece.prototype.rotateOther = function () {
        this.node.rotation = 0;
    };
    __decorate([
        property(cc.Sprite)
    ], Piece.prototype, "sprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picFood", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picSnakeHeadRight", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picSnakeBodyH", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picSnakeJointRight", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picSnakeTailUp", void 0);
    Piece = __decorate([
        ccclass
    ], Piece);
    return Piece;
}(cc.Component));
exports.Piece = Piece;

cc._RF.pop();