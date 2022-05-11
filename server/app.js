const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

results = [
  { id: 1, title: "book one", author: "name surname1" },
  { id: 2, title: "book two", author: "name surname2" },
  { id: 3, title: "book three", author: "name surname3" },
  { id: 4, title: "book four", author: "name surname4" },
  { id: 5, title: "book five", author: "name surname5" },
  { id: 6, title: "book six", author: "name surname6" },
  { id: 7, title: "book seven", author: "name surname7" },
  { id: 8, title: "book eight", author: "name surname8" },
  { id: 9, title: "book nine", author: "name surname9" },
  { id: 10, title: "book ten", author: "name surname10" },
];

app.get("/", (req, res) => res.send("Hi Shoreen and Nadir!"));

app.get("/results", (req, res) => {
  res.send(results);
});

app.get("/results/:id", (req, res) => {
  try {
    const resultId = parseInt(req.params.id);
    const result = results[resultId - 1];

    if (!result) {
      throw new Error("this book does not exist");
    } else {
      res.send(result);
    }
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});

app.delete("/results", (req, res) => {
  res.status(204).end();
});
module.exports = app;
