export const separateArray = (arr: (string | number)[]) => {
  const lettersArr = arr.filter((e) => typeof e === 'string') as string[];
  const numbersArr = arr.filter((e) => typeof e === 'number') as number[];
  let letters;
  let numbers;
  let highestNumber;
  if (lettersArr.length > 0) {
    letters = lettersArr;
  } else {
    letters = 'No letters were passed'
  }
  if (numbersArr.length > 0) {
    highestNumber = Math.max(...numbersArr);
    numbers = numbersArr;
  } else {
    highestNumber = undefined;
    numbers = 'No numbers were passed'
  }
  return { letters, numbers, highestNumber };
};