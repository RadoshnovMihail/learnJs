

function sortString(string, ordering){
    let result = [];
    let sortString = string.split('');
    let sample = ordering.split('');
    for(let i = 0; i < sample.length; i++){
        for(let j = 0; j < sortString.length; j++){
            if(sample[i] === sortString[j]){
                result.push(sortString[j])
                sortString[j] = null
            } 
        }
    }
    for(let value of sortString){
        if(value != null){
            result.push(value)
        }
    }
    return result.join('')
}

console.log(sortString("foos", "of")) // oofs
console.log(sortString("string", "gnirts")) // gnirts
console.log(sortString("banana", "abn",)) // "aaabnn"