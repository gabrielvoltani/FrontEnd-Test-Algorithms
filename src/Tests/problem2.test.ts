import { elementaryFunctions } from '../Problems/Problem2';

describe('Testing elementaryFunctions', () => {
  test('Testing add function', () => {
    expect(elementaryFunctions.add(1, 2, 3)).toBe(6);
    expect(elementaryFunctions.add(0, 0)).toBe(0);
    expect(elementaryFunctions.add(-1, 1)).toBe(0);
  });

  test('Testing subtract function', () => {
    expect(elementaryFunctions.subtract(10, 5)).toBe(5);
    expect(elementaryFunctions.subtract(0, 0)).toBe(0);
    expect(elementaryFunctions.subtract(-1, 1)).toBe(-2);
  });

  test('Testing multiply function', () => {
    expect(elementaryFunctions.multiply(2, 3, 4)).toBe(24);
    expect(elementaryFunctions.multiply(0, 10)).toBe(0);
    expect(elementaryFunctions.multiply(-1, 1)).toBe(-1);
  });

  test('Testing divide function', () => {
    expect(elementaryFunctions.divide(6, 2)).toBe(3);
    expect(() => {
      elementaryFunctions.divide(10, 0);
    }).toThrow('Cannot divide by zero');
    expect(elementaryFunctions.divide(1, -1)).toBe(-1);
  });
});