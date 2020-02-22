const getGreatestCommonDivisor = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const number1 = Math.round(80 * Math.random());
  const number2 = Math.round(80 * Math.random());
  let maxNumber;
  let minNumber;
  if (number1 > number2) {
    maxNumber = number1;
    minNumber = number2;
  } else {
    maxNumber = number2;
    minNumber = number1;
  }
  let result;
  for (result = minNumber; result > 0; result -= 1) {
    if (minNumber % result === 0 && maxNumber % result === 0) {
      break;
    }
  }
  const numbers = [` ${number1}  ${number2}`];
  const subpair = [numbers, result.toString()];
  const pair = [subpair, rules];
  return pair;
};

export default getGreatestCommonDivisor;
