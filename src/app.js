import btnIf from './js/btnIf'
import keyApp from './js/keyApp'
import keys from './js/keys'
import pnotify from './js/pnotify'

pnotify.info({
    text: 'Гра клавіатури',
    delay: 1500,
})




const keyClick = document.querySelector("#key");
const keyRef = document.querySelectorAll(".key");
const numberRef = document.querySelector(".span");
numberRef.textContent = 0;
const btnRef = document.querySelector(".btn");
const state = {
  currentKeyIndex: 0
};
keyClick.textContent = keys[state.currentKeyIndex];


btnIf({btn: btnRef,state,numberRef,keyClick,keys});
keyApp({keyClick,keyRef,numberRef,state,keys});

// 2 завдання

import Chart from 'chart.js/auto';
const ctx = document.getElementById('myChart');

import Chart from 'chart.js/auto';

const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
           "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
           "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380,
             420, 450, 500, 550, 600, 650, 700, 750, 800, 850,
             900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 2,
      fill: false,
      tension: 0.3 // для плавної лінії
    },
  ],
};

const config = {
  type: 'line',
  data: chartData,
};

const myChart = new Chart(ctx, config);