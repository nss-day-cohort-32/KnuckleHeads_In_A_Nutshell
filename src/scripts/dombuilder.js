import API from "./dbCalls"

function domBuilder(resource) {
    const clearBefore = document.getElementById("container_events")
    while (clearBefore.firstChild) {
        clearBefore.removeChild(clearBefore.firstChild)
    }
    API.getCall(`${resource}`)
        .then(events => {
            const lastEvent = events.length -1
            console.log("last", lastEvent)
            events.map(domPrinter)
            document.querySelector("div")
            const lastEventStyle = document.getElementById(`event_div_${lastEvent}`)
            console.log(lastEventStyle)
            lastEventStyle.style.fontWeight="900"
            lastEventStyle.style.fontSize="20px"
            lastEventStyle.style.backgroundColor="teal"
            lastEventStyle.style.paddingBottom="10px"
        })


function domPrinter(eventData, index) {

    const docFrag = document.createDocumentFragment()

    const div = document.createElement("div");
    div.setAttribute("id", `event_div_${index}`)

    const title = document.createElement("h2");
    const date = document.createElement("p");
    const summary = document.createElement("p");

    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const saveEditBtn = document.createElement("button");
    const addEventBtn = document.createElement("form");


    const inputEventTitle = document.createElement("input");
    const inputEventSummary = document.createElement("input");
    const inputEventDate = document.createElement("input");
    inputEventDate.setAttribute("type", "date");

// console.log("last", lastEvent)
    // lastEvent =events[events.length -1]


    deleteBtn.setAttribute("class", "btn_delete")
    editBtn.setAttribute("class", "btn_edit")
    saveEditBtn.setAttribute("class", "btn_save_edits")
    addEventBtn.setAttribute("class", "add-event")
    inputEventTitle.setAttribute("class", "event-title");
    inputEventTitle.setAttribute("class", "hidden");
    inputEventTitle.value = `${eventData.title}`

    inputEventSummary.setAttribute("class", "hidden");
    inputEventSummary.value = `${eventData.summary}`

    inputEventDate.setAttribute("class", "hidden");

    inputEventDate.value = `${eventData.date}`

    deleteBtn.textContent = "DELETE"
    editBtn.textContent = "EDIT"
    saveEditBtn.textContent = "SAVE EDITS"


    title.setAttribute("class", "event-title")
    title.textContent = eventData.title;

    summary.setAttribute("class", "event-summary")
    summary.textContent = eventData.summary;

    date.setAttribute("class", "event-date")
    date.textContent = eventData.date;


    div.appendChild(title)
    div.appendChild(inputEventTitle);
    div.appendChild(date)
    div.appendChild(inputEventDate);
    div.appendChild(summary)
    div.appendChild(inputEventSummary);

    div.appendChild(deleteBtn)
    div.appendChild(editBtn)
    div.appendChild(saveEditBtn)
    div.appendChild(addEventBtn);

    deleteBtn.addEventListener("click", event => {
        API.deleteCall("events", eventData.id)
            .then(() => {
                domBuilder("events")
            })
    })

    addEventBtn.addEventListener("click", event => {
        API.postCall("events", eventData.id)
    })

    editBtn.addEventListener("click", event => {
        saveEditBtn.style.display="block"
        editBtn.style.display="none"
        inputEventTitle.setAttribute("class", "unhidden")
        inputEventTitle.setAttribute("value", `${eventData.title}`);
        inputEventTitle.removeAttribute("class", "hidden");
        title.setAttribute("class", "hidden");

        inputEventSummary.setAttribute("class", "unhidden")
        inputEventSummary.setAttribute("value", `${eventData.summary}`);
        inputEventSummary.removeAttribute("class", "hidden")
        summary.setAttribute("class", "hidden")

        inputEventDate.setAttribute("class", "unhidden")
        inputEventDate.setAttribute("class", `${eventData.date}`)
        inputEventDate.removeAttribute("class", "hidden")
        date.setAttribute("class", "hidden")

    })
    saveEditBtn.style.display="none"
    editBtn.style.display="block"
    saveEditBtn.addEventListener("click", event => {
        console.log(typeof valueInputSummary);
        const editedData = {
            title: inputEventTitle.value,
            date: inputEventDate.value,
            summary: inputEventSummary.value
        }
        API.putCall("events", eventData.id, editedData)
            .then(() => {
                domBuilder("events")
            })
        console.log(inputEventSummary.value);

    })
    docFrag.appendChild(div)
    document.getElementById("container_events").appendChild(docFrag)

    // function newestEvent(date){
    //     currentDate = Date.now();
    //     if (inputEventDate < currentDate){
    //         div.appendChild(date)
    //         return true
    //     }
    // }
}
}

// function recentEventIndicator(event){
//     console.log(event)
// }

export default domBuilder