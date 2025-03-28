const GetWeather = async (location = "Stockholm") => {
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1&language=en&format=json`;
    
    try {
        const geoResponse = await fetch(geoUrl);
        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            console.error(`Location not found: ${location}`);
            return null;
        }

        const { latitude, longitude } = geoData.results[0];
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_min,temperature_2m_max,weathercode&timezone=Europe/Stockholm&forecast_days=7`;

        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        console.log("Weather Data:", weatherData);

        if (!weatherData || !weatherData.daily) {
            console.error(`No weather data found for: ${location}`);
            return null;
        }

        return weatherData;
    } catch (error) {
        console.error("Error fetching weather data: ", error);
        return null;
    }
};

export default GetWeather;