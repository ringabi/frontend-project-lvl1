import { runEngine, attemptsCount } from '../index.js';
import getRandomInt from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export default () => {
  const gameData = [];
  for (let currentAttempt = 0; currentAttempt < attemptsCount; currentAttempt += 1) {
    const question = getRandomInt(0, 1000);
    const answer = isEven(question) ? 'yes' : 'no';
    gameData.push([question.toString(), answer]);
  }
  runEngine(gameData, task);
};
