
let arr = [1,3, 5, 6, 7];

function sum (x, n){
let left = 0;
let right = x.length - 1;

while(left < right){
    const currentSum = x[left] + x[right];

    if(currentSum === n){
        return [x[left], x[right]];
    } else if (currentSum < n){
        left++;
    } else {
        right--
    }
        
    }
    return null
}

console.log(sum(arr, 11))


let arrOne = [1, 3, 5, 4, 3];

function dub (x){
    const arr = x.sort((a, b) => a - b);
    if(x.length === 0) return 0;

    let uniquePointer = 0;//[1, 3, 5, 4, 3];

    for(let i = 1; i < x.length; i++){
        if(arr[i] !== arr[uniquePointer]){
            uniquePointer++;
            arr[uniquePointer] = arr[i];
        }
    }
} 

console.log(dub(arrOne))


//1, 3, 5, 4, 3
// 3


function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    
    let uniquePointer = 0;  // Указатель на последний уникальный элемент
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniquePointer]) {
            uniquePointer++;
            nums[uniquePointer] = nums[i];  // Записываем новый уникальный элемент
        }
        // Если элементы равны, просто продолжаем итерацию
    }
    
    return uniquePointer + 1;  // Количество уникальных элементов
}

console.log(removeDuplicates([1, 3, 5, 4, 3]))