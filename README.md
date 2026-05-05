# 🌤️ Weather Checker

A clean, responsive weather app that fetches real-time weather data for any city worldwide using the OpenWeatherMap API.

![Weather Checker Preview](image1170x530cropped.jpg)

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Displays real-time temperature, humidity, and wind speed
- 🎨 Glassmorphism UI with blurred backdrop and smooth hover effects
- 📱 Fully responsive — works on mobile, tablet, and desktop
- 🔐 API key loaded from config — not hardcoded in source

---

## 🛠️ Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap_API-EB6E4B?style=flat&logo=cloud&logoColor=white)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ajarmeh-oroub/weather-app.git
cd weather-app
```

### 2. Get a free API key

Register at [openweathermap.org](https://openweathermap.org/api) and copy your API key.

### 3. Configure your API key

Create a `config.js` file in the root directory:

```javascript
const CONFIG = {
    WEATHER_API_KEY: 'your_api_key_here'
};
```

> ⚠️ Never commit your real API key. `config.js` is listed in `.gitignore`.

### 4. Open the app

Simply open `index.html` in your browser — no build step or server required.

---

## 📁 Project Structure

```
weather-app/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive layout
├── script.js           # Weather fetch logic and DOM manipulation
├── config.js           # API key config (not committed — see .env.example)
├── .env.example        # Template showing required config keys
├── .gitignore          # Excludes config.js and sensitive files
└── weather-bg.jpg      # Background image
```

---

## 🔌 API Reference

This project uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current).

**Endpoint:**
```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&units=imperial&appid={API_KEY}
```

**Response fields used:**
| Field | Description |
|---|---|
| `data.name` | City name |
| `data.main.temp` | Temperature in °F |
| `data.main.humidity` | Humidity percentage |
| `data.wind.speed` | Wind speed in mph |

---

## 📸 Screenshots

| Search | Results |
|---|---|
| Enter any city name in the search bar | Real-time weather data displayed instantly |

---

## 🔧 Possible Improvements

- [ ] Add weather icons based on conditions (sunny, cloudy, rainy)
- [ ] Toggle between °F and °C
- [ ] Show 5-day forecast
- [ ] Add geolocation to auto-detect user's city
- [ ] Add loading spinner while fetching data

---

## 👩‍💻 Author

**Oroub Ajarmeh** — Full-Stack Software Engineer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Oroub_Ajarmeh-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/oroub-ajarmeh-86493a233)
[![GitHub](https://img.shields.io/badge/GitHub-ajarmeh--oroub-181717?style=flat&logo=github&logoColor=white)](https://github.com/ajarmeh-oroub)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
