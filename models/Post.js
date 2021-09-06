const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, minLength: 1, maxLength: 200},
    content: {type: String, required: true}
    //to be done after mvp is met
    //date: type: Date,
    //picture: type: string //cover photo for the post,
    //comments: [] array of objects
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
