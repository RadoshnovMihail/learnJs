function wave(str) {
  const result = [];
  for(let i = 0; i < str.length;i++){
    if(str[i] === ' ') continue;
    const waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    result.push(waveStr)
  }
  return result;
}

console.log(wave("hello")); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave(" s p a c e s ")); // [" S p a c e s ", " s P a c e s ", " s p A c e s ", " s p a C e s ", " s p a c E s ", " s p a c e S "]
console.log(wave("Two words")); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
