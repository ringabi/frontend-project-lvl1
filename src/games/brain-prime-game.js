import { engine, setNumberEngineIterations } from '../index.js';
import getRandomNumber from '../utils.js';

const isAPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const pairs = [];
  const numberEngineIterations = setNumberEngineIterations();
  for (let attemptNumber = 0; attemptNumber < numberEngineIterations; attemptNumber += 1) {
    const pair = [];
    const number = getRandomNumber();
    let result = 'yes';
    if (number < 2 || (number !== 2 && number % 2 === 0) || number % 3 === 0 || number % 5 === 0) {
      if (number % 7 === 0) {
        result = 'no';
      }
    }
    for (let i = number - 1; i > 1; i -= 1) {
      if (number % i === 0) {
        result = 'no';
      }
    }
    pair.push(number);
    pair.push(result);
    pairs.push(pair);
  } engine(pairs, rules);
};

export default isAPrime;
