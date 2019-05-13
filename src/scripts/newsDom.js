import API from "./dbCalls"
const newsDom = () => {
    API.getCall("news").then(result => {
        result.forEach(myNews => {
            const newsDiv = document.createElement("div");
            const root = document.getElementById("news");
            root.appendChild(newsDiv);
            const newsTitle = document.createElement("h3");
            const newSynopisi = document.createElement("p");
            const newsUrlName = document.createElement("a");
            const deleteButton = document.createElement("button");
            newsUrlName.setAttribute("href", "url")
            newsDiv.appendChild(newsTitle);
            newsDiv.appendChild(newSynopisi);
            newsDiv.appendChild(newsUrlName);
            newsDiv.appendChild(deleteButton);
            const title = document.createTextNode(`${myNews.title}`);
            const synopsis = document.createTextNode(`${myNews.synopsis}`);
            const urlName = document.createTextNode(`${myNews.url}`);
            newsTitle.appendChild(title);
            newSynopisi.appendChild(synopsis);
            newsUrlName.appendChild(urlName);
            // console.log("news", news);
        })
    })
    deleteButton.textContent = "DELETE"
    deleteButton.setAttribute("class", "btn_delete");
    deleteButton.addEventListener("click", event => {
        API.deleteCall("news", myNews.id)
        .then(newsDom(root.removeChild(newsDiv)))
        .then(document.location.reload(true));
});
}
export default newsDom
console.log("newsDom", newsDom);
