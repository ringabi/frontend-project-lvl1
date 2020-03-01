import { engine, numberEngineAttempts } from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What is the result of the expression?';

const toCount = () => {
  const pairs = [];
  for (let attemptNumber = 0; attemptNumber < numberEngineAttempts; attemptNumber += 1) {
    const pair = [];
    const selectionOfOperand = Math.floor(Math.random() * Math.floor(3));
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
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
    pair.push(question);
    pair.push(answer);
    pairs.push(pair);
  }
  engine(pairs, task);
};

export default toCount;
