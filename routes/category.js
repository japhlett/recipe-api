import { Router } from "express";
import { getCategories, postCategory, deleteCategory,updateCategory} from "../controllers/category.js";
import { remoteUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";

// create a router
const categoryRouter = Router();

// define routes
categoryRouter.get("/categories", getCategories);
categoryRouter.delete("/categories/:id", checkUserSession, deleteCategory);
categoryRouter.patch("/categories/:id", checkUserSession, updateCategory);
//  applied upload middleware
categoryRouter.post("/categories",checkUserSession,remoteUpload.single("image"),postCategory
);

// export router
export default categoryRouter;
