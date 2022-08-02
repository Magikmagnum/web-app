import React from 'react'
import { Radar } from "react-chartjs-2"
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

function RadarChart({ data }) {

    const options = {
        responsive: true,
        plugins: {
            legend: false
        },
        scales: {

        }
    }

    return (
        <Radar data={data} options={options} />
    )
}

export default RadarChart