import { runEngine, attemptsCount } from '../index.js';
import getRandomInt from '../utils.js';

const task = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

export default () => {
  const gameData = [];
  for (let currentAttempt = 0; currentAttempt < attemptsCount; currentAttempt += 1) {
    const operatorIndex = getRandomInt(0, operators.length - 1);
    const number1 = getRandomInt(0, 100);
    const number2 = getRandomInt(0, 100);
    const operator = operators[operatorIndex];
    const answer = calculate(number1, number2, operator);
    const question = `${number1} ${operator} ${number2}`;
    gameData.push([question, answer.toString()]);
  }
  runEngine(gameData, task);
};
