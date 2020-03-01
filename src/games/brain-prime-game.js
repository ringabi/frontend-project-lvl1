import { engine, numberEngineAttempts } from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isAPrime = () => {
  const pairs = [];
  for (let attemptNumber = 0; attemptNumber < numberEngineAttempts; attemptNumber += 1) {
    const pair = [];
    const question = getRandomNumber();
    let answer = 'yes';
    if (question < 2 || (question !== 2 && question % 2 === 0) || question % 3 === 0) {
      if (question % 5 === 0 || question % 7 === 0) {
        answer = 'no';
      }
    }
    for (let i = question - 1; i > 1; i -= 1) {
      if (question % i === 0) {
        answer = 'no';
      }
    }
    pair.push(question);
    pair.push(answer);
    pairs.push(pair);
  } engine(pairs, task);
};

export default isAPrime;
