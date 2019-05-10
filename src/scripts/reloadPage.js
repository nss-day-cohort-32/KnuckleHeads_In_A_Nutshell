import API from "./dbCalls";
import newsDom from "./newsDom";

const reloadPage = () => {
    API.getCall("news").then(newsPage => {
        newsPage.forEach(result => {
            document.querySelector("#news")
            
            newsDom(result)
        });

    });
}

export default reloadPage