import play from '../engine.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTask = () => {
  const task = { question: Math.floor(Math.random() * 99 + 1) };
  task.answer = task.question % 2 === 0 ? 'yes' : 'no';
  return task;
};

const playEven = () => {
  play(gameDescription, getTask);
  return null;
};

export default playEven;
