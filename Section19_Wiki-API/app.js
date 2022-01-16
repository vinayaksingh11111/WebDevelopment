const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("article", articleSchema);

app.get("/", function (req, res) {
    res.send("Hello");
});

app.route("/articles")
    .get(function (req, res) {
        Article.find({}, function (err, foundArticles) {
            if (err) {
                res.send(err);
            } else {
                res.send(foundArticles);
            }
        });
    })
    .post(function (req, res) {
        console.log(req.body.title);
        console.log(req.body.content);
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
        console.log(newArticle);
        newArticle.save(function (err) {
            if (!err) {
                res.send("Successfully added a new article.");
            } else {
                console.log("Error");
                res.send(err);
            }
        });
    })
    .delete(function (req, res) {
        Article.deleteMany(function (err) {
            if (err) {
                console.log("Error");
            } else {
                console.log("Success");
            }
        });
    });

app.route("/articles/:articleTitle")
    .get(function (req, res) {
        Article.findOne({
            title: req.params.articleTitle
        }, function (err, foundArticle) {
            if (foundArticle) {
                res.send(foundArticle);
            } else {
                res.send("No article for the given title");
            }
        })
    })
    .put(function (req, res) {
        Article.updateOne({
            title: req.params.articleTitle
        }, {
            $set: {
                title: req.body.title,
                content: req.body.content
            }
        }, function (err) {
            if (err) {
                console.log(err);
            } else {
                res.send("No error in updating");
            }
        });
    })
    .patch(function (req, res) {
        Article.updateOne({
                title: req.params.articleTitle
            }, {
                // Will update the given field only
                $set: req.body
            },
            function (err) {
                if (!err) {
                    res.send("Successfully updated article.");
                } else {
                    res.send(err);
                }
            }
        );
    })
    .delete(function (req, res) {

        Article.deleteOne({
                title: req.params.articleTitle
            },
            function (err) {
                if (!err) {
                    res.send("Successfully deleted the corresponding article.");
                } else {
                    res.send(err);
                }
            }
        );
    });
app.listen(3000, function () {
    console.log("Server started on port 3000.");
});