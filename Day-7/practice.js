// let count = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     count++;
//   }
// }
// console.log(count);

// for ( let i= 0 ; i <= 15; i++){
//     if ( i % 2 == 0){
//         console.log(i + " is even ");
//     }
//     else if ( i % 2 == 1){
//         console.log (i + " is odd ");
//     }
// }
// let sum = 0;
// for ( let i=1 ; i<=100 ; i++){
//  sum +=i;
// }
// console.log(sum);

// let count = 0;
// for (let i = 1 ; i<=50; i++ ){
//     if ( i % 2 == 0){
//         count++;
//     }
// }
// console.log(count);

// const array = [5 , 15, 10];
// let mul = array.map ((sum)=> sum*2);
// console.log(mul);

// const orignal = "sahil";
// let reverse = "";
//  for ( let i = orignal.length -1 ; i >= 0; i--){
//     reverse += orignal[i];
//  }
//  console.log(reverse);

// let i = 1;
// while ( i <= 1000){
//     console.log(i);
//     i *= 2;
// }
// console.log(i);

// let arr = ["Alice","Bob","Charlie"];
// let apply = arr.map((name)=>" Hello, " + name  );
// console.log(apply);

// for ( let i =1 ; i <=100 ; i++ ){
//     if ( i % 3 ==0){
//         console.log ("Fizz");
//     }
//     else if ( i% 5 == 0){
//         console.log ("Buzz");
//     }
//     else if ( i % 3 == 0 && i % 5 == 0){
//         console.log ("FizzBuzz");
//     }
//     else {
//         console.log (i);
//     }
// }

// let arr = [1,2,3];
// arr.push(4);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(0);
// console.log

// let arr1 =[1,2,3];
// let arr2 = [4,5,6];
//  let arr3 = arr1.concat(arr2);
//  console.log(arr3);

// let arr = ["jan", "feb", "mar"];
// arr.splice(1, 0, "april");
// console.log(arr); // Output: ["jan", "april", "mar"]
// arr.push("may");
// console.log(arr); // Output: ["jan", "april", "mar", "may"]
// arr.splice( 1, 0, "feb");
// console.log(arr); // Output: ["jan", "feb", "april", "mar", "may"]

// let i = 1;
// while (i <= 100) {
//   if (i >= 50) {

//   break;
//   }
//   i++;
//   console.log(i);
// }

// let arr = [1, 2, 3, 4, 5];
// let test = arr.filter((modules)=> modules % 2 == 0);
// console.log(test);

// let i = 23;
// if( i % 2 == 0){
//     console.log(" is a even number")
// }
// else if ( i % 2 == 1){
//     console.log(" is a odd number")
// }
// else {
//     console.log(" is not a number")
// }

// let arr = [ 121,12,,32,4,,56];
// let remove = arr.filter((find)=> find % 2 == 0);
// console.log(remove); // Output: [12, 32, 4, 56]

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length)

// let i = 1;
// do {
//   if (i >= 50) {
//     break;
//   }
//   console.log(i);
//   i++;
// } while (i <= 100);

// const arr = [12,23,34,45,56,];
// let mul = arr.map ((num)=> num * 2);
// console.log(mul);

// let evensum = 0;
// let counteven = 0;
// let countodd = 0;
// let oddsum = 0;

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 == 0) {
//     evensum += i;
//     counteven = evensum;
//   } else if (i % 2 == 1) {
//     oddsum += i;
//     countodd = oddsum;
//   }
// }
//  console.log(counteven + " is the sum of even numbers");
//   console.log(countodd + " is the sum of odd numbers");

// let i = 1;
// if ( i % 5 ==0){
//     console.log("Divisible by 5:" + i);
// }
// else {
//     console.log("Not divisible by 5:" + i);
// }

// for (let i = 1; i <= 100; i++) {
//   let isPrime = true;

//   // Check if i is prime
//   if (i <= 1) {
//     isPrime = false;
//   } else {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//   }

//   let isMultipleOf4 = i % 4 === 0;

//   if (isPrime && isMultipleOf4) {
//     console.log("Prime and Multiple of 4: " + i);
//   } else if (isPrime) {
//     console.log("Prime: " + i);
//   } else if (isMultipleOf4) {
//     console.log("Multiple of 4: " + i);
//   }
// }

for (let i = 1; i <= 100; i++) {
  let prime = true;

  if (i <= 1) {
    prime = false;
  } else {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        prime = false;
        break;
      }
    }
  }

  let isMultipleOf4 = i % 4 === 0;
  if (prime && isMultipleOf4) {
    console.log("Prime and Multiple of 4: " + i);
  } else if (prime) {
    console.log("Prime: " + i);
  } else if (isMultipleOf4) {
    console.log("Multiple of 4: " + i);
  }
}
