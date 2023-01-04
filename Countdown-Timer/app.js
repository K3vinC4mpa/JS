const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 1, 24, 17, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 12, 0, 0);
const year = futureDate.getFullYear();
let hours = futureDate.getHours();
let mins = futureDate.getMinutes();
const date = futureDate.getDate();
let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];

// determine AM/PM time
let amPm = "AM";
if (hours > 12) {
  hours = hours - 12;
  amPm = "PM";
}

// add a 0 in solo numbers
if (hours < 10) {
  hours = `0${hours}`;
}
if (mins < 10) {
  mins = `0${mins}`;
}

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${mins} ${amPm}`;

// future time in miliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60min
  // 1d = 24hrs

  // values in miliseconds
  const oneDayMiliseconds = 24 * 60 * 60 * 1000;
  const oneHourMiliseconds = 60 * 60 * 1000;
  const oneMinMiliseconds = 60 * 1000;

  let days = Math.floor(t / oneDayMiliseconds);
  let hours = Math.floor((t % oneDayMiliseconds) / oneHourMiliseconds);
  let mins = Math.floor((t % oneHourMiliseconds) / oneMinMiliseconds);
  let secs = Math.floor((t % oneMinMiliseconds) / 1000);

  // set values array
  const values = [days, hours, mins, secs];

  // add a 0 behind a solo numbers
  function format(item) {
    if (item < 10) {
      item = `0${item}`;
    }
    return item;
  }
  items.forEach((item, index) => {
    // console.log(`${item.innerHTML} , ${index}`);
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class ="expired">sorry, this giveaway has expired</h4>`;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
