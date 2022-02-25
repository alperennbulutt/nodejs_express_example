const express = require("express");
const app = express();
const mongose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Middlewares

app.use(cors());

app.use(bodyParser.json());

// import routes
const postsRoute = require("./routes/posts");

app.use("/posts",postsRoute);


// Routes
app.get("/" , (req,res) =>{
    res.send("Home Page");
});


// Connect to DataBase
mongose.connect(process.env.DB_CONNECTION ,  ()=>{
    console.log("connected to Database!");
});

// how to we start listening to the server 
app.listen(3000);