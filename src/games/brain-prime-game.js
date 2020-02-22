const isAPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const number = Math.round(100 * Math.random());
  let result = 'yes';
  if (number < 2 || number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0) {
    result = 'no';
  }
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      result = 'no';
    }
  }
  const subpair = [number, result];
  const pair = [subpair, rules];
  return pair;
};

export default isAPrime;
