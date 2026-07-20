const apiKey = "dbab66564b50b464b0942a913ba78e0d";

async function getWeather(){

const city = document.getElementById("city").value;

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
try{

const response = await fetch(url);

if(!response.ok){
throw new Error("City Not Found");
}

const data = await response.json();

document.getElementById("cityName").innerHTML =
data.name;

document.getElementById("temp").innerHTML =
"Temperature : " + data.main.temp + " °C";

document.getElementById("humidity").innerHTML =
"Humidity : " + data.main.humidity + "%";

document.getElementById("wind").innerHTML =
"Wind Speed : " + data.wind.speed + " m/s";

document.getElementById("condition").innerHTML =
"Condition : " + data.weather[0].main;

document.getElementById("error").innerHTML = "";

}

catch(error){

document.getElementById("error").innerHTML =
error.message;

document.getElementById("cityName").innerHTML="";
document.getElementById("temp").innerHTML="";
document.getElementById("humidity").innerHTML="";
document.getElementById("wind").innerHTML="";
document.getElementById("condition").innerHTML="";
}

}