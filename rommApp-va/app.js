const express= require("express");
const app= express();
//const ejs= require("ejs");
const routes = require("./routes/routee.js");


app.set("view engine" , "ejs");
app.set("views","views");
app.use(express.static("public"));


app.use(routes);
 
app.listen(3000,function(){
    console.log("Ich lauche auf http://localHost:3000");
});