import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

interface Search {
  id: number;
  location: string;
  terms: string;
}

const search = {
  get: (): Promise<Search[]> => db.search.findMany(),

  getByPk: (id: number): Promise<Search> => db.search.findUnique({
    where: {
      id,
    },
  }),

  post: (data: Omit<Search, 'id'>): Promise<Search> => db.search.create({ data }),

  delete: (id: number): Promise<Search> => db.search.delete({
    where: {
      id,
    },
  }),
};

export default search;
