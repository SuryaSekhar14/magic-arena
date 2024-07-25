import { getInputStr, getInputInt, welcomeMessage } from './utils.js';

async function main() {
  let str;
  let num1, num2, num3;

  welcomeMessage();

  str = await getInputStr('Enter a string: ');
  num1 = await getInputInt('Enter the first integer: ');
  num2 = await getInputInt('Enter the second integer: ');
  num3 = await getInputInt('Enter the third integer: ');

  console.log('You entered:', str, num1, num2, num3);
}

main();