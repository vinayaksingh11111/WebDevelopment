const express = require("express");
var bodyParser = require('body-parser')
// This library help us to parse the content of what is that we posted on the site
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
    // __dirname gets the directory we are currently in and then in that directory find index.html
    console.log(__dirname + "/index.html");
});

// When we click submit button inside our form tag, the post action is activated and it sends the msg 
app.post('/', function (req, res) {
    // res.send("ans ");
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var ans = n1 + n2;
    res.send("ans " + ans);
});

app.get('/bmicalculator', function (req, res) {
    res.sendFile(__dirname + "/bmicalculator.html")
});

app.post('/bmicalculator', function (req, res) {
    var wt = Number(req.body.wt);
    var ht = Number(req.body.ht);
    var bmi = wt * wt / ht;
    res.send("Your BMI is " + bmi);
});

app.listen(3000, function () {
    console.log("Server listening on PORT 3000");
});