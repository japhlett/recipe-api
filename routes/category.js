import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";
import { localUpload } from "../middlewares/upload.js";

// create a router
const categoryRouter = Router();

// define routes
categoryRouter.get("/categories", getCategories);
//  applied upload middleware
categoryRouter.post("/categories", localUpload.single("image"), postCategory);

// export router
export default categoryRouter;
