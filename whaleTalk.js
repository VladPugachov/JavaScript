const input = 'Hi, Human';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let result = '';
for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e' || input[i] === 'u') {
    result += input[i].toUpperCase();
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      result += input[i].toUpperCase();
    }
  }
}
console.log(result);