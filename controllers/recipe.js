import { RecipeModel } from "../models/recipe.js";
import { CategoryModel } from "../models/category.js";


// Get all recipes
export const getRecipes = async (req,res,next) =>{
    try {
        // Get recipes from database
        const allRecipes = await RecipeModel.find();
        // Return all recipes as response
        res.json(allRecipes);
    } catch (error) {
        next(error);
    }
}

// Post recipe
export const postRecipes = async (req,res,next) =>{
    try {
            // add recipe to database
           const newRecipe =  await RecipeModel.create(req.body);
            res.json(newRecipe.name);
        }catch (error) {
            next(error);
        }
    }

// Add a recipe
export const patchRecipe = async (req,res,next) =>{
   try {
    // update a recipe by id
    const UpdatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id)
    // return response
     res.json(UpdatedRecipe);
   } catch (error) {
        next(error);
   }
}

// delete recipe
export const deleteRecipe = async (req,res,next) =>{
    try {
        // delete recipe by id
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // return response
        res.json(`Recipe with ID ${req.params.id} deleted`);
    } catch (error) {
        next(error);
        
    }
}

// get a recipe
export const getRecipe =  async(req,res) =>{
    
    try {
        // get a recipe with an ID
        const recipe = await RecipeModel.findById(req.params.id);
        res.json(recipe);
    } catch (error) {
        next(error);
    }
}