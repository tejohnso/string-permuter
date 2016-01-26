module.exports = {
  uniqueElements(arr) {
    var dupeCheck = {},
    output = [];

    arr.forEach((val)=>{
      if (!dupeCheck.hasOwnProperty(val)) {
        output.push(val);
        dupeCheck[val] = 1;
      }
    });

    return output;
  }
};
