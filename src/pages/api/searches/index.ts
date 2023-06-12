import { NextApiRequest, NextApiResponse } from 'next';
import search from '../../../prisma/model/search';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const { body, method } = req;

    if (method === 'GET') {
      const data = await search.get();
      if (!data) {
        throw new Error();
      }

      return res.status(200).json(data);
    }

    if (method === 'POST') {
      const foundSearch = await search.isUnique(body);
      if (foundSearch) {
        return res.status(200).json({ message: 'This search already exists in database' });
      }

      const data = await search.post(body);
      if (!data) {
        throw new Error();
      }

      return res.status(201).json(data);
    }

    return res.status(404).json({ message: 'NotFound' });
  } catch (error) {
    return res.status(500).json({ message: `${error}` });
  }
}
