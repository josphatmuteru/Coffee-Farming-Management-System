const signupForm = document.querySelector(".authentication--signup");
const loginForm = document.querySelector(".authentication--login");
import { handleSignup, handleLogin } from "./authentication.js";

console.log("hello");

if (signupForm) {
  handleSignup(signupForm);
}

if (loginForm) {
  handleLogin(loginForm);
}
