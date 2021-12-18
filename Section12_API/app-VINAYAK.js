const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

// When we reach at the homepage this method is activated and then we send our index.html file to it which contains our form and when we click the submit buttona post request is made which we parse using the body-parser method

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
    console.log(__dirname);
});

app.post('/', function (req, res) {
    console.log(req.body.cityName);
    const place = req.body.cityName;
    const apiKey = "5863868de2847db179dcc8733b73ef75";
    const units = "metric";
    // res.send("Server is up and running"); // We can only have one res.send coz after this the program will not send the 2nd res.send 
    const url = "https://api.openweathermap.org/data/2.5/weather?&q=" + place + "&appid=" + apiKey + "&units=" + units;
    https.get(url, function (response) {
        console.log(response.statusCode);
        // Getting the data from the url and passing it to the function
        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const id = weatherData.weather[0].icon;
            const icon = "http://openweathermap.org/img/wn/" + id + "@2x.png";
            console.log(description);
            console.log(temp);
            res.set("Content-Type", "text/html");
            // We can have multiple res.writes
            res.write("<h2>The weather is " + description + ".</h2>");
            res.write("<h1>The tempreature is :- " + temp + "derees celcius.</h1>");
            res.write("<img src=" + icon + ">");
            res.send();
        });
    })
    //  Now in order to send the current weather from open weather we will make a get request from open weather using their api
    console.log("POST REQUEST RECIEVED");
});

app.listen(3000, function () {
    console.log("Currently on port 3000");
});