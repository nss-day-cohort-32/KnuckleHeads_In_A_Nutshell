import API from "./dbCalls"
import createUser from "./signUp";

// =============== register new user btn ==========================
document.getElementById("btn_register").addEventListener("click", event => {
    event.preventDefault()
    createUser()
})

//============== overlay btn open/close ===========================
document.querySelector("#btn_close_welcome").addEventListener("click", event => {
    document.getElementById("overlay_welcome").style.display = "none"
})
document.querySelector("#btn_close_signup").addEventListener("click", event => {
    document.getElementById("overlay_signup").style.display = "none"
})
document.querySelector("#btn_close_signin").addEventListener("click", event => {
    document.getElementById("overlay_signin").style.display = "none"
})

document.querySelector("#btn_open_signup_1").addEventListener("click", event => {
    document.getElementById("overlay_signup").style.display = "block"
    document.getElementById("overlay_welcome").style.display = "none"

})
document.querySelector("#btn_open_signin_1").addEventListener("click", event => {
    document.getElementById("overlay_signin").style.display = "block"
    document.getElementById("overlay_welcome").style.display = "none"

})

document.querySelector("#btn_open_signup_2").addEventListener("click", event => {
    document.getElementById("overlay_signup").style.display = "block"
})

document.querySelector("#btn_open_signin_2").addEventListener("click", event => {
    document.getElementById("overlay_signin").style.display = "block"
})

API.getCall("users")
    .then(users => {
        console.log(users)
        users.map(checkUniqueUser)
    })
function checkUniqueUser(user, username) {
    console.log("user", user)
    if (user.username === username) {
        alert("KnuckleHead already exsist try a new username")
    } else {

    }
}




