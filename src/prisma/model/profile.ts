import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const profile = {
  get: (): Promise<Pick<Person, 'login'>[]> => db.profile.findMany(),

  getByPk: (id: number): Promise<Pick<Person, 'login'>> => db.profile.findUnique({
    where: {
      id,
    },
  }),

  post: (login: string): Promise<Pick<Person, 'login'>> => db.profile.create({
    data: {
      login,
    },
  }),

  delete: (id: number): Promise<Pick<Person, 'login'>> => db.profile.delete({
    where: {
      id,
    },
  }),
};

export default profile;
