import Chart from "chart.js/auto";

let chart;

export function renderCharts(forecast) {

  if (!forecast || !forecast.list) {
    return;
  }

  const labels = forecast.list
    .slice(0, 8)
    .map(item =>
      new Date(item.dt_txt).toLocaleTimeString()
    );

  const temps = forecast.list
    .slice(0, 8)
    .map(item => item.main.temp);

  const canvas =
    document.getElementById("tempChart");

  if (!canvas) {
    return;
  }

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(canvas, {
    type: "line",

    data: {
      labels,

      datasets: [
        {
          label: "Temperature (°C)",

          data: temps,

          borderColor: "#4facfe",

          backgroundColor:
            "rgba(79,172,254,0.2)",

          fill: true,

          tension: 0.4
        }
      ]
    },

    options: {
      responsive: true,

      maintainAspectRatio: false
    }
  });
}
