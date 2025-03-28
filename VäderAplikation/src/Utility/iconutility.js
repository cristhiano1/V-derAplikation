const weatherIcons = {
    0: "☀️", // Clear sky
    1: "🌤️", 2: "🌤️", 3: "🌤️", // Partly cloudy
    45: "🌫️", 48: "🌫️", // Fog
    51: "🌦️", 53: "🌦️", 55: "🌦️", // Drizzle
    61: "🌧️", 63: "🌧️", 65: "🌧️", // Rain
    66: "🌨️", 67: "🌨️", // Freezing rain
    71: "❄️", 73: "❄️", 75: "❄️", // Snowfall
    80: "🌦️", 81: "🌦️", 82: "🌦️", // Showers
    95: "⛈️", 96: "⛈️", 99: "⛈️" // Thunderstorm
};

const getWeatherIcon1 = (code) => weatherIcons[code] || "❓"; // Default if code not found

export default getWeatherIcon1;