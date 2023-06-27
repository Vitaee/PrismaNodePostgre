import express from "express";
const router = express.Router();
import boats from './boats';

router.use('/boat', boats);

export default router;