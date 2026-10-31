export function initializeModal() {
  const modal =
    document.getElementById(
      "weatherModal"
    );

  const closeButton =
    document.querySelector(".close");

  if (!modal || !closeButton) {
    return;
  }

  closeButton.addEventListener(
    "click",
    () => {
      modal.classList.remove("show");
    }
  );

  window.addEventListener(
    "click",
    (event) => {
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    }
  );
}

export function openWeatherModal(item) {
  const modal =
    document.getElementById(
      "weatherModal"
    );

  if (!modal) {
    return;
  }

  document.getElementById(
    "modalDate"
  ).textContent =
    new Date(
      item.dt_txt
    ).toLocaleString();

  document.getElementById(
    "modalTemp"
  ).textContent =
    `Temperature: ${item.main.temp}°C`;

  document.getElementById(
    "modalDescription"
  ).textContent =
    item.weather[0].description;

  modal.classList.add("show");
}
