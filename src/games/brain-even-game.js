import { engine, attemptsCount } from '../index.js';
import getRandomIntInclusive from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } return false;
};

export default () => {
  const gameDate = [];
  for (let currentAttempt = 0; currentAttempt < attemptsCount; currentAttempt += 1) {
    const question = getRandomIntInclusive(0, 1000);
    const answer = isEven(question) ? 'yes' : 'no';
    gameDate.push([question, answer]);
  }
  engine(gameDate, task);
};
