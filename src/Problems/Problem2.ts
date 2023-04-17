export const elementaryFunctions = {
  add: (...nums: number[]) => nums.reduce((acc, curr) => acc + curr, 0),
  subtract: (...nums: number[]) => nums.reduce((acc, curr) => acc - curr),
  multiply: (...nums: number[]) => nums.reduce((acc, curr) => acc * curr, 1),
  divide: (dividend: number, divisor: number) => {
    if (divisor === 0) {
      throw new Error('Cannot divide by zero');
    }
    return dividend / divisor;
  },
};
