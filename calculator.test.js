import { updateScreenValue, clearScreen, calculateExpression } from './calculator.js';

describe('Calculator functions', () => {
  let screen;

  beforeEach(() => {
    screen = { value: "" };
  });

  test('should update screen value', () => {
    updateScreenValue(screen, "5");
    expect(screen.value).toBe("5");
  });

  test('should clear screen', () => {
    screen.value = "123";
    clearScreen(screen);
    expect(screen.value).toBe("");
  });

  test('should calculate expression correctly', () => {
    screen.value = "2+3*4";
    calculateExpression(screen);
    expect(screen.value).toBe(14);
  });

  test('should handle empty screen', () => {
    calculateExpression(screen);
    expect(screen.value).toBe("Please enter");
  });

  test('should handle invalid expression', () => {
    screen.value = "2+3*";
    calculateExpression(screen);
    expect(screen.value).toBe("Error");
  });
});
