import firebase from 'firebase/app'
import { FirebaseConfig } from './../components/fbAuth/FirebaseConfig';


const dataURL = FirebaseConfig.databaseURL;

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

export const getHowToCategories = (catId) => {
    console.log("get catId", catId)
    return fetch(`${dataURL}/zerodb/howToCategories.json/?orderBy="categoryId"&equalTo=${catId}`)
        .then(response => response.json())
        .then(parsedResponse => {
            console.log("first call", parsedResponse)
            const resourceArray = Object.keys(parsedResponse).map(item => {
                return fetch(`${dataURL}/zerodb/howTos.json/?orderBy="id"&equalTo=${parsedResponse[item].howToId}`)
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

export const getFarmersMarkets = () => {
    return fetch(`${dataURL}/zerodb/farmersMarkets.json/`)
        .then(response => response.json())
}

export const getRecyclingCenters = () => {
    return fetch(`https://data.nashville.gov/resource/j7nq-7ct5.json`)
        .then(response => response.json())

}

export const getTrash = () => {
    return fetch(`${dataURL}/zerodb/trash.json/?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
        .then(response => response.json())

}


export const addTrash = (trashObj) => {
    return fetch(`${dataURL}/zerodb/trash.json`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(trashObj)
    }).then(response => response.json())
}