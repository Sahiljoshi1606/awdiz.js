// 1. Find the second highest number in an array without sorting it.
// Input: [10, 5, 20, 8, 15]
// Output: 15

// let arr = [10 , 5, 20, 8, 15];
// let highest1 =0;
// highest2 = 0;
// for ( let i =0 ; i < arr.length; i++){
//     if ( arr[i] > highest1){
//         highest2 = highest1;
//         highest1 = arr[i];
//     }
//     else if (highest2 > highest1 && highest1!== arr[i]){
//         highest2 = arr[i];
//     }
// }
// console.log(highest2);



//  2) Character frequency counter from a string.
// Input: "apple"
// Output: { a: 1, p: 2, l: 1, e: 1 }

// let string = "apple";
// let frequency = {};
// for(let i = 0; i<string.length; i++){
//     char = string[i];
//     if ( frequency[char]){
//         frequency[char]++;
//         }
//         else{
//             frequency[char]=1;
//         }
// }
// console.log(frequency);

// 3. Reverse only words in an array of strings.
// Input: ["hello", "world"]
// Output: ["olleh", "dlrow"]

// let arr = ["hello", "world"];
// let reversearr = [];
// for ( let i = 0 ; i < arr.length ; i++){
//    let reverce = arr[i];
//    let word = "";
//    for(let j = reverce.length-1 ; j >= 0 ; j--){
//     word += reverce[j];
 
//    }
//    reversearr.push(word) ;
    
// }
// console.log(reversearr);

// 4) Check even or odd using map.
// Input: [1, 2, 3, 4]
// Output: ["odd", "even", "odd", "even"]
 
//    let arr =[1, 2, 3, 4];
//    let cheak = arr.map((ele)=> ele % 2==0 ? "even": "odd");
//    console.log(cheak);


// 6) Print all prime numbers between 10 and 50.
// Output: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

 
//  for (i = 10 ; i <=50 ; i++){
//      let prime = true;
//      for( let num = 2 ; num > i ; i++)
//         if(i % num == 0 ){
//             prime = false;
//             break;
//         }
//         if(prime){
//             console.log(i)
//         }

//  }



// 20. Reverse array using while loop (in-place). 
// Input: [1, 2, 3, 4] 
// Output: [4, 3, 2, 1] 

// let arr = [1, 2, 3, 4];
// let start = 0;
// let end = arr.length - 1;

// while (start < end) {
//     // Swap elements
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;

//     // Move pointers
//     start++;
//     end--;
// }


let occurrences = [1, 2, 1, 3, 1, 4]
.reduce((acc, curr) => curr === 1? acc + 1 : acc, 0
)
console.log(occurrences)
  

