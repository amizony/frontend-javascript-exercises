module.exports.reversePlusOne = function(array) {
   array.reverse().unshift(1);
   return array;
};

module.exports.plusesEverywhere = function(array) {
   return array.toString().replace(/,/g, "+");
};

module.exports.arrayQuantityPlusOne = function(array) {
   return array.length+1;
};