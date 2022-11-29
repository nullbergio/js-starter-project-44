import _ from 'lodash';
import play from '../engine.js';

export const gameDescription = 'What number is missing in the progression?';

const getTask = () => {
  const getProgression = (size, start, step) => {
    const result = [];
    for (let i = 0; i < size; i += 1) {
      result.push(start + i * step);
    }
    return result;
  };

  const progressionSize = 10;
  const progressionStart = _.random(1, 10);
  const progressionStep = _.random(2, 5);
  const progression = getProgression(progressionSize, progressionStart, progressionStep);
  const secretKey = _.random(0, progressionSize - 1);
  const secretValue = progression[secretKey];
  progression[secretKey] = '..';

  return {
    question: progression.join(' '),
    answer: secretValue,
  };
};

const playProgression = () => {
  play(gameDescription, getTask);
  return null;
};

export default playProgression;
