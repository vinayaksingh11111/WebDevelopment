//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://vinayaksingh11111:aVJR3kU2ZV2vfBz@cluster0.sqfyl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/todolistDB");

const itemsSchema = new mongoose.Schema({
  work: String
});

const Item = mongoose.model("item", itemsSchema);

const item1 = new Item({
  work: "Welcome to"
})

const item2 = new Item({
  work: "Todo "
})

const item3 = new Item({
  work: "List"
})

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("list", listSchema);

app.get("/", function (req, res) {
  Item.find({}, function (err, foundItems) {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log("Error!!");
        } else {
          console.log("Success");
        }
      });
      res.redirect('/');
    } else {
      res.render("list", {
        listTitle: "Today",
        newListItems: foundItems
      });
    }
  });
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  // console.log(listName);
  const itemPush = new Item({
    work: itemName
  });
  if (listName === "Today") {
    itemPush.save();
    res.redirect("/");
  } else {
    List.findOne({
      name: listName
    }, function (err, foundList) {
      foundList.items.push(itemPush);
      foundList.save();
      res.redirect('/' + listName);
    });
  }
});

app.get("/:route", function (req, res) {
  const customListName = _.capitalize(req.params.route);
  List.findOne({
    name: customListName
  }, function (err, result) {
    if (err) {
      console.log("Error finding");
    } else {
      if (!result) {
        const list = new List({
          name: customListName,
          items: defaultItems
        });
        list.save();
        res.redirect("/" + customListName);
        console.log(("Absent List " + customListName));
      } else {
        res.render("list", {
          listTitle: result.name,
          newListItems: result.items
        });
      }
    }
  });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/delete", function (req, res) {
  // console.log(req.body.checkbox);
  const listName = req.body.listName;
  console.log(listName);
  if (listName === "Today") {
    Item.deleteOne({
      _id: req.body.checkbox
    }, function (err) {
      if (err) {
        console.log("Error Deleting");
      } else {
        console.log("Deleted");
        res.redirect("/");
      }
    });
  } else {
    List.findOneAndUpdate({
      name: listName,
    }, {
      $pull: {
        items: {
          _id: req.body.checkbox
        }
      }
    }, function (err, foundList) {
      if (err) {
        console.log("Error in Deleting from custom list");
      } else {
        console.log("No error in Deleting from custom list");
        res.redirect("/" + listName);
      }
    });
  }

});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});