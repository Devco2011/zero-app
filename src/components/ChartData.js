// I need a button that adds a bag of trash with current user id & current month

// Can the button have a function inside of it that converts current date to current month before sending to the db?

// Or send timestamp to db to be converted later?

// To get data: Get all trash with current user Id, then map or filter to get array for specific month, then get length
// of that array

// That would mean map or filter for each month

// Example: january = `${januaryArray.length}`

// Then, in BarChart.js, create a new array that consists of all the months' totals 

// Then the data property would  be:  data: newArray
const today = () => {
    const n = Date.now()
    return (
        console.log("date", n)
    )
}
today()