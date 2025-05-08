function unusedDigits(x){
    let a = x.join('').toString().split('').sort().map(e => Number(e));
    console.log(a)
    let uniq = new Set(a);
    let result = []
    for(let i = 0; i < 10; i++){
        if(!uniq.has(i)){
            result.push(i)
        }
    }
    return result.join('').toString()
}

console.log(unusedDigits([12, 34, 56, 78]))//09
console.log(unusedDigits([2015, 8, 26]))//3479

function s (x){
    return x
}
console.log(s(12, 34, 56, 78))//09


function s (...args){
   const allDigits = new Set('0123456789'.split(''));
   for(const num of args){
    const digits = String(num).split('');
    for(const digit of digits){
        allDigits.delete(digit);
    }
}
return [...allDigits].sort().join('')
}
console.log(s(12, 34, 56, 78))//09
console.log(s(2015, 8, 26))//379




