import { Template } from "./template.mjs";
import { Database } from "./config.mjs";

const db = new Database();
const template = new Template();
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
    let pieChart = template.pieChart(pieData);
    let lineChart = template.lineGraph(lineGraphData);
    document.getElementById("pie-chart").setAttribute('data-bss-chart', pieChart);
    document.getElementById("line-chart").setAttribute('data-bss-chart', lineChart);
}

const trendingList = () => {
    let trendingData = db.getTrendingData();
    let trendingList = document.getElementById("trending-list");
    let trendingListHTML = "";
    trendingData.forEach(trending => {
        trendingListHTML += template.trending(trending);
    });
    trendingList.innerHTML = trendingListHTML;
}

injectChart();
trendingList();

const signUp = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let user = {
        username: username,
        password: password,
        email: email
    }
    db.setUserData(user);
}

const saveImage = () => {
    let image = document.getElementById("image").value;
    let imageData = {
        image: image
    }
    db.setImages([imageData]);
}
