const { separateArray } = require('../Problems/Problem1')

describe('Testing separateArray function', () => {

  test('separateArray separates the letters, numbers and return the highest number ', () => {
    const arr = ['A', 1811, 'abc', 18, ];
    const result = separateArray(arr);
    expect(result.letters).toEqual(['A', 'abc']);
    expect(result.numbers).toEqual([1811, 18]);
    expect(result.highestNumber).toEqual(1811);
  });

  test('separateArray return default values when array is empty', () => {
    const arr = [];
    const result = separateArray(arr);
    expect(result.letters).toEqual('No letters were passed');
    expect(result.numbers).toEqual('No numbers were passed');
    expect(result.highestNumber).toEqual(undefined);
  });
});
