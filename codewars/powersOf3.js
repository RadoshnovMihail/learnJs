function largesPower(n){
    if(n <= 1) return -1;
    let k = 0;
    while(Math.pow(3, k) < n){
        k++;
    }
    return k - 1
}

console.log(largesPower(3)) //0
console.log(largesPower(5)) //1
console.log(largesPower(7)) //3
console.log(largesPower(81)) //4