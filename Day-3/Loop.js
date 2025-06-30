Q1)

let i=1;
for (i=1 ; i<=50; i++){
    if (i %2 == 0){
        console.log(i + " is even");
    }
}

Q2)

let i = 10;
while (i >=0){
    console.log(i);
    i--;
}

Q3)

let number = 7;
for (let i = 1; i <= 10; i++) {
    console.log (number * i);
}

Q4)

for(i = 1; i<=100; i++ ){
    if( i % 2 == 1){
        console.log(i);
    }
}

Q5)
let count = 0;
for (i = 1 ; i <=100 ; i++){
    if (i % 3 == 0 && i % 5 ==0){
       count++;
    }
}
console.log(count);

Q6)
let num = 5;
let i = 1;
let factorial = 1;
while (i <= num) {
  factorial = factorial * i;
  i++;
}
console.log(factorial)

Q7)

let sum = 0;
for (i= 1 ; i<=100 ; i++){
 sum += i;
}
console.log(sum);

Q8)

let i = 1;
for (i = 1; i <= 50; i++) {
  switch (true) {
    case i % 3 == 0 && i % 5 == 0:
      console.log("FizzBuzz");
      break;
    case i % 3 == 0:
      console.log("Fizz");
      break;
    case i % 5 == 0:
      console.log("Buzz");
      break;
    default:
      console.log(i);
  }
}


Q9)

let a=0;
let b=1;
let c;
let i=1;
while(i<=10){
    c = a + b;
    console.log(c);
    a = b;
    b = c;
    i++;
}


Q10)
for (let i = 1; i <= 10; i++) {
    let square = i * i;
    let category = "";

    if (square < 20) {
        category = "Small";
    } else if (square >= 20 && square <= 50) {
        category = "Medium";
    } else {
        category = "Large";
    }

    console.log("Number: " + i + ", Square: " + square + ", Category: " + category);
}