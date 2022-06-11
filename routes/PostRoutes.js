const express = require('express');
const router = express.Router();

const {
    createPost,
    getPosts,
} = require('../controllers/PostController');

const upload = require("../config/multer");

const isAuthenticated = require('../middlewares/isAuthenticated');


router.post('/create_post', isAuthenticated, upload.single('picture'), createPost);
router.get('/get_posts', getPosts);

module.exports = { router };