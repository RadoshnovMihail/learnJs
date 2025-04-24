let userFirst = 'Aria';
let userSecond = null;
let userThree = ''

function greet(name){
    return name ===  null || name === '' ? 'try again' : `hello ${name}!`
}

console.log(greet(userFirst));
console.log(greet(userSecond));
console.log(greet(userThree));