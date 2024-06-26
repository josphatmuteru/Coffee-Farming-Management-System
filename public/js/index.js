const signupForm = document.querySelector(".authentication--signup");
const loginForm = document.querySelector(".authentication--login");
const dashboard = document.querySelector(".main--dashboard");
const financesPage = document.querySelector(".main--finances");
const farmProfilePage = document.querySelector(".main--farm-profile");
const logoutBtns = document.querySelectorAll(".btn-logout");

const fertilizerApplicationGuide = document.querySelector(
  ".main--fertilizer-application"
);
const pestManagementGuidePage = document.querySelector(
  ".main--pest-management"
);
const activityInstructionsPage = document.querySelector(
  ".main--activity-instructions"
);

import { handleActivityInstructions } from "./activityInstructions.js";
import { handleSignup, handleLogin, handleLogout } from "./authentication.js";
import { HandleDashboardFunctions } from "./dashboard.js";
import { handleExpenseAndYieldInput } from "./expenseAndYieldInputHandler.js";
import { handleFarmProfilePage } from "./farmProfile.js";
import { handleFertilizerApplicationGuidePage } from "./fertilizerApplicationGuide.js";
import { handleFinancesPage } from "./finances.js";
import { handlePestManagementPage } from "./pestManagement.js";

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

if (pestManagementGuidePage) {
  handlePestManagementPage();
}

if (fertilizerApplicationGuide) {
  handleFertilizerApplicationGuidePage();
}

if (activityInstructionsPage) {
  handleActivityInstructions();
}

if (farmProfilePage) {
  handleFarmProfilePage();
}

if (logoutBtns) {
  logoutBtns.forEach((btn) => {
    handleLogout(btn);
  });
}
