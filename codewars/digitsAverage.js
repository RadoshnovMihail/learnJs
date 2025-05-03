function digitsAverage(input){
    let result = 0; 
    let arr = input.toString().split('').map(e => Number(e));
        let prev = 0;
        let next = 0;
    for(let i = 0; i < arr.length; i++){
       prev = 
    }
    return Math.ceil(result)
}

console.log(digitsAverage(345))
console.log(digitsAverage(34831))
console.log(digitsAverage(89))
console.log(digitsAverage(246))
console.log(digitsAverage(245))


// let a = [1,3,4,5,6,7];
// console.log(a.length)
// console.log(a.length - 1)
function digitsAverage(input) {
    let digits = input.toString().split('').map(Number);
    
    while (digits.length > 1) {
        let newDigits = [];
        for (let i = 0; i < digits.length - 1; i++) {
            let avg = Math.ceil((digits[i] + digits[i + 1]) / 2);
            newDigits.push(avg);
        }
        digits = newDigits;
    }
    
    return digits[0];
}

console.log(digitsAverage(246));    // 4
console.log(digitsAverage(34831));  // 5
console.log(digitsAverage(89));     // 9
console.log(digitsAverage(246));    // 4
console.log(digitsAverage(245));    // 4


function digitsAverage(input) {
  let arr = input.toString().split('').map(e => Number(e));
  console.log(arr)
  while(arr.length > 1){
    let newArr = [];
    for(let i = 0; i < arr.length - 1; i++){
      let sum = Math.ceil((arr[i] + arr[i + 1]) / 2)
      newArr.push(sum);
    }
    arr = newArr;
  }
  return arr[0];
}

console.log(digitsAverage(246));    // 4
