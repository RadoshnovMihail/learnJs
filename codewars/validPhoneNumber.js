function validPhoneNumber(x){
    return /^\(\d{3}\)\s\d{3}\-\d{4}$/.test(x)
}

console.log(validPhoneNumber("(123) 456-7890")) // true
console.log(validPhoneNumber("(1111)555 2345")) // false
console.log(validPhoneNumber("(098) 123 4567")) // false
console.log(validPhoneNumber("(123) 456-7890abc")) // false

function a (x){
    if(x.length !== 14) return false
    if(x[4] !== ')') return false
    if(x[5] !== ' ') return false
    if(x[9] !== '-') return false

    return 
}
console.log(a("(123) 456-7890")) // true
console.log(a("(1111)555 2345")) // false
console.log(a("(098) 123 4567")) // false
console.log(a("(123) 456-7890abc")) // false



