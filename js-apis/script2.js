async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    console.log(posts);
}

async function addPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            name: "test",
            description: "test",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    console.log(data);
}

async function changePost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
        method: "PUT",
        body: JSON.stringify({
            name: "test",
            description: "test",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    console.log(data);
}

async function updatePost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/4", {
        method: "PATCH",
        body: JSON.stringify({
            name: "test",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    console.log(data);
}

async function deletePost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/4", { method: "DELETE" });
    const data = await response.json();

    console.log(data);
}

getPosts();
addPost();
changePost();
updatePost();
deletePost();

async function getCountryData(country) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await response.json();

    console.log(data);
}

getCountryData("Germany");
