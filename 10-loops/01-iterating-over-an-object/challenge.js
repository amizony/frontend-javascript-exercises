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
   var keys = module.exports.getKeys(object);
   var values = module.exports.getValues(object);
   var ret = [];
   if (keys.length != 0) {
      for (var i = 0; i < keys.length; i++) {
         ret[i] = keys[i] + " is " + values[i];
      };
   }
   return ret;
};