module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
   return {
      title: courseTitle,
      duration: courseDuration,
      students: courseStudents,};
};

module.exports.addProperty = function(object, newProp, newValue) {
   if (!object.hasOwnProperty(newProp)) {
      object[newProp] = newValue;
   }
   return object;
};

module.exports.formLetter = function(letter) {
   return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
};

module.exports.canIGet = function(item, money) {
   var item1 = {
      name: 'MacBook Air',
      price: 999,
   };
   var item2 = {
      name: 'MacBook Pro',
      price: 1299,
   };
   var item3 = {
      name: 'Mac Pro',
      price: 2499,
   };
   var item4 = {
      name: 'Apple Sticker',
      price: 1,
   };
   return ((item1.name === item) && (money >= item1.price)) || ((item2.name === item) && (money >= item2.price)) || ((item3.name === item) && (money >= item3.price)) || ((item4.name === item) && (money >= item4.price));
};