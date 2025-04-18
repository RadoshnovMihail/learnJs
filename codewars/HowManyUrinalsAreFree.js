function getFreeUrinals(urinals) {
  let arr = urinals.split("");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1" && arr[i + 1] === "1") {
      return -1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "0") {
      const leftFree = i === 0 || arr[i - 1] === "0";
      const rightFree = i === arr.length - 1 || arr[i + 1] === "0";

      if (leftFree && rightFree) {
        count++;
        arr[i] = "1";
      }
    }
  }
  return count;
}

console.log(getFreeUrinals("10001")); // 1
console.log(getFreeUrinals("1001")); // 0
console.log(getFreeUrinals("110")); // -1
