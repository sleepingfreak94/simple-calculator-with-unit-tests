import { updateScreenValue, clearScreen, calculateExpression } from './calculator.js';

(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      if (value !== undefined) {
        updateScreenValue(screen, value);
      }
    });
  });

  equal.addEventListener("click", function (e) {
    calculateExpression(screen);
  });

  clear.addEventListener("click", function (e) {
    clearScreen(screen);
  });
})();
