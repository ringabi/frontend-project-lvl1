import { runEngine, attemptsCount } from '../index.js';
import getRandomInt from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const gameData = [];
  for (let currentAttempt = 0; currentAttempt < attemptsCount; currentAttempt += 1) {
    const question = getRandomInt(0, 100);
    const answer = isPrime(question) ? 'yes' : 'no';
    gameData.push([question.toString(), answer]);
  }
  runEngine(gameData, task);
};
