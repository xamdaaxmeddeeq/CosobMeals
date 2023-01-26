const { PrismaClient } = require("@prisma/client");
const { contact } = new PrismaClient();

exports.contactPageController = async (req, res) => {
  const contacts = await contact.findMany();

  res.locals = {
    title: "users",
    loggedUser: req.session.user,

    contacts, 
  };
  res.render("admin/contacts", {
    layout: "./admin/layouts/adminLayout",
  });
}

exports.contactUsControler = async (req, res) => {
  const createContact = await contact.create({ data: req.body });
  res.redirect("/contact");
};













// let contacts = require("../../data/contacts");
// // const { PrismaClient } = require("@prisma/client");
// // const { cntcts } = new PrismaClient();

// exports.contactPageController = (req, res) => {
//   res.locals = {
//     title: "contacts",
//     loggedUser: req.session.user,
//     contacts: contacts,
//   };
//   res.render("admin/contacts", { layout: "./admin/layouts/adminLayout" });
// };

// exports.postContactFoodControler = (req, res) => {
//   contacts.push(req.body);

//   // console.log(req.body);
//   // res.locals = {title: "contact"};
//   // res.json()
//   res.redirect("/contact");
// };

// // exports.adduserControler = async (req, res) => {
// //   const createUser = await user.create({ data: req.body });
// //   res.redirect("/admin/users");
// // };
