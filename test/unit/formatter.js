const 
assert = require("assert"),
formatter = require("../../modules/formatter.js");

describe("Formatting", ()=>{
  it("filters duplicates from an array", ()=>{
    assert.deepEqual(formatter.uniqueElements(["a","a"]), ["a"]);
    assert.deepEqual(formatter.uniqueElements(["a","b", "a", "c", "c"]), ["a", "b", "c"]);
  });
});
