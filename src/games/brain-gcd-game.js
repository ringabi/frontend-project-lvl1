import { getUserName, getUserAnswer } from '../index.js';

const getGreatestCommonDivisor = (number1, number2) => {
  let maxNumber;
  let minNumber;
  if (number1 > number2) {
    maxNumber = number1;
    minNumber = number2;
  } else {
    maxNumber = number2;
    minNumber = number1;
  }
  let x;
  for (x = minNumber; x > 0; x -= 1) {
    if (minNumber % x === 0 && maxNumber % x === 0) {
      return x.toString();
    }
  } return x.toString();
};

const getGCD = () => {
  const userName = getUserName();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.round(80 * Math.random());
    const number2 = Math.round(80 * Math.random());
    const gcd = getGreatestCommonDivisor(number1, number2);
    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = getUserAnswer();
    if (!(gcd === userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gcd}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else console.log('Correct!');
    if (i === 2) { console.log(`Congratulations, ${userName}!`); }
  }
};

export default getGCD;
