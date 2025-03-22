const userProfile = {
  name: 'Misha',
  commentsQty: 23,
  hasSignedAgreement: false
}

const userInfo = ({name, commentsQty}) => {
  if(!commentsQty){
    return `User ${name} hasn't commented yet`
  }
  return `User ${name} has commented ${commentsQty} times`
}

console.log(userInfo(userProfile)) // User Misha has commented 23 times 

  const location = ['Moscow', 'Pushkino', 'Korolev'];

  const [capital] = location;
  console.log(capital); // Moscow

  const country = {
    name: 'Russia',
    population: 146000000,
    area: 17000000
  }

  const {name, population} = country;


  const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Arguments should be numbers'
    }
    if (a <= 0 || b <= 0) {
      return 'Arguments should be positive numbers'
  }
  return a + b
} 


let a;

function test() {
  a = 10;
 return console.log(a);
  let a = 5;
}


console.log(test(a)); // undefined



const sumObjectValues = {
  a: 1,
  b: 2,
  c: 3
}

for(let key in sumObjectValues) {
  console.log(sumObjectValues[key]);
}


const numbers = [1, 2, 3, 4, 5];

const squareNumbers = [];

numbers.forEach((number) => {
  squareNumbers.push(number * number);
});

console.log(squareNumbers); // [1, 4, 9, 16, 25]


const numSquare = numbers.forEach((number) => number * number);
console.log(numSquare); // undefined


const users = [
  {name: 'Misha', age: 25},
  {name: 'Sasha', age: 30},
  {name: 'Dasha', age: 15}
];

const adultUsers = users.filter((user) => user.age >= 18);
console.log(adultUsers); // [{name: 'Misha', age: 25}, {name: 'Sasha', age: 30}]


const userNames = users.map((user) => user.name);

console.log(userNames); // ['Misha', 'Sasha', 'Dasha']



const filterNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filterNumbers.filter((el) => el % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]




const  myObject = {
  x: 10,
  y: true,
  z: 'abc'
}

Object.keys(myObject).forEach((key) => {
  console.log(key, myObject[key]);
});