import React from 'react'
import { Doughnut } from "react-chartjs-2"
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

function PieChart({ data }) {

    const options = {
        responsive: true,
        plugins: {
            legend: false
        },
        scales: {

        }
    }

    return (
        <Doughnut data={data} options={options} />
    )
}

export default PieChart