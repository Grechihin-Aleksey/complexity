"use strict";

let week = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

let d = new Date();
const dayIndex = d.getDay();

const dayName = week[dayIndex];

for (let i = 0, len = week.length; i < len; i++) {
  let html = week[i];
  if (i === dayIndex) html = html.bold();
  else if (i === 0 || i === 6) html = html.italics();

  const div = document.createElement("div");
  div.innerHTML = html;
  document.body.appendChild(div);
}
