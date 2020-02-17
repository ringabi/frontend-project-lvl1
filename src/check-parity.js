
import {getUserAnswer, getUserName} from './index.js';

export const checkParity = () => {
  const userName = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(1000 * Math.random());
    console.log(`Question: ${number}`);
    const userAnswer = getUserAnswer();
    let num;
    if (number % 2 === 0)
      num = 'yes';
    else num = 'no';
    if (!(num === userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${num}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else console.log('Correct!');
      if (i === 2)
        console.log(`Congratulations, ${userName}!`);
  };
};
