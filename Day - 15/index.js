// // 2D arra

// var num = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ,
// ];
// let left = 0 ;
// let right = num[0].length - 1;
// let top = 0 ;
// let bottom = num.length - 1 ;

// while(left <= right && top <= bottom){
//     for (let i = left ; i <= right ; i++){
//         console.log(num [top][i])

//     }
//     top++;
// for (let i = top ; i <= bottom ; i++){
//     console.log(num[i][right])
// }
// right--

// if(top <= bottom){for (let i = right ; i >= left ; i--){
//     console.log(num[bottom][i])
// }
// bottom--;
// }

// if(left <= right){
//     for(let i = bottom ; i >= top ; i-- ){
//     console.log(num[i][left])
// }
// left++
// }

//  }





// let num = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12],
//   [13,14,15,16],
// ];
// function ZPattern(matrix){
//     let row = matrix.length;
//     let colum = matrix[0].length;

//     for (let j = 1 ; j < colum ; j++){
//         console.log(matrix[0][j])
//     }

//     for(let i = 1 ; i < row - 1 ; i++ ){
//         let j  = colum - i - 1 ; 
//         if(j >= 0 && j < colum){
//             console.log(matrix[i][j]);
//         }
//     }
//     if(row > 1){
//         for ( j = 0 ; j < colum ; j++){
//             console.log(matrix[row - 1 ][j])
//         }
//     }
// }

// ZPattern(num)




// let num = [
//   [1, 2, 3 , 4],
//   [5, 6, 7, 5],
//   [9,10,11 , 8],
//   [9,10,11 , 8],
// ];

// let left = 0 ;
// let right =  num[0].length - 1 ;
// let top = 0 ;
// let bottom = num.length - 1 ; 


// for ( let i = left ; i <= right ; i++ ){
//     console.log(num[top][i])
// }

// for( let i = 1 ; i < bottom ; i++){
//     let j =  right - i ;
//   if(j >= left && j <= right){
//     console.log(num[i][j]);
//   }
// }
// for(let i = left ; i<=right ; i++){
//     console.log(num[bottom][i])
// }



// let num = [
//   [1, 2, 3 ],
//   [5, 6, 7],
//   [9,10,11 ],
  
// ];

// let left  = 0 ;
// let right =  num[0].length - 1;
// let top =0 ;
// let bottom = num.length-1 ;


// for (let i = bottom ; i >= top ; i--){
//     console.log(num[i][left])
// }

// for (let i = 1 ; i < bottom ; i++){
//     let j = i ;
//     console.log(num[i][j])

// }
// for(let  i = bottom ; i >= top ; i--){
//     console.log(num[i][right])
// }






// let num = [
//   [1, 2, 3 ],
//   [5, 6, 7],
//   [9,10,11 ],
  
// ];

// let left  = 0 ;
// let right =  num[0].length - 1;
// let top =0 ;
// let bottom = num.length-1 ;

// for(let i = 0 ; i <= bottom ; i++){
//     let j = i ;
//     console.log(num[i][j])
// }
// for(let i = 0 ; i <= bottom; i++){
//     if( i !== right -i){
//         let j = right -i;
//         console.log(num[i][j])
//     }
    
// }


