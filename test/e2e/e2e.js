const assert = require("assert"),
execSync = require("child_process").execSync;

describe("E2E", ()=>{
  it("runs the full solution", ()=>{
    var result = execSync("node solution.js test/e2e/sample-data.txt");
    assert.equal(result.toString(), require("fs").readFileSync("test/e2e/expected-result.txt"));
  });
});
