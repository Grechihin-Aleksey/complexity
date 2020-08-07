let num = [2, 6, 6, 2, 1, 9];

let result = num.reduce(function (a, b) {
    return a * b;
})

console.log(result);
let name = result ** 3;
let name_1 = String(name).slice(0, 2)
console.log(name_1);