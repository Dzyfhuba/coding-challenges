"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIsogram = void 0;
var isIsogram = function (str) {
    var splitted = str.toLowerCase().split('');
    var counter = {};
    splitted.forEach(function (e) {
        counter[e] = (counter[e] || 0) + 1;
    });
    return !!!Object.values(counter).filter(function (e) { return e > 1; }).length;
};
exports.isIsogram = isIsogram;
