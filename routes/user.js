import { Router } from "express";
import { register } from "../controllers/user.js";

// create router
const userRouter = Router()

// define routees
userRouter.post('/register',register);


// export Router
export default userRouter;