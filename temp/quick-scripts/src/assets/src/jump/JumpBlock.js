"use strict";
cc._RF.push(module, '2f59bXfwKJPCLY3438CoYsJ', 'JumpBlock');
// src/jump/JumpBlock.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
var Block = /** @class */ (function () {
    function Block(head, length) {
        this.head = head;
        this.length = length;
    }
    Object.defineProperty(Block.prototype, "tail", {
        get: function () {
            return this.head + this.length - 1;
        },
        enumerable: false,
        configurable: true
    });
    return Block;
}());
exports.Block = Block;

cc._RF.pop();