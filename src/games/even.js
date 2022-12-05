import _ from 'lodash';
import play from '../engine.js';
import getName from '../cli.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTask = () => {
  const task = {};
  task.question = _.random(1, 100);
  task.answer = task.question % 2 === 0 ? 'yes' : 'no';
  return task;
};

const playEven = () => {
  play(getName(), gameDescription, getTask);
  return null;
};

export default playEven;
