import { showAlert } from "./alert.js";

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
    showAlert("loading", "Login in...");
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
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const data = { email, password };

    login(data);
  });
}
