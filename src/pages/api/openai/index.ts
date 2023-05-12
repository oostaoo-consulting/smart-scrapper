import { Configuration, OpenAIApi } from 'openai';
import { NextApiRequest, NextApiResponse } from 'next';

const configuration = new Configuration({
  apiKey: process.env.CHAT_GPT_SECRET_KEY,
});
const openai = new OpenAIApi(configuration);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const message: string = req.body.message.toString();
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      {
        role: 'user',
        content: message,
      },
    ],
  });

  res.status(200).json(completion.data.choices[0].message);
};

export default handler;
