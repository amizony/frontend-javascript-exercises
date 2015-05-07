module.exports.stream = function(conditionalFn, actionFn) {
   while (conditionalFn()) {
      actionFn();
   };
};

module.exports.sumNumbers = function(array) {
   var res = 0;
   while (array.length > 0) {
      res += array[0];
      array.shift();
   };
   return res;
};