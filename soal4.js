fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Request error: " + response.status);
        }
        return response.json();
    })
    .then((users) => {
        const names = users.map((user) => user.name);
        const nameString = names.join(" ");
        console.log(nameString);
    })
    .catch((error) => {
        console.log("Error: " + error.message);
    });
