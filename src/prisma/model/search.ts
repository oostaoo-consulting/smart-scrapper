import { PrismaClient, PrismaPromise } from '@prisma/client';

const db = new PrismaClient();

const search = {
  get: (): PrismaPromise<any[]> => db.search.findMany(),

  getByPk: (id: any): Promise<any> => db.search.findUnique({
    where: {
      id,
    },
  }),

  isUnique: (data: any): Promise<any> => db.search.findFirst({
    where: {
      ...data,
    },
  }),

  post: (data: any): Promise<any> => db.search.create({ data }),

  delete: (id: number): Promise<any> => db.search.delete({
    where: {
      id,
    },
  }),
};

export default search;
