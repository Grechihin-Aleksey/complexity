let lang = "        привет";
let num = function (a) {
  if (typeof a === "string" && a.length > 10) {
    console.log(lang.trim().substr(0, 10) + "...");
  }
  if (typeof a !== "string") {
    console.log("не строка");
  }
};
num(lang);
