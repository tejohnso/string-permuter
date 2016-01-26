const 
assert = require("assert"),
stringPermuter = require("../../modules/string-permuter.js");

describe("String Permutations", ()=>{
  it("inserts a character at every position of an existing character array and returns an array containing each resulting character array", ()=>{
    assert.deepEqual(stringPermuter.charInsertAcrossAllPositions([], "a"), [["a"]]);
    assert.deepEqual(stringPermuter.charInsertAcrossAllPositions(["a"], "b"), [["b", "a"], ["a", "b"]]);
    assert.deepEqual(stringPermuter.charInsertAcrossAllPositions(["a", "b"], "c"), [["c", "a", "b"], ["a", "c", "b"], ["a", "b", "c"]]);
  });

  it("performs the character permutation for each existing permutation in an array", ()=>{
    var existingPermutationsArray = [
      ["a", "b"],
      ["b", "a"]
    ],
    inputChar = "c",
    expectedArray = [
      ["c", "a", "b"],
      ["a", "c", "b"],
      ["a", "b", "c"],
      ["c", "b", "a"],
      ["b", "c", "a"],
      ["b", "a", "c"]
    ];

    assert.deepEqual(stringPermuter.insertOnPermutations(existingPermutationsArray, inputChar), expectedArray);
  });

  it("iteratively adds characters to resulting permutation arrays", ()=>{
    assert.deepEqual(stringPermuter.permute("abc"), [
        ["c", "b", "a"],
        ["b", "c", "a"],
        ["b", "a", "c"],
        ["c", "a", "b"],
        ["a", "c", "b"],
        ["a", "b", "c"]
    ]);
    assert.deepEqual(stringPermuter.permute(""), [[]]);
  });
});
