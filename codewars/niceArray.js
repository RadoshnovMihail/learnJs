function isNice (arr) {
    let count = 0;
         for(let i = 1; i < arr.length; i++){
           if(!arr.includes(i - 1) || !arr.includes(i + 1)) {
            return true
           } else {
            return false
           }
         }
}


console.log(isNice([2, 10, 9, 3])) // true
console.log(isNice([3, 4, 5, 7])) // false