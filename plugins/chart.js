// import Vue from 'vue'
// import { Bar } from 'vue-chartjs'

// Vue.defineComponent('BarChart',{
//     extends: Bar,
//     props:{
//         data:{
//             type:Object,
//             required:true
//         },
//         options:{
//             type:Object,
//             required:false,
//             default:()=>({
//                 responsive:true,
//                 maintainAspectRatio:false
//             })
//         }
//     }
// })

import { defineNuxtPlugin } from '#app'
import { Chart, registerables } from 'chart.js'

export default defineNuxtPlugin((nuxtApp) => {
  Chart.register(...registerables)
  nuxtApp.provide('chart', Chart)
})