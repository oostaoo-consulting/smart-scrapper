import { NextApiRequest, NextApiResponse } from 'next';
import profile from '../../../prisma/model/profile';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const { body, method } = req;

    if (method === 'GET') {
      const data = await profile.get();
      if (!data) {
        throw new Error();
      }

      return res.status(200).json(data);
    }

    if (method === 'POST') {
      const foundProfile = await profile.isUnique(body);
      if (foundProfile) {
        return res.status(200).json({ message: 'This profile already exists in database' });
      }

      const data = await profile.post(body);
      if (!data) {
        throw new Error();
      }

      return res.status(201).json(data);
    }

    return res.status(404).json({ message: 'NotFound' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
