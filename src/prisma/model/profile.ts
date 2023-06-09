import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export interface Profile {
  id?: number;
  github_login: string;
}

const profile = {
  get: async (): Promise<any> => db.profile.findMany(),

  getByPk: (id: number): Promise<any> => db.profile.findUnique({
    where: {
      id,
    },
  }),

  isUnique: (github_login: any): Promise<any> => db.profile.findFirst({
    where: {
      github_login,
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
