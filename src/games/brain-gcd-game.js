import { engine, setNumberEngineIterations } from '../index.js';
import getRandomNumber from '../utils.js';

const getGreatestCommonDivisor = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const pairs = [];
  const numberEngineIterations = setNumberEngineIterations();
  for (let attemptNumber = 0; attemptNumber < numberEngineIterations; attemptNumber += 1) {
    const pair = [];
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
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
    pair.push(numbers);
    pair.push(result);
    pairs.push(pair);
  }
  engine(pairs, rules);
};

export default getGreatestCommonDivisor;
