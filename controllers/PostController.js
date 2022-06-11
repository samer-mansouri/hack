const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Post = mongoose.model('Post');
const cloudinary = require('../config/cloudinary');


let createPost = async (req, res) => {
    const user = req.user
    const result = await cloudinary.uploader.upload(req.file.path);
    const post = new Post({
        content: req.body.name,
        image: result.secure_url,
        userId: user
    });
    const savedPost = await post.save();
    res.send({
        message: 'Category created successfully',
        category: savedPost
    });
}

let getPosts = (req, res) => {
    Post.find({})
        .populate("user", "firstName lastName picture address")
        .sort('-createdAt')
        .exec()
        .then(posts => {
            res.send({
                message: 'Posts retrieved successfully',
                posts: posts
            });
        }).catch(err => {
            res.status(500).send({"Error": "Internal Server Error"})
        })
}


module.exports = {
    createPost,
    getPosts
}