import {
  Chart as ChartJS,
  CategoryScale, // X-Axis
  LinearScale, // Y-Axis
  LineElement,
  PointElement,
  Legend,
  Tooltip,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

// When registering plugins, use the ChartJS instance, not 'ChartJS' itself.
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Legend, Tooltip);

const DataViz = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Number of Exercise (Hr / Day)',
        data: [3, 4, 6, 2, 1, 8, 9],
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBackgroundColor: 'aqua', // Corrected from 'pointBorderColor'
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true, // Corrected 'true' instead of true.
      },
    },
    scales: {
      y: {
        beginAtZero: true, // You can add other Y-axis configurations here if needed.
      },
    },
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default DataViz;
