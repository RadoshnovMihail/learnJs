//сделать из строки массив
//

function evenChars(string){
    let arr = string.split('');
    if(arr.length < 2 || arr.length > 100) return  "invalid string";
    return arr.filter((e, ind) => ind % 2 !== 0)
}

console.log(evenChars("1234"))//  ["2", "4"]
console.log(evenChars(";;;--"))//  [";", "-"]


let a = '1234';
console.log([...a])
console.log([...a].filter((x,i) => i % 2))