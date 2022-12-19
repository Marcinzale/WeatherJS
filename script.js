
const input = document.querySelector('inputCity');
inputCity.addEventListener('keypress', setQuery);

function getWeather() {

    var apikey = config.API_KEY;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + inputCity.value + `&units=metric&appid=` + apikey)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            let icon = data.weather[0].icon;
            let description = data.weather[0].description;
            let temp = data.main.temp;
            let feels_like = data.main.feels_like;
            let pressure = data.main.pressure;

            const ikona = `https://openweathermap.org/img/wn/${icon}@4x.png`;

            document.getElementById('weather-icon').src = ikona;
            document.getElementById('description').innerHTML = description.toLocaleString('pl');
            document.getElementById('temp').innerHTML = temp.toFixed(0) + " ºC";
            document.getElementById('feels_like').innerHTML = feels_like.toFixed(0) + " ºC";
            document.getElementById('pressure').innerHTML = pressure.toLocaleString('pl') + " hPa";
        })
}

function setQuery(evt) {
    document.getElementById('inputCity');
    if (evt.keyCode == 13) {
        document.getElementById('city').innerHTML = inputCity.value;
        getWeather();
    }

}
function setCity() {
    document.getElementById('city');
    document.getElementById('city').innerHTML = inputCity.value;
    getWeather();
}