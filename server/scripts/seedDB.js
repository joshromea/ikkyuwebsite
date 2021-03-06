const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ikkyumenu', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const menuSeed = [{
    name: "Teriyaki Chicken",
    description: "Chicken marinated with our teriyaki sauce, broiled and sautéed with mushrooms and zucchini.",
    category: 'donburi',
    image: '../../client/images/chickendon.jpg',
    price: "$8.01"
},
{
    name: "Teriyaki Pork",
    description: "Sautéed pork with teriyaki sauce, chili oil and scallions",
    category: 'donburi',
    image: '../../client/images/teriporkdon.jpg',
    price: "$8.01"
},
{
    name: "Yakiniku Beef",
    description: "Beef marinated with our teriyaki sauce, sautéed with mushrooms and zucchini.",
    category: 'donburi',
    image: '../../client/images/yakinikudon.jpg',
    price: "$8.01"
},
{
    name: "Akuma",
    description: "Pork and cabbage in our hot & spicy sauce.",
    category: 'donburi',
    image: '../../client/images/akumadon.jpg',
    price: "$8.01"
},
{
    name: "Vegetable",
    description: "Assortment of fresh veggies sautéed in our teriyaki sauce with sesame oil.",
    category: 'donburi',
    image: '../../client/images/veggiedon.jpg',
    price: "$7.54"
},
{
    name: "Ginger Pork",
    description: "Pork sautéed in our ginger sauce. Topped off with pickled ginger on top.",
    category: 'donburi',
    image: '../../client/images/gingerpork.jpg',
    price: "$8.01"
},
{
    name: "Tofu Don",
    description: "Cold tofu and seaweed salad served over sushi rice. garnished with sesame seeds, bonito flakes, scallions in our house made sauce.",
    category: 'donburi',
    price: "$8.91"
},
{
    name: "Sukiyaki",
    description: "Beef or Chicken breast, sukiyaki noodles, nappa cabbage, tofu and onion cooked in our sukiyaki sauce.",
    category: 'donburi',
    image: '../../client/images/sukiyaki.jpg',
    price: "$8.47"
},
{
    name: "Spicy Tuna Don",
    description: "Spicy Tuna served over sushi rice, garnished with seaweed, sesame seeds and scallions. Served with a side of Miso Soup. (This dish is served RAW) add Volcano Style for $1.00. Volcano Style: Unagi Sauce, Spicy Mayo and crunchy Tempura flakes added on top.",
    category: 'donburi',
    image: {
        regular: '../../client/images/tunadon.jpg',
        volcano: '../../client/images/tunavolcano.jpg'
    },
    price: "$10.30"
},

{
    name: "Teriyaki Chicken",
    description: "Chicken marinated with our teriyaki sauce. Served with rice, edamame, seaweed salad and potato salad.",
    category: 'bento',
    image: '../../client/images/chickenbento.jpg',
    price: "$9.90"
},
{
    name: "Yakiniku Beef",
    description: "Beef marinated with our teriyaki sauce. Served with rice, edamame, seaweed salad and potato salad.",
    category: 'bento',
    price: "$9.90"
},
{
    name: "Teriyaki Pork",
    description: "Pork sautéed in our teriyaki sauce, chili oil and scallions. Served with rice, edamame, seaweed salad and potato salad.",
    category: 'bento',
    price: "$9.90"
},
{
    name: "Akuma (Spicy Pork)",
    description: "Pork and cabbage in our hot & spicy sauce. Served with rice, edamame, seaweed salad and potato salad.",
    category: 'bento',
    price: "$9.90"
},
{
    name: "Ginger Pork",
    description: "Pork sautéed in our ginger sauce. Served with rice, edamame, seaweed salad and potato salad.",
    category: 'bento',
    price: "$9.90"
},
{
    name: "Gyoza (7 Pieces)",
    description: "House made Pork and vegetable pot stickers that are steamed and then pan fried. Served with dipping sauce, rice, edamame, seaweed salad and potato salad. ",
    category: 'bento',
    image: '../../client/images/gyozabento.jpg',
    price: "$9.90"
},
{
    name: "Salmon Bento",
    description: "Broiled Salmon. Served with rice, edamame, seaweed salad and squid salad.",
    category: 'bento',
    image: '../../client/images/salmonbento.jpg',
    price: "$10.13"
},
{
    name: "Special",
    description: "Teriyaki chicken, veggie yakisoba, potato salad and rice",
    category: 'other',
    image: '../../client/images/special.jpg',
    price: "$9.90"
},
{
    name: "Yakisoba Noodles",
    description: "Japanese stir-fry noodles cooked with assorted veggies flavored with yakisoba sauce.",
    category: 'other',
    image: '../../client/images/yakisoba.jpg',
    price: "Chicken: $8.95 Beef: $8.95 Pork: $8.95 Vegetable: $8.25"
},
{
    name: "Teppan",
    description: "Sautéed assortment of fresh veggies. Served with rice and a side of house made tangy ginger sauce.",
    category: 'other',
    price: "Chicken: $8.95 Beef: $8.95 Pork: $8.95 Vegetable: $7.78"
},
{
    name: "Curry",
    description: "Japanese style vegetable and chicken stew served over rice.",
    category: 'other',
    image: '../../client/images/curry.jpg',
    price: "$8.72"
},
{
    name: "Udon",
    description: "Udon noodles in a chicken and fish broth. Topped with seaweed, scallions and a slice of fish cake.",
    category: 'other',
    price: "$7.54 Add 2 pieces of Shrimp Tempura on top: $9.66"
},

{
    name: "Ikkyu Roll",
    description: "Spicy tuna, avocado, crabs stick and squid salad topped with unagi sauce",
    category: 'sushi',
    image: '../../client/images/ikkyuroll.jpg',
    price: "$8.72"
},
{
    name: "California Roll",
    description: "Crab stick and avocado.",
    category: 'sushi',
    image: '../../client/images/caliroll.jpg',
    price: "$5.61"
},
{
    name: "Banzai Roll",
    description: "Hot/Spicy crabstick roll.",
    category: 'sushi',
    image: '../../client/images/banzai.jpg',
    price: "$5.89"
},
{
    name: "Spicy Tuna Roll",
    description: "Spicy Tuna (raw fish).",
    category: 'sushi',
    image: '../../client/images/spicytunaroll.jpg',
    price: "$7.07"
},
{
    name: "Inari",
    description: "Seasoned tofu pockets with sushi rice inside (5 pieces).",
    category: 'sushi',
    image: '../../client/images/inari.jpg',
    price: "$6.36"
},
{
    name: "Inari/Spicy Tuna",
    description: "Inari (3 Pieces) topped with spicy tuna, scallions, seaweed and sesame seeds. Served with a side of miso soup",
    category: 'sushi',
    image: '../../client/images/inarituna.jpg',
    price: "$9.19"
},
{
    name: "Super Hiro Roll",
    description: "Shrimp tempura, spicy tuna, avocado, crab stick and cucumber. Topped with unagi sauce.",
    category: 'sushi',
    image: '../../client/images/superhiro.jpg',
    price: "$8.95"
},
{
    name: "Boiled Salmon/Cucumber Roll",
    description: "Broiled Salmon with cucumber.",
    category: 'sushi',
    image: '../../client/images/salmonroll.jpg',
    price: "$7.07"
},
{
    name: "Spicy Salmon Roll",
    description: "Broiled Salmon with cucumber topped with spicy mayo.",
    category: 'sushi',
    image: '../../client/images/spicysalmon.jpg',
    price: "$7.30"
},
{
    name: "Shrimp Tempura Roll",
    description: "Shrimp tempura, avocado and crab stick. Topped with spicy mayo.",
    category: 'sushi',
    image: '../../client/images/shrimptemp.jpg',
    price: "$7.07"
},
{
    name: "Ninja Roll",
    description: "Spicy tuna, avocado and crab stick rolled in tempura flakes. Topped with unagi sauce.",
    category: 'sushi',
    image: '../../client/images/ninjaroll.jpg',
    price: "$8.44"
},
{
    name: "Philly Roll",
    description: "Broiled salmon, cucumber and cream cheese.",
    category: 'sushi',
    image: '../../client/images/philly.jpg',
    price: "$7.78"
},
{
    name: "Baked Scallop California Roll",
    description: "California roll topped with baked scallops in spicy mayo and scallions.",
    category: 'sushi',
    image: '../../client/images/scallop.jpg',
    price: "$8.62"
},
{
    name: "Kappa Maki",
    description: "Cucumber roll.",
    category: 'sushi',
    image: '../../client/images/kappa.jpg',
    price: "$4.67"
},

{
    name: "Gyoza (7 Pieces)",
    category: 'alacarte',
    image: '../../client/images/gyoza.jpg',
    price: "$7.30"
},
{
    name: "Squid Salad",
    category: 'alacarte',
    price: "$5.18"
},
{
    name: "Seaweed Salad",
    category: 'alacarte',
    price: "$4.24"
},
{
    name: "Edamame",
    category: 'alacarte',
    price: "$3.06"
},
{
    name: "Cold Tofu",
    category: 'alacarte',
    price: "$5.42"
},
{
    name: "Miso Soup",
    category: 'alacarte',
    price: "$2.36"
},

{
    name: "Soda, Iced Tea (Black or Matcha), Hot Tea",
    category: "drinks",
    price: "$2.36"
},

{
    name: "Unagi Sauce",
    category: "addon",
    price: "$.25"
},
{
    name: "Spicy Mayo",
    category: "addon",
    price: "$.25"
},
{
    name: "Teriyaki Sauce",
    category: "addon",
    price: "$.25"
},
{
    name: "Teppan Sauce",
    category: "addon",
    price: "$.65"
},
{
    name: "Potato Salad",
    category: "addon",
    price: "$.71"
},
{
    name: "Volcano Style",
    category: "addon",
    price: "$1.00"
},

{
    name: "Tonkotsu Ramen",
    description: "Thick broth from pork bones with spicy ground pork. Topped with chashu (pork slice), fishcake, scallions and bamboo shoots.",
    category: "ramen",
    image: '../../client/images/tonkotsu.jpg',
    price: "$10.13"
},
{
    name: "Miso Ramen",
    description: "Miso flavored broth with garlic, ground pork, onions and bean sprouts. Topped with chashu (pork slice), fishcake, scallions and bamboo shoots.",
    category: "ramen",
    image: '../../client/images/misoramen.jpg',
    price: "$10.13"
},
{
    name: "Shoyu Ramen",
    description: "Soy Sauce flavored broth. Topped with chashu (pork slice), fishcake, scallions and bamboo shoots.",
    category: "ramen",
    price: "$10.13"
},
{
    name: "Black Tantanmen Ramen",
    description: "Tonkotsu and Black Sesame paste broth with bean sprouts. Topped with spicy ground pork, scallions, bok choi and shredded red pepper.",
    category: "ramen",
    image: '../../client/images/blacktan.jpg',
    price: "$10.30"
},

{
    name: "Noodles",
    category: "ramenaddon",
    price: "$1.89"
},
{
    name: "Broth",
    category: "ramenaddon",
    price: "$1.89"
},
{
    name: "Ground Pork",
    category: "ramenaddon",
    price: "$1.41"
},
{
    name: "Bean Sprouts",
    category: "ramenaddon",
    price: "$.75"
},
{
    name: "Mixed Veggies",
    category: "ramenaddon",
    price: "$1.65"
},
{
    name: "Chashu",
    category: "ramenaddon",
    price: "$2.36"
},
{
    name: "Fish Cake",
    category: "ramenaddon",
    price: "$.94"
},
{
    name: "Green Onions",
    category: "ramenaddon",
    price: "$.75"
},
{
    name: "Bamboo Shoots",
    category: "ramenaddon",
    price: "$.94"
},
{
    name: "Onion",
    category: "ramenaddon",
    price: "$.75"
},
{
    name: "Bok Choi",
    category: "ramenaddon",
    price: "$.94"
},
{
    name: "Shredded Red Pepper",
    category: "ramenaddon",
    price: "$.94"
}
];

db.Menu
    .remove({})
    .then(() =>
        db.Menu.collection.insertMany(
            menuSeed
        )
    )
    .then(data => {
        console.log(data);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });