const res = require("express/lib/response");
const houses = require("./db.json");
let houseId = 4;
module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houses);
  },
  deleteHouse: (req, res) => {
    let { id } = req.params;
    let index = houses.findIndex((house) => +houses.id === +id);
    houses.splice(index, 1);
    res.status(200).send(houses);
  },
  createHouse: (req, res) => {
    const { address, price, imageURL } = req.body;
    let newHouse = {
      id: houseId,
      address,
      price: 0,
      imageURL,
    };
    houses.push(newHouse);
    res.status(200).send(houses);
    houseId++;
  },
  updateHouse: (req, res) => {
    let { id } = req.params;
    let { type } = req.body;
    let index = houses.findIndex((house) => +house.id === +id);
    if (houses[index].price === 0 && type === "minus") {
      res.status(400).send("You cannot go lower than 0");
    } else if (type === "minus") {
      houses[index].price -= 10000;
      res.status(200).send(houses);
    } else if (type === "plus") {
      houses[index].price += 10000;
      res.status(200).send(houses);
    } else {
      res.sendstatus(400);
    }
  },
};
