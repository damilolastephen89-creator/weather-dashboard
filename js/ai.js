export function renderAI(
  forecast
) {

  const temps =
    forecast.list
      .slice(0, 5)
      .map(
        item =>
          item.main.temp
      );

  const avg =
    temps.reduce(
      (a,b)=>a+b,
      0
    ) / temps.length;

  const trend =
    temps.at(-1) >
    temps[0]
    ? "Warming"
    : "Cooling";

  document
    .getElementById(
      "aiForecast"
    )
    .innerHTML = `

    <div class="ai-card">

      <h3>
      🤖 AI Forecast
      </h3>

      <p>
      Trend:
      ${trend}
      </p>

      <p>
      Average:
      ${avg.toFixed(1)}°C
      </p>

    </div>
    `;
}
