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
          },
          callback: function (value,index) {
            if (0 == value) { 
              return "0"
            }else if (10000000 >= value) { 
              return "10M"
            }else if (20000000 >= value){ 
              return "20M"
            }else if (30000000 >= value) {
              return "30M"
            }else if (40000000 >= value) {
              return "40M"
            }else if (50000000 >= value) {
              return "50M"
            }else if (60000000 >= value) {
              return "60M"
            }else if (70000000 >= value) {
              return "70M"
            }else if (80000000 >= value) {
              return "80M"
            }else if (90000000 >= value) {
              return "90M"
            }else {
              return value
            } 
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