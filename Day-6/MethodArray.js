Map()

let array = [2,3,4];
let MultiplyByFive = array.map((array)=> array * 5);
console.log(MultiplyByFive);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let add = num.map((numbers)=> numbers + 10);
console.log(add);


Filter()


let num = 2;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filter = array.filter((Remove)=> Remove == num);
console.log(filter);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filter = array.filter ((even)=> even % 2 == 0);
console.log(filter);




