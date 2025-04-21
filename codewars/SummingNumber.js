function sumDigits(number){ const a = Math.abs(number);
    const b = a.toString().split('');
    const c = b.map(el => parseInt(el));
    return c.reduce((acc, val) => acc + val)
}

console.log(sumDigits(10))// 1
console.log(sumDigits(99))// 18
console.log(sumDigits(-32))// 5

    