export function getSignupPage(req, res) {
  const currentPageUrl = req.originalUrl;

  res.render("signup", { currentPageUrl });
}
export function getLoginPage(req, res) {
  const currentPageUrl = req.originalUrl;

  res.render("login", { currentPageUrl });
}

export function getDashboard(req, res) {
  const currentPageUrl = req.originalUrl;
  console.log("currentPageUrl", currentPageUrl);

  const isDashboard = currentPageUrl === "/";
  console.log(isDashboard);

  res.render("dashboard", { currentPageUrl });
}

export function getFinances(req, res) {
  const currentPageUrl = req.originalUrl;
  console.log("currentPageUrl", currentPageUrl);

  res.render("finances", { currentPageUrl });
}
export function getFarmGuide(req, res) {
  const currentPageUrl = req.originalUrl;
  console.log("currentPageUrl", currentPageUrl);
  res.render("farmGuide", { currentPageUrl });
}
export function getFarmProfile(req, res) {
  const currentPageUrl = req.originalUrl;
  console.log("currentPageUrl", currentPageUrl);
  res.render("farmProfile", { currentPageUrl });
}
