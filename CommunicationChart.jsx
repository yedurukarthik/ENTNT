import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { COMMUNICATION_METHODS } from '../../utils/constants'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function CommunicationChart({ communications }) {
  const methodCounts = COMMUNICATION_METHODS.reduce((acc, method) => {
    acc[method.name] = communications.filter(comm => comm.method === method.name).length
    return acc
  }, {})

  const data = {
    labels: Object.keys(methodCounts),
    datasets: [
      {
        label: 'Communication Methods Usage',
        data: Object.values(methodCounts),
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Communication Methods Distribution',
      },
    },
  }

  return <Bar data={data} options={options} />
}