import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const setNumberEngineIterations = () => {
  const numberEngineIterations = 3;
  return numberEngineIterations;
};

export const engine = (pairs, rules) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  const numberEngineIterations = setNumberEngineIterations();
  for (let attemptNumber = 0; attemptNumber < numberEngineIterations; attemptNumber += 1) {
    console.log(`Question: ${pairs[attemptNumber][0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!((pairs[attemptNumber][1]).toString() === userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${pairs[attemptNumber][1]}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else console.log('Correct!');
    if (attemptNumber + 1 === numberEngineIterations) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
