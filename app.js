const express = require("express");
const homeController = require("./routes/web/index");
const aboutController = require("./routes/web/about");
const foodController = require("./routes/web/food");
const contactController = require("./routes/web/contact");
const eventController = require("./routes/web/event");
const orderController = require("./routes/web/order");

const expressLayouts = require("express-ejs-layouts");
const i18n = require("i18n-express");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");

// addmin requirements
const dashboardRoutes = require("./routes/admin/dashboard");
const usersdRoutes = require("./routes/admin/users");
const menudRoutes = require("./routes/admin/menu");
const contactRoutes = require("./routes/admin/contacts");
const orderRoute = require("./routes/admin/order");

const loginRoutes = require("./routes/auth/login");

// Express Server
const app = express();
app.listen(1000);
console.log("Our sever is running...");

// Ejs
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./web/layouts/websiteLayout"); // Default Layout

// Middlwares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  i18n({
    translationsPath: path.join(__dirname, "i18n"), // <--- use here. Specify translations files path.
    siteLangs: ["es", "en", "de", "ru", "it", "fr"],
    textsVarName: "translation",
  })
);

// Middlware for authentication
app.use(
  session({
    key: "user_sid",
    secret: "somerandonstuffs",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 200000,
    },
  })
);
app.use(
  session({ resave: false, saveUninitialized: true, secret: "nodedemo" })
);

// Middlware for errors
app.use(flash());

// WEB ROUTES
app.use("/", homeController);
app.use("/about", aboutController);
app.use("/menu", foodController);
app.use("/contact", contactController);
app.use("/event", eventController);
app.use("/order", orderController);

// ADMIN ROUTES
app.use("/admin", dashboardRoutes);
app.use("/admin/users", usersdRoutes);
app.use("/admin/menu", menudRoutes);
app.use("/admin/contacts", contactRoutes);
app.use("/admin/Order", orderRoute);

// AUTH ROUTES
app.use("/auth/login", loginRoutes);
