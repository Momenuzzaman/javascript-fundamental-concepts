var friendAge = [10, 20, 30, 40];
console.log(friendAge);

var friendAge = [10, 20, 30, 40];
console.log(friendAge[2]);

var friendAge = [10, 20, 30, 40];
var shakibAge = friendAge[1];
console.log(shakibAge);

var friendAge = [10, 20, 30, 40];
friendAge[3] = 45;
console.log(friendAge); 

// array advanced 

var friendAge = [10, 20, 30, 40];
friendAge.push(50);
friendAge.push(60);
console.log(friendAge);


var friendAge = [10, 20, 30, 40];
console.log(friendAge.length);
friendAge.push(50);
console.log(friendAge.length);


var friendAge = [10, 20, 30, 40, 50];
friendAge.pop();
console.log(friendAge);

var teaLine = ["Balam", "Jamal", "Kalam"];
teaLine.shift();
console.log(teaLine);

var teaLine = ["Balam", "Jamal", "Kalam"];
teaLine.unshift("Tamal");
console.log(teaLine);

var teaLine = ["Balam", "Kalam", "Sulam", "Tamal", "Tomal"];
var part = teaLine.slice(2);
console.log(part);



