export function initializeModal() {

  const modal =
    document.getElementById(
      "weatherModal"
    );

  document
    .querySelector(".close")
    .addEventListener(
      "click",
      () =>
        modal.classList.remove(
          "show"
        )
    );
}

export function openWeatherModal(
  item
) {

  const modal =
    document.getElementById(
      "weatherModal"
    );

  document
    .getElementById(
      "modalDate"
    )
    .textContent =
      item.dt_txt;

  document
    .getElementById(
      "modalTemp"
    )
    .textContent =
      `${item.main.temp}°C`;

  document
    .getElementById(
      "modalDescription"
    )
    .textContent =
      item.weather[0].description;

  modal.classList.add(
    "show"
  );
}
