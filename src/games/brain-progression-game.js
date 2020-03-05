import { engine, attemptsCount } from '../index.js';
import getRandomIntInclusive from '../utils.js';

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
  const gameData = [];
  for (let currentAttempt = 0; currentAttempt < attemptsCount; currentAttempt += 1) {
    const firstNumber = getRandomIntInclusive(0, 100);
    const stepProgression = getRandomIntInclusive(1, 20);
    const indexMissedNumber = getRandomIntInclusive(0, 9);
    const question = getProgressionForQuestion(firstNumber, stepProgression, indexMissedNumber);
    const answer = firstNumber + indexMissedNumber * stepProgression;
    gameData.push([question.join(' '), answer.toString()]);
  }
  engine(gameData, task);
};
