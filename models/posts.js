const mongoose = require('mongoose');

//schema 
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model 
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;