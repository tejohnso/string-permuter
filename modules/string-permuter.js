module.exports = {
  charInsertAcrossAllPositions(charArray, char) {
    var arr = [],
    tempArr = [];

    for (var i = 0, j = charArray.length; i <= j; i += 1) {
      tempArr = Array.from(charArray);
      tempArr.splice(i, 0, char);
      arr.push(tempArr);
    }

    return arr;
  },
  insertOnPermutations(permutationsArray, char) {
    var outputArr = [],
    permutation;

    permutationsArray.forEach((arr)=>{
      insertResult = module.exports.charInsertAcrossAllPositions(arr, char);
      outputArr = outputArr.concat(insertResult);
    });

    return outputArr;
  },
  permute(str) {
    str = "" + str;
    if (!str) {return [[]];}

    var charsToPermute = str.split(""),
    arr = [[charsToPermute.shift()]];

    charsToPermute.forEach((char)=>{
      arr = module.exports.insertOnPermutations(arr, char);
    });

    return arr;
  }
};
