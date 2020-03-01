import readlineSync from 'readline-sync';

export const numberEngineAttempts = 3;

export const engine = (pairs, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  for (const [question, answer] of pairs) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!(answer.toString() === userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${userName}!`);
};
