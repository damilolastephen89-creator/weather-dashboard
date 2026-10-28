import Chart from "chart.js/auto";

let chart;

export function renderCharts(
  forecast
) {

  const labels =
    forecast.list
      .slice(0, 8)
      .map(
        item =>
          new Date(
            item.dt_txt
          )
          .toLocaleTimeString()
      );

  const temps =
    forecast.list
      .slice(0, 8)
      .map(
        item =>
          item.main.temp
      );

  if (chart) {
    chart.destroy();
  }

  chart =
    new Chart(
      document.getElementById(
        "tempChart"
      ),
      {

      type:"line",

      data:{

        labels,

        datasets:[{

          label:
            "Temperature",

          data:temps,

          borderColor:
            "#4facfe",

          fill:true

        }]
      }
    });
}
