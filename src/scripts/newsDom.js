import API from "./dbCalls"



const newsDom = () => {
    API.getCall("news").then(result => {
        result.forEach(myNews => {
            console.log("News", myNews);
            const frag = document.createDocumentFragment()
            const newsDiv = document.createElement("div");
            const newsTitle = document.createElement("h3");
            newsTitle.textContent = myNews.title;
            newsDiv.appendChild(newsTitle);
            const newSynopisi = document.createElement("p");
            newSynopisi.textContent = myNews.synopsis
            newsDiv.appendChild(newSynopisi);
            const newsUrlName = document.createElement("a");
            newsUrlName.textContent = myNews.url
            newsDiv.appendChild(newsUrlName)
            newsUrlName.href = myNews.url
            const newsTime = document.createElement("h3");
            newsTime.textContent = myNews.time;
            newsDiv.appendChild(newsTime);
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete"
            newsDiv.appendChild(deleteButton)
            deleteButton.addEventListener("click", event => {
                console.log(event);
                deleteMe()
            })
            frag.appendChild(newsDiv);
            document.getElementById("container_news").appendChild(frag);
            function deleteMe() {
                API.deleteCall("news", myNews.id)
                    .then(document.location.reload(true));
            }
        })
    });
}



export default newsDom