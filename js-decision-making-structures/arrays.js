const students = ["Andrei", "Mihai", "Ioana"];
const studentGrades = [10, 5, 7.6, 6, 3];

console.log(students);
console.log(studentGrades);

console.log(students.length);
console.log(students[3]);
console.log(students[2]);

console.log(studentGrades[studentGrades.length - 1]);

for (let index = 0; index <= studentGrades.length - 1; index++) {
    console.log(studentGrades[index]);
}

for (let grade of studentGrades) {
    console.log(grade);
}
