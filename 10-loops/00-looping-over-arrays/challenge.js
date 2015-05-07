module.exports.sumNumbers = function(array) {
   var sum = 0;
   if (array.length != 0) {
      for (var i = 0; i < array.length; i++) {
         sum += array[i];
      };
   }
   return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
   var ret = [];
   var temp = "";
   inputString = inputString.toLowerCase();
   for (var i = 0; i < inputString.length; i++) {
      if (inputString[i] != ',') {
         temp += inputString[i];
      } else {
         ret.push(temp);
         temp = "";
      }
   };
   if (inputString[inputString.length-1] != ',') {
      ret.push(temp);
   }
   return ret;
};

module.exports.addIndex = function(array) {
   var ret = [];
   for (var i = 0; i < array.length; i++) {
      ret[i] = i + " is " + array[i];
   };
   return ret;
};
