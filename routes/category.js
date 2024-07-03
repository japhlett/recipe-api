import { Router } from "express";
import { getCategories, postCategory, deleteCategory, updateCategory } from "../controllers/category.js";
import { remoteUpload } from "../middlewares/upload.js";

// create a router
const categoryRouter = Router();

// define routes
categoryRouter.get("/categories", getCategories);
categoryRouter.delete("/categories/:id",deleteCategory);
categoryRouter.patch("/categories/:id",updateCategory);
//  applied upload middleware
categoryRouter.post("/categories", remoteUpload.single("image"), postCategory);

// export router
export default categoryRouter;
