const { Driver } = require("./models");

const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Hello Drivers!");
});

app.get("/api/drivers", async function (req, res) {
  res.json(await Driver.findAll());
});

app.listen(PORT, () => console.log("App listening on port " + PORT));
