const circleLineLenght = (radius) => {
    const circleLine = 2 * Math.PI * radius;
    return `If radius is ${radius}, cicle line lenght is ${circleLine}`
}
console.log(circleLineLenght(3)); // enter radius

const areaOfACircle = (radius) => {
    const area = Math.PI * Math.pow(radius, 2);
    return `If radius is ${radius}, area of a circle is ${area}`
}
console.log(areaOfACircle(3)); // enter radius

const surfaceAreaOfTheSphere = (radius) => {
    const area = 4 * Math.PI * Math.pow(radius, 2);
    return `If radius is ${radius}, surface area of the sphere is ${area}`
}
console.log(surfaceAreaOfTheSphere(7)); // enter radius

const theVolumeOfTheSphere = (radius) => {
    const volume = (4 * Math.PI * Math.pow(radius, 3)) / 3;
    return `If radius is ${radius}, the volume of the sphere is ${volume}`
}
console.log(theVolumeOfTheSphere(7)); // enter radius