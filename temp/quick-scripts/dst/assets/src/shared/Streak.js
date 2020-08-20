
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/shared/Streak.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d2a9UGfIdOHJj/cCvXlEIj', 'Streak');
// src/shared/Streak.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Streak = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Streak = /** @class */ (function (_super) {
    __extends(Streak, _super);
    function Streak() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.g = null;
        return _this;
    }
    Streak.prototype.start = function () {
        this.node.parent.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    Streak.prototype.onTouchStart = function (event) {
        var localPos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        this.g.circle(localPos.x, localPos.y, 5);
        this.g.fill();
        this.g.moveTo(localPos.x, localPos.y);
    };
    Streak.prototype.onTouchMove = function (event) {
        var localPos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        this.g.lineTo(localPos.x, localPos.y);
        this.g.stroke();
        this.g.moveTo(localPos.x, localPos.y);
    };
    Streak.prototype.onTouchEnd = function (event) {
        // this.node.position = this.node.parent.convertToNodeSpaceAR(event.getStartLocation());
        // let moveAction = cc.moveTo(0.3, this.node.parent.convertToNodeSpaceAR(event.getLocation()));
        // this.node.runAction(moveAction);
        var localPos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        this.g.circle(localPos.x, localPos.y, 5);
        this.g.fill();
        this.g.clear();
    };
    __decorate([
        property(cc.Graphics)
    ], Streak.prototype, "g", void 0);
    Streak = __decorate([
        ccclass
    ], Streak);
    return Streak;
}(cc.Component));
exports.Streak = Streak;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzaGFyZWRcXFN0cmVhay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRCLDBCQUFZO0lBQXhDO1FBQUEscUVBb0NDO1FBakNXLE9BQUMsR0FBZ0IsSUFBSSxDQUFDOztJQWlDbEMsQ0FBQztJQS9CRyxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU8sNkJBQVksR0FBcEIsVUFBcUIsS0FBMEI7UUFDM0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU8sNEJBQVcsR0FBbkIsVUFBb0IsS0FBMEI7UUFDMUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU8sMkJBQVUsR0FBbEIsVUFBbUIsS0FBMEI7UUFDekMsd0ZBQXdGO1FBQ3hGLCtGQUErRjtRQUMvRixtQ0FBbUM7UUFDbkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFoQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztxQ0FDUTtJQUhyQixNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBb0NsQjtJQUFELGFBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQzJCLEVBQUUsQ0FBQyxTQUFTLEdBb0N2QztBQXBDWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgU3RyZWFrIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcbiAgICBwcml2YXRlIGc6IGNjLkdyYXBoaWNzID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMub25Ub3VjaFN0YXJ0LHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsdGhpcy5vblRvdWNoTW92ZSx0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy5vblRvdWNoRW5kLHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCx0aGlzLm9uVG91Y2hFbmQsdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKXtcbiAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgdGhpcy5nLmNpcmNsZShsb2NhbFBvcy54LGxvY2FsUG9zLnksNSk7XG4gICAgICAgIHRoaXMuZy5maWxsKCk7XG4gICAgICAgIHRoaXMuZy5tb3ZlVG8obG9jYWxQb3MueCxsb2NhbFBvcy55KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgIHRoaXMuZy5saW5lVG8obG9jYWxQb3MueCxsb2NhbFBvcy55KTtcbiAgICAgICAgdGhpcy5nLnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmcubW92ZVRvKGxvY2FsUG9zLngsbG9jYWxQb3MueSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0U3RhcnRMb2NhdGlvbigpKTtcbiAgICAgICAgLy8gbGV0IG1vdmVBY3Rpb24gPSBjYy5tb3ZlVG8oMC4zLCB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpKTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLnJ1bkFjdGlvbihtb3ZlQWN0aW9uKTtcbiAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgdGhpcy5nLmNpcmNsZShsb2NhbFBvcy54LGxvY2FsUG9zLnksNSk7XG4gICAgICAgIHRoaXMuZy5maWxsKCk7XG4gICAgICAgIHRoaXMuZy5jbGVhcigpO1xuICAgIH1cbn1cbiJdfQ==