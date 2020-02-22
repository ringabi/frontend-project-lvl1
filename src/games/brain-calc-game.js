const toCount = () => {
  const rules = 'What is the result of the expression?';
  const whatIsOperand = Math.floor(Math.random() * Math.floor(3));
  const number1 = Math.round(100 * Math.random());
  const number2 = Math.round(100 * Math.random());
  let result;
  let expression;
  if (whatIsOperand === 0) {
    result = number1 + number2;
    expression = `${number1} + ${number2}`;
  } else if (whatIsOperand === 1) {
    result = number1 - number2;
    expression = `${number1} - ${number2}`;
  } else {
    result = number1 * number2;
    expression = `${number1} * ${number2}`;
  }
  const subpair = [expression, result];
  const pair = [subpair, rules];
  return pair;
};

export default toCount;
