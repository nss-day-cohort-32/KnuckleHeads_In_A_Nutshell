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

    // API.postCall("users", userObj)


}

export default createUser
