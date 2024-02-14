// https://random-data-api.com/api/v2/users

console.log("Inainte de apelare API");

// fetch("https://random-data-api.com/api/v2/users?size=10").then((response) => {
//     response.json().then((users) => {
//         console.log(users);
//     });
// });

setTimeout(() => {
    fetchUsers();
}, 10000);

console.log("Dupa apelare API");

async function fetchUsers() {
    const response = await fetch("https://random-data-api.com/api/v2/users?size=10");
    console.log(response);

    const users = await response.json();

    console.log(users[2]);
    // response.json().then((users) => {
    //     console.log(users);
    // });
}
