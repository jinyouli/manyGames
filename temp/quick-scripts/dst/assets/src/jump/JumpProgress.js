
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/jump/JumpProgress.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxqdW1wXFxKdW1wUHJvZ3Jlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4Qiw0QkFBWTtJQUExQztRQUFBLHFFQWtDQztRQS9CVyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBVyxHQUFHLENBQUM7O0lBeUJqQyxDQUFDO0lBdkJVLHVCQUFJLEdBQVgsVUFBWSxNQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0sdUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRU0sdUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRU0saUNBQWMsR0FBckIsVUFBc0IsUUFBZ0I7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbkQsSUFBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDaEMsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFJO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RELE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQTlCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNrQjtJQUUzQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ2E7SUFQdEIsUUFBUTtRQURwQixPQUFPO09BQ0ssUUFBUSxDQWtDcEI7SUFBRCxlQUFDO0NBbENELEFBa0NDLENBbEM2QixFQUFFLENBQUMsU0FBUyxHQWtDekM7QUFsQ1ksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFByb2dyZXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICBwcml2YXRlIHByb2dyZXNzQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBhbmNob3I6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgdGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgbGVuZ3RoOiBudW1iZXIgPSAxMDA7XG5cbiAgICBwdWJsaWMgaW5pdChsZW5ndGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5hbmNob3IueCA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlKCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpOmJvb2xlYW4ge1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gcHJvZ3Jlc3MgLyB0aGlzLmxlbmd0aDtcbiAgICAgICAgaWYodGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA+PSAwLjk1KXtcbiAgICAgICAgICAgIHRoaXMuYW5jaG9yLnggPSB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgICAgICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmFuY2hvci54ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpLndpZHRoO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19