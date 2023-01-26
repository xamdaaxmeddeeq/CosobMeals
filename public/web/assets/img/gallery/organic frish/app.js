const express = require("express");
const expressLayout = require("express-ejs-layouts");
const homeRoute = require("./routers/home");
const aboutRoute = require("./routers/about");
const contactRoute = require("./routers/contact");
const fruitRoute = require("./routers/fruits");

const app = express();
app.set("view engine", "ejs");

app.listen(5000);
console.log("app is running");

///middle were
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressLayout);
app.set("layout", "./layout/websiteLayout");

// Routes of get
app.use("/", homeRoute);
app.use("/about", aboutRoute);
app.use("/contact", contactRoute);
app.use("/fruits", fruitRoute);

// 404 not found
app.use((req, res) => {
  res.render("404");
});
