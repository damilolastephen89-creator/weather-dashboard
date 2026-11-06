// js/geolocation.js

import { fetchWeatherByCoords } from "./weather.js";

export function initializeGeolocation() {

  const button =
    document.getElementById(
      "locationBtn"
    );

  if (!button) {
    return;
  }

  button.addEventListener(
    "click",
    () => {

      if (!navigator.geolocation) {

        alert(
          "Geolocation is not supported by your browser."
        );

        return;
      }

      navigator.geolocation.getCurrentPosition(
        position => {

          const lat =
            position.coords.latitude;

          const lon =
            position.coords.longitude;

          fetchWeatherByCoords(
            lat,
            lon
          );
        },

        error => {

          console.error(error);

          alert(
            "Unable to get your location."
          );
        }
      );
    }
  );
}
