import { PrismaClient } from '@prisma/client';

export default abstract class BaseModel {
  protected prisma: PrismaClient;
  protected modelName: any;
  protected models: Record<string, any>;

  constructor(modelName: any) {
    this.prisma = new PrismaClient();
    this.modelName = modelName
    this.models = {
      job: this.prisma.job,
      user: this.prisma.user,
    };
  }
  
  public getModel(modelName: string)  {
    const model = this.models[modelName];
    if (!model) {
      throw new Error(`Invalid model name: ${modelName}`);
    }
    return model;
  }
  
  async create(data: object) {
    const model = this.getModel(this.modelName);
    return await model.create(data);
  }

  async search(data: any): Promise<any> {
    const model = this.getModel(this.modelName);
    return await model.findMany( { where : data })
  }

  async getAll(): Promise<any[]> {
    const model = this.getModel(this.modelName);
    return await model.findMany();
  }

  async getById(id: number): Promise<any | null> {
    const model = this.getModel(this.modelName);
    return await model.findUnique({ where: { id } });
  }

  async update(id: number, data: any): Promise<any | null> {
    const model = this.getModel(this.modelName);
    return await model.update({ where: { id }, data });
  }

  async delete(id: number): Promise<any> {
    const model = this.getModel(this.modelName);
    return await model.delete({ where: { id } });
  }
}