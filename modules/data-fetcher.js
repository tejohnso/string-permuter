const fs = require("fs");

module.exports = {
  fetchStringsArray(filePath) {
    return fs.readFileSync(filePath, {encoding: "utf8"})
    .split(require("os").EOL)
    .filter((el)=>{return el;});
  }
};
