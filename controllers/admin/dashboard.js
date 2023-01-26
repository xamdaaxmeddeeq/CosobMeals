exports.dashboardPageController = (req, res) => {
  res.locals = { title: "dashbord", loggedUser: req.session.user };
  res.render("./admin/dashboard", { layout: "./admin/layouts/adminLayout" });
}; 
