import BaseModel from '../models/baseModel';

export default abstract class BaseService<T extends BaseModel> {
  protected model: T;

  constructor(model: T) {
    this.model = model;
  }

  async create(data: any): Promise<any> {
    return await this.model.create(data);
  }

  async search(data: any) {
    return await this.model.search(data);
  }
  
  async getAll(): Promise<any[]> {
    return await this.model.getAll();
  }

  async get(key: any, value: any): Promise<any | null> {
    return await this.model.get(key, value);
  }

  async update(id: number, data: any): Promise<any | null> {
    return await this.model.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return await this.model.delete(id);
  }
}