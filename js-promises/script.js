const studentGrade = 4;

const hasStudentPassed = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (studentGrade >= 5) {
            resolve({ passed: true, grade: studentGrade });
        } else {
            // reject(new Error("You failed the exam!"));
            reject("You failed the exam!");
        }
    }, 3000);
});

const result = hasStudentPassed
    .then(
        (result) => {
            console.log(result);
        }
        // (error) => {
        //     console.log(error);
        // }
    )
    .catch((error) => {
        console.log("Rejected", error);
    });

async function checkStudentResult() {
    try {
        const result = await hasStudentPassed;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

checkStudentResult();

async function getProducts() {
    fetch("https://fakestoreapi.com/products", { method: "PUT" })
        .then((response) => {
            response
                .json()
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(error);
        });
}

getProducts();
