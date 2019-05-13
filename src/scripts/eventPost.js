import API from "./dbCalls"

function addEvent() {
const postEventTitle = document.getElementById("event_title").value
const postEventDate = document.getElementById("event_date").value
const postEventSummary = document.getElementById("event_summary").value
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

export default addEvent ;