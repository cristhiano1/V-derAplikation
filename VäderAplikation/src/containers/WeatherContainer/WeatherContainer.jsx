import React, { useEffect, useState } from 'react';
import WeatherCard from '../../Component/WeatherCard/WeatherCard';
import GetWeather from '../../services/WeatherService';
import getWeatherIcon from '../../Utility/iconutility';
import './WeatherContainer.css';

const WeatherContainer = () => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [location, setLocation] = useState('Stockholm');
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchWeather = async (location) => {
            const weatherData = await GetWeather(location);
            if (weatherData) {
                setWeather({
                    ...weatherData.current_weather,
                    location,
                    icon: getWeatherIcon(weatherData.current_weather.weathercode)
                });
                setForecast(weatherData.daily);
            }
        };

        fetchWeather(location);
    }, [location]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        const newLocation = e.target.elements.location.value;
        setLocation(newLocation);
    };

    const addFavorite = () => {
        if (!favorites.includes(location)) {
            const newFavorites = [...favorites, location];
            setFavorites(newFavorites);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        }
    };

    const handleFavoriteClick = (favorite) => {
        setLocation(favorite);
    };

    if (!weather || !forecast.time) {
        return <div>Loading...</div>;
    }

    const date = new Date();

    return (
        <div className="weather-container">
            <form onSubmit={handleSearch}>
                <input type="text" name="location" placeholder="Enter location" />
                <button type="submit">Search</button>
                <button type="button" onClick={addFavorite}>Add to Favorites</button>
            </form>
            <div className="favorites">
                {favorites.map((favorite, index) => (
                    <button key={index} onClick={() => handleFavoriteClick(favorite)}>
                        {favorite}
                    </button>
                ))}
            </div>
            <WeatherCard
                location={location}
                temperature={weather.temperature}
                date={date.toLocaleDateString()}
                time={date.toLocaleTimeString()}
                icon={getWeatherIcon(weather.weathercode)}
            />
            <div className="forecast">
                {forecast.time.slice(0, 5).map((time, index) => (
                    <WeatherCard
                        key={index}
                        location={location}
                        temperature={`Min: ${forecast.temperature_2m_min[index]}°C, Max: ${forecast.temperature_2m_max[index]}°C`}
                        date={new Date(time).toLocaleDateString()}
                        time=""
                        icon={getWeatherIcon(forecast.weathercode[index])}
                    />
                ))}
            </div>
        </div>
    );
};

export default WeatherContainer;