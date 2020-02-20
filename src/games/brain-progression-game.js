import { getUserName, getUserAnswer } from '../index.js';

const getProgression = (firstNumber, stepProgression, indexOfTheMissedNumber) => {
  let progression;
  if (indexOfTheMissedNumber === 0) {
    progression = '..';
  } else progression = firstNumber;
  for (let index = 1; index < 10; index += 1) {
    if (index === indexOfTheMissedNumber) {
      progression += ` ${'..'}`;
    } else progression += ` ${firstNumber + index * stepProgression}`;
  } return progression;
};

const findTheMissingNumber = () => {
  const userName = getUserName();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const firstNumberProgression = Math.round(100 * Math.random());
    const stepProgression = Math.ceil(15 * Math.random());
    const indexMissedNumber = Math.round(10 * Math.random());
    const progression = getProgression(firstNumberProgression, stepProgression, indexMissedNumber);
    console.log(`Question: ${progression}`);
    const userAnswer = getUserAnswer();
    const missingNumber = (firstNumberProgression + stepProgression * indexMissedNumber).toString();
    if (!(missingNumber === userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${missingNumber}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default findTheMissingNumber;
