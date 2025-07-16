// 1. Find the second highest number in an array without sorting it.
// Input: [10, 5, 20, 8, 15]
// Output: 15

let arr = [10, 5, 20, 8, 15];
let highest1 = 0;
let highest2 = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > highest1) {
    highest2 = highest1;
    highest1 = arr[i];
  } else if (arr[i] > highest2 && arr[i] !== highest1) {
    highest2 = arr[i];
  }
}
console.log(highest2);

//  2) Character frequency counter from a string.
// Input: "apple"
// Output: { a: 1, p: 2, l: 1, e: 1 }

let string = "apple";
let frequency = {};
for (let i = 0; i < string.length; i++) {
  let char = string[i];
  console.log(frequency);
  if (frequency[char]) {
    frequency[char]++;
  } else {
    frequency[char] = 1;
  }
}
console.log(frequency);

// 3. Reverse only words in an array of strings.
// Input: ["hello", "world"]
// Output: ["olleh", "dlrow"]

let arr = ["hello", "world"];
let reversearr = [];
for (let i = 0; i < arr.length; i++) {
  let word = arr[i];
  console.log(word);
  let reverse = "";
  for (let j = word.length - 1; j >= 0; j--) {
    reverse += word[j];
  }
  reversearr.push(reverse);
}
console.log(reversearr);

// 4) Check even or odd using map.
// Input: [1, 2, 3, 4]
// Output: ["odd", "even", "odd", "even"]

let arr = [1, 2, 3, 4] ;
let even = [];
number = arr.map((num)=>num % 2 ==0 ? "even" : "odd");
console.log(number)

// 5) Flatten a nested array (1 level deep).
// Input: [1, 2, [3, 4], 5]
// Output: [1, 2, 3, 4, 5]

let arr =[1, 2, [3, 4], 5] ;
let single = [];
for ( let i = 0 ; i < arr .length ; i++){
  let newarr = arr[i]
   if( Array.isArray (newarr)){
    for ( let j = 0 ; j < newarr.length ; j++){
      single.push(newarr[j]);
    }
   }
   else {
    single.push(newarr)
   }
}
console.log(single)

// 6) Print all prime numbers between 10 and 50.
// Output: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

for (let num = 10; num <= 50; num++) {
  let prime = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log(num);
  }
}

//  7)Filter names that start with vowels.
// Input: ["Alice", "Bob", "Eve", "Uma", "Charlie"]
// Output: ["Alice", "Eve", "Uma"]

let arr = ["Alice", "Bob", "Eve", "Uma", "Charlie"] ;
let Output = arr.filter(function(num){
  let vowel = num[0].toLowerCase();
  return "aeiou" .includes (vowel);
}
);
console.log(Output)

// 8) Rotate array by one to the right.
// Input: [1, 2, 3, 4]
// Output: [4, 1, 2, 3]

let arr = [1, 2, 3, 4] ;
let num = arr.toReversed(arr);
console.log(num)

// 9) Check if all array elements are greater than 10.
// Input: [12, 15, 22]
// Output: true

let arr = [12, 15, 22];
 let num = arr.every(function(cheak){
  return cheak >10 ;
 })
 console.log(num);

// 10) Filter numbers divisible by 3 and 5.
// Input: [10, 15, 30, 20, 45]
// Output: [15, 30, 45]

let arr = [10, 15, 30, 20, 45] ;
number = arr.filter(function(num){
  return num % 3 == 0 && num % 5 == 0;
})
console.log(number)

// 11) Fibonacci sequence up to 15 terms.
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

let Fibonacci = [0,1]
for ( i =2 ;  i < 15 ; i++){
    Fibonacci[i] = Fibonacci[i - 1] + Fibonacci[i-2];

}
   console.log(Fibonacci)

// 12)  Count occurrences of a value in array.
// Input: [1, 2, 1, 3, 1, 4], Element: 1
// Output: 3
let occurrences = [1, 2, 1, 3, 1, 4].reduce((acc, curr) => curr === 1? acc + 1 : acc, 0
)
console.log(occurrences)



// 13)Sum of even numbers using reduce.
// Input: [1, 2, 3, 4, 5, 6]
// Output: 12

let arr = [1, 2, 3, 4, 5, 6]
let elements = arr.reduce((acc , curr)=>{
    return curr % 2  == 0 ? acc + curr : acc
} , 0)
console.log(elements)

//  14)Check if string is palindrome.
// Input: "madam"
// Output: true

let string = "madam" ;
let palindrome = string == string.split("").reverse().join("");
console.log(palindrome)

//  15)Return grade based on marks using switch.
// Input: Marks: 85
// Output: B
let marks = 85;
let gradeLevel = Math.floor(marks / 10);
let grade;

switch (gradeLevel) {
  case 10:
  case 9:
    grade = "A";
    break;
  case 8:
    grade = "B";
    break;
  case 7:
    grade = "C";
    break;
  case 6:
    grade = "D";
    break;
  default:
    grade = "fail";
}

console.log(grade);

// 16) Test re-declaring a variable. 
// Input: 
// let x = 10; var x = 20; 
//   Output: SyntaxError

let x = 10;
var x = 20

// 17. Remove duplicates from array without Set. 
// Input: [1, 2, 2, 3, 4, 1] 
// Output: [1, 2, 3, 4] 

let arr = [1, 2, 2, 3, 4, 1];

let uniqueArr = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});

console.log(uniqueArr); 

// 18. Slice first 3 elements of array. 
// Input: [10, 20, 30, 40, 50] 
// Output: [10, 20, 30] 

let arr = [10, 20, 30, 40, 50];
let firstThree = arr.slice(0, 3);
console.log(firstThree);

// 20. Reverse array using while loop (in-place). 
// Input: [1, 2, 3, 4] 
// Output: [4, 3, 2, 1] 
let arr = [1, 2, 3, 4];
let start = 0;
let end = arr.length - 1;

while (start < end) {

  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  start++;
  end--;
}

console.log(arr);

// 21. Check if all elements in an array are positive (use flag variable). 
// Input: [1, 4, 6, 9] 
// Output: true 
Use a flag set to true, and turn it false if a negative number is found in loop. 

let arr = [1, 4, 6, 9];
let flag = true;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    flag = false;
    break;
  }
}

console.log(flag);

// 22)Check if a string has both uppercase and lowercase letters. 
// Input: "HelloWorld" 
// Output: true 
Use two flags: hasUpper and hasLower.


let str = "HelloWorld";
let hasUpper = false;
let hasLower = false;

for (let i = 0; i < str.length; i++) {
  let ch = str[i];

  if (ch >= 'A' && ch <= 'Z') {
    hasUpper = true;
  } else if (ch >= 'a' && ch <= 'z') {
    hasLower = true;
  }

  if (hasUpper && hasLower) {
    break;
  }
}

console.log(hasUpper && hasLower);

// 23. Determine if a number is prime using flag inside loop. 
// Input: 13 
// Output: true 
Set flag to false if any divisor is found in loop.


let num = 13;
let flag = true;

if (num <= 1) {
  flag = false; 
} else {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = false; 
      break;
    }
  }
}

console.log(flag);

// 24. Check if an array is sorted in ascending order using flag. 
// Input: [2, 5, 8, 9] 
// Output: true 
Set flag false if any element is greater than next. 

let arr = [2, 5, 8, 9];
let flag = true;

for (let i = 0; i < arr.length-1 ; i++) {
  if (arr[i] > arr[i + 1]) {
    flag = false;
    break;
  }

console.log(flag); 
