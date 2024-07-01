// calculator.js
export function updateScreenValue(screen, value) {
    screen.value += value;
  }
  
  export function clearScreen(screen) {
    screen.value = "";
  }
  
  export function calculateExpression(screen) {
    if (screen.value === "") {
      screen.value = "Please enter";
    } else {
      try {
        let sanitizedInput = screen.value.replace(/[\+\-\*\/\.]$/, '');
        let answer = eval(sanitizedInput);
        screen.value = answer;
      } catch (error) {
        screen.value = "Error";
      }
    }
  }
  