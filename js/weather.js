import { renderForecast } from "./forecast.js";
import { renderCharts } from "./charts.js";
import { renderAI } from "./ai.js";

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

    updateCurrent(data.current);

    renderForecast(data.forecast);

    renderCharts(data.forecast);

    renderAI(data.forecast);

  } catch (error) {
    console.error(
      "Weather Error:",
      error
    );
  }
}

function updateCurrent(data) {

  if (!data) return;

  document
    .getElementById("cityName")
    .textContent =
    data.name;

  document
    .getElementById("temperature")
    .textContent =
    `${Math.round(data.main.temp)}°C`;

  document
    .getElementById("description")
    .textContent =
    data.weather[0].description;

  document
    .getElementById("icon")
    .src =
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

export async function fetchWeatherByCoords(
  lat,
  lon
) {

  try {

    const response =
      await fetch(
        `/api/weather?lat=${lat}&lon=${lon}`
      );

    const data =
      await response.json();

    updateCurrent(
      data.current
    );

    renderForecast(
      data.forecast
    );

    renderCharts(
      data.forecast
    );

    renderAI(
      data.forecast
    );

  } catch (error) {

    console.error(
      "Location Weather Error:",
      error
    );
  }
}

try {
  updateCurrent(data.current);
  console.log("Current weather rendered");
} catch (e) {
  console.error("updateCurrent failed", e);
}

try {
  renderForecast(data.forecast);
  console.log("Forecast rendered");
} catch (e) {
  console.error("renderForecast failed", e);
}

try {
  renderCharts(data.forecast);
  console.log("Charts rendered");
} catch (e) {
  console.error("renderCharts failed", e);
}

try {
  renderAI(data.forecast);
  console.log("AI rendered");
} catch (e) {
  console.error("renderAI failed", e);
}
