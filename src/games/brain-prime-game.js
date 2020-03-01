import { engine, numberEngineAttempts } from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getAnswer = (question) => {
  let answer = 'yes';
  for (let i = question - 1; i > 1; i -= 1) {
    if (question % i === 0) {
      answer = 'no';
    }
  } return answer;
};

const isAPrime = () => {
  const pairs = [];
  for (let attemptNumber = 0; attemptNumber < numberEngineAttempts; attemptNumber += 1) {
    const pair = [];
    const question = getRandomNumber();
    const answer = getAnswer(question);
    pair.push(question);
    pair.push(answer);
    pairs.push(pair);
  } engine(pairs, task);
};

export default isAPrime;
