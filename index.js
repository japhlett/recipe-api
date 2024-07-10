import express from "express";
import expressOasGenerator from "express-oas-generator";
import { dbConnection } from "./config/db.js";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.js";
import session from "express-session";

// connect to database

dbConnection();

// create express app
const app = express();
expressOasGenerator.handleResponses(app, {
  alwaysServeDocs: true,
  tags: ["categories", "recipes"],
  mongooseModels: mongoose.modelNames(),
});

// apply middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

// Use routes
app.use(userRouter);
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect("/api-docs/"));

// listen for incoming requests
const port = process.env.PORT || 3030
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// "username": "Japh", "email": "tjay@gmail.com","password": "yut7${pkg"
