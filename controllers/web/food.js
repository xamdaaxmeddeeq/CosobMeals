// let foods = require("../../data/menu");
const { PrismaClient } = require("@prisma/client");
const { Menu } = new PrismaClient();

exports.menuController = async(req, res) => {

  const menu = await Menu.findMany();
  res.locals = {
    title: "menu",
    loggedUser: req.session.user,
    foods: menu,
  };

  // res.locals = { title: "menu", foods };
  res.render("web/menu");
};

exports.galleryController = (req, res) => {
  res.render("web/gallery");
};

exports.stafController = (req, res) => {
  res.render("web/staf");
};

exports.speacialController = (req, res) => {
  res.render("web/specials");
};

 

exports.singleFoodPageController = async(req, res) => {
   const targetfood = await Menu.findUnique({
    where:{
      id: Number(req.params.id)
    }
   })
   res.locals = {title:"menu",  loggedUser: req.session.user,}
  res.render("web/singlefood", { menu: targetfood });
};
                                          