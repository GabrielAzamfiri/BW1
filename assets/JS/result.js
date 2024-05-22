
const result= localStorage.getItem("risultato");

console.log("File results");
console.log(result);

const chartData = {
  labels: ["Correct", "Wrong"],
  data: [result * 10, 100 - result * 10],
  //data: [60, 40],
};

const myChart = document.querySelector(".my-chart");

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "Percentuale",
        data: chartData.data,
      },
    ],
  },
  options: {
    borderWidth: 10,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});


const graphData= document.getElementsByClassName("donut-segment")
console.log(graphData)
graphData[0].style.strokeDasharray=chartData.data[0]+" "+chartData.data[1] //`chartData[0].datachartData[1].data`