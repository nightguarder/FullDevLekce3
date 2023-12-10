// Dependencies

const express = require('express');
const bodyParser = require('body-parser');

const {fakeDB} = require('./data/fakedb');
//Configuration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

//Run Express
const app = express();
express.json();
app.use(bodyParser.json())
//Define endpoint
app.get('/status', (req, response) => {
    const status = {
       Status: "Server is running."
    };
    
    response.send(status);
 });

//fakeDB

//GET
//Return vsechny uzivatele
app.get('/users', (req, res) => {
    const users = fakeDB.users
    res.status(200).json(users);
});
//return user/:id only
app.get('/users/:id', (req, res) => {
    const authorId = parseInt(req.params.id);
    const author = fakeDB.users.find(a => a.id === authorId);

    if (author) {
        res.status(200).json(author);
    } else {
        res.status(404).json({ error: 'User not found!' });
    }
});
//return all blogs
app.get('/blogs', (req, res) => {
    const blogs = fakeDB.blogs
    res.status(200).json(blogs);
});
//return blog with id only
app.get('/blogs/search/:id', (req, res) => {
    const blogId = parseInt(req.params.id);
    const blog = fakeDB.blogs.find(blog => blog.id === blogId);

    if (blog) {
        res.status(200).json(blog);
    } else {
        res.status(404).json({ error: 'Blog not found! Invalid id?' });
    }
});
//return all categories
app.get('/categories', (req, res) => {
    const categories = fakeDB.categories
    res.status(200).json(categories);
});

//Query
// GET request blogs by author name
app.get('/blogs/author', (req, res) => {
    const { author } = req.query;

    if (!author) {
        return res.status(404).json({ error: 'Author parameter is required.' });
    }

    const authorName = author.toLowerCase();
    const filteredBlogs = fakeDB.blogs.filter(blog => blog.author && blog.author.toLowerCase() === authorName);
    res.status(200).json(filteredBlogs);
});

//GET blog by their category name 
app.get('/blogs/category',(req,res)=>{
    const {category} = req.query;

    if(!category) {
        return res.status(404).json({error: 'Category parameter is required.'});
    }

    const categoryLowerCase = category.toLowerCase();
    const filteredBlogs = fakeDB.blogs.filter(blog => blog.category && blog.category.toLowerCase() === categoryLowerCase)

    res.status(200).json(filteredBlogs);
});
//PATCH
//zmenit uzivatele blogu
app.patch('/blogs/:id/author', (req, res) => {
    const blogId = parseInt(req.params.id);
    const { newAuthor } = req.body;

    if (!newAuthor) {
        return res.status(404).json({ error: 'New author parameter is required.' });
    }

    const blogIndex = fakeDB.blogs.findIndex(blog => blog.id === blogId);

    if (blogIndex !== -1) {
        fakeDB.blogs[blogIndex].author = newAuthor;
        res.status(200).json({ message: 'Author of the blog updated successfully.' });
    } else {
        res.status(404).json({ error: 'Blog not found.' });
    }
});
//POST
//Create new user with required username, email and name
app.post('/users/new',(req,res)=>{
    const {username,email,name} = req.body;

    //If any of these are missing
    if(!username || !email || !name) {
        return res.status(404).json({
            error: "Missing required fields. Required: username, email, name"
        });
    }
    //Add new user to fakeDb
    const newUser = {id: fakeDB.users.length + 1, username, email, name};
    fakeDB.users.push(newUser);
    res.status(201).json(newUser);
});
//Crete new blog post from author, name, category
app.post('/blogs/new',(req,res) =>{
    //read data from query
    const {author,username,title,category,content} = req.body;

    //If any of these are missing.
    if(!title || !content || !author || !username || !category){
        return res.status(400).json({
             error: 'Missing required blog data. Required=author,title,category,content,username, category, ' 
            });
    }
    // auto generated
    const date = new Date().toLocaleDateString();
    const categoryId = fakeDB.categories.find(c => c.name === category)?.id;

    // If successful Create new blog post
    const newBlogPost = {
        id: fakeDB.blogs.length + 1, // Generate a new ID
        title: title,
        content: content,
        author: author,
        username: username,
        categoryId: categoryId,
        category: category,
        date: date
        };
    // update fakeDB
    fakeDB.blogs.push(newBlogPost);
    res.status(201).json(newBlogPost);
});
//DELETE
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = fakeDB.users.findIndex(u => u.id === userId);

    if (index !== -1) {
        fakeDB.users.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Invalid User Id' });
    }
});
// DELETE a blog
app.delete('/blogs/:id', (req, res) => {
    const blogId = parseInt(req.params.id);
    
    const blogIndex = fakeDB.blogs.findIndex(blog => blog.id === blogId);

    if (blogIndex !== -1) {
        fakeDB.blogs.splice(blogIndex, 1);
        res.status(200).json({ message: 'Blog deleted successfully.' });
    } else {
        res.status(404).json({ error: 'Blog not found.' });
    }
});


//Console
app.listen(PORT, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
});
