const getAPI = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        if (!response.ok) {
            throw new Error("Request error: " + response.status);
        } else {
            for (dataUser of data) {
                const users = dataUser.name;
                console.log(users);
            }
        }
    } catch (err) {
        console.log("Something went wrong", err);
    }
};

getAPI();
