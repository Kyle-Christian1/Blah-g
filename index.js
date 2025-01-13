import express from "express";
import bodyParser from "body-parser"
import { pathToFileURL } from "url";
import { dirname } from "path";

const app = express();
const port = 3000;

let blogPosts = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) =>{
    res.render("index.ejs", {
        posts: blogPosts
    });
})

app.post("/submit", (req, res) => {
    const newPost = req.body["blog-text"];
    if (newPost) {
        blogPosts.push(newPost); // Add the new post to the array
    }
    res.redirect('/');
});

app.listen(port, ()=>{
    console.log(`Server has started and is listening on ${port}`)
});