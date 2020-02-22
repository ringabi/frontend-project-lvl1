import readlineSync from 'readline-sync';
import isAPrime from './games/brain-prime-game.js';

const engine = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let pair = isAPrime();
  console.log(pair[1]);
  for (let i = 0; i < 3; i += 1) {
    pair = isAPrime();
    const subpair = pair[0];
    console.log(`Question: ${subpair[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!((subpair[1]).toString() === userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${subpair[1]}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default engine;
