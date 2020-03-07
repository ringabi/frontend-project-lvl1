import { engine, attemptsCount } from '../index.js';
import getRandomInt from '../utils.js';

const task = 'What is the result of the expression?';

const toCount = (number1, number2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    default:
      result = number1 * number2;
  }
  return result;
};

export default () => {
  const gameData = [];
  for (let currentAttempt = 0; currentAttempt < attemptsCount; currentAttempt += 1) {
    const selectionOperand = getRandomInt(0, 2);
    const number1 = getRandomInt(0, 100);
    const number2 = getRandomInt(0, 100);
    const operators = ['+', '-', '*'];
    const operator = operators[selectionOperand];
    const answer = toCount(number1, number2, operator);
    const question = `${number1} ${operator} ${number2}`;
    gameData.push([question, answer.toString()]);
  }
  engine(gameData, task);
};
