import { engine, attemptsCount } from '../index.js';
import getRandomInt from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export default () => {
  const gameDate = [];
  for (let currentAttempt = 0; currentAttempt < attemptsCount; currentAttempt += 1) {
    const number = getRandomInt(0, 1000);
    const answer = isEven(number) ? 'yes' : 'no';
    gameDate.push([number.toString(), answer]);
  }
  engine(gameDate, task);
};
