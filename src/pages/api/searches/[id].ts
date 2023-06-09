import { NextApiRequest, NextApiResponse } from 'next';
import search from '../../../prisma/model/search';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const { query, method } = req;
    const id = parseInt(query.id as string, 10);

    if (method === 'GET') {
      const data = await search.getByPk(id);
      if (!data) {
        return res.status(404).json({ message: 'NotFound' });
      }

      return res.status(200).json(data);
    }

    if (method === 'DELETE') {
      const foundSearch = await search.getByPk(id);
      if (!foundSearch) {
        return res.status(404).json({ message: 'NotFound' });
      }

      const data = await search.delete(Number(id));
      if (!data) {
        throw new Error();
      }
      return res.status(202).json(data);
    }

    return res.status(404).json({ message: 'NotFound' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
