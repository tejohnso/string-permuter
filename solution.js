var stringPermuter = require("./modules/string-permuter.js"),
dataFetcher = require("./modules/data-fetcher.js"),
formatter = require("./modules/formatter.js"),
EOL = require("os").EOL,
outputContent = "";

dataFetcher.fetchStringsArray(process.argv[2]).forEach((str)=>{
  var permutationsArr = stringPermuter.permute(str);

  permutationsArr = permutationsArr.map((permutationArr)=>{
    return permutationArr.join("");
  });

  outputContent += formatter.uniqueElements(permutationsArr).sort().join() + EOL;
});

console.log(outputContent);
