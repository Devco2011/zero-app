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
        .then(parsedResponse => {
            console.log("trash call", parsedResponse)

        })
}
getTrash()


// const milli = () => {
//     const n = new Date().toLocaleString()
//     return (
//         console.log("date", n)
//     )
// }
// milli()

// const currentDate = new Date("2/10/2021, 3:08:02 PM")
// const currentMonth = currentDate.getMonth()
// const currentYear = currentDate.getFullYear()

// const date = (currentMonth + 1) + "/" + currentYear

// console.log("dateTest", date)


//Nashville.gov api Key secret: 1srolkartq8fx54ua1n7glxaswtygatll7y6jxhv9j6083t1oq
// api key id: 4pcqdx76po3b4zoi8u5h9h22v
// app token: sR1VjDcjqX0htyE7IlHRT1L43
// secret token: gMcLB9jmZCB1J9HixroaXxrOhU8fm6P5dTwY