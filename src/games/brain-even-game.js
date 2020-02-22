
const checkParity = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const number = Math.round(1000 * Math.random());
  let result = 'no';
  if (number % 2 === 0) {
    result = 'yes';
  }
  const subpair = [number, result];
  const pair = [subpair, rules];
  return pair;
};

export default checkParity;
