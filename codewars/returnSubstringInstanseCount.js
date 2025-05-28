function solution(fullText, search){
   let count = 0;
   let index = 0;
   while (true){
    const foundIndex = fullText.indexOf(search, index);
    if(foundIndex === -1) break;
    count++;
    index = foundIndex + search.length;
   }
   return count;
}

console.log(solution("aa_bb_cc_dd_bb_e", "bb"));
console.log(solution("aaabbbcccc", "bbb"));
