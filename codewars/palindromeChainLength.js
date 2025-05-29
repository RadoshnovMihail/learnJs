var palindromeChainLength = function (n) {
  let count = 0;
  let sum = n;
  const isPalindrome = num => {
    const str = num.toString();
    return str === str.split('').reverse().join('');
  }
  while(!isPalindrome(sum)){
    const numReverse = Number(sum.toString().split('').reverse().join('')); 
    count++;
    sum += numReverse;  
  }
  return count;
};

console.log(palindromeChainLength(87)); // 4
console.log(palindromeChainLength(89)); // 24
console.log(palindromeChainLength(10)); // 1
console.log(palindromeChainLength(88)); // 0
