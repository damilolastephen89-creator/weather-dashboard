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
