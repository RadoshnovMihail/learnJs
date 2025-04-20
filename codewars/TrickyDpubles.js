function trickyDoubles(n){
let arr = n.toString().split('').map(el => parseInt(el)).sort((a, b) => a - b);
    if(arr[0] === arr[1] && arr[arr.length - 1] === arr[arr.length - 2]){
       return n 
    } else {
        return n + n
    }
}

console.log(trickyDoubles(15));// 30
console.log(trickyDoubles(100));// 200
console.log(trickyDoubles(4343));// 4343

