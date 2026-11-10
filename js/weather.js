import { renderForecast } from "./forecast.js";
import { renderCharts } from "./charts.js";
import { renderAI } from "./ai.js";
import { renderAQI } from "./aqi.js";
import { saveRecentSearch } from "./recent-searches.js";
import { renderAlerts }
from "./alerts.js";

/**
 * Fetch weather by city
 */
export async function fetchWeather(city) {
  try {

    const response = await fetch(
      `/api/weather?city=${encodeURIComponent(city)}`
    );

    if (!response.ok) {
      throw new Error(
        `Weather request failed: ${response.status}`
      );
    }

    const data = await response.json();

    saveRecentSearch(city);

    updateCurrent(data.current);

    renderForecast(data.forecast);

    renderCharts(data.forecast);

    renderAI(data.forecast);

    renderAQI(data.air);

    renderAlerts(
  data.forecast,
  data.air
);
    
  } catch (error) {

    console.error(
      "Weather Error:",
      error
    );

    alert(
      "Unable to load weather data."
    );
  }
}

/**
 * Fetch weather by coordinates
 */
export async function fetchWeatherByCoords(
  lat,
  lon
) {
  try {

    const response = await fetch(
      `/api/weather?lat=${lat}&lon=${lon}`
    );

    if (!response.ok) {
      throw new Error(
        `Location weather request failed: ${response.status}`
      );
    }

    const data = await response.json();

    updateCurrent(data.current);

    renderForecast(data.forecast);

    renderCharts(data.forecast);

    renderAI(data.forecast);

    renderAQI(data.air);

    renderAlerts(
  data.forecast,
  data.air
);
    
  } catch (error) {

    console.error(
      "Location Weather Error:",
      error
    );

    alert(
      "Unable to load location weather."
    );
  }
}

/**
 * Update current weather section
 */
function updateCurrent(data) {

  if (!data) {
    return;
  }

  const cityName =
    document.getElementById(
      "cityName"
    );

  const temperature =
    document.getElementById(
      "temperature"
    );

  const description =
    document.getElementById(
      "description"
    );

  const icon =
    document.getElementById(
      "icon"
    );

  if (cityName) {
    cityName.textContent =
      data.name;
  }

  if (temperature) {
    temperature.textContent =
      `${Math.round(
        data.main.temp
      )}°C`;
  }

  if (description) {
    description.textContent =
      data.weather[0].description;
  }

  if (icon) {
    icon.src =
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    icon.alt =
      data.weather[0].description;
  }
}
