let arr = ["32", "27", "885", "104", "47", "78", "477"];

arr.forEach(function (item) {
  if (item.startsWith("2") || item.startsWith("4")) {
    console.log(item);
  }
});

let n = 1;

while (n <= 100) {
  if (n !== 1) {
    let result = 2;
    let i = 2;
    while (n % i !== 0) {
      i += 1;
      result += 1;
    }
    if (result == n) {
      console.log(n + " делитель этого числа 1 и " + n);
    }
  }
  n += 1;
}
