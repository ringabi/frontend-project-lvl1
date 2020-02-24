import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const engine = (engineData, userName) => {
  console.log(engineData[6]);
  for (let attemptNumber = 0; attemptNumber < 3; attemptNumber += 1) {
    console.log(`Question: ${engineData[2 * attemptNumber]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!((engineData[1 + 2 * attemptNumber]).toString() === userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${engineData[1 + 2 * attemptNumber]}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else console.log('Correct!');
    if (attemptNumber === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
