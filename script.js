
function weather(city){

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&lat=44.34&lon=10.99&appid=7eabf17185beb048c35f470eeac890e6`)
    .then(response => response.json())
    .then(data => {
 
        var mine = document.getElementById('weather-results');
        mine.innerHTML='';

  
        var mydiv = document.createElement('div');

        mydiv.innerHTML = `<h1>${data.name}</h1>
                           <p>Temperature: ${data.main.temp}°F</p>
                           <p>Humidity: ${data.main.humidity}%</p>
                           <p>Wind Speed: ${data.wind.speed} mph</p>`;

        mine.appendChild(mydiv);
    })
    .catch(error => {
        console.error('Error fetching the weather data:', error);
    });}
    
   


function search() {
    var val = document.getElementById('city-input').value; 
    weather(val); 
}


weather('amman')