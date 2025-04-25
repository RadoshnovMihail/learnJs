function twoHighest(arr){
  if(arr === undefined || arr.length === 0) return [];
  if(arr.length === 1) return arr
  let maxChar = Math.max(...arr);
  let middleChar = 1;
  for(let i = 0; i < arr.length; i++){
   if(arr[i] < maxChar && arr[i] > middleChar){
    middleChar = arr[i];
   } 
  }
  return maxChar === middleChar ? [maxChar] : [maxChar, middleChar]
}

console.log(twoHighest([4,10,10,9]))// [10,9]
console.log(twoHighest([1,1,1]))// [1] console.log(twoHighest([]))// []
console.log(twoHighest([15]))// [1] console.log(twoHighest([]))// []
console.log(twoHighest([]))// [1] console.log(twoHighest([]))// []
