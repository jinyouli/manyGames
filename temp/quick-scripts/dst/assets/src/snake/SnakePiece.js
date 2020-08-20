
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/snake/SnakePiece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzbmFrZVxcU25ha2VQaWVjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUF5RDtBQUVuRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQix5QkFBWTtJQUF2QztRQUFBLHFFQXNKQztRQW5KVyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLHVCQUFpQixHQUFtQixJQUFJLENBQUM7UUFFekMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBRXJDLHdCQUFrQixHQUFtQixJQUFJLENBQUM7UUFFMUMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXZDLE9BQUMsR0FBRyxDQUFDLENBQUM7UUFDTixPQUFDLEdBQUcsQ0FBQyxDQUFDO1FBV0wsWUFBTSxHQUFjLDBCQUFTLENBQUMsS0FBSyxDQUFDO1FBU3BDLGFBQU8sR0FBYywwQkFBUyxDQUFDLEtBQUssQ0FBQzs7SUFpSGpELENBQUM7SUFsSUcsc0JBQUksdUJBQUk7YUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBQ0QsVUFBUyxLQUFpQjtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQzs7O09BSkE7SUFPRCxzQkFBSSx3QkFBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFDRCxVQUFVLEtBQWdCO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDOzs7T0FKQTtJQU9ELHNCQUFJLHlCQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENB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REMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ29CO0lBRTdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7cURBQ3lCO0lBRWxEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ3FCO0lBZHJDLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0FzSmpCO0lBQUQsWUFBQztDQXRKRCxBQXNKQyxDQXRKMEIsRUFBRSxDQUFDLFNBQVMsR0FzSnRDO0FBdEpZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUElFQ0VfVFlQRSwgRElSRUNUSU9OIH0gZnJvbSBcIi4vU25ha2VDb25zdGFudHNcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgUGllY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBwcml2YXRlIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBwcml2YXRlIHBpY0Zvb2Q6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcHJpdmF0ZSBwaWNTbmFrZUhlYWRSaWdodDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBwcml2YXRlIHBpY1NuYWtlQm9keUg6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcHJpdmF0ZSBwaWNTbmFrZUpvaW50UmlnaHQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcHJpdmF0ZSBwaWNTbmFrZVRhaWxVcDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgcHVibGljIHggPSAwO1xuICAgIHB1YmxpYyB5ID0gMDtcbiAgICBcbiAgICBwcml2YXRlIF90eXBlOiBQSUVDRV9UWVBFO1xuICAgIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9XG4gICAgc2V0IHR5cGUodmFsdWU6IFBJRUNFX1RZUEUpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luRGlyOiBESVJFQ1RJT04gPSBESVJFQ1RJT04uUklHSFQ7XG4gICAgZ2V0IGluRGlyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5EaXI7XG4gICAgfVxuICAgIHNldCBpbkRpcih2YWx1ZTogRElSRUNUSU9OKSB7XG4gICAgICAgIHRoaXMuX2luRGlyID0gdmFsdWU7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb3V0RGlyOiBESVJFQ1RJT04gPSBESVJFQ1RJT04uUklHSFQ7XG4gICAgZ2V0IG91dERpcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX291dERpcjtcbiAgICB9XG4gICAgc2V0IG91dERpcih2YWx1ZTogRElSRUNUSU9OKSB7XG4gICAgICAgIHRoaXMuX291dERpciA9IHZhbHVlO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KHR5cGU6IFBJRUNFX1RZUEUsIG91dERpciA9IERJUkVDVElPTi5SSUdIVCwgaW5EaXIgPSBESVJFQ1RJT04uUklHSFQpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuX2luRGlyID0gaW5EaXI7XG4gICAgICAgIHRoaXMuX291dERpciA9IG91dERpcjtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlcigpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLkJMQU5LOlxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZU90aGVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBJRUNFX1RZUEUuRk9PRDpcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljRm9vZDtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZU90aGVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBJRUNFX1RZUEUuU05BS0VfSEVBRDpcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljU25ha2VIZWFkUmlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVIZWFkQnlEaXIodGhpcy5vdXREaXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLlNOQUtFX0JPRFk6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5EaXIgPT09IHRoaXMub3V0RGlyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5waWNTbmFrZUJvZHlIO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZUJvZHlCeURpcih0aGlzLm91dERpcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnBpY1NuYWtlSm9pbnRSaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVKb2ludEJ5RGlyKHRoaXMuaW5EaXIsIHRoaXMub3V0RGlyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBJRUNFX1RZUEUuU05BS0VfVEFJTDpcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljU25ha2VUYWlsVXA7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVUYWlsQnlEaXIodGhpcy5vdXREaXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIndyb25nIHBpZWNlIHR5cGUhXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb3RhdGVIZWFkQnlEaXIoZGlyOiBESVJFQ1RJT04pe1xuICAgICAgICBzd2l0Y2goZGlyKSB7XG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uRE9XTjpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSA5MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gMTgwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uVVA6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gMjcwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb3RhdGVCb2R5QnlEaXIoZGlyOiBESVJFQ1RJT04pIHtcbiAgICAgICAgc3dpdGNoKGRpcikge1xuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gMTgwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uRE9XTjpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSA5MDtcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLlVQOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yb3RhdGlvbiA9IDI3MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcm90YXRlSm9pbnRCeURpcihpbkRpcjogRElSRUNUSU9OLCBvdXREaXI6IERJUkVDVElPTikge1xuICAgICAgICBpZihpbkRpciA9PT0gRElSRUNUSU9OLlVQICYmIG91dERpciA9PT0gRElSRUNUSU9OLlJJR0hUIHx8IGluRGlyID09PSBESVJFQ1RJT04uTEVGVCAmJiBvdXREaXIgPT09IERJUkVDVElPTi5ET1dOKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSAwO1xuICAgICAgICB9IGVsc2UgaWYoaW5EaXIgPT09IERJUkVDVElPTi5SSUdIVCAmJiBvdXREaXIgPT09IERJUkVDVElPTi5ET1dOIHx8IGluRGlyID09PSBESVJFQ1RJT04uVVAgJiYgb3V0RGlyID09PSBESVJFQ1RJT04uTEVGVCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gOTA7XG4gICAgICAgIH0gZWxzZSBpZihpbkRpciA9PT0gRElSRUNUSU9OLlJJR0hUICYmIG91dERpciA9PT0gRElSRUNUSU9OLlVQIHx8IGluRGlyID09PSBESVJFQ1RJT04uRE9XTiAmJiBvdXREaXIgPT09IERJUkVDVElPTi5MRUZUKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSAxODA7XG4gICAgICAgIH0gZWxzZSBpZihpbkRpciA9PT0gRElSRUNUSU9OLkRPV04gJiYgb3V0RGlyID09PSBESVJFQ1RJT04uUklHSFQgfHwgaW5EaXIgPT09IERJUkVDVElPTi5MRUZUICYmIG91dERpciA9PT0gRElSRUNUSU9OLlVQKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSAyNzA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJvdGF0ZVRhaWxCeURpcihkaXI6IERJUkVDVElPTikge1xuICAgICAgICBzd2l0Y2goZGlyKSB7XG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5VUDpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gOTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5ET1dOOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yb3RhdGlvbiA9IDE4MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gMjcwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb3RhdGVPdGhlcigpIHtcbiAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gMDtcbiAgICB9XG59Il19