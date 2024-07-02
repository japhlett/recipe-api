import { Router } from "express";
import { getRecipes,postRecipes,patchRecipe,deleteRecipe,getRecipe} from "../controllers/recipe.js";
import { localUpload } from "../middlewares/upload.js";

// Create a router
const recipeRouter = Router();

// define routes
recipeRouter.get('/recipes/', getRecipes);

recipeRouter.post('/recipes',localUpload.single('image'), postRecipes);

recipeRouter.patch('/recipes/:id',patchRecipe );

recipeRouter.delete('/recipes/:id', deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);

// export router
export default recipeRouter;