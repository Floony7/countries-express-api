const express = require("express");
const countries = require("./Countries");

const app = express();

app.get("/api/countries", (req, res) => {
  res.send(countries);
});

app.get("/api/countries/:alpha2Code", (req, res) => {
  const alpha2Code = req.params.alpha2Code.toUpperCase();
  const found = countries.some((c) => c.alpha2Code === alpha2Code);
  const country = countries.find((c) => c.alpha2Code === alpha2Code);
  if (found) {
    res.json(country);
  } else {
    res
      .status(400)
      .json({ msg: `No country could be found with alpha2Code ${alpha2Code}` });
  }
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
