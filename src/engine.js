import readlineSync from 'readline-sync';

const maxWins = 3;

const play = (name, gameDescription, getTask) => {
  let scores = 0;
  console.log(gameDescription);

  while (scores < maxWins) {
    const task = getTask();
    console.log(`Question: ${task.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toString() === task.answer.toString()) {
      console.log('Correct!');
      scores += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${task.answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return null;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return null;
};

export default play;
