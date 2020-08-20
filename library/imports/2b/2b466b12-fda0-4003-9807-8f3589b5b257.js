"use strict";
cc._RF.push(module, '2b466sS/aBAA5gHjzWJtbJX', 'SnakeScene');
// src/snake/SnakeScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SnakeScene = void 0;
var SnakeBoard_1 = require("./SnakeBoard");
var SnakeConstants_1 = require("./SnakeConstants");
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SnakeScene = /** @class */ (function (_super) {
    __extends(SnakeScene, _super);
    function SnakeScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.board = null;
        _this.score = 0;
        return _this;
    }
    SnakeScene.prototype.start = function () {
        var _this = this;
        this.board.init(this);
        G_1.G.gameRoot.showTip("四方向手势滑动");
        this.startGame();
        /**
         * 手势，键盘，按钮操作
         */
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            var startPos = event.getStartLocation();
            var endPos = event.getLocation();
            var offsetX = endPos.x - startPos.x;
            var offsetY = endPos.y - startPos.y;
            if (Math.abs(offsetX) > Math.abs(offsetY)) {
                if (offsetX > 0) {
                    _this.onBtnRight();
                }
                else {
                    _this.onBtnLeft();
                }
            }
            else {
                if (offsetY > 0) {
                    _this.onBtnUp();
                }
                else {
                    _this.onBtnDown();
                }
            }
        }, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            switch (event.keyCode) {
                case cc.KEY.left:
                case cc.KEY.a:
                    _this.onBtnLeft();
                    break;
                case cc.KEY.right:
                case cc.KEY.d:
                    _this.onBtnRight();
                    break;
                case cc.KEY.up:
                case cc.KEY.w:
                    _this.onBtnUp();
                    break;
                case cc.KEY.down:
                case cc.KEY.s:
                    _this.onBtnDown();
                    break;
            }
        }, this);
    };
    SnakeScene.prototype.startGame = function () {
        this.score = 0;
        this.scoreLabel.string = this.score + "";
        this.board.startGame();
    };
    SnakeScene.prototype.overGame = function () {
        G_1.G.gameRoot.showMaskMessage("你吃了" + this.score + "坨", { label: "厉害了" });
    };
    SnakeScene.prototype.onEatFood = function () {
        this.score += 1;
        this.scoreLabel.string = this.score + "";
        this.board.addFood();
        var level = this.score / 10 | 0;
        this.board.updateLevel(level);
    };
    SnakeScene.prototype.onBtnLeft = function () {
        this.board.turnSnake(SnakeConstants_1.DIRECTION.LEFT);
    };
    SnakeScene.prototype.onBtnRight = function () {
        this.board.turnSnake(SnakeConstants_1.DIRECTION.RIGHT);
    };
    SnakeScene.prototype.onBtnUp = function () {
        this.board.turnSnake(SnakeConstants_1.DIRECTION.UP);
    };
    SnakeScene.prototype.onBtnDown = function () {
        this.board.turnSnake(SnakeConstants_1.DIRECTION.DOWN);
    };
    SnakeScene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    SnakeScene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    __decorate([
        property(cc.Label)
    ], SnakeScene.prototype, "scoreLabel", void 0);
    __decorate([
        property(SnakeBoard_1.default)
    ], SnakeScene.prototype, "board", void 0);
    SnakeScene = __decorate([
        ccclass
    ], SnakeScene);
    return SnakeScene;
}(cc.Component));
exports.SnakeScene = SnakeScene;

cc._RF.pop();