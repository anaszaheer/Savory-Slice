const express = require("express");
const app = express();
const port = 3000;
const exphbs = require("express-handlebars");
const path = require("path");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "../views"));

//static folder
app.use(express.static("public"));

//routes
const main = require("../routes/main");

app.use("/", main);

module.exports = app;
// app.listen(port, console.log(`Listening on port: ${port}`))
