const express = require("express");
const homerestorents = require("./routes/restorents");
const aboutpage = require("./routes/about");
const contactpage = require("./routes/contact");
const homepage = require("./routes/home");

const app = express();
app.set("view engine", "ejs");

app.listen(1500);
console.log("Server is running...");

app.use(express.static("public"));
app.use(express.urlencoded());

app.get("/addres", (req, res) => {
  res.render("addres");
});



// Routes
app.use("/", homepage);
app.use("/restorents", homerestorents);
app.use("/about", aboutpage);
app.use("/contacts", contactpage);

// last
app.use((req, res) => {
  res.status(404).render("404");
});
