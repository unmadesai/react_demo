import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'How worried I was',
      data: [12, 91, 53, 15, 20, 13, 75],
      backgroundColor: 'rgba(0, 0, 255, 0.7)',
    },
    {
      label: 'How certain I was',
      data: [25, 63, 20, 45, 11, 47, 85],
      backgroundColor: 'rgba(0, 0, 255, 0.7)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const GroupedBar = () => (
  <>
    <div className='header'>
      <h1 className='title'>How worried I was vs How certain I was</h1>
    </div>
    <Bar data={data} height={1250} width={2500} options={options} />
  </>
);

export default GroupedBar;