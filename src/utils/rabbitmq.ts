/* eslint-disable consistent-return */
import { connect } from 'amqplib';
import type { Channel } from 'amqplib';

type QueueNameType = 'github_api_queue';

const URL = process.env.RABBITMQ_URL || 'amqp://localhost';

export const connectToRabbitMQ = async (): Promise<Channel> => {
  const connection = await connect(URL);
  if (!connection) throw new Error('No RabbitMQ connection');

  const channel = await connection.createChannel();
  if (!channel) throw new Error('No RabbitMQ channel');

  return channel;
};

export const disconnectToRabbitMQ = async (channel: Channel): Promise<void> => {
  await channel.connection.close();
};

export const sendToRabbitMQ = async (
  queue: QueueNameType,
  message: string,
): Promise<void | Error> => {
  try {
    const channel = await connectToRabbitMQ();

    await channel.assertQueue(queue, {
      durable: true,
    });
    channel.sendToQueue(
      queue,
      Buffer.from(message),
      { persistent: true },
    );

    disconnectToRabbitMQ(channel);
  } catch (error) {
    if (error instanceof Error) return error;
    return new Error('Internal Server Error');
  }
};

export const ReceiveFromRabbitMQ = async (
  queue: QueueNameType,
): Promise<void | Error> => {
  try {
    const channel = await connectToRabbitMQ();

    await channel.assertQueue(queue, {
      durable: true,
    });
    channel.prefetch(1);

    await channel.consume(
      queue,
      (message) => {
        if (message) {
          console.log(message.content.toString());
          channel.ack(message);
        }
      },
    );
  } catch (error) {
    if (error instanceof Error) return error;
    return new Error('Internal Server Error');
  }
};
