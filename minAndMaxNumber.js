const numbersToCompare = 10; //enter number 
let number = Math.floor(Math.random() * 100);
let maxNumber = number;
let minNumber = number;
console.log(`Number is: ${number}, max number is: ${maxNumber}, min number is: ${minNumber}`);
let i = 2;
while (i <= numbersToCompare) {
    number = Math.floor(Math.random() * 100);
    if (number > maxNumber) {
        maxNumber = number;
    } else if (number < minNumber) {
        minNumber = number;
    } 
    console.log(`Number is: ${number}, max number is: ${maxNumber}, min number is: ${minNumber}`);
    i++;
}