const findTheMissingNumber = () => {
  const rules = 'What number is missing in the progression?';
  const engineData = [];
  for (let attemptNumber = 0; attemptNumber < 3; attemptNumber += 1) {
    const firstNumberProgression = Math.round(100 * Math.random());
    const stepProgression = Math.ceil(15 * Math.random());
    const indexMissedNumber = Math.round(10 * Math.random());
    const progression = [];
    for (let index = 0; index < 10; index += 1) {
      if (index === indexMissedNumber) {
        progression.push('..');
      } else progression.push(firstNumberProgression + index * stepProgression);
    }
    const result = firstNumberProgression + indexMissedNumber * stepProgression;
    engineData.push(progression.join(' '));
    engineData.push(result);
  }
  engineData.push(rules);
  return engineData;
};

export default findTheMissingNumber;
