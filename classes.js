// const a = "absbas";
// const c = "absba";

// function palindrome(str) {
//   return str.split("").reverse().join("") === str;
// }

// console.log(palindrome(a));
// console.log(palindrome(c));

// let countZerosOne = 10;
// let countZerosTwo = 100;
// let countZerosThree = 200;

// function countZeros(n) {
//   let count = 0;
//    for(let i = 1; i <= n; i++){
//      let getStr = i.toString();
//      for(const key of getStr){
//       if(key == '0'){
//         count++
//       }
//      }
//    }
//    return count
// }

// console.log(countZeros(countZerosOne));
// console.log(countZeros(countZerosTwo));
// console.log(countZeros(countZerosThree));

// 11 - 110, 120, 130, 140, 150, 160, 170, 180, 190, 200

// Find sum of top-left to bottom-right diagonals

const array = [
         [5, 9, 1, 0],
         [8, 7, 2, 3],
         [1, 4, 1, 9],
         [2, 3, 8, 2]
        ];

function diagonalSum(matrix){
  let result = 0;
  for (let i = 0; i < matrix.length; i++){
    result += matrix[i][i]
  }
  return  result
}

console.log(diagonalSum(array));