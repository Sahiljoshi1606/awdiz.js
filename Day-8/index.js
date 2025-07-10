let a = 2;
let b = 4;
function TwoNumberAddition (){
console.log(a+b);
}
TwoNumberAddition()


let p = 1;
let j = 100;
function MultiplyTwoNUmber(number1 , number2){
    console.log (number1 + number2);
}
MultiplyTwoNUmber(p ,j);
MultiplyTwoNUmber (2 , 4);


function add (number1,number2,number3,number4){
    console.log(number1+number2+number3+number4)
}
function sub (number1,number2,number3,number4){
    console.log(number1-number2-number3-number4)
}
add(1,2,3,4)
sub(1,2,3,4)


function AdditionTwoNumber(Number1 , Number2){
    console.log(Number1 + Number2);
    return (Number1 + Number2); // use return function stop. 
}
AdditionTwoNumber(20 , 40)


let array = ["om","ajay","jitesh","sanika"];
let remove = "sanika";
 function GetName(array , remove){
    filter = array.filter((name)=>name == remove)
    return  filter;
 }
console.log(GetName(array , remove))





