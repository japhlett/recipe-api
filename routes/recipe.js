import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";

// Create a router
const recipeRouter = Router();

// define routes
recipeRouter.get('/recipes/:667c38eba78967cee69a0d03', (req,res) =>{
    res.json(`'All recipes'`);
});

recipeRouter.post('/recipes', async (req,res) =>{
    // add recipe to database
    await RecipeModel.create(req.body);
    // return response
    res.json("Recipe added!");
});

recipeRouter.patch('/recipes/:id', (req,res) =>{
    res.json(`Recipe with ID ${req.params.id} updated`);
});

recipeRouter.delete('/recipes/:id', (req,res) =>{
    res.json(`Recipe with ID ${req.params.id} deleted`);
});

recipeRouter.get('/recipes/:id', (req,res) =>{
    res.json(`This is the light soup recipe ${req.params.id}`);
});

// export router
export default recipeRouter;