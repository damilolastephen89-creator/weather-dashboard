export function initializeTheme() {
  const button =
    document.getElementById(
      "themeToggle"
    );

  if (!button) {
    return;
  }

  const savedTheme =
    localStorage.getItem(
      "theme"
    );

  if (savedTheme === "dark") {
    document.body.classList.add(
      "dark-mode"
    );
  }

  button.addEventListener(
    "click",
    () => {

      document.body.classList.toggle(
        "dark-mode"
      );

      const currentTheme =
        document.body.classList.contains(
          "dark-mode"
        )
          ? "dark"
          : "light";

      localStorage.setItem(
        "theme",
        currentTheme
      );
    }
  );
}
