import express, { Router } from 'express';
import BaseController from '../controllers/baseController';
import BaseService from '../services/baseService';
import BaseModel from '../models/baseModel';

export function generateRoutes(controller: BaseController<BaseService<BaseModel>>): express.Router {
  const router = express.Router();

  router.get('/', controller.GetAll);
  
  router.get('/search/', controller.Search);

  router.get('/:id/', controller.Get);

  router.post('/', controller.Create);

  router.put('/', controller.Update)

  router.delete('/:id/', controller.Delete);

  return router;
}