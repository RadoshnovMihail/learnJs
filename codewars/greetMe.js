var greet = function(name){
    let res = name.at(0).toUpperCase() + name.slice(1).toLowerCase()
 return `Hello ${res}!`
}

console.log(greet('riley'))      
console.log(greet('JACK'))      