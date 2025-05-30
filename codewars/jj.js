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
// console.log('abba'.split(''))
// console.log(a('abbb'))

const palindrome = (x) => x.split('').join() === x.split('').reverse().join() ? true : false;

console.log(palindrome('abba'))
console.log(palindrome('abbb'))


function x(str){
    let left = 0;
    let right = str.length - 1;
    while(left < right){
        if(str[left] !== str[right]) return false
        if(str[left] === str[right]) {
            left++;
            right--;
        }
    }
    return true
}
console.log(x('abba'))
console.log(x('abbb'))