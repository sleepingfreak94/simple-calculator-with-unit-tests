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
      // Basic validation to ensure the expression is valid
      const isValidExpression = /^[0-9+\-*/.]+$/.test(screen.value) && !/[+\-*/.]$/.test(screen.value);
  
      if (isValidExpression) {
        try {
          let answer = eval(screen.value);
          screen.value = answer;
        } catch (error) {
          screen.value = "Error";
        }
      } else {
        screen.value = "Error";
      }
    }
  }
  