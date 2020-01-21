const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: String,
        required: true
    }
});

const Menu = mongoose.model('Menu', menuSchema)

module.exports = Menu