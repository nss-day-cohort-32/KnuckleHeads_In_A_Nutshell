import API from "./dbCalls"

function addNews() {
    const newsTitle = document.getElementById("news_title")
    const newsSynopsis = document.getElementById("news_synopsis")
    const newsUrl = document.getElementById("news_url")
    const stampDate = Date();
    const newsTime = (stampDate);
    console.log(newsTime)
    const newsObj = {
        title: newsTitle.value,
        synopsis: newsSynopsis.value,
        url: newsUrl.value,
        time: newsTime

    }
    console.log("newsObj", newsObj);
    API.postCall("news", newsObj)
    document.location.reload()
}

export default addNews;