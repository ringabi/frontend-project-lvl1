import { runEngine, attemptsCount } from '../index.js';
import getRandomInt from '../utils.js';

const task = 'What number is missing in the progression?';
const progressionLength = 10;

const getQuestion = (firstNumber, stepProgression, indexMissedNumber) => {
  const progressionQuestion = [];
  for (let index = 0; index < progressionLength; index += 1) {
    if (index === indexMissedNumber) {
      progressionQuestion.push('..');
    } else {
      progressionQuestion.push(firstNumber + index * stepProgression);
    }
  }
  return progressionQuestion.join(' ');
};

export default () => {
  const gameData = [];
  for (let currentAttempt = 0; currentAttempt < attemptsCount; currentAttempt += 1) {
    const firstNumber = getRandomInt(0, 100);
    const stepProgression = getRandomInt(1, 20);
    const indexMissedNumber = getRandomInt(0, progressionLength - 1);
    const question = getQuestion(firstNumber, stepProgression, indexMissedNumber);
    const answer = firstNumber + indexMissedNumber * stepProgression;
    gameData.push([question, answer.toString()]);
  }
  runEngine(gameData, task);
};
