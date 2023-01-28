const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name : String,
    rating : {
        type: Number,
        min: 1,
        max: 10
    },
    review : String
});

const Fruit = mongoose.model("fruits", fruitSchema);

// const kiwi = new Fruit ({
//     name: "Kiwi",
//     rating: 7,
//     review: "Awesome!"
// });

// const banana = new Fruit ({
//     name: "Banana",
//     rating: 7,
//     review: "Pretty solid as a fruit."
// });

// const orange = new Fruit ({
//     name: "Orange",
//     rating: 3,
//     review: "Bad Texture."
// });

// // Fruit.insertMany([kiwi,orange,banana], function(err) {
// //     if(err) {
// //         console.log(err);
// //     } else {
// //         console.log("Succesfully saved all the fruits to fruitsDB")
// //     }
// // });

Fruit.find(function(err, fruits) {
    if(err) {
        console.log(err);
    } else {
        fruits.forEach(element => {
            console.log(element.name);
        });
    }
});