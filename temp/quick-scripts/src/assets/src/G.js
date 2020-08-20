"use strict";
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