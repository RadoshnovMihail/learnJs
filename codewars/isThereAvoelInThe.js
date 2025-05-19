function isVow(a){
 const arr = [...a];
 const lib = ['a', 'e', 'i', 'o', 'u'];
 for(let i = 0; i < a.length; i++){
   for(let j = 0; j < lib.length; j++){
    if(String.fromCharCode(a[i]) === lib[j]){
       arr.splice(i , 1, lib[j]);
    }
   }
 }
 return arr
}

console.log(isVow([100,100,116,105,117,121])); // 100,100,116,"i","u",121]
console.log(isVow([103, 105])); // [ 103, 'i' ]


console.log(String.fromCharCode(105));//(a, e, i, o, u).