import { useEffect, useState } from "react";

async function fetchWeatherData() {
    const apikey = "9f5bc8dd34db305dbd9743581c0592a2"; 
    let apitest = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apikey}`;
    const response = await fetch(apitest);
    const data = await response.json();
    return data;
}

function displayWeatherData(data) { // data in JSON format
    console.log(data);
}

function WeatherInfo() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetchWeatherData().then(data => {
            setWeatherData(data);
            displayWeatherData(data);
        });
    }, []);

    return (
        <div>
            <p>Weather Information go here :333: {weatherData ? JSON.stringify(weatherData) : "Loading..."}</p>
        </div>
    );
}

export default WeatherInfo;