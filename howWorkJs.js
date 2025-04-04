var n = 2;

function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);

function one() {
  let str = "string";
  function inner() {
    console.log(str);
  }
  inner();
}

one();

const obj = {
  1: "dog",
  2: "cat",
  3: "elephant",
  4: "sneak",
};

for (key in obj) {
  console.log(obj[key]);
}

