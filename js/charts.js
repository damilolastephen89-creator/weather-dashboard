import Chart from "chart.js/auto";

let temperatureChart;
let rainfallChart;

export function renderCharts(forecast) {

  if (!forecast || !forecast.list) {
    return;
  }

  renderTemperatureChart(
    forecast
  );

  renderRainfallChart(
    forecast
  );
}

function renderTemperatureChart(
  forecast
) {

  const canvas =
    document.getElementById(
      "tempChart"
    );

  if (!canvas) {
    return;
  }

  const labels =
    forecast.list
      .slice(0, 8)
      .map(item =>
        new Date(
          item.dt_txt
        ).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      );

  const temperatures =
    forecast.list
      .slice(0, 8)
      .map(item =>
        item.main.temp
      );

  if (temperatureChart) {
    temperatureChart.destroy();
  }

  temperatureChart =
    new Chart(canvas, {

      type: "line",

      data: {
        labels,

        datasets: [{
          label:
            "Temperature (°C)",

          data:
            temperatures,

          borderColor:
            "#4facfe",

          backgroundColor:
            "rgba(79,172,254,0.2)",

          fill: true,

          tension: 0.4
        }]
      }
    });
}

function renderRainfallChart(
  forecast
) {

  const canvas =
    document.getElementById(
      "rainChart"
    );

  if (!canvas) {
    return;
  }

  const labels =
    forecast.list
      .slice(0, 8)
      .map(item =>
        new Date(
          item.dt_txt
        ).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      );

  const rainfall =
    forecast.list
      .slice(0, 8)
      .map(item =>
        item.rain?.["3h"] || 0
      );

  if (rainfallChart) {
    rainfallChart.destroy();
  }

  rainfallChart =
    new Chart(canvas, {

      type: "bar",

      data: {
        labels,

        datasets: [{
          label:
            "Rainfall (mm)",

          data:
            rainfall,

          backgroundColor:
            "#00bcd4"
        }]
      }
    });
}
