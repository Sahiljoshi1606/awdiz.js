
// 2. Character frequency counter from a string. 
// Input: "apple" 
// Output: { a: 1, p: 2, l: 1, e: 1 }

// let string = "apple";
// let arr = {};
// for ( let char of string){
//     if ( arr[char]){
//         arr[char]++;
//     }
//     else {
//         arr[char]=1;
//     }
// }
// console.log(arr);


// 3) Reverse only words in an array of strings. 
// Input: ["hello", "world"] 
// Output: ["olleh", "dlrow"]

// let arr = ["hello", "world"];
// let newarr = [];
// for ( let word of arr){
//     let reverse = word.split("").reverse().join("");
//     newarr.push(reverse);
// }
// console.log(newarr); // ["olleh", "dlrow"]


// 4. Check even or odd using map. 
// Input: [1, 2, 3, 4] 
// Output: ["odd", "even", "odd", "even"] 

// let arr = [1, 2, 3, 4];
// let result = arr.map(num => num % 2 == 0  ? "even" : "odd");
// console.log(result);

// 5) Flatten a nested array (1 level deep). 
// Input: [1, 2, [3, 4], 5] 
// Output: [1, 2, 3, 4, 5]