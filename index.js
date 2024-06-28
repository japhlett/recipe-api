import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";

// connect to database
await mongoose.connect(process.env.MONGO_URL);

// create express app
const app = express();

// apply middlewares
app.use(express.json());

// Use routes
app.use(recipeRouter);
app.use(categoryRouter);

// listen for incoming requests
const port = process.env.PORT || 3080;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
