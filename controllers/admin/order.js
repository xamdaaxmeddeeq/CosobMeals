const { PrismaClient } = require("@prisma/client");
const { costemerOrdar } = new PrismaClient();

exports.orderPageController = async (req, res) => {
  const order = await costemerOrdar.findMany();

  res.locals = {
    title: "users",
    loggedUser: req.session.user,

    order, 
  };
  res.render("admin/order", {
    layout: "./admin/layouts/adminLayout",
  });
}

exports.sendContactControler = async (req, res) => {
  const createOrder = await costemerOrdar.create({ data: req.body });
  res.redirect("/order");
};



// let order = require("../../data/order");

// exports.orderPageController = (req, res) => {
//   res.locals = { title: "users", loggedUser: req.session.user, order: order, };
//   res.render("admin/order", { layout: "./admin/layouts/adminLayout",});
// };


// exports.addorderControler = (req, res) => {
//   order.push(req.body)
//   res.redirect("/order")
// };



