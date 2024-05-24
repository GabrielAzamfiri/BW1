const result = localStorage.getItem("risultato");

console.log("File results");
console.log(result);

const chartData = {
  labels: ["Correct", "Wrong"],
  data: [result * 10, 100 - result * 10],
};

const graphData = document.getElementsByClassName("donut-segment");

graphData[0].style.strokeDasharray = chartData.data[1] + " " + chartData.data[0];

const correctPercentage = document.getElementsByClassName("resultLabelPercentage")[0];
const correctFraction = document.getElementsByClassName("resultLabelFraction")[0];
correctPercentage.innerText = result + "0%";
correctFraction.innerText = result + "/10 questions";

const wrongPercentage = document.getElementsByClassName("resultLabelPercentage")[1];
const wrongFraction = document.getElementsByClassName("resultLabelFraction")[1];
wrongPercentage.innerText = 10 - result + "0%";
wrongFraction.innerText = 10 - result + "/10 questions";

if (result < 6) {
  const Label1 = document.getElementsByClassName("chartLabel")[0];
  Label1.textContent = "Oh Noo!  😞";
  const Label2 = document.getElementsByClassName("chartLabel2")[0];
  Label2.textContent = "You Failed the exam";
  const Label3 = document.querySelectorAll(".chartLabel3 tspan");

  Label3[0].textContent = "Consult your tutors to";
  Label3[1].textContent = "understand your mistakes";
  Label3[2].textContent = "and improve your grade";
  Label3[3].textContent = "";
}
const rateUsBtn = document.querySelector("button");
rateUsBtn.addEventListener("click", function () {
  window.location.href = "../../Feedback.html";
});
