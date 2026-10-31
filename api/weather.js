export default async function handler(req, res) {
  try {
    const city =
      req.query.city || "Lagos";

    const key =
      process.env.OPENWEATHER_API_KEY ||
      process.env.VITE_OPENWEATHER_API_KEY;

    if (!key) {
      return res.status(500).json({
        error: "Missing OpenWeather API key"
      });
    }

    const currentResponse =
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}&units=metric`
      );

    const currentData =
      await currentResponse.json();

    const forecastResponse =
      await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${key}&units=metric`
      );

    const forecastData =
      await forecastResponse.json();

    return res.status(200).json({
      current: currentData,
      forecast: forecastData
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Failed to fetch weather data"
    });
  }
}
