export default async function handler(req, res) {
  try {
    const city =
  req.query.city;

const lat =
  req.query.lat;

const lon =
  req.query.lon;
    
    const key =
      process.env.OPENWEATHER_API_KEY ||
      process.env.VITE_OPENWEATHER_API_KEY;

    if (!key) {
      return res.status(500).json({
        error: "Missing OpenWeather API key"
      });
    }

   const currentUrl =
  city
  ?
  `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}&units=metric`
  :
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

    const currentData =
      await currentResponse.json();

    const currentUrl =
  city
  ?
  `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}&units=metric`
  :
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

    const forecastUrl =
  city
  ?
  `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${key}&units=metric`
  :
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

    const currentResponse =
  await fetch(currentUrl);

const forecastResponse =
  await fetch(forecastUrl);
    
  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Failed to fetch weather data"
    });
  }
}
