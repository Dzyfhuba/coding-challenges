import { assert } from "chai";

import { isIsogram } from "./index";

// TODO Add your tests here
describe("5_typescript_isogram", function() {
  it("success tests", function() {
    assert.equal( isIsogram("Dermatoglyphics"), true );
    assert.equal( isIsogram("isogram"), true );
    assert.equal( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.equal( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.equal( isIsogram("isIsogram"), false );
    assert.equal( isIsogram(""), true, "an empty string is a valid isogram" );
  });
  it("failed tests", function() {
    assert.notEqual( isIsogram("Dermatoglyphics"), false );
    assert.notEqual( isIsogram("isogram"), false );
    assert.notEqual( isIsogram("aba"), true, "same chars may not be adjacent" );
    assert.notEqual( isIsogram("moOse"), true, "same chars may not be same case" );
    assert.notEqual( isIsogram("isIsogram"), true );
    assert.notEqual( isIsogram(""), false, "an empty string is a valid isogram" );
  });
});