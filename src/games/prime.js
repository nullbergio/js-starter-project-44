import _ from 'lodash';
import play from '../engine.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getTask = () => {
  const isPrime = (number) => {
    if (number <= 1 || number % 2 === 0 || number % 3 === 0) {
      return false;
    } if (number === 2 || number === 3) {
      return true;
    }
    for (let i = 5; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  const number = _.random(1, 99);

  return {
    question: number,
    answer: isPrime(number) ? 'yes' : 'no',
  };
};

const playPrime = () => {
  play(gameDescription, getTask);
  return null;
};

export default playPrime;
