const findTheMissingNumber = () => {
  const rules = 'What number is missing in the progression?';
  const firstNumberProgression = Math.round(100 * Math.random());
  const stepProgression = Math.ceil(15 * Math.random());
  const indexMissedNumber = Math.round(10 * Math.random());
  let progression;
  if (indexMissedNumber === 0) {
    progression = '..';
  } else progression = firstNumberProgression;
  for (let index = 1; index < 10; index += 1) {
    if (index === indexMissedNumber) {
      progression += ` ${'..'}`;
    } else progression += ` ${firstNumberProgression + index * stepProgression}`;
  }
  const result = firstNumberProgression + indexMissedNumber * stepProgression;
  const subpair = [progression, result];
  const pair = [subpair, rules];
  return pair;
};

export default findTheMissingNumber;
