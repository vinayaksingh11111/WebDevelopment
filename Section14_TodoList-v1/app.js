//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");   
//  We receive a js object in which we have all the things that we have exported from the file in this and in order to access the function we just write date.getDate();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"))

const items = ["Take bath", "Study", "Play football"];
const workItems = [];

// Telling the express that is generated using the express to use ejs as view engine
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    // console.log(date.getDate());  So here we have accessed the function in oir date.js file
    res.render('list', {
        listTitle: date.getDate(),
        // listTitle:date.getDay(),
        addTask: items
    });
});

app.post("/", function (req, res) {
    const ret = req.body.list;
    console.log(req.body);
    const item = req.body.todo;
    if (ret === "Work") {
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item); // Pushing the task that we are posting in form to the list
        res.redirect('/'); // Redirecting to the home route i.e the app.get function
    }
});

app.get("/work", function (req, res) {
    res.render('list', {
        listTitle: "Work List",
        addTask: workItems
    });
});

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});