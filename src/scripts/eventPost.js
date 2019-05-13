import API from "./dbCalls"

function addEvent() {
    const postEventTitle = document.getElementById("event_title")
    const postEventDate = document.getElementById("event_date")
    const postEventSummary = document.getElementById("event_summary")
    console.log(postEventTitle)
    console.log(postEventDate)
    console.log(postEventSummary)
    const postedData = {
        title: postEventTitle.value,
        date: postEventDate.value,
        summary: postEventSummary.value
    }
    API.postCall("events", postedData)
}

export default addEvent;