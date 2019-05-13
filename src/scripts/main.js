import API from "./dbCalls"
import domBuilder from "./dombuilder"
import createUser from "./signUp";
import signIn from "./signIn"
import checkforUser from "./welcomeHandler";

// ============== Check for User First =========================
checkforUser()
domBuilder("events")
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

document.querySelector("#btn_signout").addEventListener("click", event => {
    sessionStorage.removeItem("user")
    document.getElementById("overlay_welcome").style.display = "block"
})

// =============== register new user btn ==========================
document.getElementById("btn_register").addEventListener("click", event => {
    event.preventDefault();
    createUser();
})
// ============= signIn =====================================================

document.getElementById("btn_sign_in").addEventListener("click", event => {
    event.preventDefault();
    signIn();
})
