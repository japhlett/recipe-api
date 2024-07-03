import { Router } from "express";
import { getRecipes,postRecipes,patchRecipe,deleteRecipe,getRecipe} from "../controllers/recipe.js";
import {remoteUpload } from "../middlewares/upload.js";

// Create a router
const recipeRouter = Router();

// define routes
recipeRouter.get('/recipes/', getRecipes);
// applied upload middleware
recipeRouter.post("/recipes", remoteUpload.single("image"), postRecipes);

recipeRouter.patch('/recipes/:id',patchRecipe );

recipeRouter.delete('/recipes/:id', deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);

// export router
export default recipeRouter;