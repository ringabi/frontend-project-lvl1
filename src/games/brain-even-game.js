
const checkParity = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const engineData = [];
  for (let attemptNumber = 0; attemptNumber < 3; attemptNumber += 1) {
    const number = Math.round(1000 * Math.random());
    let result = 'no';
    if (number % 2 === 0) {
      result = 'yes';
    }
    engineData.push(number);
    engineData.push(result);
  }
  engineData.push(rules);
  return engineData;
};

export default checkParity;
