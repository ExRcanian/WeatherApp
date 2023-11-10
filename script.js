let apiKey = '6fb2919d262d44949a154327230911';

async function getWeather(city) {
    const weatherCall = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`);
    const weatherData = await weatherCall.json();

    document.querySelector('#todayTemp').innerHTML = weatherData.current.temp_f + ' F';
    document.querySelector('#todayImg').src = weatherData.current.condition.icon;
    document.querySelector('#todayFeels').innerHTML = weatherData.current.condition.text;
}

async function getForecast(city) {
    const foreCall = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`);
    const foreData = await foreCall.json();

    document.querySelector('#tomorrowTemp').innerHTML = foreData.forecast.forecastday[0].day.avgtemp_f + ' F';
    document.querySelector('#tomorrowFeels').innerHTML = foreData.forecast.forecastday[0].day.condition.text;
    document.querySelector('#tomorrowImg').src = foreData.forecast.forecastday[0].day.condition.icon;

    document.querySelector('#TwoDayDate').innerHTML = foreData.forecast.forecastday[1].date.slice(5);
    document.querySelector('#TwoDayTemp').innerHTML = foreData.forecast.forecastday[1].day.avgtemp_f + ' F';
    document.querySelector('#TwoDayFeels').innerHTML = foreData.forecast.forecastday[1].day.condition.text;
    document.querySelector('#TwoDayImg').src = foreData.forecast.forecastday[1].day.condition.icon;

    document.querySelector('#ThreeDayDate').innerHTML = foreData.forecast.forecastday[2].date.slice(5);
    document.querySelector('#ThreeDayTemp').innerHTML = foreData.forecast.forecastday[2].day.avgtemp_f + ' F';
    document.querySelector('#ThreeDayFeels').innerHTML = foreData.forecast.forecastday[2].day.condition.text;
    document.querySelector('#ThreeDayImg').src = foreData.forecast.forecastday[2].day.condition.icon;

    /* console.log(foreData.location.name) */
}

async function search() {
    let loc = document.querySelector('#location').value;
    getWeather(loc);
    getForecast(loc);
}

getWeather('Boston');
getForecast('Boston');


