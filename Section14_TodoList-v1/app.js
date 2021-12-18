//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
    var today=new  Date();
    var currentDay=today.getDay();
    console.log(today);
    if(currentDay===6){
        console.log(today.getDay);
        res.send("I have to work today");
    }else{
        res.send("Still gotta work");
    }
});

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});