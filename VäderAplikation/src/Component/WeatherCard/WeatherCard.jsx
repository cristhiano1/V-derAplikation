import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ location, temperature, date, time, icon }) => {
    return (
        <div className="weather-card">
            <div className="weather-info">
                <h2>{location}</h2>
                <p>{temperature}°C</p>
                <p>{date}</p>
                <p>{time}</p>
                {icon && <div className="weather-icon">{icon}</div>}
            </div>
        </div>
    );
};

export default WeatherCard;
