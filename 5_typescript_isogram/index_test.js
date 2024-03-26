"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("./index");
// TODO Add your tests here
describe("5_typescript_isogram", function () {
    it("success tests", function () {
        chai_1.assert.equal((0, index_1.isIsogram)("Dermatoglyphics"), true);
        chai_1.assert.equal((0, index_1.isIsogram)("isogram"), true);
        chai_1.assert.equal((0, index_1.isIsogram)("aba"), false, "same chars may not be adjacent");
        chai_1.assert.equal((0, index_1.isIsogram)("moOse"), false, "same chars may not be same case");
        chai_1.assert.equal((0, index_1.isIsogram)("isIsogram"), false);
        chai_1.assert.equal((0, index_1.isIsogram)(""), true, "an empty string is a valid isogram");
    });
    it("failed tests", function () {
        chai_1.assert.notEqual((0, index_1.isIsogram)("Dermatoglyphics"), false);
        chai_1.assert.notEqual((0, index_1.isIsogram)("isogram"), false);
        chai_1.assert.notEqual((0, index_1.isIsogram)("aba"), true, "same chars may not be adjacent");
        chai_1.assert.notEqual((0, index_1.isIsogram)("moOse"), true, "same chars may not be same case");
        chai_1.assert.notEqual((0, index_1.isIsogram)("isIsogram"), true);
        chai_1.assert.notEqual((0, index_1.isIsogram)(""), false, "an empty string is a valid isogram");
    });
});
