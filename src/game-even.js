import readlineSync from 'readline-sync';

const maxWins = 3;

const playEven = () => {
  for (let scores = 0; scores < maxWins;) {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    while (scores < maxWins) {
      const question = Math.floor(Math.random() * (99 - 1) + 1);
      const answer = question % 2 === 0 ? 'yes' : 'no';
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === answer) {
        console.log('Correct!');
        scores += 1;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return null;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  }
  return null;
};

export default playEven;
