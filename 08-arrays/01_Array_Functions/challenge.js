module.exports.reversePlusOne = function(array) {
   var reverse = [1];
   var j = 1;
   for (var i = array.length - 1; i >= 0; i--) {
      reverse[j] = array[i];
      j += 1;
   };
   return reverse;
};

module.exports.plusesEverywhere = function(array) {
   var str = "";
   for (var i = 0; i < array.length-1; i++) {
      str += array[i];
      str += "+";
   };
   str += array[array.length-1];
   return str;
};

module.exports.arrayQuantityPlusOne = function(array) {
   return array.length+1;
};