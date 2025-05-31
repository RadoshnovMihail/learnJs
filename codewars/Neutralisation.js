// Дано две строки, состоящие из + и -, вернуть новую строку, которая показывает, как две строки взаимодействуют следующим образом:

// Когда взаимодействуют положительные и положительные, они остаются положительными.
// Когда взаимодействуют отрицательные и отрицательные, они остаются отрицательными.
// Но когда взаимодействуют отрицательные и положительные, они становятся нейтральными и отображаются как число 0.

// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.

function neutralise(s1, s2){
    let result = [];
    for(let i = 0; i < s1.length;i++){
        if(s1[i] === '+' && s2[i] === '+'){
            result.push(s1[i]);
        }
        if(s1[i] === '-' && s2[i] === '-'){
            result.push(s1[i]);
        }
        if(s1[i] !== s2[i]) {
            result.push('0');
        }
    }
    return result.join('')
}

console.log(neutralise("--++--", "++--++")) //"000000"
console.log(neutralise("-+-+-+", "-+-+-+")) //"-+-+-+")
console.log(neutralise("-++-", "-+-+")) //"-+00"
console.log(neutralise("--++", "++++")) //"00++"


function s (x1, x2){
    return x1.split('').map((el, i) => el !== x2[i] ? '0' : el).join('')
}

console.log(s("--++--", "++--++")) //"000000"
console.log(s("-+-+-+", "-+-+-+")) //"-+-+-+")
console.log(s("-++-", "-+-+")) //"-+00"
console.log(s("--++", "++++")) //"00++"

