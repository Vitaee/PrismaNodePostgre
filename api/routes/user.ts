import express from "express";
import UserController from "../controllers/userController";
import { jwtCheck } from "../middlewares/jwtCheck";
import { generateRoutes } from './baseRoutes';


const userRouter = express.Router();
const userController = new UserController();

const routes = generateRoutes(userController);


userRouter.post("/login/", userController.Login);
userRouter.post("/register/", userController.Register);
userRouter.get("/me/", jwtCheck, userController.CurrentUser);

userRouter.use('/user', routes);

export default userRouter;