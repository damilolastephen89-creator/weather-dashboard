import {
  fetchWeather,
  fetchWeatherByCoords
} from "./weather.js";

export function initializeGeolocation() {

  const locationBtn =
    document.getElementById(
      "locationBtn"
    );

  if (!locationBtn) {
    return;
  }

  locationBtn.addEventListener(
    "click",
    () => {

      if (!navigator.geolocation) {

        alert(
          "Geolocation is not supported by this browser."
        );

        return;
      }

      navigator.geolocation.getCurrentPosition(

        async (position) => {

          const lat =
            position.coords.latitude;

          const lon =
            position.coords.longitude;

          console.log(
            "Location:",
            lat,
            lon
          );

          await fetchWeatherByCoords(
            lat,
            lon
          );
        },

        async (error) => {

          console.error(
            "Geolocation Error:",
            error
          );

          alert(
            `Location Error ${error.code}: ${error.message}`
          );

          await fetchWeather(
            "Lagos"
          );
        },

        {
          enableHighAccuracy: false,
          timeout: 30000,
          maximumAge: 300000
        }

      );
    }
  );
}
