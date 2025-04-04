class NumbersArray extends Array {
    sum(){
    return   this.reduce((acc, el) => acc + el)
    }
}

const myArray = new NumbersArray(2, 4, 5)

console.log(myArray)

console.log(myArray.sum())


const animal = { eats: true };
const rabbit = { jumps: true };

rabbit.__proto__ = animal; // rabbit теперь наследует от animal

console.log(rabbit.eats); // true (из прототипа)
console.log(rabbit.jumps); // true (собственное свойство)



const str = 'abc'
const myName = new String('Misha')

console.log(str.length)
console.log(str.toUpperCase())
console.log(myName)


password("Abcd1234"); 
password("Abcd123"); 

function password(str) {
    if(str.length < 8){
        return false
    }
    let letterUpper = false;
    let letterLower = false;
    let isNum = false;
    for (let key of str){
         if(key >= 'A' && key <= 'Z'){
            letterUpper = true;
         } else if(key >= 'a' && key <= 'z'){
            letterLower = true;
         } else if (key >= '0' && key <= '9'){
            isNum = true;
         }
        }
        return letterUpper && letterLower && isNum;
}

console.log(password("Abcd1234"))
console.log(password("Abcd123"))


let userFirst = 'Jack Ryan'
let userSecond = "Abcd123Alice Betty Catherine Davis"

function initializeolds(name){
    const  partsName = name.split(' ');
    if(partsName.length === 1){
        return partsName[0] 
    }
    if(partsName.length === 2){
        return `${partsName[0]} ${partsName[1]}`
    }
    const firstName = partsName[0]
    const secondName = partsName[partsName.length - 1]
    const middleName = partsold.slice(1, - 1).map(el => `${el[0]}.`).join(' ')
    return `${firstname} ${middlename} ${secondname}`
}

console.log(initializenames(userFirst))
console.log(initializenames(userSecond))


// let arr = ['sun', 'moon', 'rock', 'rain']

// console.log(arr.slice(-1))

let user2 = 'Jack Ryan'
let user1 = "Abcd123Alice Betty Catherine Davis"

function initializenames(name){
  const arr = name.split(' ')
  if(arr.length === 1){
    return arr[0];
  }
  if(arr.length === 2){
    return `${arr[0]} ${arr[1]}`
  }
  const nameFirst = arr[0]
  const nameLast = arr[arr.length - 1]
  const nameMiddle = arr.slice(1, -1).map(el => `${el[0]}.`).join(' ')
  return `${nameFirst} ${nameMiddle} ${nameLast}`
}

ccyonsole.log(initializenames(user2))
console.log(initializenames(user1))


  const nameFirst = arr[0]
  const nameLast = arr[arr.length - 1]
  const nameMiddle = arr.slice(1, -1).map(el => `${el[0]}.`).join(' ')
  return `${nameFirst} ${nameMiddle} ${nameLast}`
  
  console.log(initializenames(user2))
  
  console.log(initializenames(user1))


const myPromise = new Promise((resolve, reject) =>{

})

  