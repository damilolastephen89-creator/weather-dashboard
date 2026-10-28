import { openWeatherModal }
from "./modal.js";

export function renderForecast(data) {

  const container =
    document.getElementById(
      "forecast"
    );

  container.innerHTML = "";

  data.list
    .slice(0, 5)
    .forEach(item => {

      const card =
        document.createElement(
          "div"
        );

      card.className =
        "forecast-card";

      card.innerHTML = `
      <p>
        ${new Date(
          item.dt_txt
        ).toLocaleString()}
      </p>

      <p>
        ${item.main.temp}°C
      </p>

      <p>
        ${item.weather[0].description}
      </p>
      `;

      card.addEventListener(
        "click",
        () =>
          openWeatherModal(
            item
          )
      );

      container.appendChild(
        card
      );
    });
}
