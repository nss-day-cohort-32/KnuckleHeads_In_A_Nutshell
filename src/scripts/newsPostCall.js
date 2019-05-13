import API from "./dbCalls"

function addNews(){
    const newsTitle = document.getElementById("news_title")
    const newsSynopsis = document.getElementById("news_synopsis")
    const newsUrl = document.getElementById("news_url")
    console.log("newsTitle", newsTitle);
    const newsObj = {
        title: newsTitle.value,
        synopsis: newsSynopsis.value,
        url: newsUrl.value
    }
    console.log("newsObj", newsObj);
    API.postCall("news", newsObj)
    document.location.reload()
}

export default addNews;