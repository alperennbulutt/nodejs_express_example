const express = require("express");

const router = express.Router();
const Post = require("../models/Post");


router.get("/", (req, res) => {
    res.send("we are Posts Page");
});


router.get("/specific", (req, res) => {
    res.send("Specific post");
});


module.exports = router;