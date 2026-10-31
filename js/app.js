import { fetchWeather } from "./weather.js";
import { initializeTheme } from "./theme.js";
import { initializeModal } from "./modal.js";

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    initializeTheme();

    initializeModal();

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
