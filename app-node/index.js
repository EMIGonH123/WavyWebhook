var express = require('express');
var morgan = require("morgan");
var app = express();

//set view engine
app.set("view engine", "jade")
app.use(morgan("dev"));
app.set("PORT", 5000);

app.get('/', function(req, res) {
    res.render('index');
});

// docker build -t "app-node:image02" . ---> Creacion de la imagen
// docker images
// docker run -dti --name "app-node-cont03" -p 6001:5000 "app-node:image02" --->Creacion del contenedor como demonio
var server = app.listen(app.get("PORT"), function() {
    console.log(`---> Server is running in port: ${app.get("PORT")}`);
});