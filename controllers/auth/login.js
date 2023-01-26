const { PrismaClient } = require("@prisma/client");
const { user } = new PrismaClient();

exports.loginPageController = (req, res) => {
  res.locals = { title: "Dashboard" };
  res.render("auth/auth-login", {
    layout: "./auth/layouts/authLayout",
    message: req.flash("message"),
    error: req.flash("error"),
  });
};
exports.loginController = async (req, res) => {
  const userlogin = await user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (userlogin === null) {
    req.flash("error", "You Are NOT Registered!");
    res.redirect("/auth/login");
  }else{
    if (userlogin.email === req.body.email && userlogin.password ===  req.body.password) {
      sess = req.session;
      sess.user = userlogin;
      res.redirect("/admin");
    }else{
      req.flash("error", "wrong password and email");
      res.redirect("/auth/login");
    }
  }
};
