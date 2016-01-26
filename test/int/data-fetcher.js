const assert = require("assert"),
fs = require("fs"),
EOL = require("os").EOL,
dataFetcher = require("../../modules/data-fetcher.js");

describe("Data Fetcher", ()=>{
  it("reads a file from a cli parameter and returns an array of strings", ()=>{
    var data;
    fs.writeFileSync("./test-data.txt", `hat${EOL}abc${EOL}Zu6`);
    data = dataFetcher.fetchStringsArray("./test-data.txt");
    assert.deepEqual(data, ["hat", "abc", "Zu6"]);
  });
});
