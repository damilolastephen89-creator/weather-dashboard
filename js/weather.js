import { renderForecast }
from "./forecast.js";

import { renderCharts }
from "./charts.js";

import { renderAI }
from "./ai.js";

export async function fetchWeather(city) {

  try {

    const response =
      await fetch(
        `/api/weather?city=${city}`
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

  } catch(error) {

    console.error(error);
  }
}

function updateCurrent(data) {

  document
    .getElementById("cityName")
    .textContent =
      data.name;

  document
    .getElementById(
      "temperature"
    )
    .textContent =
      `${Math.round(data.main.temp)}°C`;

  document
    .getElementById(
      "description"
    )
    .textContent =
      data.weather[0].description;

  document
    .getElementById("icon")
    .src =
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}
