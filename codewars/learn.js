const arrOne = [1,2,3,4,5];
const arrTwo = arrOne.slice(0, 2) // извлекает 2 элемента  из массива arrOne(начиная с индекса 0), и добавляет в массив arrTwo.
console.log(arrTwo) //[1,2]

const strOne = 'abcdefghk';
const strTwo = strOne.slice(0, 2) //извлекает 2 элемента  из строки strOne(начиная с индекса 0), и добавляет в строку strTwo.
console.log(strTwo) // ab

const strX = 'abcdefghk';
const strY = strX.slice(-2)
console.log(strY) // извлекает с конца 2 элемента hk.
 
const strZ = 'abcdefghk';
const strU = strZ.slice(1, -1)
console.log(strU) // извлекает начиная с элемента с индекса 1 и заканчива предпоследим индексом bcdefgh.

const strR = 'abcdefghk';
const strQ = strR.slice()
console.log(strQ) // копирует массив
 
 