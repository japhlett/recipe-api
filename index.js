import express from "express";
import expressOasGenerator from "express-oas-generator";
import { dbConnection } from "./config/db.js";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";
import mongoose from "mongoose";


// connect to database

dbConnection();

// create express app
const app = express();
expressOasGenerator.handleResponses(app, {
  alwaysServeDocs:true,
  tags:['categories', 'recipes'],
  mongooseModels:mongoose.modelNames(),
});

// apply middlewares
app.use(express.json());
app.use(express.static('uploads'))

// Use routes
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req,res) =>res.redirect('/api-docs/'));

// listen for incoming requests
const port = process.env.PORT || 3080;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
