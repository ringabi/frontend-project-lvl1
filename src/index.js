import readlineSync from 'readline-sync';

export const attemptsCount = 3;

export const engine = (gameData, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  for (const [question, answer] of gameData) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!(answer === userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${userName}!`);
};
