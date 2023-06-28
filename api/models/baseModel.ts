import { PrismaClient } from '@prisma/client';

class BaseModel {
  prisma: PrismaClient;
  protected modelName: string = 'test'

  constructor(modelName: string) {
    this.modelName = modelName
    this.prisma =  new PrismaClient();
  }
  
  async findAll() {
    return await this.prisma.job.findMany();
  }

  async search(data: any) {
    return await this.prisma.job.findMany( { where: data } );
  }

  async findById(id: number) {
    return await this.prisma.job.findFirst({
      where: {
        id: 1,
      },
    });
  }

  async create(data: object) {
    return await this.prisma.job.create({
      data: {
        boat: data,
      },
    });
  }

  async delete(id: number) {
    return await this.prisma.job.delete({
      where: {
        id: id,
      },
    });
  }

  async update(id: any,data: object) {
    return await this.prisma.job.update({
      where: {
        id: id,
      },
      data: data,
    })
  }
}

export default BaseModel;