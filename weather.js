const apiKey = "401403e08775cd1bfa3028a2ba01b350"; 

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultBox = document.getElementById("weatherResult");

  if (city === "") {
    resultBox.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const forecast = data.weather[0].description;
      const formattedForecast = forecast.charAt(0).toUpperCase() + forecast.slice(1);

      resultBox.innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡️ Temperature: ${temp} °C</p>
        <p>💧 Humidity: ${humidity}%</p>
        <p>🌥️ Forecast: ${formattedForecast}</p>
      `;
    } else {
      resultBox.innerHTML = "City not found. Please try again.";
    }
  } catch (error) {
    resultBox.innerHTML = "Error fetching weather data.";
  }
}
