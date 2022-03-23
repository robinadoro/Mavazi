import { Template } from "./template.mjs";

let pieData = {
    "T-shirts": 10,
    "Shirts": 5,
    "Pants": 15,
}
let lineGraphData = {
    "Mon": 10,
    "Tue": 5,
    "Wed": 15,
    "Thu": 20,
    "Fri": 25,
    "Sat": 30,
    "Sun": 35,
}

const injectChart = async () => {
    let pieChart = new Template().pieChart(pieData);
    let lineChart = new Template().lineGraph(lineGraphData); 
    document.getElementById("pie-chart").setAttribute('data-bss-chart', pieChart);
    document.getElementById("line-chart").setAttribute('data-bss-chart', lineChart);
}

injectChart();