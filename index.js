import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";

// connect to database
await mongoose.connect(process.env.MONGO_URL)

// create express app
const app = express();

// apply middlewares
app.use(express.json());

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


