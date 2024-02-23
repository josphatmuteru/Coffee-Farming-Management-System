exports.getDashboard = (req, res) => {
  const currentPageUrl = req.originalUrl;
  console.log("currentPageUrl", currentPageUrl);

  const isDashboard = currentPageUrl === "/";
  console.log(isDashboard);

  res.render("dashboard", { currentPageUrl });
};

exports.getFinances = (req, res) => {
  const currentPageUrl = req.originalUrl;
  console.log("currentPageUrl", currentPageUrl);

  res.render("finances", { currentPageUrl });
};
exports.getFarmGuide = (req, res) => {
  const currentPageUrl = req.originalUrl;
  console.log("currentPageUrl", currentPageUrl);
  res.render("farmGuide", { currentPageUrl });
};
exports.getFarmProfile = (req, res) => {
  const currentPageUrl = req.originalUrl;
  console.log("currentPageUrl", currentPageUrl);
  res.render("farmProfile", { currentPageUrl });
};
