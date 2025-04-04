
// Задача 1

const user = { name: "Alex", age: 30, city: "Moscow" };


function countProperties(obj){
    return Object.keys(obj).length
}

console.log(countProperties(user)); //

const countPropertiesDouble = obj => {
    let count = 0
    for(key in obj){
        if(obj.hasOwnProperty(key)){
            count++
        }
    }
    return count
}

console.log(countPropertiesDouble(user))

// Задача 2

const stats = { a: 10, b: 5, c: 20, d: null };

function findMaxValue(obj) {
const num = Object.values(obj).filter(el => Number.isInteger(el))
return num.length != 0 ? Math.max(...num) : null
}

console.log(findMaxValue(stats)); // 20

const statsOne = { a: 10, b: 5, c: 20, d: null };

 function findMaxValueDouble(obj){
    let max = -Infinity
    for(value of Object.values(obj)){
        if( typeof value === 'number' && value > max)  max = value
        
    } 
        return max !== -Infinity ? max : null
 }

 console.log(findMaxValueDouble(statsOne))


 // задача 3

 const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

function mergeObjects(obj1, obj2){
    return Object.assign({}, obj1, obj2)
}

console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }


const obj3 = { a: 1, b: 2 };
const obj4 = { b: 3, c: 4 };

function mergeObjects(obj3, obj4){
    return  {...obj3, ...obj4}
}

console.log(mergeObjects(obj3, obj4)); // { a: 1, b: 3, c: 4 }

// Задача 4

const original = { a: 1, b: { c: 2 } };
const copy = deepCopy(original);
copy.b.c = 99;
console.log(original.b.c); // 2 (не изменилось)