import {
  fetchWeather,
  fetchWeatherByCoords
} from "./weather.js";

import { initializeTheme } from "./theme.js";
import { initializeModal } from "./modal.js";
import { initializeGeolocation } from "./geolocation.js";
import {
  initializeFavorites
} from "./favorites.js";
import {
  initializeRecentSearches
} from "./recent-searches.js";

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    initializeTheme();

    initializeModal();

    initializeGeolocation();

    initializeFavorites();

    initializeRecentSearches();
    
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

          if (!city) {
            return;
          }

          await fetchWeather(city);
        }
      );
    }

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(

        async (position) => {

          await fetchWeatherByCoords(
            position.coords.latitude,
            position.coords.longitude
          );
        },

        async () => {

          await fetchWeather("Lagos");
        }

      );

    } else {

      await fetchWeather("Lagos");
    }
  }
);
