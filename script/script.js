let num = 266219;
let num_1 = String(num);
let num_2 = num_1.split("");

let result = num_2.reduce(function (a, b) {
  return a * b;
});

console.log(result);
let name = result ** 3;
let name_1 = String(name).slice(0, 2);
console.log(name_1);
