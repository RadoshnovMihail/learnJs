// function a (string){
//     let result = null;
//     let left = 0;
//     let right =  string.length - 1;
//     console.log(right);
//     while(left < right){
//         if(left === right){
//             return true;
//         }
//         if(string[left] == string[right]){
//             left += 1;
//             right = -1;
//         } else {
//             return false;
//         }
//     }
// return result
// }
console.log('abba'.split(''))
console.log(a('abbb'))

function b (x){
    return x.split('').join() === x.split('').reverse().join() ? true : false;
}

console.log(b('abba'))
console.log(b('abbb'))