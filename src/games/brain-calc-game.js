import { engine, setNumberEngineIterations } from '../index.js';
import getRandomNumber from '../utils.js';

const toCount = () => {
  const rules = 'What is the result of the expression?';
  const pairs = [];
  const numberEngineIterations = setNumberEngineIterations();
  for (let attemptNumber = 0; attemptNumber < numberEngineIterations; attemptNumber += 1) {
    const pair = [];
    const selectionOfOperand = Math.floor(Math.random() * Math.floor(3));
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    let result;
    let expression;
    if (selectionOfOperand === 0) {
      result = number1 + number2;
      expression = `${number1} + ${number2}`;
    } else if (selectionOfOperand === 1) {
      result = number1 - number2;
      expression = `${number1} - ${number2}`;
    } else {
      result = number1 * number2;
      expression = `${number1} * ${number2}`;
    }
    pair.push(expression);
    pair.push(result);
    pairs.push(pair);
  }
  engine(pairs, rules);
};

export default toCount;
