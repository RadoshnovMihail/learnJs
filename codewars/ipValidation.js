function isValidIP(str){
  const arr = str.split('.');
  if(arr.length !== 4) return false
 for(item of arr){
    if(!/^\d+$/.test(item)) return false
    if(item.length > 1 && item[0] === '0') return false
    const num = parseInt(item, 10);
    if(num < 0 || num >255) return false
 } 
    return true
}

console.log(isValidIP("0.0.0.0" )) // true
console.log(isValidIP("12.255.56.1" )) // true
console.log(isValidIP('123.456.789.0' )) // false
console.log(isValidIP('abc.def.ghi.jkl' )) // false
console.log(isValidIP(" " )) // false
console.log(isValidIP("123.045.067.089" )) // false
