import API from "./dbCalls";

function getMessage() {
    API.getCallWithUser("messages")
        .then(messages => {
            console.log(messages)
            messages.map(printMessage)
        })

}

function printMessage(message) {
    // console.log(message)
    const frag = document.createDocumentFragment();
    const messageHolder = document.createElement("div");

    const sessionUser = sessionStorage.getItem("user");
    const user = JSON.parse(sessionUser);
    // console.log(user)
    const spanUser = document.createElement("span");
    spanUser.textContent = message.user.username
    spanUser.setAttribute("class", "username")
    messageHolder.appendChild(spanUser);

    const messageP = document.createElement("span");
    messageP.textContent = message.message;
    messageHolder.appendChild(messageP);

    frag.appendChild(messageHolder)
    document.getElementById("container_message_received").appendChild(frag);
}

export default getMessage