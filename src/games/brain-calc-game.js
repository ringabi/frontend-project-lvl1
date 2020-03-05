import { engine, attemptsCount } from '../index.js';
import getRandomIntInclusive from '../utils.js';

const task = 'What is the result of the expression?';

export default () => {
  const gameData = [];
  for (let currentAttempt = 0; currentAttempt < attemptsCount; currentAttempt += 1) {
    const selectionOfOperand = getRandomIntInclusive(0, 2);
    const number1 = getRandomIntInclusive(0, 100);
    const number2 = getRandomIntInclusive(0, 100);
    let question;
    let answer;
    if (selectionOfOperand === 0) {
      answer = number1 + number2;
      question = `${number1} + ${number2}`;
    } else if (selectionOfOperand === 1) {
      answer = number1 - number2;
      question = `${number1} - ${number2}`;
    } else {
      answer = number1 * number2;
      question = `${number1} * ${number2}`;
    }
    gameData.push([question, answer.toString()]);
  }
  engine(gameData, task);
};
