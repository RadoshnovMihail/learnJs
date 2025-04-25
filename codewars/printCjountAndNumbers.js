function countMe(data) {
if(data === null || data === undefined  || typeof data !== 'string' || data.length === 0 ) return '';
for(let char of data){
  if(char < '0' || char > '9'){
    return '';
  }
}
  let result = '';
  let count = 1;

  for(let i = 0; i < data.length; i++){
    const currentChar = data[i];
    const nextChar = data[i + 1];

    if(currentChar === nextChar){
      count++;
    } else {
      result += `${count}${currentChar}`;
      count = 1;
    }
  }
return result;
}

console.log(countMe("1123")); //211213
console.log(countMe("211213")); //"1221121113"

// // reduce - acc, value, index, array

// const arr = [1, 2, 3];

// const result = arr.reduce((acc, val) => acc + val, 1);
// // 0) 0 + 1
// //1) 1 + 2
// // 3 + 3
// // Результат 6
// console.log(result);

// //1) 1 + 1
// // 2) 2 + 2
// // 3) 4 + 3
// // Результат 7

// const user = {};
// // const obj = {}

// console.log(user);

// user.name = "Leonid";

// console.log(user);

// user["city"] = "Sparta";

// console.log(user);




// function countAndSay(input) {
//   if (
//     input === null ||
//     input === undefined ||
//     typeof input !== "string" ||
//     input.length === 0
//   ) {
//     return "";
//   }

//   for (let char of input) {
//     if (char < "0" || char > "9") {
//       return "";
//     }
//   }
// let result = '';
// let i = 0;
// const n = input.length;


// while(i < n) {
//   const currentChar = input[i];
//   let count = 1;

//   while(i + 1 < n && input[i + 1] === currentChar) {
//     count++;
//     i++;
//   }
//   result += `${count}${currentChar}`;
//   i++;
// }
// return result;
// }

// console.log(countAndSay("1123")); //211213
// console.log(countAndSay("211213")); //"1221121113"



// function countNum(x){
//   let result = '';
//   let count = 1;
// for(let i = 0; i < x.length; i++){
// const  currentChar = x[i];
// const  nextChar = x[i + 1];

// if(currentChar === nextChar){
//   count++;
// } else {
//   result += `${count}${currentChar}`;
//   count = 1;
// }

// }
// return result;
// }
// console.log(countNum("1123")); //211213
// console.log(countNum("211213")); //"1221121113"
