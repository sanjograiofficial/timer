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
    if (sec[1] == -1 && sec[0] == -1) {
      minute.textContent = `${min[0]}${min[1]--}`;
    }
    if (sec[1] == -1) {
      if (sec[0] == 0) {
        sec[0] = 6;
      }
      sec[0]--;
      sec[1] = 9;
    }
    second.textContent = `${sec[0]}${sec[1]--}`;
  }, 1000);
}

startBtn.addEventListener("click", () => {
  countdown();
});
stopBtn.addEventListener("click", () => {});
