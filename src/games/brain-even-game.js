import { engine, setNumberEngineIterations } from '../index.js';
import getRandomNumber from '../utils.js';

const checkParity = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const pairs = [];
  const numberEngineIterations = setNumberEngineIterations();
  for (let attemptNumber = 0; attemptNumber < numberEngineIterations; attemptNumber += 1) {
    const pair = [];
    const number = getRandomNumber();
    let result = 'no';
    if (number % 2 === 0) {
      result = 'yes';
    }
    pair.push(number);
    pair.push(result);
    pairs.push(pair);
  }
  engine(pairs, rules);
};

export default checkParity;
