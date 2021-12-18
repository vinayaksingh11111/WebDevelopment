const express = require("express");
const app = express();

app.get("/", function(req, res){
    console.log(req);
    res.send("<h1>Hello World</h1>")
});
// This means that whenever our get request is sent to our root/homepage(i.e localhost:3000) of our website(represented by /) the function defined is triggered and it sends the response as shown and logs the content of the request

// Now if we went to our contact page(i.e.localhost:3000/contact) then we want to show the user below output on the screen
app.get("/contact",function(req,res){
    console.log(req);
    res.send("This is a contact me page");
});

app.get("/about",function(req,res){
    console.log(req);
    res.send("This is a about me page");
});

app.get("/hobbies",function(req,res){
    res.send("This is a hobbies page");
});

app.listen(3000, function(){
    console.log("Server listening on PORT 3000");
});