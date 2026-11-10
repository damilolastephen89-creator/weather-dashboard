export function renderAlerts(
  forecast,
  airData
) {

  const container =
    document.getElementById(
      "alertsPanel"
    );

  if (
    !container ||
    !forecast ||
    !forecast.list
  ) {
    return;
  }

  const alerts = [];

  forecast.list.forEach(item => {

    const rain =
      item.rain?.["3h"] || 0;

    if (rain >= 10) {
      alerts.push({
        level: "severe",
        message:
          "🌧 Heavy rainfall expected."
      });
    }

    if (item.main.temp >= 38) {
      alerts.push({
        level: "warning",
        message:
          "🔥 Extreme heat expected."
      });
    }

    if (item.wind.speed >= 12) {
      alerts.push({
        level: "warning",
        message:
          "💨 Strong winds expected."
      });
    }
  });

  if (
    airData?.list?.[0]?.main?.aqi >= 4
  ) {

    alerts.push({
      level: "warning",
      message:
        "🌫 Poor air quality detected."
    });
  }

  if (alerts.length === 0) {

    container.innerHTML = `
      <div class="alert-safe">
        ✅ No weather alerts.
      </div>
    `;

    return;
  }

  container.innerHTML = `
    <div class="alerts-card">

      <h3>
        ⚠ Weather Alerts
      </h3>

      ${alerts
        .map(
          alert =>
          `<div class="alert ${alert.level}">
            ${alert.message}
          </div>`
        )
        .join("")}

    </div>
  `;
}
