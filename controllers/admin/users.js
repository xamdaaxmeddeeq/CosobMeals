const { PrismaClient } = require("@prisma/client");
const { user } = new PrismaClient();

exports.usersPageController = async (req, res) => {
  const users = await user.findMany();

  res.locals = {
    title: "users",
    loggedUser: req.session.user,

   users,
  };
  res.render("admin/users", {
    layout: "./admin/layouts/adminLayout",
  });
};

exports.addFormControllers = (req, res) => {
  res.locals = {
    title: "addform",
    loggedUser: req.session.user,
  };
  res.render("admin/userform", { layout: "./admin/layouts/adminLayout" });
};

exports.adduserControler = async (req, res) => {
 try {
  const createUser = await user.create({ data: req.body });
  res.redirect("/admin/users");
 } catch (error) {
  req.flash("error", "wrong password and email");
  res.redirect("/admin/users/userform");
 }
};

exports.deleteUserController = async (req, res) => {
  await user.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.redirect("/admin/users");
};

// updata
exports.UpdateUserFormController = async (req, res) => {
  const id = req.params.id;
  const targerUser = await user.findUnique({
    where: {
      id: Number(id),
    },
  });
  // const targetUser = users.filter((filter) => filter.id === id);
  res.locals = {
    title: "users",
    loggedUser: req.session.user,
  };
  res.render("admin/update", {
    user: targerUser,
    layout: "./admin/layouts/adminLayout",
  });
};

exports.UpdateUSerController = async (req, res) => {
  const updateUser = await user.update({
    where: {
      id: Number(req.params.id),
    },
    data: req.body,
  });
  res.json();
};
 