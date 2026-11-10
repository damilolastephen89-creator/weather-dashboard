export function renderAI(forecast) {

  if (
    !forecast ||
    !forecast.list ||
    !Array.isArray(forecast.list)
  ) {
    return;
  }

  const temps = forecast.list
    .slice(0, 5)
    .map(item => item.main.temp);

  const avg =
    temps.reduce(
      (a, b) => a + b,
      0
    ) / temps.length;

  const trend =
    temps[temps.length - 1] > temps[0]
      ? "Warming"
      : "Cooling";

  const rainExpected =
    forecast.list.some(
      item =>
        (item.rain?.["3h"] || 0) > 0
    );

  const rainMessage =
    rainExpected
      ? "☔ Rain expected within the forecast period."
      : "☀ No significant rainfall expected.";

  const container =
    document.getElementById(
      "aiForecast"
    );

  if (!container) {
    return;
  }

  container.innerHTML = `
    <div class="ai-card">

      <h3>🤖 AI Forecast</h3>

      <p>
        Trend: ${trend}
      </p>

      <p>
        Average Temperature:
        ${avg.toFixed(1)}°C
      </p>

      <p>
        ${rainMessage}
      </p>

    </div>
  `;
}
