const toCount = () => {
  const rules = 'What is the result of the expression?';
  const engineData = [];
  for (let attemptNumber = 0; attemptNumber < 3; attemptNumber += 1) {
    const selectionOfOperand = Math.floor(Math.random() * Math.floor(3));
    const number1 = Math.round(100 * Math.random());
    const number2 = Math.round(100 * Math.random());
    let result;
    let expression;
    if (selectionOfOperand === 0) {
      result = number1 + number2;
      expression = `${number1} + ${number2}`;
    } else if (selectionOfOperand === 1) {
      result = number1 - number2;
      expression = `${number1} - ${number2}`;
    } else {
      result = number1 * number2;
      expression = `${number1} * ${number2}`;
    }
    engineData.push(expression);
    engineData.push(result);
  }
  engineData.push(rules);
  return engineData;
};

export default toCount;
