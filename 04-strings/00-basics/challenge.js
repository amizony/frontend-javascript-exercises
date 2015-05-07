module.exports.formLetter = function(firstName, senderName, message) {
   return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
   var ret = "";
   for (var i = startA; i < endA; i++) {
      ret += bigString[i];
   };
   for (var i = startB; i < endB; i++) {
      ret += bigString[i];
   };
   return ret;
};

module.exports.findFirstMatch = function(text, searchString) {
   var match = false;
   for (var i = 0; i < text.length; i++) {
      if (text[i] === searchString[0]) {
         if (searchString.length === 1) {
            match = true;
         } else {
            for (var j = 1; j < searchString.length; j++) {
               if (text[i+j] === searchString[j]) {
                  match = true;
               } else {
                  match = false;
               }
            };
         }
      }
      if (match) {
         return i;
      }
   };
};

module.exports.findLastMatch = function(text, searchString) {
   var match = false;
   var last = -1;
   for (var i = 0; i < text.length; i++) {
      match = false;
      if (text[i] === searchString[0]) {
         if (searchString.length === 1) {
            match = true;
         } else {
            for (var j = 1; j < searchString.length; j++) {
               if (text[i+j] === searchString[j]) {
                  match = true;
               } else {
                  match = false;
               }
            };
         }
      }
      if (match) {
         last = i;
      }
   };
   return last;
};

module.exports.substringBetweenMatches = function(text, searchString) {
   // Asuming there are two and only two matches
   var start = module.exports.findFirstMatch(text, searchString);
   var end = module.exports.findLastMatch(text, searchString);
   var ret = [];

   if (start != end) {
      for (var i = start + searchString.length; i < end; i++) {
         ret += text[i];
      };
   }

   return ret;
};