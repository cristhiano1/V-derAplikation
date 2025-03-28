import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm, WiFog } from "react-icons/wi";

const getWeatherIcon = (weatherCode) => {
    const weatherMapping = {
        0: <WiDaySunny />, // Clear sky
        1: <WiDaySunny />, // Mostly clear
        2: <WiCloud />, // Partly cloudy
        3: <WiCloud />, // Overcast
        45: <WiFog />, // Fog
        48: <WiFog />, // Depositing rime fog
        51: <WiRain />, // Drizzle: Light
        53: <WiRain />, // Drizzle: Moderate
        55: <WiRain />, // Drizzle: Dense intensity
        61: <WiRain />, // Rain: Slight
        63: <WiRain />, // Rain: Moderate
        65: <WiRain />, // Rain: Heavy intensity
        71: <WiSnow />, // Snow fall: Slight
        73: <WiSnow />, // Snow fall: Moderate
        75: <WiSnow />, // Snow fall: Heavy intensity
        95: <WiThunderstorm />, // Thunderstorm: Slight or moderate
        96: <WiThunderstorm />, // Thunderstorm with slight hail
        99: <WiThunderstorm />, // Thunderstorm with heavy hail
    };

    return weatherMapping[weatherCode] || <WiDaySunny />; // Default to sunny
};

export default getWeatherIcon;
