export function initializeFavorites() {
  renderFavorites();

  const button =
    document.getElementById(
      "saveFavoriteBtn"
    );

  if (!button) {
    return;
  }

  button.addEventListener(
    "click",
    saveCurrentCity
  );
}

export function saveCurrentCity() {

  const city =
    document.getElementById(
      "cityName"
    ).textContent;

  if (!city) {
    return;
  }

  let favorites =
    JSON.parse(
      localStorage.getItem(
        "favorites"
      )
    ) || [];

  if (
    !favorites.includes(city)
  ) {

    favorites.push(city);

    localStorage.setItem(
      "favorites",
      JSON.stringify(
        favorites
      )
    );

    renderFavorites();
  }
}

export function renderFavorites() {

  const container =
    document.getElementById(
      "favoritesList"
    );

  if (!container) {
    return;
  }

  container.innerHTML = "";

  const favorites =
    JSON.parse(
      localStorage.getItem(
        "favorites"
      )
    ) || [];

  favorites.forEach(city => {

    const button =
      document.createElement(
        "button"
      );

    button.textContent =
      city;

    button.className =
      "favorite-city";

    button.addEventListener(
      "click",
      async () => {

        const module =
          await import(
            "./weather.js"
          );

        await module.fetchWeather(
          city
        );
      }
    );

    container.appendChild(
      button
    );
  });
}
