import { engine, numberEngineAttempts } from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = () => {
  const pairs = [];
  for (let attemptNumber = 0; attemptNumber < numberEngineAttempts; attemptNumber += 1) {
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
    let answer;
    for (answer = minNumber; answer > 0; answer -= 1) {
      if (minNumber % answer === 0 && maxNumber % answer === 0) {
        break;
      }
    }
    const question = [` ${number1}  ${number2}`];
    pair.push(question);
    pair.push(answer);
    pairs.push(pair);
  }
  engine(pairs, task);
};

export default getGreatestCommonDivisor;
