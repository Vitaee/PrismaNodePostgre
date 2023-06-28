import express from "express";
import BoatController from "../controllers/boatController";


const router = express.Router();

const boatController = new BoatController();

router.get('/', boatController.GetAll);
router.get('/filter', boatController.Search);
router.post('/save', boatController.Create);
router.get('/:id', boatController.Get);
router.delete('/:id', boatController.Delete);

export default router;