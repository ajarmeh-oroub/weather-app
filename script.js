function weather(city) {
    const apiKey = CONFIG.WEATHER_API_KEY;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            var mine = document.getElementById('weather-results');
            mine.innerHTML = '';

            var mydiv = document.createElement('div');
            mydiv.innerHTML = `
                <h1>${data.name}</h1>
                <p>Temperature: ${data.main.temp}°F</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} mph</p>`;
            mine.appendChild(mydiv);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function search() {
    const val = document.getElementById('city-input').value;
    weather(val);
}

weather('amman');
