import React from 'react'
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from "chart.js"

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function LineChart({ data }) {

    const options = {
        responsive: true,
        plugins: {
            legend: false
        },
        scales: {
            x: {
                //display: false,
                min: 0,
                max: 20,

                ticks: {
                    stepSize: 5,
                    callback: (value) => (value) + ' m'
                },
                grid: {
                    borderWidth: 0,
                    display: false,
                    //borderDash: false
                },
            },
            y: {
                display: false,
                min: 0,
                max: 800,
                ticks: {
                    stepSize: 400,
                    callback: (value) => (value / 10) + ' kg'
                },
                grid: {
                    display: false,
                    borderDash: [10]
                }

            },
        }
    }

    return (
        <Line data={data} options={options} />
    )
}

export default LineChart