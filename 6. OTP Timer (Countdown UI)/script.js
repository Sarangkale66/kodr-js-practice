const otpInput = document.querySelector("#otp");
const btn = document.querySelector("#btn");
const timerDiv = document.querySelector("#timer");
const counterSpan = document.querySelector("#counter");

let count = Number(counterSpan.textContent);
let interval = null;

btn.addEventListener("click", () => {
  if (!btn.disabled) {
    btn.disabled = true;
    timerDiv.classList.remove("hidden");
    interval = setInterval(() => {
      count -= 1;
      if (count === 0) {
        clearInterval(interval);
        count = 30;
        btn.textContent = "Re-send OTP";
        btn.disabled = false;
        timerDiv.classList.add("hidden");
      }
      counterSpan.textContent = String(count).padStart(2, "0");
    }, 1000);
  }
});