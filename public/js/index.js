const signupForm = document.querySelector(".authentication--signup");
const loginForm = document.querySelector(".authentication--login");
const dashboard = document.querySelector(".main--dashboard");
import { handleSignup, handleLogin } from "./authentication.js";
import { handleExpenseAndYieldInput } from "./expenseAndYieldInputHandler.js";

console.log("hello");

if (signupForm) {
  handleSignup(signupForm);
}

if (loginForm) {
  handleLogin(loginForm);
}

if (dashboard) {
  handleExpenseAndYieldInput();
}
