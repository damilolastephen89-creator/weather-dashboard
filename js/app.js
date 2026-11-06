import { fetchWeather } from "./weather.js";
import { initializeTheme } from "./theme.js";
import { initializeModal } from "./modal.js";
import {
  initializeGeolocation
}
from "./geolocation.js";

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    initializeTheme();

    initializeModal();
    
    initializeGeolocation();
    
    const searchBtn =
      document.getElementById("searchBtn");

    if (searchBtn) {
      searchBtn.addEventListener(
        "click",
        async () => {

          const city =
            document
              .getElementById("cityInput")
              .value
              .trim();

          if (!city) return;

          await fetchWeather(city);
        }
      );
    }

    await fetchWeather("Lagos");
  }
);

navigator.geolocation.getCurrentPosition(
  position => {

    fetchWeatherByCoords(
      position.coords.latitude,
      position.coords.longitude
    );

  },
  () => {

    fetchWeather("Lagos");
  }
);
