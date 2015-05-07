module.exports.equalStrings = function(stringOne, stringTwo) {
   if (stringTwo === stringOne) {
      return true;
   } else {
      return false;
   }
};

module.exports.notEqual = function(one, two) {
   if (one === two) {
      return false;
   }  else {
      return true;
   }
};

module.exports.inBetween = function(lower, middle, upper) {
   if ((lower <= middle) && (middle <= upper)) {
      return true;
   } else {
      return false;
   }
};

module.exports.outsideRanges = function(number) {
   var inRange = true;
   if ((10 <= number) && (number <= 20)) {
      inRange = false;
   } else if ((42 < number) && (number <= 75)) {
      inRange = false;
   } else if ((1 < number) && (number < 6)) {
      inRange = false;
   }
   return inRange;
};

module.exports.nameAndPrice = function(name, price) {
   var ret = false;
   if (((name === "LATimes") || (name === "NYTimes")) && (price >= 1)) {
      ret = true;
   };
   return ret;
};