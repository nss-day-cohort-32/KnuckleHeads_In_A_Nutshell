
const src = "http://localhost:8088"
const API = {
    getCall: (resource) => {
        return fetch(`${src}/${resource}`)
            .then(result => result.json())

    },
    deleteCall: (resource, id) => {
        return fetch(`${src}/${resource}/${id}`, {
            method: "DELETE"
        })
            .then(

            )
    },
    postCall: (resource, data) => {
        return fetch(`${src}/${resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

    },
    putCall: (resource, id, data) => {
        return fetch(`${src}/${resource}/${id}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    },
}

export default API


    // reloadPublic: (resource, f) => {
    //     this.getCall(`${resource}`)
    //         .then(parsedResult => {
    //             console.log(parsedResult)
    //             // parsedResult.map(f)
    //         })
    // }

// function loadChickenData() {
//     // get chicken data from API
//     API.getChickens().then(parsedChickens => {
//       // clear output div
//       outputDiv.innerHTML = "";
//       parsedChickens.forEach(parsedChicken => {
//         // add chickens to DOM
//         buildChickenDOM(parsedChicken);
//       });
//     });
//   }