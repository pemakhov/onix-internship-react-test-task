function getRandomNumberInRange(min, max) {
  return Math.ceil(Math.random() * (max - min + 1));
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

const CustomMath = {
  getRandomNumberInRange,
  getArrayOfRandomNumbersInRange,
};

export default CustomMath;
