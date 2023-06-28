import BaseModel from './baseModel';

export default class BoatModel extends BaseModel {
  async create(data: any): Promise<any> {
    return await this.prisma.job.create({ data });
  }

  async search(data: any): Promise<any> {
      return await this.prisma.job.findMany( { where : data })
  }

  async getAll(): Promise<any[]> {
     return await this.prisma.job.findMany();
  }

  async getById(id: number): Promise<any | null> {
    return await this.prisma.job.findUnique({ where: { id } });
  }

  async update(id: number, data: any): Promise<any | null> {
    return await this.prisma.job.update({ where: { id }, data });
  }

  async delete(id: number): Promise<any> {
    return await this.prisma.job.delete({ where: { id } });
  }
}