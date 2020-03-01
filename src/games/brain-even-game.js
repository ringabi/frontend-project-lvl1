import { engine, numberEngineAttempts } from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkParity = () => {
  const pairs = [];
  for (let attemptNumber = 0; attemptNumber < numberEngineAttempts; attemptNumber += 1) {
    const pair = [];
    const question = getRandomNumber();
    const answer = (question % 2 === 0) ? 'yes' : 'no';
    pair.push(question);
    pair.push(answer);
    pairs.push(pair);
  }
  engine(pairs, task);
};

export default checkParity;
