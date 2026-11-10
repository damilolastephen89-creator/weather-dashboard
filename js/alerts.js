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

  forecast.list.forEach(
    item => {

      const rainfall =
        item.rain?.["3h"] || 0;

      if (rainfall >= 5) {
        alerts.push(
          "⚠ Heavy rain expected."
        );
      }

      if (
        item.main.temp >= 35
      ) {
        alerts.push(
          "🔥 High temperature alert."
        );
      }

      if (
        item.wind.speed >= 10
      ) {
        alerts.push(
          "💨 Strong wind warning."
        );
      }
    }
  );

  if (
    airData &&
    airData.list &&
    airData.list[0]
  ) {

    const aqi =
      airData.list[0].main.aqi;

    if (aqi >= 4) {
      alerts.push(
        "🌫 Poor air quality detected."
      );
    }
  }

  const uniqueAlerts =
    [...new Set(alerts)];

  if (
    uniqueAlerts.length === 0
  ) {

    container.innerHTML = `
      <div class="alert-card safe">
        ✅ No weather alerts.
      </div>
    `;

    return;
  }

  container.innerHTML = `
    <div class="alert-card">

      <h3>
        ⚠ Weather Alerts
      </h3>

      ${uniqueAlerts
        .map(
          alert =>
            `<p>${alert}</p>`
        )
        .join("")}

    </div>
  `;
}
