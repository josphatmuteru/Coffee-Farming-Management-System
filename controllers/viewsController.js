import { fetchWeather } from "../api/weatherApi.js";

export function getSignupPage(req, res) {
  const currentPageUrl = req.originalUrl;

  res.render("signup", { currentPageUrl });
}
export function getLoginPage(req, res) {
  const currentPageUrl = req.originalUrl;

  res.render("login", { currentPageUrl });
}

export async function getDashboard(req, res) {
  const currentPageUrl = req.originalUrl;
  const harvestData = req.harvestData;

  const weatherData = await fetchWeather();

  const isDashboard = currentPageUrl === "/";

  res.render("dashboard", { currentPageUrl, weatherData, harvestData });
}

export function getFinances(req, res) {
  const currentPageUrl = req.originalUrl;
  const expenses = res.expenses;
  const budget = res.budget;
  const financesData = { expenses, budget };
  console.log(financesData);

  res.render("finances", { currentPageUrl, financesData });
}
export function getFarmGuideMenu(req, res) {
  const currentPageUrl = req.originalUrl;
  console.log("currentPageUrl", currentPageUrl);
  res.render("farmGuide", { currentPageUrl });
}
export function getFarmProfile(req, res) {
  const currentPageUrl = req.originalUrl;
  console.log("currentPageUrl", currentPageUrl);
  res.render("farmProfile", { currentPageUrl });
}
export function getFertilizerApplicationGuide(req, res) {
  const currentPageUrl = req.originalUrl;

  res.render("fertilizerApplicationGuide", { currentPageUrl });
}
export function getPestManagementGuide(req, res) {
  const currentPageUrl = req.originalUrl;

  res.render("pestManagementGuide", { currentPageUrl });
}
export function getPestDetailsPage(req, res) {
  const currentPageUrl = req.originalUrl;

  res.render("pestDetails", { currentPageUrl });
}
export function getFarmingActivityDetailsPage(req, res) {
  const currentPageUrl = req.originalUrl;

  res.render("farmActivityInstructions", { currentPageUrl });
}
