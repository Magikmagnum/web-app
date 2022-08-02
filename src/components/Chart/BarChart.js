import React from 'react'
import { Bar } from "react-chartjs-2"
import { Chart as Chart } from "chart.js/auto"

function BarChart({ data }) {

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
                    stepSize: 1,
                    callback: (value) => (value) + ' m'
                },
                grid: {
                    //display: false,
                    borderWidth: 0,
                    //borderDash: false
                }
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
        },
        tooltips: {
            mode: 'label'
        },
    }

    return (
        <Bar data={data} options={options} />
    )
}

export default BarChart