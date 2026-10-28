export default async function handler(
  req,
  res
) {

  const city =
    req.query.city;

  const key =
    process.env
      .VITE_OPENWEATHER_KEY;

  const current =
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    );

  const currentData =
    await current.json();

  const forecast =
    await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`
    );

  const forecastData =
    await forecast.json();

  res.status(200).json({
    current:
      currentData,

    forecast:
      forecastData
  });
}
