import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const profile = {
  get: async (): Promise<any> => db.profile.findMany(),

  getByPk: (id: number): Promise<any> => db.profile.findUnique({
    where: {
      id,
    },
  }),

  post: (data: any): Promise<any> => db.profile.create({ data }),

  delete: (id: number): Promise<any> => db.profile.delete({
    where: {
      id,
    },
  }),
};

export default profile;
