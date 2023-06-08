import { NextApiRequest, NextApiResponse } from 'next';
import profile from '../../../prisma/model/profile';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> {
  const { query, method } = req;
  const id = parseInt(query.id as string, 10);

  let data;

  switch (method) {
    case 'GET':
      data = await profile.getByPk(id);
      return res.status(200).json(data);

    case 'DELETE':
      data = await profile.delete(Number(id));
      return res.status(204);

    default:
      return res.status(200).json({ message: 'Welcome to API Routes!' });
  }
}
