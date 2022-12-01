// window.onload = function () {
//     //getWeather();
//     //onBtnClick();

// }

const input = document.querySelector('inputCity');
inputCity.addEventListener('keypress', setQuery);

function getWeather() {

    var apikey = config.API_KEY;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + inputCity.value + `&units=metric&appid=` + apikey)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            let temp = data.main.temp;
            let feels_like = data.main.feels_like;
            let pressure = data.main.pressure;

            document.getElementById('temp').innerHTML = temp.toLocaleString('pl').slice(0, 2) + " ºC";
            document.getElementById('feels_like').innerHTML = feels_like.toLocaleString('pl').slice(0, 2) + " ºC";
            document.getElementById('pressure').innerHTML = pressure.toLocaleString('pl') + " hPa";
        })

    // setTimeout(getWeather, 3600000) // update every 1 hour
}

function setQuery(evt) {
    document.getElementById('inputCity');
    if (evt.keyCode == 13) {
        document.getElementById('city').innerHTML = inputCity.value;
        // console.log(inputCity.value);
        getWeather();
    }

}
function setCity() {
    document.getElementById("city");
    document.getElementById('city').innerHTML = inputCity.value;
    // console.log(inputCity.value);
    getWeather();
}