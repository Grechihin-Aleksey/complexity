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

for (let i = 0, len = week.length; i < len; i++) {
  let html = week[i];
  if (i === dayIndex) html = "<b>" + html + "</b>";
  else if (i === 0 || i === 6) html = "<i>" + html + "</i>";
  else if (i === dayIndex || i === 0)
    html = html = "<b><i>" + html + "</i></b>";

  const div = document.createElement("div");
  div.innerHTML = html;
  document.body.appendChild(div);
}
