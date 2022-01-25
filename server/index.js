const express = require("express");
const cors = require("cors");
const baseEnd = "/api/houses/";
const app = express();
app.use(cors());
app.use(express.json());

const {
  getHouses,
  deleteHouse,
  createHouse,
  updateHouse,
} = require("./controller");

app.get(baseEnd, getHouses);
app.delete(`${baseEnd}` + ":id", deleteHouse);
app.post(baseEnd, createHouse);
app.put(`${baseEnd}` + ":id", updateHouse);

const port = 4004;
app.listen(port, console.log("you are on 4004"));
