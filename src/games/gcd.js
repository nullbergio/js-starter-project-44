import _ from 'lodash';
import play from '../engine.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

const getTask = () => {
  const getDivisors = (number) => {
    const divisors = [];
    for (let i = 1; i <= number; i += 1) {
      if (_.isInteger(number / i)) {
        divisors.push(i);
      }
    }
    return divisors;
  };

  const number1 = Math.floor(Math.random() * 99 + 1);
  const number2 = Math.floor(Math.random() * 99 + 1);
  const divisors = _.intersection(getDivisors(number1), getDivisors(number2));

  return {
    question: `${number1} ${number2}`,
    answer: _.last(divisors),
  };
};

const playGcd = () => {
  play(gameDescription, getTask);
  return null;
};

export default playGcd;
