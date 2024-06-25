import { Router } from "express";

// Create a router
const recipeRouter = Router();

// define routes
recipeRouter.get('/recipes', (req,res) =>{
    res.json('All recipes');
});

recipeRouter.post('/recipes', (req,res) =>{
    res.json('Recipe added');
});

recipeRouter.patch('/recipes/:id', (req,res) =>{
    res.json(`Recipe with ID ${req.params.id} updated`);
});

recipeRouter.delete('/recipes/:id', (req,res) =>{
    res.json(`Recipe with ID ${req.params.id} deleted`);
});

// export router
export default recipeRouter;