
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/mine/MinePiece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxtaW5lXFxNaW5lUGllY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBcUU7QUFFL0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkIseUJBQVk7SUFBdkM7UUFBQSxxRUEwR0M7UUF2R1csaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBRWxDLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLE9BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxPQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2IsWUFBTSxHQUFHLDBCQUFXLENBQUMsT0FBTyxDQUFDO1FBMEQ3QixXQUFLLEdBQUcseUJBQVUsQ0FBQyxLQUFLLENBQUM7O0lBaUJyQyxDQUFDO0lBekVHLHNCQUFXLHdCQUFLO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFpQixLQUFrQjtZQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLEtBQUssMEJBQVcsQ0FBQyxPQUFPO29CQUNwQixJQUFJLENBQUMs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QUUsQ0FBQyxXQUFXLENBQUM7MENBQ2M7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyQ0FDZTtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzJDQUNlO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ2U7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyQ0FDZTtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzJDQUNlO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ2U7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyQ0FDZTtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzJDQUNlO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ2U7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyQ0FDZTtJQTNCL0IsS0FBSztRQURqQixPQUFPO09BQ0ssS0FBSyxDQTBHakI7SUFBRCxZQUFDO0NBMUdELEFBMEdDLENBMUcwQixFQUFFLENBQUMsU0FBUyxHQTBHdEM7QUExR1ksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQSUVDRV9TVEFURSwgUElFQ0VfVFlQRSwgUElFQ0VfSElOVCB9IGZyb20gXCIuL01pbmVDb25zdGFuc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFBpZWNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcHJpdmF0ZSBwaWVjZVNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcHJpdmF0ZSBwaWNQZW5kaW5nOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHByaXZhdGUgcGljRmxhZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBwcml2YXRlIHBpY0RlYXRoOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHByaXZhdGUgcGljT3BlbjA6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcHJpdmF0ZSBwaWNPcGVuMTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBwcml2YXRlIHBpY09wZW4yOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHByaXZhdGUgcGljT3BlbjM6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcHJpdmF0ZSBwaWNPcGVuNDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBwcml2YXRlIHBpY09wZW41OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHByaXZhdGUgcGljT3BlbjY6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcHJpdmF0ZSBwaWNPcGVuNzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBwcml2YXRlIHBpY09wZW44OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9zdGF0ZSA9IFBJRUNFX1NUQVRFLlBFTkRJTkc7XG5cbiAgICBwdWJsaWMgZ2V0IHN0YXRlKCk6IFBJRUNFX1NUQVRFIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc3RhdGUodmFsdWU6IFBJRUNFX1NUQVRFKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gdmFsdWU7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBQSUVDRV9TVEFURS5QRU5ESU5HOlxuICAgICAgICAgICAgICAgIHRoaXMucGllY2VTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnBpY1BlbmRpbmc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBJRUNFX1NUQVRFLkZMQUc6XG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljRmxhZztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUElFQ0VfU1RBVEUuT1BFTjpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNwcml0ZUJ5VHlwZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcInVua25vd24gc3RhdGUhXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTcHJpdGVCeVR5cGUoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFBJRUNFX1RZUEUuT1BFTjA6XG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3BlbjA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBJRUNFX1RZUEUuT1BFTjE6XG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3BlbjE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBJRUNFX1RZUEUuT1BFTjI6XG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3BlbjI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBJRUNFX1RZUEUuT1BFTjM6XG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3BlbjM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBJRUNFX1RZUEUuT1BFTjQ6XG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3BlbjQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBJRUNFX1RZUEUuT1BFTjU6XG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3BlbjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBJRUNFX1RZUEUuT1BFTjY6XG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3BlbjY7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBJRUNFX1RZUEUuT1BFTjc6XG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3Blbjc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBJRUNFX1RZUEUuT1BFTjg6XG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3Blbjg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBJRUNFX1RZUEUuQk9NQjpcbiAgICAgICAgICAgICAgICB0aGlzLnBpZWNlU3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5waWNEZWF0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3R5cGUgPSBQSUVDRV9UWVBFLk9QRU4wO1xuXG4gICAgcHVibGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9XG4gICAgcHVibGljIHNldCB0eXBlKHZhbHVlOlBJRUNFX1RZUEUpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNldFNwcml0ZUJ5VHlwZSgpO1xuICAgIH1cblxuICAgIGluaXQoeDogbnVtYmVyLCB5OiBudW1iZXIsIHR5cGU6IFBJRUNFX1RZUEUsIHN0YXRlOiBQSUVDRV9TVEFURSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxuXG59Il19