/*The program checks the grade level*/
const gradeCheck = (grade) => {
    if (grade >= 0 && grade < 50) {
        return `Grade ${grade} is F level`;
    } else if (grade >= 50 && grade < 60) {
        return `Grade ${grade} is E level`;
    } else if (grade >= 60 && grade < 70) {
        return `Grade ${grade} is D level`;
    } else if (grade >= 70 && grade < 80) {
        return `Grade ${grade} is C level`;
    } else if (grade >= 80 && grade < 90) {
        return `Grade ${grade} is B level`;
    } else if (grade >= 90 && grade <= 100) {
        return `Grade ${grade} is A level`;
    } else {
        return `Grade ${grade} not equale in any level`;
    }
}
console.log(gradeCheck(67)); // enter your grade 