import {
  PublicClientApplication
} from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "906a9078-7791-4d2d-aad5-d3521a67022e",
    redirectUri:
      window.location.origin
  }
};

const msalInstance =
  new PublicClientApplication(
    msalConfig
  );

export async function login() {

  try {

    const response =
      await msalInstance.loginPopup({
        scopes: ["User.Read"]
      });

    localStorage.setItem(
      "user",
      JSON.stringify(
        response.account
      )
    );

    renderUser();

  } catch (error) {

    console.error(error);
  }
}

export function renderUser() {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const element =
    document.getElementById(
      "userInfo"
    );

  if (
    user &&
    element
  ) {

    element.textContent =
      `👤 ${user.name}`;
  }
}
