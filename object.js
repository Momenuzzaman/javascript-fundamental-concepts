var student1 = {id:111, phone: 34556, name:"Abir"};
var student2 = {id:222, phone: 346786, name:"Emon"};
var student3 = {id:333, phone: 12345, name:"Easin"};

console.log(student1);
console.log(student2);
console.log(student3);


var phoneNumber1 = student1.phone;
console.log(phoneNumber1);

var phoneNumber2 = student2["phone"];
console.log(phoneNumber2);

var phonePropName = "phone";
var phoneNumber3 = student3[phonePropName];
console.log(phoneNumber3);

// update Number
student1.id = 12345;
student1["id"] = 33333;
console.log(student1);

// property add 

student2.gmail = "@gmail,com";
console.log(student2);


