document.addEventListener('DOMContentLoaded', function() {
    const cityForm = document.querySelector('#city');
    const cityWeatherDiv = document.querySelector('#cityWeather');

document.querySelector('#city').addEventListener('submit', async (event) => {
    event.preventDefault();

    const cityName = document.querySelector('#cityName').value;
    const apiKey = "a4404a31f94fd665fc303596b4c50d4f";
    const apiURL= `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt_br`
    
    const results = await fetch(apiURL);
    const json = await results.json();

    if(json.cod === 200){
        showInfo({
            city: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            description: json.weather[0].description,
            tempIcon: json.weather[0].icon,
            windSpeed: json.wind.speed,
            humidity: json.main.humidity,
        })
        cityWeatherDiv.style.display = 'block';
    } else {
        showAlert(`
        Não foi possível localizar...
        `)
    }

    function showInfo(json){
        document.querySelector("#cityWeather").classList.add('show');
        document.querySelector('#title').innerHTML = `${json.city}, ${json.country}`;

        document.querySelector('#tempValue').innerHTML = `${json.temp.toFixed(1).toString().replace('.', ',')} C°`;
        document.querySelector('#tempDescription').innerHTML = `${json.description}`;
        document.querySelector('#tempIcon').setAttribute('src', `https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
        document.querySelector('#humidity').innerHTML = `<i class="fa-solid fa-droplet"></i>${json.humidity}%`;
        document.querySelector('#wind').innerHTML = `<i class="fa-solid fa-wind"></i> ${json.windSpeed.toFixed(1)}km/h`;
    }
    function showAlert(msg) {
        document.querySelector('#alert').innerHTML = msg;
    }
})
})
