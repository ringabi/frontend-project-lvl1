import { getUserName, getUserAnswer } from '../index.js';

const toCount = () => {
  const userName = getUserName();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const whatIsOperand = Math.floor(Math.random() * Math.floor(3));
    const number1 = Math.round(100 * Math.random());
    const number2 = Math.round(100 * Math.random());
    let result;
    let expression;
    if (whatIsOperand === 0) {
      result = (number1 + number2).toString();
      expression = `${number1} + ${number2}`;
    } else if (whatIsOperand === 1) {
      result = (number1 - number2).toString();
      expression = `${number1} - ${number2}`;
    } else {
      result = (number1 * number2).toString();
      expression = `${number1} * ${number2}`;
    }
    console.log(`Question: ${expression}`);
    const userAnswer = getUserAnswer();
    if (!(result === userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else console.log('Correct!');
    if (i === 2) { console.log(`Congratulations, ${userName}!`); }
  }
};

export default toCount;
