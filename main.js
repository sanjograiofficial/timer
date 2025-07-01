const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

const sec = second.textContent.split("");
console.log(sec);
const min = minute.textContent.split("");
const h = hour.textContent.split("");

function countdown() {
  setInterval(() => {
    if (
      hour.textContent == 0 &&
      minute.textContent == 0 &&
      second.textContent == 0
    ) {
      return;
    }
    if (minute.textContent == 0 && second.textContent == 0) {
      hour.textContent = `${h[0]}${--h[1]}`;
    }
    if (second.textContent == 0) {
      minute.textContent = `${min[0]}${--min[1]}`;
    }
    if (min[1] == 0) {
      if (min[0] == 0) {
        min[0] = 6;
      }
      min[0]--;
      min[1] = 10;
    }
    if (sec[1] == 0) {
      if (sec[0] == 0) {
        sec[0] = 6;
      }
      sec[0]--;
      sec[1] = 10;
    }
    second.textContent = `${sec[0]}${--sec[1]}`;
  }, 1000);
}

startBtn.addEventListener("click", () => {
  countdown();
});
stopBtn.addEventListener("click", () => {});
