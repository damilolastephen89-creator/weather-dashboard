export function initializeTheme() {

  const button =
    document.getElementById(
      "themeToggle"
    );

  if(
    localStorage.getItem(
      "theme"
    ) === "dark"
  ) {

    document.body
      .classList
      .add(
        "dark-mode"
      );
  }

  button.addEventListener(
    "click",
    () => {

      document.body
        .classList
        .toggle(
          "dark-mode"
        );

      localStorage.setItem(
        "theme",

        document.body
          .classList
          .contains(
            "dark-mode"
          )

        ? "dark"
        : "light"
      );
    }
  );
}
