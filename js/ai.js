export function renderAI(forecast) {

  if (!forecast || !forecast.list) {
    return;
  }

  const temps = forecast.list
    .slice(0, 5)
    .map(item => item.main.temp);

  if (temps.length === 0) {
    return;
  }

  const avg =
    temps.reduce(
      (a, b) => a + b,
      0
    ) / temps.length;

  const trend =
    temps[temps.length - 1] > temps[0]
      ? "Warming"
      : "Cooling";

  const container =
    document.getElementById("aiForecast");

  if (!container) {
    return;
  }

  container.innerHTML = `
    <div class="ai-card">

      <h3>
        🤖 AI Forecast
      </h3>

      <p>
        Trend: ${trend}
      </p>

      <p>
        Average Temperature:
        ${avg.toFixed(1)}°C
      </p>

    </div>
  `;
}
