module.exports.sumNumbers = function(array) {
   var sum = 0;
   for (var i = 0; i < array.length; i++) {
      sum += array[i];
   };
   return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
   return inputString.toLocaleLowerCase().split(",");
};

module.exports.addIndex = function(array) {
   var ret = [];
   for (var item in array) {
      ret.push(item + " is " + array[item]);
   };
   return ret;
};