
const result= localStorage.getItem("risultato");

console.log("File results");
console.log(result);

const chartData = {
  labels: ["Correct", "Wrong"],
  data: [result * 10, 100 - result * 10],
  //data: [60, 40],
};

/*const myChart = document.querySelector(".my-chart");

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
});*/


const graphData= document.getElementsByClassName("donut-segment")
/*console.log(graphData)*/
graphData[0].style.strokeDasharray=chartData.data[1]+" "+chartData.data[0] //`chartData[0].datachartData[1].data`

const correctPercentage=document.getElementsByClassName("resultLabelPercentage")[0];
const correctFraction=document.getElementsByClassName("resultLabelFraction")[0];
correctPercentage.innerText=result+"0%";
correctFraction.innerText=result+"/10 questions";
console.log(correctPercentage.innerText);
console.log(correctFraction.innerText);

const wrongPercentage=document.getElementsByClassName("resultLabelPercentage")[1];
const wrongFraction=document.getElementsByClassName("resultLabelFraction")[1];
wrongPercentage.innerText=(10-result)+"0%";
wrongFraction.innerText=(10-result)+"/10 questions";
console.log(wrongPercentage.innerText);
console.log(wrongFraction.innerText);

if(result<6){
  console.log("seeees")
  const Label1=document.getElementsByClassName("chartLabel")[0]
  Label1.textContent="Oh Noo!  😞";
  const Label2=document.getElementsByClassName("chartLabel2")[0]
  Label2.textContent="You Failed the exam"
  const Label3=document.querySelectorAll(".chartLabel3 tspan")
  console.log(Label3)
  Label3[0].textContent="Consult your tutors to";
  Label3[1].textContent="understand your mistakes";
  Label3[2].textContent="and improve your grade";
  Label3[3].textContent="";
}