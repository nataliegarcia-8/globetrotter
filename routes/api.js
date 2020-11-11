const { ExploreTwoTone } = require('@material-ui/icons');
const express = require('express');

const router = express.Router();

const Post = require('../models/posts');

//Routes 
router.get('/api', (req, res) => {
    const data = {
        username: 'nat',
        age: 22
    };

    Post.find({})
        .then((data) => {
            console.log('Data', data);
        })
        .catch((error) => {
            console.log('error:', error)
        })
})
router.get('/api/name', (req, res) => {
    const data = {
        username: 'natalie',
        age: 44
    };
    res.json(data);
});

module.exports = router;