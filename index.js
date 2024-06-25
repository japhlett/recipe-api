import express from "express";
import recipeRouter from "./routes/recipes.js";

// create express app
const app = express();

// define routes
app.get('/', (req,res) => {
    res.json('Welcome Home');
});
app.post('/login',(req,res) => {
    res.json('Login successful');
});
app.patch('/product',(req,res) => {
    res.json('New product added');
});

app.delete('/product',(req,res) =>{
    res.json('Product deleted successfully');
});

// Use routes
app.use(recipeRouter);


// listen for incoming requests
app.listen(3000, () =>{
    console.log('App listening on port 3000');
});
