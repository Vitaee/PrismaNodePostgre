import express from "express";
import UserController from "../controllers/userController";
import { jwtCheck } from "../middlewares/jwtCheck";


const userRouter = express.Router();
const userController = new UserController();


userRouter.post("/login/", userController.Login);
userRouter.post("/register/", userController.Register);
userRouter.get("/", jwtCheck, userController.CurrentUser);

export default userRouter;