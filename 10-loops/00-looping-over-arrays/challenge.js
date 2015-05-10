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
   var index = 0;
   if (inputString.length === 0) {
      return [""];
   } else {
      inputString = inputString.toLowerCase();
      for (var i = 0; i < inputString.length; i++) {
         if (inputString[i] === ',') {
            ret.push(inputString.slice(index,i));
            index = i+1;
         }
      };
      ret.push(inputString.slice(index,i));
      return ret;
   }
};

module.exports.addIndex = function(array) {
   var ret = [];
   for (var i = 0; i < array.length; i++) {
      ret[i] = i + " is " + array[i];
   };
   return ret;
};