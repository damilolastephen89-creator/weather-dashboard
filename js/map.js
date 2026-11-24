let map;
let marker;

let cloudLayer;
let rainLayer;
let tempLayer;

const WEATHER_KEY =
  "03b75e0fe58fd7b7b99d59ece49b234c";

let map;
let marker;

export function initializeMap() {

  map = L.map("weatherMap")
    .setView([6.5244, 3.3792], 6);

  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        "&copy; OpenStreetMap contributors"
    }
  ).addTo(map);
}

cloudLayer = L.tileLayer(
  `https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${WEATHER_KEY}`,
  {
    opacity: 0.6
  }
);

rainLayer = L.tileLayer(
  `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${WEATHER_KEY}`,
  {
    opacity: 0.6
  }
);

tempLayer = L.tileLayer(
  `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${WEATHER_KEY}`,
  {
    opacity: 0.6
  }
);

document
  .getElementById("cloudLayerBtn")
  ?.addEventListener(
    "click",
    () => {

      map.eachLayer(layer => {

        if (
          layer === cloudLayer ||
          layer === rainLayer ||
          layer === tempLayer
        ) {
          map.removeLayer(layer);
        }

      });

      cloudLayer.addTo(map);
    }
  );

document
  .getElementById("rainLayerBtn")
  ?.addEventListener(
    "click",
    () => {

      map.eachLayer(layer => {

        if (
          layer === cloudLayer ||
          layer === rainLayer ||
          layer === tempLayer
        ) {
          map.removeLayer(layer);
        }

      });

      rainLayer.addTo(map);
    }
  );

document
  .getElementById("tempLayerBtn")
  ?.addEventListener(
    "click",
    () => {

      map.eachLayer(layer => {

        if (
          layer === cloudLayer ||
          layer === rainLayer ||
          layer === tempLayer
        ) {
          map.removeLayer(layer);
        }

      });

      tempLayer.addTo(map);
    }
  );

export function updateMap(
  lat,
  lon,
  city
) {

  if (!map) {
    return;
  }

  map.setView(
    [lat, lon],
    10
  );

  if (marker) {
    marker.remove();
  }

  marker = L.marker(
    [lat, lon]
  )
    .addTo(map)
    .bindPopup(city)
    .openPopup();
}
