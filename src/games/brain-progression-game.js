import { engine, numberEngineAttempts } from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const getProgressionForQuestion = (firstNumber, stepProgression, indexMissedNumber) => {
  const question = [];
  const progressionLength = 10;
  for (let index = 0; index < progressionLength; index += 1) {
    if (index === indexMissedNumber) {
      question.push('..');
    } else question.push(firstNumber + index * stepProgression);
  } return question;
};

export default () => {
  const pairs = [];
  for (let attemptNumber = 0; attemptNumber < numberEngineAttempts; attemptNumber += 1) {
    const pair = [];
    const firstNumber = getRandomNumber();
    const stepProgression = Math.ceil(15 * Math.random());
    const indexMissedNumber = Math.floor(10 * Math.random());
    const question = getProgressionForQuestion(firstNumber, stepProgression, indexMissedNumber);
    const answer = firstNumber + indexMissedNumber * stepProgression;
    pair.push(question.join(' '));
    pair.push(answer);
    pairs.push(pair);
  }
  engine(pairs, task);
};
