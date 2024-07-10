import { Router } from "express";
import { getRecipes, postRecipes, patchRecipe, deleteRecipe,getRecipe} from "../controllers/recipe.js";
import { remoteUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";

// Create a router
const recipeRouter = Router();

// apply middlware
recipeRouter.use(checkUserSession);

// define routes
recipeRouter.get("/recipes/", getRecipes);

recipeRouter.post("/recipes",checkUserSession, remoteUpload.single("image"), postRecipes);

recipeRouter.patch("/recipes/:id",checkUserSession, patchRecipe);

recipeRouter.delete("/recipes/:id", checkUserSession, deleteRecipe);

recipeRouter.get("/recipes/:id", getRecipe);

// export router
export default recipeRouter;
