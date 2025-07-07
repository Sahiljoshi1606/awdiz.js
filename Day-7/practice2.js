// 1. Find the second highest number in an array without sorting it.
// Input: [10, 5, 20, 8, 15]
// Output: 15

// let arr = [10, 5, 20, 8, 15];
// let highest1 = 0;
// let highest2 = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > highest1) {
//     highest2 = highest1;
//     highest1 = arr[i];
//   } else if (arr[i] > highest2 && arr[i] !== highest1) {
//     highest2 = arr[i];
//   }
// }
// console.log(highest2);

//  2) Character frequency counter from a string.
// Input: "apple"
// Output: { a: 1, p: 2, l: 1, e: 1 }

// let string = "apple";
// let frequency = {};
// for (let i = 0; i < string.length; i++) {
//   let char = string[i];
//   console.log(frequency);
//   if (frequency[char]) {
//     frequency[char]++;
//   } else {
//     frequency[char] = 1;
//   }
// }
// console.log(frequency);

// 3. Reverse only words in an array of strings.
// Input: ["hello", "world"]
// Output: ["olleh", "dlrow"]

// let arr = ["hello", "world"];
// let reversearr = [];
// for (let i = 0; i < arr.length; i++) {
//   let word = arr[i];
//   console.log(word);
//   let reverse = "";
//   for (let j = word.length - 1; j >= 0; j--) {
//     reverse += word[j];
//   }
//   reversearr.push(reverse);
// }
// console.log(reversearr);

// 4) Check even or odd using map.
// Input: [1, 2, 3, 4]
// Output: ["odd", "even", "odd", "even"]

// let arr = [1, 2, 3, 4] ;
// let even = [];
// number = arr.map((num)=>num % 2 ==0 ? "even" : "odd");
// console.log(number)

// 5) Flatten a nested array (1 level deep).
// Input: [1, 2, [3, 4], 5]
// Output: [1, 2, 3, 4, 5]

// let arr =[1, 2, [3, 4], 5] ;
// let single = [];
// for ( let i = 0 ; i < arr .length ; i++){
//   let newarr = arr[i]
//    if( Array.isArray (newarr)){
//     for ( let j = 0 ; j < newarr.length ; j++){
//       single.push(newarr[j]);
//     }
//    }
//    else {
//     single.push(newarr)
//    }
// }
// console.log(single)

// 6) Print all prime numbers between 10 and 50.
// Output: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

// for (let num = 10; num <= 50; num++) {
//   let prime = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       prime = false;
//       break;
//     }
//   }
//   if (prime) {
//     console.log(num);
//   }
// }

//  7)Filter names that start with vowels.
// Input: ["Alice", "Bob", "Eve", "Uma", "Charlie"]
// Output: ["Alice", "Eve", "Uma"]

// let arr = ["Alice", "Bob", "Eve", "Uma", "Charlie"] ;
// let Output = arr.filter(function(num){
//   let vowel = num[0].toLowerCase();
//   return "aeiou" .includes (vowel);
// }
// );
// console.log(Output)

// 8) Rotate array by one to the right.
// Input: [1, 2, 3, 4]
// Output: [4, 1, 2, 3]

// let arr = [1, 2, 3, 4] ;
// let num = arr.toReversed(arr);
// console.log(num)

// 9) Check if all array elements are greater than 10.
// Input: [12, 15, 22]
// Output: true

// let arr = [12, 15, 22];
//  let num = arr.every(function(cheak){
//   return cheak >10 ;
//  })
//  console.log(num);


// 10) Filter numbers divisible by 3 and 5. 
// Input: [10, 15, 30, 20, 45] 
// Output: [15, 30, 45] 


// let arr = [10, 15, 30, 20, 45] ;
// number = arr.filter(function(num){
//   return num % 3 == 0 && num % 5 == 0;
// })
// console.log(number)


