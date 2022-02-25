const express = require("express");

const router = express.Router();
const Post = require("../models/Post");

// GET BACK ALL THE POSTS
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: error });
    }

});

// SUBMİTS A POST
router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    // database' kayıt eder
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    }
    catch (err) {
        res.json({ message: err });

    }

});

// SPECIFIC POST
router.get('/:postId', async (req, res) => {
    // params olan kısım post manda url'in sonuna eklenen kısımdır
    try {
        const post = await Post.findById(req.params.postId);

        res.json(post);
    } catch (error) {
        res.json({ message: error });

    }


});

// Delete Post
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.postId });
        res.json(removePost);
    } catch (error) {
        res.json({ message: error });
    }
});

// Update Post
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } });
        res.json(updatePost);
    } catch (error) {
        res.json({ message: error });

    }
})


router.get("/specific", (req, res) => {
    res.send("Specific post");
});


module.exports = router;