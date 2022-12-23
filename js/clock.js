const clockContainer = document.querySelector("#clock");
const ymdd = clockContainer.querySelector("div:first-child");
const time = clockContainer.querySelector("div:last-child");

function getClock() {
  const currentTime = new Date();
  const weeks = ["SUN", "MON", "TUE", "WED", "TRU", "FRI", "SAT"];

  const year = currentTime.getFullYear();
  const month = currentTime.getMonth() + 1;
  const date = String(currentTime.getDate()).padStart(2, "0");
  const day = currentTime.getDay();

  const hour = String(currentTime.getHours()).padStart(2, "0");
  const min = String(currentTime.getMinutes()).padStart(2, "0");
  const sec = String(currentTime.getSeconds()).padStart(2, "0");

  ymdd.innerText = `${year}.${month}.${date} ${weeks[day]}`;
  time.innerText = `${hour}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);
