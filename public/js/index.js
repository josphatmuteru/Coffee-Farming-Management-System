const signupForm = document.querySelector(".authentication--signup");
const loginForm = document.querySelector(".authentication--login");
const dashboard = document.querySelector(".main--dashboard");
const financesPage = document.querySelector(".main--finances");

import { handleSignup, handleLogin } from "./authentication.js";
import { HandleDashboardFunctions } from "./dashboard.js";
import { handleExpenseAndYieldInput } from "./expenseAndYieldInputHandler.js";
import { handleFinancesPage } from "./finances.js";

console.log("hello");

if (signupForm) {
  handleSignup(signupForm);
}

if (loginForm) {
  handleLogin(loginForm);
}

if (dashboard) {
  // handleExpenseAndYieldInput();
  HandleDashboardFunctions();
}

if (financesPage) {
  handleFinancesPage();
}
