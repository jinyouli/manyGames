
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/G.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '409bcMsMydAJKg/yHU4OEJk', 'G');
// src/G.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.G = void 0;
var GlobalInstance = /** @class */ (function () {
    function GlobalInstance() {
        this.gameRoot = null;
    }
    GlobalInstance.prototype.enterHall = function () {
        cc.director.loadScene("hall");
    };
    GlobalInstance.prototype.returnHall = function () {
        cc.director.loadScene("hall");
    };
    GlobalInstance.prototype.enterGobang = function () {
        this.loadSceneWithProgress("gobang");
    };
    GlobalInstance.prototype.enterReversi = function () {
        this.loadSceneWithProgress("reversi");
    };
    GlobalInstance.prototype.enter2048 = function () {
        this.loadSceneWithProgress("2048");
    };
    GlobalInstance.prototype.enterJump = function () {
        this.loadSceneWithProgress("jump");
    };
    GlobalInstance.prototype.enterPuzzle = function () {
        this.loadSceneWithProgress("puzzle");
    };
    GlobalInstance.prototype.enterGet47 = function () {
        this.loadSceneWithProgress("get47");
    };
    GlobalInstance.prototype.enterTetris = function () {
        this.loadSceneWithProgress("tetris");
    };
    GlobalInstance.prototype.enterMine = function () {
        this.loadSceneWithProgress("mine");
    };
    GlobalInstance.prototype.enterLink = function () {
        this.loadSceneWithProgress("link");
    };
    GlobalInstance.prototype.enterSnake = function () {
        this.loadSceneWithProgress("snake");
    };
    GlobalInstance.prototype.enterBrick = function () {
        this.loadSceneWithProgress("brick");
    };
    GlobalInstance.prototype.enterPinball = function () {
        this.loadSceneWithProgress("pinball");
    };
    GlobalInstance.prototype.setLoadingDisplay = function () {
        if (cc.sys.isNative) {
            return;
        }
        // Loading splash scene
        var splash = document.getElementById('splash');
        var progressBar = splash.querySelector('.progress-bar span');
        cc.loader.onProgress = function (completedCount, totalCount, item) {
            var percent = 100 * completedCount / totalCount;
            if (progressBar) {
                progressBar.style.width = percent.toFixed(2) + '%';
            }
        };
        splash.style.display = 'block';
        progressBar.style.width = '0%';
        cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
            splash.style.display = 'none';
        });
    };
    GlobalInstance.prototype.loadSceneWithProgress = function (scene, cb) {
        this.setLoadingDisplay();
        cc.director.preloadScene(scene, function () {
            setTimeout(function () {
                cc.director.loadScene(scene, cb);
            }, 1000);
        });
    };
    GlobalInstance.prototype.setResolutionPolicy = function () {
        var f = function () {
            if (cc.sys.isMobile) {
                cc.log('手机场景适配');
                cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_WIDTH);
                // cc.Canvas.instance['alignWithScreen']();
            }
            else {
                cc.log('电脑场景适配');
                cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL);
                // cc.Canvas.instance['alignWithScreen']();
            }
        };
        f();
        cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LOADING, f);
    };
    GlobalInstance.Instance = new GlobalInstance();
    return GlobalInstance;
}());
exports.G = GlobalInstance.Instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lUm9vdCB9IGZyb20gXCIuL3NoYXJlZC9HYW1lUm9vdFwiO1xuXG5jbGFzcyBHbG9iYWxJbnN0YW5jZSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEluc3RhbmNlOiBHbG9iYWxJbnN0YW5jZSA9IG5ldyBHbG9iYWxJbnN0YW5jZSgpO1xuICAgIHB1YmxpYyBnYW1lUm9vdDogR2FtZVJvb3QgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW50ZXJIYWxsKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJoYWxsXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXR1cm5IYWxsKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJoYWxsXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlbnRlckdvYmFuZygpIHtcbiAgICAgICAgdGhpcy5sb2FkU2NlbmVXaXRoUHJvZ3Jlc3MoXCJnb2JhbmdcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGVudGVyUmV2ZXJzaSgpIHtcbiAgICAgICAgdGhpcy5sb2FkU2NlbmVXaXRoUHJvZ3Jlc3MoXCJyZXZlcnNpXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlbnRlcjIwNDgoKSB7XG4gICAgICAgIHRoaXMubG9hZFNjZW5lV2l0aFByb2dyZXNzKFwiMjA0OFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW50ZXJKdW1wKCkge1xuICAgICAgICB0aGlzLmxvYWRTY2VuZVdpdGhQcm9ncmVzcyhcImp1bXBcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGVudGVyUHV6emxlKCkge1xuICAgICAgICB0aGlzLmxvYWRTY2VuZVdpdGhQcm9ncmVzcyhcInB1enpsZVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW50ZXJHZXQ0NygpIHtcbiAgICAgICAgdGhpcy5sb2FkU2NlbmVXaXRoUHJvZ3Jlc3MoXCJnZXQ0N1wiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW50ZXJUZXRyaXMoKSB7XG4gICAgICAgIHRoaXMubG9hZFNjZW5lV2l0aFByb2dyZXNzKFwidGV0cmlzXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlbnRlck1pbmUoKSB7XG4gICAgICAgIHRoaXMubG9hZFNjZW5lV2l0aFByb2dyZXNzKFwibWluZVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW50ZXJMaW5rKCkge1xuICAgICAgICB0aGlzLmxvYWRTY2VuZVdpdGhQcm9ncmVzcyhcImxpbmtcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGVudGVyU25ha2UoKSB7XG4gICAgICAgIHRoaXMubG9hZFNjZW5lV2l0aFByb2dyZXNzKFwic25ha2VcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGVudGVyQnJpY2soKSB7XG4gICAgICAgIHRoaXMubG9hZFNjZW5lV2l0aFByb2dyZXNzKFwiYnJpY2tcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGVudGVyUGluYmFsbCgpIHtcbiAgICAgICAgdGhpcy5sb2FkU2NlbmVXaXRoUHJvZ3Jlc3MoXCJwaW5iYWxsXCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0TG9hZGluZ0Rpc3BsYXkoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb2FkaW5nIHNwbGFzaCBzY2VuZVxuICAgICAgICBsZXQgc3BsYXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwbGFzaCcpO1xuICAgICAgICBsZXQgcHJvZ3Jlc3NCYXIgPSBzcGxhc2gucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWJhciBzcGFuJyk7XG4gICAgICAgIChjYy5sb2FkZXIgYXMgYW55KS5vblByb2dyZXNzID0gZnVuY3Rpb24gKGNvbXBsZXRlZENvdW50LCB0b3RhbENvdW50LCBpdGVtKSB7XG4gICAgICAgICAgICBsZXQgcGVyY2VudCA9IDEwMCAqIGNvbXBsZXRlZENvdW50IC8gdG90YWxDb3VudDtcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc0Jhcikge1xuICAgICAgICAgICAgICAgIChwcm9ncmVzc0JhciBhcyBhbnkpLnN0eWxlLndpZHRoID0gcGVyY2VudC50b0ZpeGVkKDIpICsgJyUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzcGxhc2guc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIChwcm9ncmVzc0JhciBhcyBhbnkpLnN0eWxlLndpZHRoID0gJzAlJztcblxuICAgICAgICBjYy5kaXJlY3Rvci5vbmNlKGNjLkRpcmVjdG9yLkVWRU5UX0FGVEVSX1NDRU5FX0xBVU5DSCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3BsYXNoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFNjZW5lV2l0aFByb2dyZXNzKHNjZW5lOiBzdHJpbmcsIGNiPzogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zZXRMb2FkaW5nRGlzcGxheSgpO1xuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoc2NlbmUsICgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZSwgY2IpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRSZXNvbHV0aW9uUG9saWN5KCkge1xuICAgICAgICBsZXQgZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coJ+aJi+acuuWcuuaZr+mAgumFjScpO1xuICAgICAgICAgICAgICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoNzIwLCAxMjgwLCBjYy5SZXNvbHV0aW9uUG9saWN5LkZJWEVEX1dJRFRIKTtcbiAgICAgICAgICAgICAgIC8vIGNjLkNhbnZhcy5pbnN0YW5jZVsnYWxpZ25XaXRoU2NyZWVuJ10oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKCfnlLXohJHlnLrmma/pgILphY0nKTtcbiAgICAgICAgICAgICAgICBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDcyMCwgMTI4MCwgY2MuUmVzb2x1dGlvblBvbGljeS5TSE9XX0FMTCk7XG4gICAgICAgICAgICAgICAvLyBjYy5DYW52YXMuaW5zdGFuY2VbJ2FsaWduV2l0aFNjcmVlbiddKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZigpO1xuICAgICAgICBjYy5kaXJlY3Rvci5vbihjYy5EaXJlY3Rvci5FVkVOVF9CRUZPUkVfU0NFTkVfTE9BRElORywgZik7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRyA9IEdsb2JhbEluc3RhbmNlLkluc3RhbmNlO1xuIl19