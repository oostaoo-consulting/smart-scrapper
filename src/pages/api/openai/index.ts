import {
  Configuration,
  OpenAIApi,
  ChatCompletionRequestMessageRoleEnum,
  ChatCompletionRequestMessage,
  ChatCompletionResponseMessage,
} from 'openai';
import { NextApiRequest, NextApiResponse } from 'next';

const configuration = new Configuration({
  apiKey: process.env.CHAT_GPT_SECRET_KEY,
});
const openai = new OpenAIApi(configuration);

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  if (!req.body.message) {
    res.status(400).json({ error: 'Un message est obligatoire !' });
    return;
  }

  const message: string = req.body.message.toString();
  const messagesRequest: Array<ChatCompletionRequestMessage> = [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: 'You are a helpful assistant.',
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: message,
    },
  ];

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: messagesRequest,
  });
  const chatResponse: ChatCompletionResponseMessage | undefined =
    completion?.data?.choices[0]?.message;

  if (!chatResponse) {
    res.status(500).json({
      error: 'Une erreur est survenue avec ChatGPT, veuillez réessayer !',
    });
  } else {
    res.status(200).json(chatResponse);
  }
};

export default handler;
