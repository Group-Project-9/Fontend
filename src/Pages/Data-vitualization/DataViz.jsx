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
import { useSelector } from 'react-redux';


// When registering plugins, use the ChartJS instance, not 'ChartJS' itself.
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Legend, Tooltip);

const DataVizOverAll = ({ day, information }) => {

  const { currentUser } = useSelector((state) => state.user); 

  // const daysOfWeek = Object.keys(day);
  const dataOfdays = Object.values(day);
  
  const daysOfWeek = day;
  const record = information;
  
  const data = {
    labels: daysOfWeek,
    datasets: [
      {
        label: 'Number of Exercise (Hr / Day)',
        data: record,
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBackgroundColor: 'aqua', // Corrected from 'pointBorderColor'
        fill: true,
        tension: .0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Corrected 'true' instead of true.
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

export default DataVizOverAll;
