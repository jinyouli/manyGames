"use strict";
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