import { fetchWeather } from "./weather.js";
import { initializeTheme } from "./theme.js";
import { initializeModal } from "./modal.js";

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    initializeTheme();

    initializeModal();

    document
      .getElementById("searchBtn")
      .addEventListener(
        "click",
        async () => {

          const city =
            document
              .getElementById(
                "cityInput"
              )
              .value;

          await fetchWeather(city);
        }
      );

    await fetchWeather("Lagos");
  }
);
