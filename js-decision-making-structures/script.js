const studentGrade = 6;

if (studentGrade >= 5) {
    console.log("Admis");
    const diploma = {
        number: 1,
        name: "Andrei",
        grade: studentGrade,
        school: "IT School",
        status: "Passed",
    };

    console.log("Ai primit diploma cu numarul ", diploma.number);
    console.log("Diploma! Studentul cu numele " + diploma.name + " a primit nota " + diploma.grade);
} else {
    console.log("Respins");
}

if (studentGrade === 10) {
    console.log("Felicitari");
} else if (studentGrade === 9) {
    console.log("Bravo");
} else if (studentGrade >= 5) {
    console.log("Admis");
} else {
    console.log("Respins");
}

switch (studentGrade) {
    case 10:
        console.log("Ai luat 10! Esti admis");
        break;
    case 9:
        console.log("Ai luat 9! Esti admis");
        break;
    case 8:
        console.log("Ai luat 8! Esti admis");
        break;
    case 7:
        console.log("Ai luat 7! Esti admis");
        break;
    case 6:
        console.log("Ai luat 6! Esti admis");
        break;
    case 5:
        console.log("Ai luat 5! Esti admis");
        break;
    default:
        console.log("Esti respins");
}

if (studentGrade === 10) {
    console.log("Ai luat 10! Esti admis");
} else if (studentGrade === 9) {
    console.log("Ai luat 9! Esti admis");
} else if (studentGrade === 8) {
    console.log("Ai luat 8! Esti admis");
} else if (studentGrade === 7) {
    console.log("Ai luat 7! Esti admis");
} else if (studentGrade === 6) {
    console.log("Ai luat 6! Esti admis");
} else if (studentGrade === 5) {
    console.log("Ai luat 5! Esti admis");
} else {
    console.log("Esti respins");
}

const studentPassStatus = studentGrade >= 5 ? "Admis" : "Respins";

console.log(studentPassStatus);

if (studentGrade) {
    console.log("Studentul are nota");
} else {
    console.log("Studentul nu are nota");
}

const studentName = "Mihai";

if (studentName) {
    console.log(studentName);
} else {
    console.log("John Doe");
}

const student = {
    name: "Mihai",
    grade: 8,
    school: "",
};

if (student.school) {
    //set name background to green
}
