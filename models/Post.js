const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String, 
        minLength: 1, 
        maxLength: 200,
        validate: {
            validator: function(v) {
                return v.length > 1 || v.length < 200;
            },
            message: `Title must be between 1 and 200 characters long.`  
        }
    },
    content: {
        type: String, 
        required: true,
        validate: {
            validator: function(v) {
                return v.length > 1
            }, 
            message: `Content cannot be emptpy.`
        }
    },
    comments: []
    //to be done after mvp is met
    //date: type: Date,
    //picture: type: string //cover photo for the post,
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
