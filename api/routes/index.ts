import express from "express";
import boats from './boats';
import userRouter from "./user";

const router = express.Router();


router.use('/boat', boats);
router.use("/user", userRouter);

export default router;