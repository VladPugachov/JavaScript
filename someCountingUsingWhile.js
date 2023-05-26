const countNumbers = (maxNumbers) => {
    let sum = 0;
    let i = 0;
    do {
        sum += i; 
        i++;
    } while (i <= maxNumbers)
    return `Entered ${maxNumbers} numbers and Sum of numbers is: ${sum}`;
}
console.log(countNumbers(9));