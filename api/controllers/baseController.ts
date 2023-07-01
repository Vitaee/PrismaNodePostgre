import { Request, Response } from 'express';
import BaseService from '../services/baseService';
import BaseModel from '../models/baseModel';

export default abstract class BaseController<T extends BaseService<BaseModel>> {
  protected service: T;

  constructor(service: T) {
    this.service = service;
  }

  Create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = req.body;
      const result = await this.service.create(data);
      return res.status(201).json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  GetAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await this.service.getAll();
      return res.status(200).json(result);
    } catch (error: any) {
      console.log(error)

      return res.status(500).json({ error: error.message });
    }
  }

  Search = async (req: Request, res: Response): Promise<Response>  => {
    const data = await this.service.search(req.body);
    return res.status(200).json(data);
}

  Get = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = parseInt(req.params.id);
      const result = await this.service.get('id', id);
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({ message: 'Resource not found' });
      }
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  Update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = parseInt(req.params.id);
      const data = req.body;
      const result = await this.service.update(id, data);
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({ message: 'Resource not found' });
      }
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  Delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = parseInt(req.params.id);
      await this.service.delete(id);
      return res.status(204).end();
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
  
}
