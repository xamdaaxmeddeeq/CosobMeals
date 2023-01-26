const { PrismaClient } = require("@prisma/client");
const { Menu } = new PrismaClient();

exports.menuPageController = async (req, res) => {
  const menus = await Menu.findMany();
  res.locals = {
    title: "menu",
    loggedUser: req.session.user,
    menu: menus,
  };
  res.render("admin/menu", {
    layout: "./admin/layouts/adminLayout",
  });
};

exports.addFormControllers = (req, res) => {
  res.locals = {
    title: "addform",
    loggedUser: req.session.user,
  };
  res.render("admin/addmenu", { layout: "./admin/layouts/adminLayout" });
};

exports.addmenuControler = async (req, res) => {
  const createMenu = await Menu.create({ data: req.body });
  res.redirect("/menu");
};

// delete controller
exports.deleteMenuController = async (req, res) => {
  await Menu.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.redirect("/admin/menu");
};

// updata parts
exports.UpdatemenuFormController = async (req, res) => {
  // const id = req.params.id;
  const targermenu = await Menu.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });
  res.locals = {
    title: "Menu", 
    loggedUser: req.session.user,
  };
  res.render("admin/updatemenu", {Menu: targermenu,layout: "./admin/layouts/adminLayout", });
};

exports.UpdatemenuController = async (req, res) => {
  const updatemenu = await Menu.update({
    where: {
      id: Number(req.params.id),
    },
    data: req.body,
  });
  // console.log(data);
  res.json();
};
