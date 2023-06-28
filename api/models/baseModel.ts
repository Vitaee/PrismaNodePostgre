import { PrismaClient } from '@prisma/client';

export default abstract class BaseModel {
  protected prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  abstract  create(data: any): Promise<any>;
  abstract  getAll(): Promise<any[]>;
  abstract  search(data: any): Promise<any>;
  abstract  getById(id: number): Promise<any | null>;
  abstract  update(id: number, data: any): Promise<any | null>;
  abstract  delete(id: number): Promise<void>;
}