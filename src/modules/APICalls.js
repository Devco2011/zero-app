import { FirebaseConfig } from './../components/fbAuth/FirebaseConfig';


const dataURL = FirebaseConfig.databaseURL;

export const getCategories = () => {
    return fetch(`${dataURL}/zerodb/categories.json`)
        .then(response => response.json())
}

export const getResourceCategories = (catId) => {
    console.log("get catId", catId)
    return fetch(`${dataURL}/zerodb/resourceCategories.json/?orderBy="categoryId"&equalTo=${catId}`)
        .then(response => response.json())
        .then(parsedResponse => {
            console.log("first call", parsedResponse)
            const resourceArray = Object.keys(parsedResponse).map(item => {
                return fetch(`${dataURL}/zerodb/resources.json/?orderBy="id"&equalTo=${parsedResponse[item].resourceId}`)
                    .then(response => response.json())
                    .then(parsedResponse => Object.values(Object.entries(parsedResponse))[0][1])
            })
            return resourceArray;
        })
        .then(requests => {
            let allPromises = (Promise.all(requests))
                .then(response => {
                    response.map(item => {
                        const newItem = Object.entries(item)
                        return newItem

                    })
                    console.log("all promises", response)
                    return response;
                })
            return allPromises
        })

}
// getResourceCategories(7)
 //     .then(response => {
 //         console.log("test array", response)
    // })

// export const getResources = () => {
//     return fetch(`${dataURL}/zerodb/resources.json`)
//         .then(response => response.json())
// }
// // getResourceCategories()
// // console.log("test", getResourceCategories())

// Promise.all([getCategories(), getResources()]).then((values) => {
//     console.log(values);
// })