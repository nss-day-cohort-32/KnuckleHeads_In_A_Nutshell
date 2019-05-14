import API from "./dbCalls"



const newsDom = () => {
    API.getCall("news").then(result => {
        result.forEach(myNews => {
            console.log("News", myNews);
            const frag = document.createDocumentFragment()
            const newsDiv = document.createElement("div");
            newsDiv.setAttribute("class", "n-div")
            // const root = document.getElementById("news-container");
            // root.appendChild(newsDiv);
            const newsTitle = document.createElement("h2");
            newsTitle.setAttribute("class", "news_title")
            newsTitle.textContent = myNews.title;
            newsDiv.appendChild(newsTitle);
            const newSynopisi = document.createElement("h3");
            newSynopisi.setAttribute("class", "news_syn")
            newSynopisi.textContent = myNews.synopsis
            newsDiv.appendChild(newSynopisi);
            const newsUrlName = document.createElement("a");
            newsUrlName.setAttribute("class", "news_url")
            newsUrlName.textContent = myNews.url
            newsDiv.appendChild(newsUrlName)
            newsUrlName.setAttribute("href", "url")
            const newsTime = document.createElement("h3");
            newsTime.setAttribute("class", "news_time")
            newsTime.textContent = myNews.time;
            newsDiv.appendChild(newsTime);
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete"
            newsDiv.appendChild(deleteButton)
            deleteButton.addEventListener("click", event => {
                console.log(event);
                deleteMe()
            })
            // newsDiv.appendChild(newSynopisi);
            // newsDiv.appendChild(newsUrlName);
            // newsDiv.appendChild(deleteButton);
            // const title = document.createTextNode(`${myNews.title}`);
            // const synopsis = document.createTextNode(`${myNews.synopsis}`);
            // const urlName = document.createTextNode(`${myNews.url}`);
            // newsTitle.appendChild(title);
            // newSynopisi.appendChild(synopsis);
            // newsUrlName.appendChild(urlName);
            // console.log("news", news);
            frag.appendChild(newsDiv);
            document.getElementById("container_news").appendChild(frag);
            function deleteMe() {
                API.deleteCall("news", myNews.id)
                    .then(document.location.reload(true));
            }
        })
    });
}
//  deleteMe: () => {
//         deleteButton.textContent = "DELETE"
//         deleteButton.setAttribute("class", "btn_delete");
//         deleteButton.addEventListener("click", myNews => {
//             API.deleteCall("news", myNews.id)
//                 .then(newsDom(root.removeChild(newsDiv)))
//         })


export default newsDom