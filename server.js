const express = require('express');
const app = express();

app.use("/static", express.static("./static/"))

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("pages/index");
})

app.get("/grupos", function (req, res) {
  res.render("pages/groups");
})

app.listen(8080);
console.log("rodando");
