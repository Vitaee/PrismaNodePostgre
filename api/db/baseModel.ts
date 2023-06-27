import { PrismaClient } from '@prisma/client';

class BaseModel {
  protected prisma: PrismaClient;
  protected modelName: string;

  constructor(modelName: string) {
    this.prisma = new PrismaClient();
    this.modelName = modelName;
  }

  async findAll() {
    return await this.prisma[this.modelName].findMany();
  }

  async search(data: any) {
    return await this.prisma[this.modelName].findMany( { where: data } );
  }

  async findById(id: number) {
    return await this.prisma[this.modelName].findFirst({
      where: {
        id: 1,
      },
    });
  }

  async create(data: object) {
    return await this.prisma[this.modelName].create({
      data: {
        boat: data,
      },
    });
  }

  async delete(id: number) {
    return await this.prisma[this.modelName].delete({
      where: {
        id: id,
      },
    });
  }
}

export default BaseModel;