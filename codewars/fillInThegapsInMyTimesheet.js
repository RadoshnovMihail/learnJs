function fill_gaps(timesheet){
  const result = [...timesheet];
  for(let i = 0; i < result.length; i++){
    if(result[i] === null){
        let left = i - 1;
        while(left >= 0 && result[left] === null){
            left--;
        }
        let right = i + 1;
        while(right < result.length && result[right] === null){
            right++;
        }
        if(left >= 0 && right < result.length && result[left] === result[right]){
            for(let j = left + 1; j < right; j++){
                result[j] = result[left];
            }
            i = right - 1;
        }
    }  
  }
  return result;
}

console.log(fill_gaps([1,null,1])) //[1,1,1]
console.log(fill_gaps([1,null,null,null,1])) // [1,1,1,1,1]
console.log(fill_gaps([1,null,2,null,2,null,1])) // [1,null,2,2,2,null,1]
console.log(fill_gaps([1,null,2])) // [1,null,2]



function a (arr){
  const result = [...arr];
  for(let i = 0; i < result.length; i++){
    let left = i - 1;
    while(left >= 0 && result[left] === null){
        left--;
    }
    let right = i + 1;
     while(right < result.length && result[right] === null){
        right++;
     }
     if(left >= 0 && right < result.length && result[left] === result[right] && isOnlyNulls(result, left, right)){
        for(let j = left + 1; j < right; j++){
            result[j] = result[left];
        }
        i = right - 1;
     }

  }
  return result;
  
}
function isOnlyNulls(arr, left, right){
    for(let i = left + 1; i < right; i++){
        if(arr[i] !== null) {
            return false;
        }
    }
    return true;
}
console.log(a([1,null,1])) //[1,1,1]
console.log(a([1,null,null,null,1])) // [1,1,1,1,1]
console.log(a([1,null,2,null,2,null,1])) // [1,null,2,2,2,null,1]
console.log(a([1,null,2])) // [1,null,2]
console.log(a([1, null, 2, null, 1]))