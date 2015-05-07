module.exports.copy = function(object) {
   var ret = {};
   for (var key in object) {
      ret[key] = object[key];
   };
   return ret;
};

module.exports.extend = function(dest, src) {
   for (var key in src) {
      dest[key] = src[key];
   };
   return dest;
};

module.exports.hasElems = function(object, array) {
   var hasIt = true;
   for (var i = 0; i < array.length; i++) {
      hasIt = hasIt && object.hasOwnProperty(array[i]);
   };
   return hasIt;
};