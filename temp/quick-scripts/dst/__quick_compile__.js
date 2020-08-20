
(function () {
var scripts = [{"deps":{"./assets/src/G":7,"./assets/src/get47/Get47Constants":9,"./assets/src/jump/JumpConstants":10,"./assets/src/puzzle/PuzzlePiece":13,"./assets/src/shared/Timer":14,"./assets/migration/use_v2.0.x_cc.Toggle_event":16,"./assets/src/get47/Get47Piece":18,"./assets/src/get47/Get47Score":19,"./assets/src/gobang/GobangConstants":20,"./assets/src/gobang/GobangPiece":21,"./assets/src/jump/JumpPlayer":23,"./assets/src/jump/JumpProgress":24,"./assets/src/link/LinkConstants":27,"./assets/src/mine/MineLevelLabel":31,"./assets/src/mine/MineConstans":33,"./assets/src/jump/JumpBlock":34,"./assets/src/puzzle/PuzzleConstants":36,"./assets/src/reversi/ReversiConstants":39,"./assets/src/reversi/ReversiPiece":40,"./assets/src/shared/Streak":43,"./assets/src/snake/SnakeConstants":44,"./assets/src/shared/GameRoot":45,"./assets/src/tetris/TetrisConstants":47,"./assets/src/tetris/TetrisPiece":48,"./assets/src/brick/BrickLayout":51,"./assets/src/2048/M2048Piece":53,"./assets/src/brick/BrickPaddle":54,"./assets/src/brick/BrickBall":55,"./assets/src/2048/M2048Constants":56,"./assets/src/brick/BrickColor":58,"./assets/src/get47/Get47Board":1,"./assets/src/link/LinkBoard":2,"./assets/src/mine/MnieBoard":3,"./assets/src/reversi/ReversiBoard":4,"./assets/src/snake/SnakeBoard":5,"./assets/src/tetris/TetrisBoard":6,"./assets/src/gobang/GobangBoard":8,"./assets/src/hall/HallScene":11,"./assets/src/loading/LoadingScene":12,"./assets/src/2048/M2048Board":15,"./assets/src/get47/Get47Scene":17,"./assets/src/gobang/GobangScene":22,"./assets/src/gobang/GobangAI":25,"./assets/src/jump/JumpScene":26,"./assets/src/link/LinkScene":28,"./assets/src/link/LinkPiece":29,"./assets/src/jump/JumpStage":30,"./assets/src/mine/MinePiece":32,"./assets/src/mine/MineScene":35,"./assets/src/puzzle/PuzzleScene":37,"./assets/src/puzzle/PuzzleBoard":38,"./assets/src/reversi/ReversiScene":41,"./assets/src/reversi/ReversiAI":42,"./assets/src/snake/SnakePiece":46,"./assets/src/snake/SnakeScene":49,"./assets/src/tetris/TetrisScene":50,"./assets/src/2048/M2048Scene":52,"./assets/src/brick/BrickScene":57},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./Get47Piece":18,"./Get47Constants":9},"path":"preview-scripts/assets/src/get47/Get47Board.js"},{"deps":{"./LinkPiece":29,"./LinkConstants":27},"path":"preview-scripts/assets/src/link/LinkBoard.js"},{"deps":{"./MinePiece":32,"./MineConstans":33},"path":"preview-scripts/assets/src/mine/MnieBoard.js"},{"deps":{"./ReversiPiece":40,"./ReversiConstants":39},"path":"preview-scripts/assets/src/reversi/ReversiBoard.js"},{"deps":{"./SnakeConstants":44,"./SnakePiece":46},"path":"preview-scripts/assets/src/snake/SnakeBoard.js"},{"deps":{"./TetrisPiece":48},"path":"preview-scripts/assets/src/tetris/TetrisBoard.js"},{"deps":{},"path":"preview-scripts/assets/src/G.js"},{"deps":{"./GobangConstants":20,"./GobangPiece":21},"path":"preview-scripts/assets/src/gobang/GobangBoard.js"},{"deps":{},"path":"preview-scripts/assets/src/get47/Get47Constants.js"},{"deps":{},"path":"preview-scripts/assets/src/jump/JumpConstants.js"},{"deps":{"../G":7},"path":"preview-scripts/assets/src/hall/HallScene.js"},{"deps":{"../shared/GameRoot":45,"../G":7},"path":"preview-scripts/assets/src/loading/LoadingScene.js"},{"deps":{},"path":"preview-scripts/assets/src/puzzle/PuzzlePiece.js"},{"deps":{},"path":"preview-scripts/assets/src/shared/Timer.js"},{"deps":{"./M2048Piece":53,"./M2048Constants":56},"path":"preview-scripts/assets/src/2048/M2048Board.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{"./Get47Board":1,"./Get47Constants":9,"../G":7,"./Get47Score":19},"path":"preview-scripts/assets/src/get47/Get47Scene.js"},{"deps":{},"path":"preview-scripts/assets/src/get47/Get47Piece.js"},{"deps":{},"path":"preview-scripts/assets/src/get47/Get47Score.js"},{"deps":{},"path":"preview-scripts/assets/src/gobang/GobangConstants.js"},{"deps":{},"path":"preview-scripts/assets/src/gobang/GobangPiece.js"},{"deps":{"./GobangBoard":8,"./GobangConstants":20,"./GobangAI":25,"../G":7},"path":"preview-scripts/assets/src/gobang/GobangScene.js"},{"deps":{},"path":"preview-scripts/assets/src/jump/JumpPlayer.js"},{"deps":{},"path":"preview-scripts/assets/src/jump/JumpProgress.js"},{"deps":{"./GobangConstants":20},"path":"preview-scripts/assets/src/gobang/GobangAI.js"},{"deps":{"./JumpStage":30,"./JumpConstants":10,"./JumpProgress":24,"../G":7},"path":"preview-scripts/assets/src/jump/JumpScene.js"},{"deps":{},"path":"preview-scripts/assets/src/link/LinkConstants.js"},{"deps":{"./LinkBoard":2,"./LinkConstants":27,"../G":7,"../shared/Timer":14},"path":"preview-scripts/assets/src/link/LinkScene.js"},{"deps":{"./LinkConstants":27},"path":"preview-scripts/assets/src/link/LinkPiece.js"},{"deps":{"./JumpBlock":34,"./JumpPlayer":23},"path":"preview-scripts/assets/src/jump/JumpStage.js"},{"deps":{},"path":"preview-scripts/assets/src/mine/MineLevelLabel.js"},{"deps":{"./MineConstans":33},"path":"preview-scripts/assets/src/mine/MinePiece.js"},{"deps":{},"path":"preview-scripts/assets/src/mine/MineConstans.js"},{"deps":{},"path":"preview-scripts/assets/src/jump/JumpBlock.js"},{"deps":{"./MnieBoard":3,"../G":7,"./MineConstans":33,"./MineLevelLabel":31},"path":"preview-scripts/assets/src/mine/MineScene.js"},{"deps":{},"path":"preview-scripts/assets/src/puzzle/PuzzleConstants.js"},{"deps":{"./PuzzleConstants":36,"./PuzzleBoard":38,"../G":7,"../shared/Timer":14},"path":"preview-scripts/assets/src/puzzle/PuzzleScene.js"},{"deps":{"./PuzzlePiece":13},"path":"preview-scripts/assets/src/puzzle/PuzzleBoard.js"},{"deps":{},"path":"preview-scripts/assets/src/reversi/ReversiConstants.js"},{"deps":{},"path":"preview-scripts/assets/src/reversi/ReversiPiece.js"},{"deps":{"./ReversiBoard":4,"./ReversiAI":42,"./ReversiConstants":39,"../G":7},"path":"preview-scripts/assets/src/reversi/ReversiScene.js"},{"deps":{"./ReversiConstants":39},"path":"preview-scripts/assets/src/reversi/ReversiAI.js"},{"deps":{},"path":"preview-scripts/assets/src/shared/Streak.js"},{"deps":{},"path":"preview-scripts/assets/src/snake/SnakeConstants.js"},{"deps":{},"path":"preview-scripts/assets/src/shared/GameRoot.js"},{"deps":{"./SnakeConstants":44},"path":"preview-scripts/assets/src/snake/SnakePiece.js"},{"deps":{},"path":"preview-scripts/assets/src/tetris/TetrisConstants.js"},{"deps":{},"path":"preview-scripts/assets/src/tetris/TetrisPiece.js"},{"deps":{"./SnakeBoard":5,"./SnakeConstants":44,"../G":7},"path":"preview-scripts/assets/src/snake/SnakeScene.js"},{"deps":{"./TetrisBoard":6,"./TetrisConstants":47,"../G":7},"path":"preview-scripts/assets/src/tetris/TetrisScene.js"},{"deps":{},"path":"preview-scripts/assets/src/brick/BrickLayout.js"},{"deps":{"./M2048Board":15,"./M2048Constants":56,"../G":7},"path":"preview-scripts/assets/src/2048/M2048Scene.js"},{"deps":{},"path":"preview-scripts/assets/src/2048/M2048Piece.js"},{"deps":{},"path":"preview-scripts/assets/src/brick/BrickPaddle.js"},{"deps":{},"path":"preview-scripts/assets/src/brick/BrickBall.js"},{"deps":{},"path":"preview-scripts/assets/src/2048/M2048Constants.js"},{"deps":{"./BrickBall":55,"./BrickPaddle":54,"./BrickLayout":51,"../G":7},"path":"preview-scripts/assets/src/brick/BrickScene.js"},{"deps":{},"path":"preview-scripts/assets/src/brick/BrickColor.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    