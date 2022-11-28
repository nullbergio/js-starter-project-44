import readlineSync from 'readline-sync';

const maxWins = 3;

const play = (gameDescription, getTask) => {
  for (let scores = 0; scores < maxWins;) {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
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
        console.log(`Let's try again, ${userName}!`);
        return null;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  }
  return null;
};

export default play;
