
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/src/2048/M2048Board');
require('./assets/src/2048/M2048Constants');
require('./assets/src/2048/M2048Piece');
require('./assets/src/2048/M2048Scene');
require('./assets/src/G');
require('./assets/src/brick/BrickBall');
require('./assets/src/brick/BrickColor');
require('./assets/src/brick/BrickLayout');
require('./assets/src/brick/BrickPaddle');
require('./assets/src/brick/BrickScene');
require('./assets/src/get47/Get47Board');
require('./assets/src/get47/Get47Constants');
require('./assets/src/get47/Get47Piece');
require('./assets/src/get47/Get47Scene');
require('./assets/src/get47/Get47Score');
require('./assets/src/gobang/GobangAI');
require('./assets/src/gobang/GobangBoard');
require('./assets/src/gobang/GobangConstants');
require('./assets/src/gobang/GobangPiece');
require('./assets/src/gobang/GobangScene');
require('./assets/src/hall/HallScene');
require('./assets/src/jump/JumpBlock');
require('./assets/src/jump/JumpConstants');
require('./assets/src/jump/JumpPlayer');
require('./assets/src/jump/JumpProgress');
require('./assets/src/jump/JumpScene');
require('./assets/src/jump/JumpStage');
require('./assets/src/link/LinkBoard');
require('./assets/src/link/LinkConstants');
require('./assets/src/link/LinkPiece');
require('./assets/src/link/LinkScene');
require('./assets/src/loading/LoadingScene');
require('./assets/src/mine/MineConstans');
require('./assets/src/mine/MineLevelLabel');
require('./assets/src/mine/MinePiece');
require('./assets/src/mine/MineScene');
require('./assets/src/mine/MnieBoard');
require('./assets/src/puzzle/PuzzleBoard');
require('./assets/src/puzzle/PuzzleConstants');
require('./assets/src/puzzle/PuzzlePiece');
require('./assets/src/puzzle/PuzzleScene');
require('./assets/src/reversi/ReversiAI');
require('./assets/src/reversi/ReversiBoard');
require('./assets/src/reversi/ReversiConstants');
require('./assets/src/reversi/ReversiPiece');
require('./assets/src/reversi/ReversiScene');
require('./assets/src/shared/GameRoot');
require('./assets/src/shared/Streak');
require('./assets/src/shared/Timer');
require('./assets/src/snake/SnakeBoard');
require('./assets/src/snake/SnakeConstants');
require('./assets/src/snake/SnakePiece');
require('./assets/src/snake/SnakeScene');
require('./assets/src/tetris/TetrisBoard');
require('./assets/src/tetris/TetrisConstants');
require('./assets/src/tetris/TetrisPiece');
require('./assets/src/tetris/TetrisScene');

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