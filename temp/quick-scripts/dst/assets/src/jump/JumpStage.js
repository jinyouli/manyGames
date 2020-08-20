
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/jump/JumpStage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3e700jxwtD1ao6LQTfMpyq', 'JumpStage');
// src/jump/JumpStage.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Stage = void 0;
var JumpBlock_1 = require("./JumpBlock");
var JumpPlayer_1 = require("./JumpPlayer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var Stage = /** @class */ (function (_super) {
    __extends(Stage, _super);
    // @executeInEditMode
    function Stage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.groundLayer = null;
        _this.gridNum = 20;
        _this.g = null;
        _this.minBlockSpace = 1; //两个block最小间距
        _this.maxBlockSpace = 10;
        _this.minBlockLength = 1;
        _this.maxBlockLength = 7;
        _this.cameraMoveDuration = 1;
        _this.endScene = null;
        _this.jumpScene = null;
        _this.gridWidth = 32;
        _this.groundOrigin = cc.v2();
        _this.offset = 0;
        _this.currBlock = null; // 同一屏只出现两个block，玩家站的是这个
        _this.nextBlock = null;
        _this.playerIndex = null;
        _this.animState = null;
        _this.isMovingStage = false;
        return _this;
    }
    Stage.prototype.onLoad = function () {
        this.gridWidth = Math.floor(this.groundLayer.width / this.gridNum);
        this.groundOrigin = this.groundLayer.position;
    };
    Stage.prototype.init = function (jumpScene) {
        this.jumpScene = jumpScene;
    };
    Stage.prototype.showStartStory = function (cb, cbTarget) {
        this.g.clear();
        this.drawBlock(new JumpBlock_1.Block(0, 5));
        this.drawBlock(new JumpBlock_1.Block(9, 5));
        var anim = this.getComponent(cc.Animation);
        anim.once("finished", function () {
            cb();
        }, cbTarget);
        this.animState = anim.play("start");
    };
    Stage.prototype.startGame = function () {
        this.reset();
    };
    Stage.prototype.endGame = function (cb, cbTarget) {
        var _this = this;
        this.g.clear();
        this.scheduleOnce(function () {
            _this.endScene.active = true;
        }, 5);
        this.scheduleOnce(function () {
            _this.player.node.getChildByName("name").getComponent(cc.Label).string = "";
        }, 10);
        this.scheduleOnce(function () {
            _this.player.node.children.forEach(function (child) {
                child.color = new cc.Color().fromHEX("#58D639");
                var streak = _this.player.getComponent(cc.MotionStreak);
                streak.color = new cc.Color().fromHEX("#58D639");
            });
        }, 15);
        this.scheduleOnce(function () {
            _this.player.readyJump();
        }, 20);
        this.scheduleOnce(function () {
            var far = cc.v2(_this.player.node.x - 1000, _this.player.node.y);
            _this.player.jumpTo(far, cb, cbTarget);
        }, 25);
    };
    Stage.prototype.reset = function () {
        this.groundLayer.position = this.groundOrigin;
        this.g.clear();
        this.currBlock = new JumpBlock_1.Block(0, 5);
        this.nextBlock = new JumpBlock_1.Block(9, 5);
        this.drawBlock(this.currBlock);
        this.drawBlock(this.nextBlock);
        var center = this.currBlock.head + Math.floor(this.currBlock.length / 2);
        this.playerIndex = center;
        this.player.node.position = cc.v2(center * this.gridWidth + this.gridWidth / 2, 0);
        this.isMovingStage = false;
    };
    Stage.prototype.drawBlock = function (block) {
        this.g.rect(block.head * this.gridWidth, -this.gridWidth, this.gridWidth * block.length, this.gridWidth);
        this.g.fill();
    };
    Stage.prototype.addNewBlock = function () {
        var _this = this;
        var cb = function () {
            _this.currBlock = _this.nextBlock;
            var space = Math.floor(_this.minBlockSpace + Math.random() * (_this.maxBlockSpace - _this.minBlockSpace));
            var head = _this.currBlock.head + _this.currBlock.length + space;
            var length = Math.floor(_this.minBlockLength + Math.random() * (_this.maxBlockLength - _this.minBlockLength));
            _this.nextBlock = new JumpBlock_1.Block(head, length);
            _this.drawBlock(_this.nextBlock);
        };
        this.moveStage(cb, this);
    };
    Stage.prototype.moveStage = function (cb, target) {
        var _this = this;
        this.isMovingStage = true;
        var moveLength = (this.nextBlock.head - this.currBlock.head) * this.gridWidth;
        var moveAction = cc.moveBy(this.cameraMoveDuration, -moveLength, 0);
        var action = cc.sequence(moveAction, cc.callFunc(function () {
            _this.isMovingStage = false;
            cb();
        }, target));
        this.groundLayer.runAction(action);
    };
    Stage.prototype.canReadyJump = function () {
        return !this.isMovingStage && this.player.speed === 0;
    };
    Stage.prototype.playerReadyJump = function () {
        if (this.canReadyJump()) {
            this.player.readyJump();
        }
    };
    Stage.prototype.ignoreStory = function () {
        this.animState.speed = 4;
    };
    Stage.prototype.playerDie = function (cb, cbTarget) {
        var action = cc.sequence(cc.moveBy(1, 0, -1000), cc.callFunc(cb, cbTarget));
        this.player.node.runAction(action);
    };
    Stage.prototype.playerJump = function (cb, target) {
        var _this = this;
        if (!this.player.isReadyJump) {
            return;
        }
        var jumpGrids = Math.round(this.player.jumpDistance / this.gridWidth);
        var targetGrid = this.playerIndex + jumpGrids;
        var targetPos = cc.v2(this.gridWidth * targetGrid + this.gridWidth / 2, 0);
        this.player.jumpTo(targetPos, function () {
            _this.playerIndex = targetGrid;
            if (targetGrid <= _this.currBlock.tail) {
                cb(_this.playerIndex, false);
            }
            else if (targetGrid >= _this.nextBlock.head && targetGrid <= _this.nextBlock.tail) {
                cb(_this.playerIndex, true);
            }
            else {
                cb(-1, false);
            }
        }, this);
    };
    __decorate([
        property(JumpPlayer_1.Player)
    ], Stage.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], Stage.prototype, "groundLayer", void 0);
    __decorate([
        property(cc.Integer)
    ], Stage.prototype, "gridNum", void 0);
    __decorate([
        property(cc.Graphics)
    ], Stage.prototype, "g", void 0);
    __decorate([
        property(cc.Integer)
    ], Stage.prototype, "minBlockSpace", void 0);
    __decorate([
        property(cc.Integer)
    ], Stage.prototype, "maxBlockSpace", void 0);
    __decorate([
        property(cc.Integer)
    ], Stage.prototype, "minBlockLength", void 0);
    __decorate([
        property(cc.Integer)
    ], Stage.prototype, "maxBlockLength", void 0);
    __decorate([
        property(cc.Float)
    ], Stage.prototype, "cameraMoveDuration", void 0);
    __decorate([
        property(cc.Node)
    ], Stage.prototype, "endScene", void 0);
    Stage = __decorate([
        ccclass
        // @executeInEditMode
    ], Stage);
    return Stage;
}(cc.Component));
exports.Stage = Stage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxqdW1wXFxKdW1wU3RhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsMkNBQXNDO0FBR2hDLElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBSS9EO0lBQTJCLHlCQUFZO0lBRHZDLHFCQUFxQjtJQUNyQjtRQUFBLHFFQWtLQztRQS9KVyxZQUFNLEdBQVcsSUFBSSxDQUFDO1FBRXRCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsT0FBQyxHQUFnQixJQUFJLENBQUM7UUFFdEIsbUJBQWEsR0FBVyxDQUFDLENBQUMsQ0FBQSxhQUFhO1FBRXZDLG1CQUFhLEdBQVcsRUFBRSxDQUFDO1FBRTNCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBRTNCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBRTNCLHdCQUFrQixHQUFXLENBQUMsQ0FBQztRQUUvQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFDNUIsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixrQkFBWSxHQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNoQyxZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGVBQVMsR0FBVSxJQUFJLENBQUMsQ0FBQSx3QkFBd0I7UUFDaEQsZUFBUyxHQUFVLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFXLElBQUksQ0FBQztRQUMzQixlQUFTLEdBQXNCLElBQUksQ0FBQztRQUNwQyxtQkFBYSxHQUFZLEtBQUssQ0FBQzs7SUFrSTNDLENBQUM7SUFoSUcsc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUNsRCxDQUFDO0lBRU0sb0JBQUksR0FBWCxVQUFZLFNBQW9CO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFTSw4QkFBYyxHQUFyQixVQUFzQixFQUFFLEVBQUUsUUFBUTtRQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLGlCQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLGlCQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsRUFBRSxFQUFFLENBQUM7UUFDVCxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLHlCQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSx1QkFBTyxHQUFkLFVBQWUsRUFBRSxFQUFFLFFBQVE7UUFBM0IsaUJBdUJDO1FBdEJHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQy9FLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNQLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztnQkFDcEMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2hELElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM1QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9ELEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUVNLHFCQUFL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UUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0NBQ1E7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnREFDYTtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dEQUNjO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7aURBQ2M7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztpREFDYztJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNvQjtJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNlO0lBckJ4QixLQUFLO1FBRmpCLE9BQU87UUFDUixxQkFBcUI7T0FDUixLQUFLLENBa0tqQjtJQUFELFlBQUM7Q0FsS0QsQUFrS0MsQ0FsSzBCLEVBQUUsQ0FBQyxTQUFTLEdBa0t0QztBQWxLWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsb2NrIH0gZnJvbSBcIi4vSnVtcEJsb2NrXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9KdW1wUGxheWVyXCI7XG5pbXBvcnQgeyBKdW1wU2NlbmUgfSBmcm9tIFwiLi9KdW1wU2NlbmVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG4vLyBAZXhlY3V0ZUluRWRpdE1vZGVcbmV4cG9ydCBjbGFzcyBTdGFnZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoUGxheWVyKVxuICAgIHByaXZhdGUgcGxheWVyOiBQbGF5ZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgZ3JvdW5kTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHByaXZhdGUgZ3JpZE51bTogbnVtYmVyID0gMjA7XG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxuICAgIHByaXZhdGUgZzogY2MuR3JhcGhpY3MgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHByaXZhdGUgbWluQmxvY2tTcGFjZTogbnVtYmVyID0gMTsvL+S4pOS4qmJsb2Nr5pyA5bCP6Ze06LedXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgcHJpdmF0ZSBtYXhCbG9ja1NwYWNlOiBudW1iZXIgPSAxMDtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBwcml2YXRlIG1pbkJsb2NrTGVuZ3RoOiBudW1iZXIgPSAxO1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHByaXZhdGUgbWF4QmxvY2tMZW5ndGg6IG51bWJlciA9IDc7XG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHByaXZhdGUgY2FtZXJhTW92ZUR1cmF0aW9uOiBudW1iZXIgPSAxO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgZW5kU2NlbmU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBqdW1wU2NlbmU6IEp1bXBTY2VuZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBncmlkV2lkdGg6IG51bWJlciA9IDMyO1xuICAgIHByaXZhdGUgZ3JvdW5kT3JpZ2luOiBjYy5WZWMyID0gY2MudjIoKTtcbiAgICBwcml2YXRlIG9mZnNldDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGN1cnJCbG9jazogQmxvY2sgPSBudWxsOy8vIOWQjOS4gOWxj+WPquWHuueOsOS4pOS4qmJsb2Nr77yM546p5a6256uZ55qE5piv6L+Z5LiqXG4gICAgcHJpdmF0ZSBuZXh0QmxvY2s6IEJsb2NrID0gbnVsbDtcblxuICAgIHByaXZhdGUgcGxheWVySW5kZXg6IG51bWJlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBhbmltU3RhdGU6IGNjLkFuaW1hdGlvblN0YXRlID0gbnVsbDtcbiAgICBwcml2YXRlIGlzTW92aW5nU3RhZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ncmlkV2lkdGggPSBNYXRoLmZsb29yKHRoaXMuZ3JvdW5kTGF5ZXIud2lkdGggLyB0aGlzLmdyaWROdW0pO1xuICAgICAgICB0aGlzLmdyb3VuZE9yaWdpbiA9IHRoaXMuZ3JvdW5kTGF5ZXIucG9zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoanVtcFNjZW5lOiBKdW1wU2NlbmUpIHtcbiAgICAgICAgdGhpcy5qdW1wU2NlbmUgPSBqdW1wU2NlbmU7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dTdGFydFN0b3J5KGNiLCBjYlRhcmdldCkge1xuICAgICAgICB0aGlzLmcuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5kcmF3QmxvY2sobmV3IEJsb2NrKDAsIDUpKTtcbiAgICAgICAgdGhpcy5kcmF3QmxvY2sobmV3IEJsb2NrKDksIDUpKTtcbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICBhbmltLm9uY2UoXCJmaW5pc2hlZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9LCBjYlRhcmdldCk7XG4gICAgICAgIHRoaXMuYW5pbVN0YXRlID0gYW5pbS5wbGF5KFwic3RhcnRcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlbmRHYW1lKGNiLCBjYlRhcmdldCkge1xuICAgICAgICB0aGlzLmcuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbmRTY2VuZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9LCA1KTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB9LCAxMCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZC5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNThENjM5XCIpO1xuICAgICAgICAgICAgICAgIGxldCBzdHJlYWsgPSB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKTtcbiAgICAgICAgICAgICAgICBzdHJlYWsuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzU4RDYzOVwiKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDE1KTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVhZHlKdW1wKCk7XG4gICAgICAgIH0sIDIwKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZhciA9IGNjLnYyKHRoaXMucGxheWVyLm5vZGUueCAtIDEwMDAsIHRoaXMucGxheWVyLm5vZGUueSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5qdW1wVG8oZmFyLCBjYiwgY2JUYXJnZXQpO1xuICAgICAgICB9LCAyNSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIucG9zaXRpb24gPSB0aGlzLmdyb3VuZE9yaWdpbjtcbiAgICAgICAgdGhpcy5nLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuY3VyckJsb2NrID0gbmV3IEJsb2NrKDAsIDUpO1xuICAgICAgICB0aGlzLm5leHRCbG9jayA9IG5ldyBCbG9jayg5LCA1KTtcbiAgICAgICAgdGhpcy5kcmF3QmxvY2sodGhpcy5jdXJyQmxvY2spO1xuICAgICAgICB0aGlzLmRyYXdCbG9jayh0aGlzLm5leHRCbG9jayk7XG4gICAgICAgIGxldCBjZW50ZXIgPSB0aGlzLmN1cnJCbG9jay5oZWFkICsgTWF0aC5mbG9vcih0aGlzLmN1cnJCbG9jay5sZW5ndGggLyAyKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJJbmRleCA9IGNlbnRlcjtcbiAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5wb3NpdGlvbiA9IGNjLnYyKGNlbnRlciAqIHRoaXMuZ3JpZFdpZHRoICsgdGhpcy5ncmlkV2lkdGggLyAyLCAwKTtcbiAgICAgICAgdGhpcy5pc01vdmluZ1N0YWdlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3QmxvY2soYmxvY2s6IEJsb2NrKSB7XG4gICAgICAgIHRoaXMuZy5yZWN0KGJsb2NrLmhlYWQgKiB0aGlzLmdyaWRXaWR0aCwgLSB0aGlzLmdyaWRXaWR0aCwgdGhpcy5ncmlkV2lkdGggKiBibG9jay5sZW5ndGgsdGhpcy5ncmlkV2lkdGgpO1xuICAgICAgICB0aGlzLmcuZmlsbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGROZXdCbG9jaygpIHtcbiAgICAgICAgbGV0IGNiID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyQmxvY2sgPSB0aGlzLm5leHRCbG9jaztcbiAgICAgICAgICAgIGxldCBzcGFjZSA9IE1hdGguZmxvb3IodGhpcy5taW5CbG9ja1NwYWNlICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heEJsb2NrU3BhY2UgLSB0aGlzLm1pbkJsb2NrU3BhY2UpKTtcbiAgICAgICAgICAgIGxldCBoZWFkID0gdGhpcy5jdXJyQmxvY2suaGVhZCArIHRoaXMuY3VyckJsb2NrLmxlbmd0aCArIHNwYWNlO1xuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IE1hdGguZmxvb3IodGhpcy5taW5CbG9ja0xlbmd0aCArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhCbG9ja0xlbmd0aCAtIHRoaXMubWluQmxvY2tMZW5ndGgpKTtcbiAgICAgICAgICAgIHRoaXMubmV4dEJsb2NrID0gbmV3IEJsb2NrKGhlYWQsIGxlbmd0aCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdCbG9jayh0aGlzLm5leHRCbG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlU3RhZ2UoY2IsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbW92ZVN0YWdlKGNiOiBGdW5jdGlvbiwgdGFyZ2V0OiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc01vdmluZ1N0YWdlID0gdHJ1ZTtcbiAgICAgICAgbGV0IG1vdmVMZW5ndGggPSAodGhpcy5uZXh0QmxvY2suaGVhZCAtIHRoaXMuY3VyckJsb2NrLmhlYWQpICogdGhpcy5ncmlkV2lkdGg7XG4gICAgICAgIGxldCBtb3ZlQWN0aW9uID0gY2MubW92ZUJ5KHRoaXMuY2FtZXJhTW92ZUR1cmF0aW9uLCAtbW92ZUxlbmd0aCwgMCk7XG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShtb3ZlQWN0aW9uLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nU3RhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0sIHRhcmdldCkpO1xuICAgICAgICB0aGlzLmdyb3VuZExheWVyLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FuUmVhZHlKdW1wKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNNb3ZpbmdTdGFnZSAmJiB0aGlzLnBsYXllci5zcGVlZCA9PT0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheWVyUmVhZHlKdW1wKCkge1xuICAgICAgICBpZiAodGhpcy5jYW5SZWFkeUp1bXAoKSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVhZHlKdW1wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaWdub3JlU3RvcnkoKSB7XG4gICAgICAgIHRoaXMuYW5pbVN0YXRlLnNwZWVkID0gNDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheWVyRGllKGNiLCBjYlRhcmdldCkge1xuICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoY2MubW92ZUJ5KDEsIDAsIC0xMDAwKSwgY2MuY2FsbEZ1bmMoY2IsIGNiVGFyZ2V0KSk7XG4gICAgICAgIHRoaXMucGxheWVyLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXllckp1bXAoY2IsIHRhcmdldCkge1xuICAgICAgICBpZiAoIXRoaXMucGxheWVyLmlzUmVhZHlKdW1wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGp1bXBHcmlkcyA9IE1hdGgucm91bmQodGhpcy5wbGF5ZXIuanVtcERpc3RhbmNlIC8gdGhpcy5ncmlkV2lkdGgpO1xuICAgICAgICBsZXQgdGFyZ2V0R3JpZCA9IHRoaXMucGxheWVySW5kZXggKyBqdW1wR3JpZHM7XG4gICAgICAgIGxldCB0YXJnZXRQb3MgPSBjYy52Mih0aGlzLmdyaWRXaWR0aCAqIHRhcmdldEdyaWQgKyB0aGlzLmdyaWRXaWR0aCAvIDIsIDApO1xuICAgICAgICB0aGlzLnBsYXllci5qdW1wVG8odGFyZ2V0UG9zLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckluZGV4ID0gdGFyZ2V0R3JpZDtcbiAgICAgICAgICAgIGlmICh0YXJnZXRHcmlkIDw9IHRoaXMuY3VyckJsb2NrLnRhaWwpIHtcbiAgICAgICAgICAgICAgICBjYih0aGlzLnBsYXllckluZGV4LCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldEdyaWQgPj0gdGhpcy5uZXh0QmxvY2suaGVhZCAmJiB0YXJnZXRHcmlkIDw9IHRoaXMubmV4dEJsb2NrLnRhaWwpIHtcbiAgICAgICAgICAgICAgICBjYih0aGlzLnBsYXllckluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2IoLTEsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG59XG4iXX0=