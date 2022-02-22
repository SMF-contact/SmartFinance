import React from 'react'; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


  
function TheBarChart({datasets}) { 
   
  const options = { 
    plugins: {
      title: {
        display: false,
        // text: 'Bar Chart',
      },
      legend: {
        labels: {
          color: "#fff", 
          font: {
              size: 16
          }
        }
      }, 
    },
    responsive: true, 
    scales: {
      x: {
        stacked: true, 
        ticks: {
          color: "#FFF", 
          font: {
              size: 16
          }
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'CIRCULATING SUPPLY', 
          color:"#97DAF7", 
          font: {
              size: 20,
          },
          padding:30
        },
        ticks: {
          color: "#FFF", 
          font: {
              size: 16
          }
        }
      },
      
    }, 
    animation: {
      easing: 'easeInOutQuad',
      duration: 520
    },
    elements: {
      line: {
        tension: 0.4
      }
    },
  };
   

  return <Bar options={options} data={datasets} />;
}
export default TheBarChart;