import React from 'react';
import './Reviews.css';
import Chart from 'react-apexcharts';

const Reviews = () => {

  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],

    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2024-01-10T00:00:00.000Z",
          "2024-01-10T01:30:00.000Z",
          "2024-01-10T02:30:00.000Z",
          "2024-01-10T03:30:00.000Z",
          "2024-01-10T04:30:00.000Z",
          "2024-01-10T05:30:00.000Z",
          "2024-01-10T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false
      },
      toolbar:{
        show: false
      }
    },
  };

  return (
    <div className='Review'>
      <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default Reviews
