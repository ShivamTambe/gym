const express = require ("express");
const path = require ("path");
const ejs = require("ejs");
const app = express();
const bodyparser = require('body-parser');

const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


app.get("/",function(req,res){
    res.render("index");
})

app.listen(port, function(){
    console.log("server is running on prot "+ port);
})