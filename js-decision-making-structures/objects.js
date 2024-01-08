let diploma = {
    number: 1,
    name: "Andrei",
    grade: 6,
    school: "IT School",
    status: "Passed",
    courses: [{ name: "HTML", grade: 7.8 }, "CSS", "JavaScript"],
    issued: {
        issuedBy: "IT School",
        issuedDate: "",
    },
};

diploma.number = 2;

console.log(diploma.number);

console.log(diploma);

console.log(diploma["school"]);

console.log(diploma.courses);

console.log(diploma.issued.issuedDate);

// const diplomaNumber = 1;
// const diplomaName = 'Andrei';
// const diplomaGrade = 6;
// const diplomaSchool = 'IT School';
// const diplomaStatus = "Passed";

// console.log(diplomaNumber)

for (let key in diploma) {
    if (diploma[key] === "Passed") {
        console.log(key);
    }
}
