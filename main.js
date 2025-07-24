const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

const form = document.querySelector(".input");
const h0Elem = document.querySelector(".h0");
const h1Elem = document.querySelector(".h1");
const m0Elem = document.querySelector(".m0");
const m1Elem = document.querySelector(".m1");
const s0Elem = document.querySelector(".s0");
const s1Elem = document.querySelector(".s1");

form.addEventListener("input", (e) => {
  const target = e.target;
  if (target.nextElementSibling) {
    target.nextElementSibling.focus();
  }
});
form.addEventListener("keydown", (e) => {
  const target = e.target;

  if (e.key === "Backspace" && !target.value && target.previousElementSibling) {
    target.previousElementSibling.focus();
  }
});

let interval;
function updateDisplay() {
  h0Elem.value = time.h0;
  h1Elem.value = time.h1;
  m0Elem.value = time.m0;
  m1Elem.value = time.m1;
  s0Elem.value = time.s0;
  s1Elem.value = time.s1;
}
let time = {
  h0: 0,
  h1: 0,
  m0: 0,
  m1: 0,
  s0: 0,
  s1: 0,
};
function countdown() {
  time = {
    h0: h0Elem.value,
    h1: h1Elem.value,
    m0: m0Elem.value,
    m1: m1Elem.value,
    s0: s0Elem.value,
    s1: s1Elem.value,
  };
  const hour = parseInt(time.h0 * 10) + parseInt(time.h1);
  const minute = time.m0 * 10 + time.m1;
  const second = time.s0 * 10 + time.s1;

  if (hour > 24 || (hour === 24 && (minute > 0 || second > 0))) {
    alert("Maximum allowed time is 24:00:00");
    return;
  }

  clearInterval(interval);
  interval = setInterval(() => {
    if (
      time.h0 === 0 &&
      time.m0 === 0 &&
      time.s0 === 0 &&
      time.h1 === 0 &&
      time.m1 === 0 &&
      time.s1 === 0
    ) {
      clearInterval(interval);
      return;
    }

    if (time.s1 > 0) {
      time.s1--;
      console.log(time.s1);
    } else if (time.s0 > 0) {
      time.s1 = 9;
      time.s0--;
    } else if (time.m1 > 0) {
      time.m1--;
      time.s0 = 5;
      time.s1 = 9;
    } else if (time.m0 > 0) {
      time.m0--;
      time.m1 = 9;
      time.s0 = 5;
      time.s1 = 9;
    } else if (time.h1 > 0) {
      time.h1--;
      time.m0 = 5;
      time.m1 = 9;
      time.s0 = 5;
      time.s1 = 9;
    } else if (time.h0 > 0) {
      time.h0--;
      time.h1 = 9;
      time.m0 = 5;
      time.m1 = 9;
      time.s0 = 5;
      time.s1 = 9;
    }

    updateDisplay();
  }, 1000);
}

// Button bindings
startBtn.addEventListener("click", countdown);
stopBtn.addEventListener("click", () => clearInterval(interval));
resetBtn.addEventListener("click", () => {
  time = {
    h0: 0,
    h1: 0,
    m0: 0,
    m1: 0,
    s0: 0,
    s1: 0,
  };
  updateDisplay();
  clearInterval(interval);
});
