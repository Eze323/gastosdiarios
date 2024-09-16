<template>
    <div>
      <Bar :chart-data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  export default {
    name: 'BalanceChart',
    components: {
      Bar,
    },
    props: {
      chartData: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
        },
      };
    },
  };
  </script>
  