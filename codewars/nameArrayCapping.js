function capMe(name){
    let result =  []
    let strLower = name.map(e => e.toLowerCase());
    for(let i = 0; i < strLower.length; i++){
        let word = strLower[i].slice(1)
        let letter = strLower[i].split('').shift().toUpperCase();
        result.push(`${letter}${word}`)
    }
    return result
}


 console.log(capMe(['jo', 'nelson', 'jurie'])) //['Jo', 'Nelson', 'Jurie']
 console.log(capMe(['KARLY', 'DANIEL', 'KELSEY'])) //['Karly', 'Daniel', 'Kelsey']


 
function a(x){
  return  x.map(e => e.charAt().toUpperCase() + e.slice(1).toLowerCase())
}
 console.log(a(['jo', 'nelson', 'jurie'])) //['Jo', 'Nelson', 'Jurie']
 console.log(a(['KARLY', 'DANIEL', 'KELSEY'])) //['Karly', 'Daniel', 'Kelsey']