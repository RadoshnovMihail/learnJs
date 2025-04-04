const a = "absbas";
const c = "absba";

function palindrome(str) {
  return str.split("").reverse().join("") === str;
}

console.log(palindrome(a));
console.log(palindrome(c));
