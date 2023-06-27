import { Response, Request } from "express";
import BaseService from "../services/baseService";
import BaseModel from "db/baseModel";


class BaseController<T extends BaseService<BaseModel>> {
    protected service: T;
  
    constructor(service: T) {
      this.service = service;
    }
  
    async GetAll(req: Request, res: Response) {
      try {
        const data = await this.service.getAll();
        res.status(200).json(data);
      } catch (error: any) {
        console.log(error)
        res.status(500).json({ error: error.message });
      }
    }

    async Search(req: Request, res: Response) {
        const data = await this.service.search(req.body);
        res.status(200).json(data);
    }
  
    async Get(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const data = await this.service.getById(parseInt(id));
        if (!data) {
          return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json(data);
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async Create(req: Request, res: Response) {
      try {
        const data = req.body;
        const createdData = await this.service.create(data);
        res.status(201).json(createdData);
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async Update(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const data = req.body;
        const updatedData = await this.service.update(parseInt(id), data);
        if (!updatedData) {
          return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json(updatedData);
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async Delete(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const deletedData = await this.service.delete(parseInt(id));
        if (!deletedData) {
          return res.status(404).json({ message: 'Data not found' });
        }
        res.status(204).end();
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }
    }
  
}
  

export default BaseController;
