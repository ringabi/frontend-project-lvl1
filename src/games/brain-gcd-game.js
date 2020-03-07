import { engine, attemptsCount } from '../index.js';
import getRandomInt from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  const maxNumber = Math.max(number1, number2);
  const minNumber = Math.min(number1, number2);
  let divisor;
  for (divisor = maxNumber; divisor > 0; divisor -= 1) {
    if (minNumber % divisor === 0 && maxNumber % divisor === 0) {
      return divisor;
    }
  }
  return divisor;
};

export default () => {
  const gameData = [];
  for (let currentAttempt = 0; currentAttempt < attemptsCount; currentAttempt += 1) {
    const number1 = getRandomInt(0, 100);
    const number2 = getRandomInt(0, 100);
    const answer = getGcd(number1, number2);
    const question = `${number1}  ${number2}`;
    gameData.push([question, answer.toString()]);
  }
  engine(gameData, task);
};
