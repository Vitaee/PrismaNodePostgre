import express from 'express';
import BoatController from '../controllers/boatController';
import { generateRoutes } from './baseRoutes';

const boatRouter = express.Router();
const boatController = new BoatController();
const routes = generateRoutes(boatController);

boatRouter.use('/boat', routes);

export default boatRouter;