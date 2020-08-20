"use strict";
cc._RF.push(module, '5ecec+6EYpOOICro+tY1/xi', 'JumpProgress');
// src/jump/JumpProgress.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressBar = null;
        _this.anchor = null;
        _this.target = null;
        _this.length = 100;
        return _this;
    }
    Progress.prototype.init = function (length) {
        this.length = length;
        this.anchor.x = 0;
    };
    Progress.prototype.show = function () {
        this.node.active = true;
    };
    Progress.prototype.hide = function () {
        this.node.active = false;
    };
    Progress.prototype.updateProgress = function (progress) {
        this.progressBar.progress = progress / this.length;
        if (this.progressBar.progress >= 0.95) {
            this.anchor.x = this.node.width;
            return true;
        }
        else {
            this.anchor.x = this.node.getChildByName("bar").width;
            return false;
        }
    };
    __decorate([
        property(cc.ProgressBar)
    ], Progress.prototype, "progressBar", void 0);
    __decorate([
        property(cc.Node)
    ], Progress.prototype, "anchor", void 0);
    __decorate([
        property(cc.Node)
    ], Progress.prototype, "target", void 0);
    Progress = __decorate([
        ccclass
    ], Progress);
    return Progress;
}(cc.Component));
exports.Progress = Progress;

cc._RF.pop();