import BaseModel from "../models/baseModel";


class BaseService<T extends BaseModel> {
  protected model: T;

  constructor(model: new () => T) {
    this.model = new model();
  }

  async getAll() {
    return await this.model.findAll();
  }

  async search(data: any) {
    return await this.model.search(data);
  }

  async getById(id: number) {
    return await this.model.findById(id);
  }

  async create(data: object) {
    return await this.model.create(data);
  }

  async update(id: number, data: object) {
    const existingData = await this.model.findById(id);
    if (!existingData) {
      return null;
    }
    return existingData.update(data);
  }

  async delete(id: number) {
      return this.model.delete(id)
  }

}

export default BaseService;