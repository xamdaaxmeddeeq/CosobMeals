const express = require("express");

const router = express.Router();

let slHotels = [
  {
    id: 1,
    name: "maamuus hotel",
    description: "welcome Maamuus hotel in somaliland",
    famousFood: ["soub", "fish", "chicken"],
    votes: 1,
    image: "https://i.ytimg.com/vi/gFTVfSo7b4E/mqdefault.jpg",
  },

  {
    id: 2,
    name: "Ali jird hotel",
    description: "welcome Ali jirde hotel in somaliland",
    famousFood: ["soub", "fish"],
    image: "https://i.ytimg.com/vi/gFTVfSo7b4E/mqdefault.jpg",
  },
  {
    id: 3,
    name: "Ramaas hotel",
    description: "welcome Ramaas hotel in somaliland",
    famousFood: ["spinsh salat", "fish", "chicken"],
    image:
      "https://www.somalilandbooking.com/jomres/uploadedimages/54/property/0/28335902_159686321500655_2812156397368362071_o.jpg",
  },

  {
    id: 4,
    name: "Golder hotel",
    description: "welcome Golden hotel in somaliland",
    famousFood: ["soub", "fish", "chicken"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5h_IAPkBtf1mgmJ0FsrNHho1g12oOLZIVw&usqp=CAU",
  },

  {
    id: 5,
    name: "Guuleed hotel",
    description: "welcome Guuleed hotel in somaliland",
    famousFood: ["soub", "fish", "chicken"],
    image: "https://i.ytimg.com/vi/gFTVfSo7b4E/mqdefault.jpg",
  },

  {
    id: 6,
    name: "kaah hotel",
    description: "welcome kaah hotel in somaliland",
    famousFood: ["soub", "fish", "chicken"],
    image: "https://i.ytimg.com/vi/gFTVfSo7b4E/mqdefault.jpg",
  },
];

router.get("/", (req, res) => {
  res.render("restorents", { hotels: slHotels });
});

// Get in update form
router.get("/updateform/:id", (req, res) => {
  res.render("updateform");
});

router.post("/", (req, res) => {
  console.log(req.body);
  const newhotel = {
    id: 7,
    name: req.body.name,
    description: req.body.description,
    famousFood: ["omelate", "soup", "shawarma"],
  };
  // adding
  slHotels.push(newhotel);

  res.redirect("/restorents");
});

router.get("/restorent", (req, res) => {
  res.render("restorent", { hotels: slHotels });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const targethotel = slHotels.filter((hotel) => hotel.id === Number(id));
  // console.log(targetSchool);
  res.render("restorent", { hotel: targethotel[0] });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  slHotels = slHotels.filter((hotel) => hotel.id !== Number(id));

  res.json();
});

// router.get("/restorent:id", (req, res) => {})
module.exports = router;
