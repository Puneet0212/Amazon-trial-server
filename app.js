var express = require("express");

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/register");

// var db = mongoose.connection;
// db.on("error", console.log.bind(console, "failed to connect mongodb"));
// db.once("open", function(callback) {
//   console.log("connected to mongodb");
// });

var app = express();

app.use(express.json());





const PORT = process.env.PORT||4000;

app.get("/", function(request, response) {response.send("Hello World")});

app.listen(PORT);

console.log("server listening at port", PORT);