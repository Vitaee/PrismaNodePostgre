import BaseModel from "../models/baseModel";


class BaseService<T extends BaseModel> {
  
  model: typeof BaseModel & { new(): T };
  static model: BaseModel;

  constructor(model: typeof BaseModel & { new(): T }) {
    this.model = model;
  }

  static async getAll() {
    return await this.model.findAll();
  }

  static async search(data: any) {
    return await this.model.search(data);
  }

  static async getById(id: number) {
    return await this.model.findById(id);
  }

  static async create(data: object) {
    return await this.model.create(data);
  }

  static async update(id: number, data: object) {
    const existingData = await this.model.findById(id);
    if (!existingData) {
      return null;
    }
    return this.model.update(id, data);
  }

  static async delete(id: number) {
      return this.model.delete(id)
  }

}

export default BaseService;