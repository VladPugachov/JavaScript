const numberOne = Math.floor(Math.random() * 10);
const numberTwo = Math.floor(Math.random() * 10);
const numberThree = Math.floor(Math.random() * 10);
console.log(numberOne, numberTwo, numberThree);
if (numberOne === numberTwo && numberOne === numberThree) {
    console.log(`${numberOne} = ${numberTwo} and = ${numberThree}`);
} else if (numberOne === numberTwo) {
    if (numberOne > numberThree) {
        console.log(`${numberOne} = ${numberTwo} > ${numberThree}`);
    } else {
        console.log(`${numberThree} > ${numberOne} = ${numberTwo}`);
    }
} else if (numberOne === numberThree) {
    if (numberOne > numberTwo) {
        console.log(`${numberOne} = ${numberThree} > ${numberTwo}`);
    } else {
        console.log(`${numberTwo} > ${numberOne} = ${numberThree}`);
    }
} else if (numberOne > numberTwo && numberOne > numberThree) {
    if (numberTwo > numberThree) {
        console.log(`${numberOne} > ${numberTwo} > ${numberThree}`);
    } else {
        console.log(`${numberOne} > ${numberThree} > ${numberTwo}`);
    }
} else if (numberTwo > numberOne && numberTwo > numberThree) {
    if (numberOne > numberThree) {
        console.log(`${numberTwo} > ${numberOne} > ${numberThree}`);
    } else {
        console.log(`${numberTwo} > ${numberThree} > ${numberOne}`);
    }
} else {
    if (numberOne > numberTwo) {
        console.log(`${numberThree} > ${numberOne} > ${numberTwo}`);
    } else {
        console.log(`${numberThree} > ${numberTwo} > ${numberOne}`);
    }
}