import _ from 'lodash';
import play from '../engine.js';
import getName from '../cli.js';

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
  const operation = operations[_.random(0, operations.length - 1)];
  const number1 = _.random(1, 100);
  const number2 = _.random(1, 100);

  return {
    question: `${number1} ${operation} ${number2}`,
    answer: calculate(number1, number2, operation),
  };
};

const playCalc = () => {
  play(getName(), gameDescription, getTask);
  return null;
};

export default playCalc;
