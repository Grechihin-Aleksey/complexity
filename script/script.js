"use strict";

let week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

for (let i = 0, len = week.length; i < len; i++) {
  let html = week[i];
  if (i === 1) html = html.bold();
  else if (i > 4) html = html.italics();

  const div = document.createElement("div");
  div.innerHTML = html;
  document.body.appendChild(div);
}
let date = new Date(2020, 7, 18);
console.log(date);
