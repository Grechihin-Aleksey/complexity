let lang = prompt('Выбрать язык вывода дней недели: "ru" или "en"');

/*if (lang === "ru") {
  console.log(
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Восресенье"
  );
}
if (lang === "en") {
  console.log(
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  );
} else {
  console.log("Язык не поддерживается.");
}*/

/*switch (lang) {
  case "ru":
    console.log(
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Восресенье"
    );
    break;
  case "en":
    console.log(
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    );
    break;
  default:
    console.log("Ошибка при выборе языка.");
    break;
}*/

let i = [
  [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Восресенье",
  ],
  [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
];

let rezalt1 = i === "ru" ? i[0] : i === "en" ? i[1] : "Язык не поддерживается";

console.log(rezalt1);

let namePerson = prompt("Введите имя:");
let rezalt;

rezalt =
  namePerson === "Артем"
    ? "Директор."
    : namePerson === "Максим"
    ? "Преподаватель"
    : "Студент";

console.log(rezalt);
