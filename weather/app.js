const apiKey = "16770878a278dd6e1f8863b614518326";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const form = document.querySelector("form")
const searchBox = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
const icon = document.querySelector(".weather-icon")
let loaderDiv = document.querySelector(".error")

const checkWeather = async (event) => {
    try {
        event.preventDefault();
        var city = searchBox.value
        loaderDiv.style.display = "flex";

        const response = await fetch(apiUrl + city + `&appid=${apiKey}`)


        var data = await response.json();


        console.log(data);


        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = data.main.temp + "°C"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"


        if (data.weather[0].main == "Clouds") {
            icon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            icon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            icon.src = "images/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            icon.src = "images/mist.png"
        }
        else if (data.weather[0].main == "Rain") {
            icon.src = "images/rain.png"
        }



        document.querySelector(".weather").style.display = "block"





    }
    catch (error) {

        swal("ERROR", "Invalid city name ", "error");


        // document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"

    }
    finally {
        searchBox.value = ""
        loaderDiv.style.display = "none";
    }
}

form.addEventListener("submit", checkWeather)

