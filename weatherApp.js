let apiKey = "7108f94c1d312720dcf7625675b6f7e2"; //the key needs to be taken from the web
//it usually needs few hours before working
//and when i did the message was "Invalid API key"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//into apiUrl, the url needs to be added which is done
//there are still few things to remove from the URL
//once all will be working

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src ="image/clouds.png";
    }else if(data.weather[0].main == "Clear") {
        weatherIcon.src ="image/clear.png";
    }else if(data.weather[0].main == "Rain") {
        weatherIcon.src ="image/rain.png";
    }else if(data.weather[0].main == "Mist") {
        weatherIcon.src ="image/mist.png";
    }
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
});

checkWeather();