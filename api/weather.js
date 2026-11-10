export default async function handler(req, res) {
  try {
    const city = req.query.city;
    const lat = req.query.lat;
    const lon = req.query.lon;

    const key =
      process.env.OPENWEATHER_API_KEY ||
      process.env.VITE_OPENWEATHER_API_KEY;

    if (!key) {
      return res.status(500).json({
        error: "Missing OpenWeather API key"
      });
    }

    let currentUrl;
    let forecastUrl;

    if (city) {
      currentUrl =
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}&units=metric`;

      forecastUrl =
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${key}&units=metric`;
    } else if (lat && lon) {
      currentUrl =
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

      forecastUrl =
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    } else {
      return res.status(400).json({
        error: "Provide city or coordinates"
      });
    }

    const currentResponse =
      await fetch(currentUrl);

    const forecastResponse =
      await fetch(forecastUrl);

    const currentData =
      await currentResponse.json();

    const forecastData =
      await forecastResponse.json();

    return res.status(200).json({
      current: currentData,
      forecast: forecastData
    });

    console.error(
      "Weather API Error:",
      error
    );

    return res.status(500).json({
      error: "Failed to fetch weather data"
    });
  }
}

const airResponse =
  await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&appid=${key}`
  );

const airData =
  await airResponse.json();

return res.status(200).json({
  current: currentData,
  forecast: forecastData,
  air: airData
});
