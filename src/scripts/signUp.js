import API from "./dbCalls";

function createUser() {

    const name = document.getElementById("sign_up_username").value;
    const email = document.getElementById("sign_up_email").value;
    const password = document.getElementById("sign_up_password").value;
    const userObj = {
        username: `${name}`,
        email: `${email}`,
        password: `${password}`
    }

    API.getCall("users")
        .then(users => {
            console.log(users)
            if (users.every(checkUniqueUser) === false) {
                alert("Username already in use try another username")
            } else {
                console.log(userObj)
                API.postCall("users", userObj)
            }
        })

    function checkUniqueUser(user) {
        const testName = user.username.trim().toLowerCase();
        const uniqueName = name.trim().toLowerCase();
        return (testName !== uniqueName)

    }
}

export default createUser
