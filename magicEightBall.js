const name = ''; //Enter your name here
const userName = name || 'Stranger';
console.log(`Hello, ${userName}!`);
const question = ''; //Enter your question here
const userQuestion = question || "It's a good weather today?";
console.log(`${userName} ask: ${userQuestion}`);
const randomNumber = Math.floor(Math.random() * 8);
const eightBall = randomNumber;
switch (eightBall) {
  case 1:
    console.log('It is certain');
    break;
  case 2:
    console.log('It is decidedly so');
    break;
  case 3:
    console.log('Reply hazy try again');
    break;
  case 4:
    console.log('Cannot predict now');
    break;
  case 5:
    console.log('Do not count on it');
    break;
  case 6:
    console.log('My sources say no');
    break;
  case 7:
    console.log('Outlook not so good');
    break;
  case 8:
    console.log('Signs point to yes');
    break;
}