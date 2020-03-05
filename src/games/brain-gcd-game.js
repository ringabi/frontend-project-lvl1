import { engine, attemptsCount } from '../index.js';
import getRandomIntInclusive from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  let answer;
  if (number1 * number2 === 0) {
    return Math.abs(number1 - number2);
  }
  const maxNumber = Math.max(number1, number2);
  const minNumber = Math.min(number1, number2);
  for (answer = minNumber; answer > 0; answer -= 1) {
    if (minNumber % answer === 0 && maxNumber % answer === 0) {
      return answer;
    }
  } return answer;
};

export default () => {
  const gameData = [];
  for (let currentAttempt = 0; currentAttempt < attemptsCount; currentAttempt += 1) {
    const number1 = getRandomIntInclusive(0, 100);
    const number2 = getRandomIntInclusive(0, 100);
    const answer = getGcd(number1, number2);
    const question = `${number1}  ${number2}`;
    gameData.push([question, answer.toString()]);
  }
  engine(gameData, task);
};
