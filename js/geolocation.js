import { fetchWeatherByCoords } from "./weather.js";

export function initializeGeolocation() {
  const locationBtn =
    document.getElementById("locationBtn");

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

        (error) => {

          console.error(
            "Geolocation Error:",
            error
          );

          alert(
            "Unable to determine your location."
          );
        },

        {
          enableHighAccuracy: true,
          timeout: 10000
        }
      );
    }
  );
}
