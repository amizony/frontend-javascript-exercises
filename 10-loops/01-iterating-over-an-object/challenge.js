module.exports.getKeys = function(object) {
   var ret = [];
   for (var key in object) {
      ret.push(key); 
   };
   return ret;
};

module.exports.getValues = function(object) {
   var ret = [];
   for (var key in object) {
      ret.push(object[key]); 
   };
   return ret;
};

module.exports.objectToArray = function(object) {
   var ret = [];
   for (var key in object) {
      ret.push(key + " is " + object[key]); 
   };
   return ret;
};