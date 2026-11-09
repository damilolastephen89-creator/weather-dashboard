import { fetchWeather } from "./weather.js";

export function initializeRecentSearches() {
  renderRecentSearches();
}

export function saveRecentSearch(city) {

  if (!city) {
    return;
  }

  let recent =
    JSON.parse(
      localStorage.getItem(
        "recentSearches"
      )
    ) || [];

  recent =
    recent.filter(
      item => item !== city
    );

  recent.unshift(city);

  recent =
    recent.slice(0, 5);

  localStorage.setItem(
    "recentSearches",
    JSON.stringify(recent)
  );

  renderRecentSearches();
}

export function renderRecentSearches() {

  const container =
    document.getElementById(
      "recentSearchesList"
    );

  if (!container) {
    return;
  }

  container.innerHTML = "";

  const recent =
    JSON.parse(
      localStorage.getItem(
        "recentSearches"
      )
    ) || [];

  recent.forEach(city => {

    const button =
      document.createElement(
        "button"
      );

    button.textContent =
      city;

    button.className =
      "recent-city";

    button.addEventListener(
      "click",
      async () => {
        await fetchWeather(city);
      }
    );

    container.appendChild(
      button
    );
  });
}
