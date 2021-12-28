const mongoose = require('mongoose');

// Connecting to the mongodb server
mongoose.connect("mongodb://localhost:27017/fruitsDB");

// Creating a schema of how our entry will look like
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // Introducing validation to rating i.e rating should be between 0 and 10 if not then error
    rating: {
        type: Number,
        min: 0,
        max: 10

    },
    review: String
});

// Creating a db model that has table name fruit and follows fruitSchema
const Fruit = mongoose.model("fruit", fruitSchema);

// Creating the fruit that we want to add to the collection 
const fruit = new Fruit({
    name: "Apple",
    rating: 10,
    review: "Great fruit"
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Bitter Sweet fruit"
});

pineapple.save();

const akhil = new Person({
    name: "Akhil",
    age: 37,
    favoriteFruit: pineapple
});

// akhil.save();

// Saving the fruit to the db
// fruit.save();

// person.save();

const mango = new Fruit({
    name: "Mango",
    rating: 10,
    review: "Great fruit"
});

const banana = new Fruit({
    name: "Banana",
    rating: 10,
    review: "Awesome"
});

const orange = new Fruit({
    name: "Orange",
    rating: 5,
    review: "Juice better"
});

// Fruit.insertMany([mango, banana, orange], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully inserted 3 fruits");
//     }
// });

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
        // mongoose.connection.close();
    }
});

// Fruit.updateOne({
//     _id: "61c8cd59dd2079e434af4e7c"
// }, {
//     name: "Peach"
// }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated");
//     }
// });

// Fruit.deleteOne({
//     _id: "61c8cd59dd2079e434af4e7c"
// }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted");
//     }
// });

// Fruit.deleteMany({
//     name: "Pineapple"
// }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted pineapple");
//     }
// });

// Person.deleteMany({
//     name: "Akhil"
// }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted John");
//     }
// });

Person.updateOne({
    name: "John"
}, {
    favoriteFruit: mango
}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated John's fruit");
    }
});