const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: String,
    picture: String,
    //below we push in posts and embed them inside this data object
    posts: []
})

const City = mongoose.model('City', citySchema);

module.exports = City;




