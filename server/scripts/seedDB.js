const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ikkyumenu', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const menuSeed = [{
        name: "Teriyaki Chicken",
        description: "Chicken marinated with our teriyaki sauce, broiled and sautéed with mushrooms and zucchini.",
        price: "$8.01"
    },
    {
        name: "Teriyaki Pork",
        description: "Sautéed pork with teriyaki sauce, chili oil and scallions",
        price: "$8.01"
    },
    {
        name: "Yakiniku Beef",
        description: "Beef marinated with our teriyaki sauce, sautéed with mushrooms and zucchini.",
        price: "$8.01"
    },
    {
        name: "Akuma",
        description: "Pork and cabbage in our hot & spicy sauce.",
        price: "$8.01"
    },
    {
        name: "Vegetable",
        description: "Assortment of fresh veggies sautéed in our teriyaki sauce with sesame oil.",
        price: "$7.54"
    },
    {
        name: "Ginger Pork",
        description: "Pork sautéed in our ginger sauce. Topped off with pickled ginger on top.",
        price: "$8.01"
    },
    {
        name: "Tofu Don",
        description: "Cold tofu and seaweed salad served over sushi rice. garnished with sesame seeds, bonito flakes, scallions in our house made sauce.",
        price: "$8.91"
    },
    {
        name: "Sukiyaki",
        description: "Beef or Chicken breast, sukiyaki noodles, nappa cabbage, tofu and onion cooked in our sukiyaki sauce.",
        price: "$8.47"
    },
    {
        name: "Spicy Tuna Don",
        description: "Spicy Tuna served over sushi rice, garnished with seaweed, sesame seeds and scallions. Served with a side of Miso Soup. (This dish is served RAW) add Volcano Style for $1.00. Volcano Style: Unagi Sauce, Spicy Mayo and crunchy Tempura flakes added on top.",
        price: "$10.30"
    },

    {
        name: "Teriyaki Chicken",
        description: "Chicken marinated with our teriyaki sauce. Served with rice, edamame, seaweed salad and potato salad.",
        price: "$9.90"
    },
    {
        name: "Yakiniku Beef",
        description: "Beef marinated with our teriyaki sauce. Served with rice, edamame, seaweed salad and potato salad.",
        price: "$9.90"
    },
    {
        name: "Teriyaki Pork",
        description: "Pork sautéed in our teriyaki sauce, chili oil and scallions. Served with rice, edamame, seaweed salad and potato salad.",
        price: "$9.90"
    },
    {
        name: "Akuma (Spicy Pork)",
        description: "Pork and cabbage in our hot & spicy sauce. Served with rice, edamame, seaweed salad and potato salad.",
        price: "$9.90"
    },
    {
        name: "Ginger Pork",
        description: "Pork sautéed in our ginger sauce. Served with rice, edamame, seaweed salad and potato salad.",
        price: "$9.90"
    },
    {
        name: "Gyoza (7 Pieces)",
        description: "House made Pork and vegetable pot stickers that are steamed and then pan fried. Served with dipping sauce, rice, edamame, seaweed salad and potato salad. ",
        price: "$9.90"
    },
    {
        name: "Salmon Bento",
        description: "Broiled Salmon. Served with rice, edamame, seaweed salad and squid salad.",
        price: "$10.13"
    },
    {
        name: "Special",
        description: "Teriyaki chicken, veggie yakisoba, potato salad and rice",
        price: "$9.90"
    },
    {
        name: "Yakisoba Noodles",
        description: "Japanese stir-fry noodles cooked with assorted veggies flavored with yakisoba sauce.",
        price: "Chicken: $8.95 Beef: $8.95 Pork: $8.95 Vegetable: $8.25"
    },
    {
        name: "Teppan",
        description: "Sautéed assortment of fresh veggies. Served with rice and a side of house made tangy ginger sauce.",
        price: "Chicken: $8.95 Beef: $8.95 Pork: $8.95 Vegetable: $7.78"
    },
    {
        name: "Curry",
        description: "Japanese style vegetable and chicken stew served over rice.",
        price: "$8.72"
    },
    {
        name: "Udon",
        description: "Udon noodles in a chicken and fish broth. Topped with seaweed, scallions and a slice of fish cake.",
        price: "$7.54 Add 2 pieces of Shrimp Tempura on top: $9.66"
    },

    {
        name: "Ikkyu Roll",
        description: "Spicy tuna, avocado, crabs stick and squid salad topped with unagi sauce",
        price: "$8.72"
    },
    {
        name: "California Roll",
        description: "Crab stick and avocado.",
        price: "$5.61"
    },
    {
        name: "Banzai Roll",
        description: "Hot/Spicy crabstick roll.",
        price: "$5.89"
    },
    {
        name: "Spicy Tuna Roll",
        description: "Spicy Tuna (raw fish).",
        price: "$7.07"
    },
    {
        name: "Inari",
        description: "Seasoned tofu pockets with sushi rice inside (5 pieces).",
        price: "$6.36"
    },
    {
        name: "Inari/Spicy Tuna",
        description: "Inari (3 Pieces) topped with spicy tuna, scallions, seaweed and sesame seeds. Served with a side of miso soup",
        price: "$9.19"
    },
    {
        name: "Super Hiro Roll",
        description: "Shrimp tempura, spicy tuna, avocado, crab stick and cucumber. Topped with unagi sauce.",
        price: "$8.95"
    },
    {
        name: "Boiled Salmon/Cucumber Roll",
        description: "Broiled Salmon with cucumber.",
        price: "$7.07"
    },
    {
        name: "Spicy Salmon Roll",
        description: "Broiled Salmon with cucumber topped with spicy mayo.",
        price: "$7.30"
    },
    {
        name: "Shrimp Tempura Roll",
        description: "Shrimp tempura, avocado and crab stick. Topped with spicy mayo.",
        price: "$7.07"
    },
    {
        name: "Ninja Roll",
        description: "Spicy tuna, avocado and crab stick rolled in tempura flakes. Topped with unagi sauce.",
        price: "$7.54 Add 2 pieces of Shrimp Tempura on top: $9.66"
    },
    {
        name: "Philly Roll",
        description: "Broiled salmon, cucumber and cream cheese.",
        price: "$7.78"
    },
    {
        name: "Baked Scallop California Roll",
        description: "California roll topped with baked scallops in spicy mayo and scallions.",
        price: "$8.62"
    },
    {
        name: "Kappa Maki",
        description: "Cucumber roll.",
        price: "$4.67"
    },

    {
        name: "Gyoza (7 Pieces)",
        price: "$7.30"
    },
    {
        name: "Squid Salad",
        price: "$5.18"
    },
    {
        name: "Seaweed Salad",
        price: "$4.24"
    },
    {
        name: "Edamame",
        price: "$3.06"
    },
    {
        name: "Cold Tofu",
        price: "$5.42"
    },
    {
        name: "Miso Soup",
        price: "$2.36"
    },

    {
        name: "Soda, Iced Tea (Black or Matcha), Hot Tea",
        price: "$2.36"
    },

    {
        name: "Unagi Sauce",
        price: "$.25"
    },
    {
        name: "Spicy Mayo",
        price: "$.25"
    },
    {
        name: "Teriyaki Sauce",
        price: "$.25"
    },
    {
        name: "Teppan Sauce",
        price: "$.65"
    },
    {
        name: "Potato Salad",
        price: "$.71"
    },
    {
        name: "Volcano Style",
        price: "$1.00"
    },

    {
        name: "Tonkotsu Ramen",
        description: "Thick broth from pork bones with spicy ground pork. Topped with chashu (pork slice), fishcake, scallions and bamboo shoots.",
        price: "$10.13"
    },
    {
        name: "Miso Ramen",
        description: "Miso flavored broth with garlic, ground pork, onions and bean sprouts. Topped with chashu (pork slice), fishcake, scallions and bamboo shoots.",
        price: "$10.13"
    },
    {
        name: "Shoyu Ramen",
        description: "Soy Sauce flavored broth. Topped with chashu (pork slice), fishcake, scallions and bamboo shoots.",
        price: "$10.13"
    },
    {
        name: "Black Tantanmen Ramen",
        description: "Tonkotsu and Black Sesame paste broth with bean sprouts. Topped with spicy ground pork, scallions, bok choi and shredded red pepper.",
        price: "$10.30"
    },

    {
        name: "Noodles",
        price: "$1.89"
    },
    {
        name: "Broth",
        price: "$1.89"
    },
    {
        name: "Ground Pork",
        price: "$1.41"
    },
    {
        name: "Bean Sprouts",
        price: "$.75"
    },
    {
        name: "Mixed Veggies",
        price: "$1.65"
    },
    {
        name: "Chashu",
        price: "$2.36"
    },
    {
        name: "Fish Cake",
        price: "$.94"
    },
    {
        name: "Green Onions",
        price: "$.75"
    },
    {
        name: "Bamboo Shoots",
        price: "$.94"
    },
    {
        name: "Onion",
        price: "$.75"
    },
    {
        name: "Bok Choi",
        price: "$.94"
    },
    {
        name: "Shredded Red Pepper",
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