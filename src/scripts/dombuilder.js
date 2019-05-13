import API from "./dbCalls"

function domBuilder(resource) {
    const clearBefore = document.getElementById("wrapper_public")
    while (clearBefore.firstChild) {
        clearBefore.removeChild(clearBefore.firstChild)
    }
    API.getCall(`${resource}`)
        .then(events => events.map(domPrinter))
}

function domPrinter(eventData) {

    const docFrag = document.createDocumentFragment()

    const div = document.createElement("div");

    const title = document.createElement("h2");
    const date = document.createElement("h2");
    const summary = document.createElement("p");

    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const saveEditBtn = document.createElement("button");
    const addEventBtn = document.createElement("form");


    const inputEventTitle = document.createElement("input");
    const inputEventSummary = document.createElement("textarea");
    const inputEventDate = document.createElement("input");




    deleteBtn.setAttribute("class", "btn_delete")
    editBtn.setAttribute("class", "btn_edit")
    saveEditBtn.setAttribute("class", "btn_save_edits")
    addEventBtn.setAttribute("class", "add-event")

    inputEventTitle.setAttribute("class", "hidden");
    inputEventTitle.placeholder = `${eventData.title}`

    inputEventSummary.setAttribute("class", "hidden");
    inputEventSummary.placeholder = `${eventData.summary}`

    inputEventDate.setAttribute("class", "hidden");
    inputEventDate.placeholder = `${eventData.date}`

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
    div.appendChild(summary)
    div.appendChild(inputEventSummary);
    div.appendChild(date)
    div.appendChild(inputEventDate);

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
    saveEditBtn.addEventListener("click", event => {
        const valueInputTitle = inputEventTitle.value
        const valueInputSummary = inputEventSummary.value
        const valueInputDate = inputEventDate.value
        console.log(typeof valueInputSummary);
        const editedData = {
            title: valueInputTitle,
            summary: valueInputSummary,
            date: valueInputDate
        }
        API.putCall("events", eventData.id, editedData)
            .then(() => {
                domBuilder("events")
            })
        console.log(inputEventSummary.value);
    })
    docFrag.appendChild(div)
    document.getElementById("wrapper_public").appendChild(docFrag)
}

export default domBuilder


        // step 1 - get exsiting value of title step 2 - set inputeventtitles value to existing value