import React from 'react';
import './WeatherBox.css';
import getWeatherIcon from '../WeatherIcon/WeatherIcon';

const WeatherBox = ({ weatherData }) => {
    const weatherCode = currentWeather.weathercode;
    return (
        <div className="weather-box">
            <h2>{weatherData.location}</h2>
            <p>Temperature: {weatherData.temperature} °C</p>
            <p>Condition: {weatherData.condition}</p>
            <p>Wind Speed: {weatherData.windSpeed} m/s</p>
            <p>Condition: {getWeatherIcon(weatherCode)}</p>
            
        </div>
    );
};

export default WeatherBox;