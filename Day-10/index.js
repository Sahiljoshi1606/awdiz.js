// // 1. ternary operator

// let age = 18 ;
// let message = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
// console.log(message);

// let age = 80;
// let message = age >= 18 ? age >=80 ? "not eligible":"eligible": "Not eligible to vote";
// console.log(message);

// // 2. template literals

// let  name = "sahil";
// console.log(`hello , ${name}`);

// let name = "sahil";
// let surname = "joshi";
// let message = `hello, my name is ${name} ${surname}`;
// console.log(message);

// // 3.callback function

// function greet ( name  , callback){
//     console.log( "hello, " + name);
//     callback();
// }
// function policy(){
//     console.log(" please accept all policies");
// }
// greet("sahil", policy);

// function students (name, age, callback){
//     console.log(`name : ${name}, age : ${age}`);
//     callback();
// }
// function displayDetails(){
//     console.log("displaying student details");
// }
// students("sahil", 20, displayDetails);

// // 4. distructure array and object

// let array = [ 1, 2  ];
// let [ first, second , ] = array;
// console.log(first, second);

// let abj = { name: "sahil", age: 20};
// let { name, age } = abj;
// console.log(name);

// // 5. promise

// let age = 18;
// const CanVote = (age) => {
//   return new Promise((resolve, reject) => {
//     if (age >= 18) {
//     resolve("Eligible to vote");
//     } else {
//     reject("Not eligible to vote");
//     }
//   });
// };
// CanVote(age)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


   // 5. promise
      
 let a = 10 ; 
  

