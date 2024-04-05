import { showAlert } from "./alert.js";
import { post } from "./crudOperations.js";

async function signup(data) {
  try {
    showAlert("loading", "Creating account ...");
    const response = await fetch("/api/v1/authentication/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
    if (result.status !== "success") {
      showAlert("error", result.message);
    } else {
      showAlert("success", "Account created successfully");
      window.location.assign("/");
    }
  } catch (error) {
    showAlert("error", "Something went wrong");
    console.error("Error:", error);
  }
}
async function login(data) {
  try {
    showAlert("loading", "Logging in...");
    const response = await fetch("/api/v1/authentication/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    console.log(result);
    if (result.status !== "success") {
      showAlert("error", result.message);
    } else {
      showAlert("success", "Login successful");
      window.location.assign("/");
    }
  } catch (error) {
    showAlert("error", "Something went wrong");
    console.error("Error:", error);
  }
}
async function logout(data) {
  try {
    showAlert("loading", "Logging out...");
    const response = await fetch("/api/v1/authentication/logout", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    console.log(result);
    if (result.status !== "success") {
      showAlert("error", result.message);
    } else {
      window.location.assign("/login");
    }
  } catch (error) {
    showAlert("error", "Something went wrong");
    console.error("Error:", error);
  }
}

export function handleSignup(signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;

    const data = { email, password };

    signup(data);
  });
}

export function handleLogin(loginForm) {
  const isRedirectFromAuthentication = loginForm.getAttribute(
    "data-isRedirectFromAuthentication"
  );
  if (isRedirectFromAuthentication === "true") {
    showAlert("warning", "You are not logged in. Login to continue");
  }

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const data = { email, password };

    login(data);
  });
}
export async function handleLogout(logoutBtn) {
  logoutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    logout();
  });
}
