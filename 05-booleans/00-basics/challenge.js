module.exports.equalStrings = function(stringOne, stringTwo) {
   return stringTwo === stringOne;
};

module.exports.notEqual = function(one, two) {
   return one !== two;
};

module.exports.inBetween = function(lower, middle, upper) {
   return (lower <= middle) && (middle <= upper);
};

module.exports.outsideRanges = function(number) {
   return ((number < 10) || (20 < number)) && ((number <= 42) || (75 < number)) && ((number <= 1) || (6 <= number));
};

module.exports.nameAndPrice = function(name, price) {
   return ((name === "LATimes") || (name === "NYTimes")) && (price >= 1);
};