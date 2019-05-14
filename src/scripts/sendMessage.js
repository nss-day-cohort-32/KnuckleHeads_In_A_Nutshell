import API from "./dbCalls";

function sendMessage() {
    const inputMessage = document.getElementById("input_message").value
    // console.log(inputMessage)
    const sessionUser = sessionStorage.getItem("user")
    const user = JSON.parse(sessionUser)
    console.log("myUser", user)
    const messageObj = {
        message: inputMessage,
        userId: user.id
    }
    console.log(messageObj)
    API.postCall("messages", messageObj)
}

export default sendMessage