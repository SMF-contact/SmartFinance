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
          color: "rgba(255, 255, 255, .5)", 
        }
      },
    },
    responsive: true, 
    scales: {
      x: {
        stacked: true, 
        ticks: {
          color: "#FFF",  
        }
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          color: "#FFF",  
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