let listOffruits = [
  {
    id: "1",
    name: "papaya",
    details: "waa pappaya aad umacan",
    price: "122.9$",
    discount: "110.5",
    image: "product-3",
  },
];

exports.getFruitsAllController = (req, res) => {
  res.render("fruits", { fruits: listOffruits });
};

exports.Addfruitform = (req, res) => {
  res.render("Addfruits");
};

exports.AddfruitsController = (req, res) => {
  listOffruits.push(req.body);
  res.redirect("/fruits");
};

exports.DeleteFruitController = (req, res) => {
  const id = req.params.id;

  listOffruits = listOffruits.filter((fruit) => fruit.id !== id);

  res.json();
};

exports.UpdateFruitFormController = (req, res) => {
  const id = req.params.id;

  const targetFruit = listOffruits.filter((filter) => filter.id === id);
  res.render("updateFruit", { fruit: targetFruit[0] });
};

exports.UpdateFruitController = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  console.log(id);
  console.log(data);
  for (const fruit of listOffruits) {
    if (fruit.id === id) {
      fruit.id = data.id;
      fruit.name = data.name;
      fruit.details = data.detail;
      fruit.price = data.price;
      fruit.discount = data.discount;
      fruit.image = data.image;

      break;
    }
  }

  res.json();
};
