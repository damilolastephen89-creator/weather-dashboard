export function initializePWA() {

  if (
    "serviceWorker" in navigator
  ) {

    window.addEventListener(
      "load",
      async () => {

        try {

          await navigator
            .serviceWorker
            .register(
              "/sw.js"
            );

          console.log(
            "Service Worker Registered"
          );

        } catch (error) {

          console.error(
            "SW Registration Failed",
            error
          );
        }
      }
    );
  }
}
