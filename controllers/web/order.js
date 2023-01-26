exports.orderFormController = (req, res) => {
    res.render("web/order");
  };
//   const { PrismaClient } = require("@prisma/client");
// const { Menu } = new PrismaClient();
  
//   exports.orderFormController = async(req, res) => {
//     const id = req.params.id;
//     const menu = await Menu.findUnique({
//      where:{
//        id: Number(id)
//      }
//     })
//     res.locals = {title:"menu",  loggedUser: req.session.user,}
//    res.render("web/order", { menu: menu });
//  };