const convertToDogYears = (myAge) => {
    let earlyYears = 2; //First 2 dog years counting as 10.5 
    earlyYears *= 10.5;
    let laterYears = myAge -2;//Other dog years counting as 4
    laterYears *= 4;
    let myAgeInDogYears = earlyYears + laterYears;
    return `I am ${myAge} years old in human years which is 
    ${myAgeInDogYears} years old in dog years.`;   
}
console.log(convertToDogYears(40)); // enter your age