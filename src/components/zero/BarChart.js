import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2'

import { getTrash } from './../../modules/APICalls'

export const BarChart = ({ getAllTrash, newTrashArray }) => {

    console.log("new trash", newTrashArray)
    const allDatesArray = newTrashArray.map((trash) => {
        return (trash.date)
    })

    const monthAndYearArray = allDatesArray.map(item => {
        const currentDate = new Date(item)


        const month = currentDate.getMonth()
        const year = currentDate.getFullYear()

        return (
            { month, year })
    })
    console.log("monthYear", monthAndYearArray)

    let thisYear = new Date().getFullYear()

    const janArray = monthAndYearArray.filter((item) => {
        return item.month === 0 && item.year === thisYear
    })

    const febArray = monthAndYearArray.filter((item) => {
        return item.month === 1 && item.year === thisYear
    })

    const marArray = monthAndYearArray.filter((item) => {
        return item.month === 2 && item.year === thisYear
    })

    const aprArray = monthAndYearArray.filter((item) => {
        return item.month === 3 && item.year === thisYear
    })

    const mayArray = monthAndYearArray.filter((item) => {
        return item.month === 4 && item.year === thisYear
    })

    const junArray = monthAndYearArray.filter((item) => {
        return item.month === 5 && item.year === thisYear
    })

    const julArray = monthAndYearArray.filter((item) => {
        return item.month === 6 && item.year === thisYear
    })

    const augArray = monthAndYearArray.filter((item) => {
        return item.month === 7 && item.year === thisYear
    })

    const septArray = monthAndYearArray.filter((item) => {
        return item.month === 8 && item.year === thisYear
    })

    const octArray = monthAndYearArray.filter((item) => {
        return item.month === 9 && item.year === thisYear
    })

    const novArray = monthAndYearArray.filter((item) => {
        return item.month === 10 && item.year === thisYear
    })

    const decArray = monthAndYearArray.filter((item) => {
        return item.month === 11 && item.year === thisYear
    })
    let jan = janArray.length
    let feb = febArray.length
    let mar = marArray.length
    let apr = aprArray.length
    let may = mayArray.length
    let jun = junArray.length
    let jul = julArray.length
    let aug = augArray.length
    let sept = septArray.length
    let oct = octArray.length
    let nov = novArray.length
    let dec = decArray.length



    return (
        <div>
            <Bar
                data={{
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'bags of trash',
                            data: [`${jan}`, `${feb}`, `${mar}`, `${apr}`, `${may}`, `${jun}`, `${jul}`, `${aug}`, `${sept}`, `${oct}`, `${nov}`, `${dec}`],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1,

                        }
                    ]
                }}
                height={300}
                width={400}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: { beginAtZero: true }
                            }
                        ]
                    }
                }}
            />
        </div>
    )
}