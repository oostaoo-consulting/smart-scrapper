import { NextApiResponse } from 'next';

export default async function handler(
  _: never,
  res: NextApiResponse,
): Promise<void> {
  res.status(200).json({ message: 'Welcome to Oostaoo Smart Scrapper API!' });
}
