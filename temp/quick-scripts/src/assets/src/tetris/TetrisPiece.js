"use strict";
cc._RF.push(module, '8d09eH0obdDS6b119IOSvSi', 'TetrisPiece');
// src/tetris/TetrisPiece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Piece.prototype.hide = function () {
        this.node.active = false;
    };
    Piece.prototype.show = function () {
        this.node.active = true;
    };
    Piece = __decorate([
        ccclass
    ], Piece);
    return Piece;
}(cc.Component));
exports.Piece = Piece;

cc._RF.pop();