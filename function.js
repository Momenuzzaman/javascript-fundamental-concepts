function number(){
    console.log(1,2,3,4,5);
    console.log(11,22,33,44,55);
}

number();

function doubleIt(number){
    var result = number* 2;
    console.log(result);
}

doubleIt(10);
doubleIt(100);



function doubleIt2(number){
    var result = number*2;
    return result;
}
var first = doubleIt2(10);
var second = doubleIt2(20);
var total = first + second;
console.log(total);

function add(num1, num2){
    var result = num1 + num2;
    return result;
}
 var sum = add(10, 20);
console.log(sum);


