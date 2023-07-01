import { Request, Response } from 'express';
import BaseService from '../services/baseService';
import BaseModel from '../models/baseModel';

export default abstract class BaseController<T extends BaseService<BaseModel>> {
  protected service: T;

  constructor(service: T) {
    this.service = service;
  }

  Create = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.body;
      const result = await this.service.create(data);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  GetAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.service.getAll();
      res.status(200).json(result);
    } catch (error: any) {
      console.log(error)

      res.status(500).json({ error: error.message });
    }
  }

  Search = async (req: Request, res: Response)  => {
    const data = await this.service.search(req.body);
    res.status(200).json(data);
}

  Get = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      const result = await this.service.get('id', id);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: 'Resource not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  Update = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      const data = req.body;
      const result = await this.service.update(id, data);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: 'Resource not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  Delete = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      await this.service.delete(id);
      res.status(204).end();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  
}
