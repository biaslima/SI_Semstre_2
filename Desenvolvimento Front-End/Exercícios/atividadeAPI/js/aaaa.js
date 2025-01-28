const apiKey = "a4404a31f94fd665fc303596b4c50d4f";
const apiCountryURL = "https://flagsapi.com/BE/flat/64.png";

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")

//Funções
const getWeatherData = async(city) => {

    const apiWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=$(city)"
}

const showWeatherData = (city) => {
    console.log("city");


}
//Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    
    const city = cityInput.value;

    showWeatherData("city");
})