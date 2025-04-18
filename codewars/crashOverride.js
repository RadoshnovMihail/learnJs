
function aliadGen(first, last){
    let one = first.split('')[0];
    let two = last.split('')[0];
    if(/^[a-zA-Z]$/.test(one) && /^[a-zA-Z]$/.test(two)){
        return `${one[0]}alware ${two[0]}ike`
    } else {
      return "Your name must start with a letter from A - Z." 
    }
}

console.log(aliadGen('Mike', 'Millington'));
console.log(aliadGen('5454343', 'Millington'));
