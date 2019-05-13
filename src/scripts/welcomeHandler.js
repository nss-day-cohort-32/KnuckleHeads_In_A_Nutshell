function checkforUser() {
    const user = JSON.parse(sessionStorage.getItem("user"))
    const presentUser = sessionStorage.getItem("user")

    // console.log(typeof presentUser)
    if (typeof presentUser === "string") {
        document.getElementById("overlay_welcome").style.display = "none"
        // console.log(user)
    } else if (typeof presentUser === "undefined") {
        document.getElementById("overlay_welcome").style.display = "block"
    }
}

export default checkforUser;