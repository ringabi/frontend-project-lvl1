import { engine, setNumberEngineIterations } from '../index.js';
import getRandomNumber from '../utils.js';

const findTheMissingNumber = () => {
  const rules = 'What number is missing in the progression?';
  const pairs = [];
  const numberEngineIterations = setNumberEngineIterations();
  for (let attemptNumber = 0; attemptNumber < numberEngineIterations; attemptNumber += 1) {
    const pair = [];
    const firstNumberProgression = getRandomNumber();
    const stepProgression = Math.ceil(15 * Math.random());
    const indexMissedNumber = Math.floor(10 * Math.random());
    const progression = [];
    const progressionLength = 10;
    for (let index = 0; index < progressionLength; index += 1) {
      if (index === indexMissedNumber) {
        progression.push('..');
      } else progression.push(firstNumberProgression + index * stepProgression);
    }
    const result = firstNumberProgression + indexMissedNumber * stepProgression;
    pair.push(progression.join(' '));
    pair.push(result);
    pairs.push(pair);
  }
  engine(pairs, rules);
};

export default findTheMissingNumber;
