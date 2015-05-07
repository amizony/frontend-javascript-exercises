module.exports.addItem = function(item, list) {
   var inList = false;
   for (var i = 0; i < list.length; i++) {
      if (item === list[i]) {
         inList = true;
      }
   };
   if (!inList) {
      list.push(item);
   }
   return list;
};

module.exports.reverseSortedList = function(list) {
   var sorted = false;
   var temp;
   while (!sorted) {
      sorted = true;
      for (var i = 0; i < list.length-1; i++) {
         if (list[i] < list[i+1]) {
            temp = list[i];
            list[i] = list [i+1];
            list[i+1] = temp;
            sorted = false;
         }
      };
   }
   return list;
};