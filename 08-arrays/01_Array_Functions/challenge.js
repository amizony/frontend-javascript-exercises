module.exports.reversePlusOne = function(array) {
   array.push(1);
   return array.reverse();
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