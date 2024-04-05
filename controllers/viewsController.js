import { fetchWeather } from "../api/weatherApi.js";

export function getSignupPage(req, res) {
  const currentPageUrl = req.originalUrl;

  res.render("signup", { currentPageUrl });
}
export function getLoginPage(req, res, next) {
  const currentPageUrl = req.originalUrl;

  res.render("login", { currentPageUrl });
}

export async function getDashboard(req, res) {
  const user = req.user;
  const { id: userId } = user;
  const currentPageUrl = req.originalUrl;
  const harvestData = req.harvestData;

  const weatherData = await fetchWeather();

  const isDashboard = currentPageUrl === "/";

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let yieldAmount = labels.map((month) => {
    const coffeeHarvestedInMonth =
      harvestData.find((item) => item.month === month)?.total_yield_amount ?? 0;
    return coffeeHarvestedInMonth;
  });

  console.log(yieldAmount);

  res.render("dashboard", {
    currentPageUrl,
    weatherData,
    harvestData,
    labels,
    yieldAmount,
    userId,
  });
}

export function getFinances(req, res) {
  const user = req.user;
  const { id: userId } = user;
  const currentPageUrl = req.originalUrl;
  const expenses = res.expenses;

  const financesData = { expenses };

  res.render("finances", { currentPageUrl, financesData, userId });
}
export function getFarmGuideMenu(req, res) {
  const currentPageUrl = req.originalUrl;

  res.render("farmGuide", { currentPageUrl });
}
export function getFarmProfile(req, res) {
  const user = req.user;
  const { id: userId } = user;
  const currentPageUrl = req.originalUrl;

  res.render("farmProfile", { currentPageUrl, userId });
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
