import play from '../engine.js';

export const gameDescription = 'What is the result of the expression?';

const getTask = () => {
  const calculate = (num1, num2, operation) => {
    let result;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        console.log('Unknown operation!');
    }
    return result.toString();
  };

  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const number1 = Math.floor(Math.random() * 99 + 1);
  const number2 = Math.floor(Math.random() * 99 + 1);

  return {
    question: `${number1} ${operation} ${number2}`,
    answer: calculate(number1, number2, operation),
  };
};

const playCalc = () => {
  play(gameDescription, getTask);
  return null;
};

export default playCalc;
