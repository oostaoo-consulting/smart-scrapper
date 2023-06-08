import { NextApiRequest, NextApiResponse } from 'next';
import profile from '../../../prisma/model/profile';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> {
  const { body, method } = req;

  let data;

  switch (method) {
    case 'GET':
      data = await profile.get();
      return res.status(200).json(data);

    case 'POST':
      return res.status(201).json({ message: `You submitted the following data: ${body}` });

    default:
      return res.status(200).json({ message: 'Welcome to API Routes!' });
  }
}
