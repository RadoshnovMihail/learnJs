function fill_gaps(timesheet){
    let result = timesheet;
for(let i = 0; i < timesheet.length; i++){
    if(timesheet[i] !== null){ 
        let firstValue = timesheet[i];
        let firstIndex = i;
        for(let j = i + 1; j < timesheet.length; j++){
           if(timesheet[j] !== null) {
            if(timesheet[i] === timesheet[j]){
                result.splice(i, j, firstValue)
            }
           }
        }
    }
}
return result
}

console.log(fill_gaps([1,null,1])) //[1,1,1]
console.log(fill_gaps([1,null,null,null,1])) // [1,1,1,1,1]
console.log(fill_gaps([1,null,2,null,2,null,1])) // [1,null,2,2,2,null,1]
console.log(fill_gaps([1,null,2])) // [1,null,2]