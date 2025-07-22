
// $ $ $ $ $ $
// $ $ $ $ $ $
// $ $ $ $ $ $
// $ $ $ $ $ $
// $ $ $ $ $ $


// for (i = 1 ; i <=5 ; i++){
//   var res = "";
//   for ( j = 1 ; j <= 6 ; j++){
//     if(j==6){
//       res +=( "$ " + "res1")
//     }
//     else{
//       res += ("$ " + "res2")
//     }
//   }
//   console.log(res);
// }


// *
// * *
// * * *
// * * * *
// * * * * *

// for (let i = 1 ; i <= 6 ; i++){
//   var res = ""
//   for (j = 6 ; j >= i ; j--){
//     res += "$ "
//     // console.log(res )
//   }
//   console.log(res )
// }


// for (let i = 1 ; i <= 6 ; i++){
//   var res = "";
//   for(let j = 6 ; j <= i ; j--){
//     res += "$ "
//   }
//   console.log(res)
// }


for (let i = 4; i >= 1; i--) {
  let res = "";
  for (let space = 0; space < 4 - i; space++) {
    res += " ";
  }
  for (let star = 1; star <= i; star++) {
    res += "*";
  }
  console.log(res);
}
