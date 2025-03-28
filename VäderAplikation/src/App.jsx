import React from 'react';
import './App.css';
import WeatherContainer from './containers/WeatherContainer/WeatherContainer';

const App = () => {
    return (
        <div className="App">
            <h1>Weather Application</h1>
            <WeatherContainer />
        </div>
    );
};

export default App;