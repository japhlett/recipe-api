import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";

// connect to database
await mongoose.connect(process.env.MONGO_URL);

// create express app
const app = express();

// apply middlewares
app.use(express.json());

// Use routes
app.use(recipeRouter);

// listen for incoming requests
app.listen(3000, () => {
  console.log("App listening on port 3000");
});
