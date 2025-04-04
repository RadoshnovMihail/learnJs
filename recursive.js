// function sumTo(n){
//     if(n === 1) return 1
//     return n + sumTo(n - 1)
// }

// console.log(sumTo(5))


function fibonachi(n){
    if(n === 1) return 1 // 5(1) 4(2) 3(3) 2(4)
  return n * fibonachi(n - 1) // 4(1) 3(2) 2(3) 1(4)
    // 5(1) 4(2) 3(3) 2(4) находятся в памяти
    // 2 * 1, 2 * 3, 6 * 4, 24 * 5 = 120
}

console.log(fibonachi(5))





// контекст вызова - оркружение в котором выполняется код Javascript. Содержит всю необходимую информацию.


// стэк вызова - это механизм, который отслеживает текущее место выполнения кода Javascript.


// 2. Вызов файла в котором  лежит функция fibonachi.
// 1. функция fibonachi

// fibonachi(n){

//    fibonachi(n){

//      fibonachi(n){

//        fibonachi(n){





 // Выяснить сколько цифр в числе (10 - 2 цифры)

let num = 100

function res(x){

}

console.log(num.toString().length)

// 1,1,2,3,5,8,13,


function fibonachi(n){
  if(n <= 1) return n
  return fibonachi(n - 1) + fibonachi(n - 2) 
}

let digits = []

for(let i = 0; i < 10; i++){
  digits.push(fibonachi(i))
}

console.log(digits)


const memoFibonacci = (function () {
  const cache = {}; // Объект для кеширования результатов
  console.log(cache)
  return function fib(n) {
    if (n in cache) return cache[n]; // Если результат есть в кеше — возвращаем его
    if (n <= 1) return n;

    cache[n] = fib(n - 1) + fib(n - 2); // Сохраняем результат
    return cache[n];
  };
})();

console.log(memoFibonacci(100)); // Считает мгновенно!


 const c = {}

 c[3]

 console.log(c)

 //1. Создание глобального контекста выозова
 //2. Фаза создания: 
  //     Поднятие (hosting) переменных var и функций.
  //     Иницилизация let/const (но без доступа до объявления - Temporal Dead Zone).
  //  Фаза выполнения (Execution Phase).
  //     Присваивание значений переменным.
  //     Вызов функций (для каждой функции создается новый контекст выполнения)

  