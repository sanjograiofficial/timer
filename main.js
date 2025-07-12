const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

const sec0UpBtn = document.querySelector(".sec0.up");
const sec1UpBtn = document.querySelector(".sec1.up");
const min0UpBtn = document.querySelector(".min0.up");
const min1UpBtn = document.querySelector(".min1.up");
const h0UpBtn = document.querySelector(".hr0.up");
const h1UpBtn = document.querySelector(".hr1.up");

let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

const sec = second.textContent.split("");
const min = minute.textContent.split("");
const h = hour.textContent.split("");

let interval;

function countdown() {
  interval = setInterval(() => {
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
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});
resetBtn.addEventListener("click", () => {
  hour.textContent = `00`;
  minute.textContent = `00`;
  second.textContent = `00`;
});
h0UpBtn.addEventListener("click", () => {
  h[0]++;
  if (h[0] > 2) {
    h[0] = 0;
  }
  hour.textContent = `${h[0]}${h[1]}`;
});
h1UpBtn.addEventListener("click", () => {
  if(hour.textContent == 24) return;
  h[1]++;
  if (h[1] > 9) {
    h[1] = 0;
    h[0]++;
  }
  if (h[0] > 2) {
    h[0] = 0;
  }
  hour.textContent = `${h[0]}${h[1]}`;
});

function inc0Btn(btn, time, timeText) {
  btn.addEventListener("click", () => {
    time[0]++;
    if (time[0] > 5) {
      time[0] = 0;
    }
    timeText.textContent = `${time[0]}${time[1]}`;
  });
}

function inc1Btn(btn, time, timeText) {
  btn.addEventListener("click", () => {
    time[1]++;
    if (time[1] > 9) {
      time[1] = 0;
      time[0]++;
    }
    if (time[0] > 5) {
      time[0] = 0;
    }
    timeText.textContent = `${time[0]}${time[1]}`;
  });
}
inc0Btn(sec0UpBtn, sec, second);
inc0Btn(min0UpBtn, min, minute);

inc1Btn(sec1UpBtn, sec, second);
inc1Btn(min1UpBtn, min, minute);
