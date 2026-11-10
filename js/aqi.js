export function renderAQI(airData) {

  if (
    !airData ||
    !airData.list ||
    airData.list.length === 0
  ) {
    return;
  }

  const air =
    airData.list[0];

  const aqi =
    air.main.aqi;

  let quality = "";

  switch (aqi) {

    case 1:
      quality = "Good";
      break;

    case 2:
      quality = "Fair";
      break;

    case 3:
      quality = "Moderate";
      break;

    case 4:
      quality = "Poor";
      break;

    case 5:
      quality = "Very Poor";
      break;

    default:
      quality = "Unknown";
  }

  const container =
    document.getElementById(
      "aqiPanel"
    );

  if (!container) {
    return;
  }

  container.innerHTML = `
    <div class="aqi-card">

      <h3>
        🌫 Air Quality
      </h3>

      <p>
        AQI: ${quality}
      </p>

      <p>
        PM2.5:
        ${air.components.pm2_5}
      </p>

      <p>
        PM10:
        ${air.components.pm10}
      </p>

      <p>
        O₃:
        ${air.components.o3}
      </p>

    </div>
  `;
}
