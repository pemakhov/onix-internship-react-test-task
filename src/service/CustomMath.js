function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getArrayOfRandomNumbersInRange(params) {
  const { min, max } = params.range;
  const length = params.length < max - min ? params.length : max - min;

  const numbers = new Set();
  while (numbers.size < length) {
    numbers.add(getRandomNumberInRange(min, max));
  }
  return [...numbers];
}

const customMath = {
  getRandomNumberInRange,
  getArrayOfRandomNumbersInRange,
};

export default customMath;
