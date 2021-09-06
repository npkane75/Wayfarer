const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: String
    //once we add a user
        //user: will need to embed user
    //date --> do we want a date or just user and comment
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;