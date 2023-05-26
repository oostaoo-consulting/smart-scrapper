/* eslint-disable consistent-return */
import { connect } from 'amqplib';
import type { Channel } from 'amqplib';

// type QueueNameType = 'github_api_queue';

const URL = process.env.RABBITMQ_URL || 'amqp://localhost';

const connectToRabbitMQ = async (): Promise<Channel> => {
  const connection = await connect(URL);
  const channel = await connection.createChannel();
  return channel;
};

// const rabbitMQChannel = await connectToRabbitMQ();

export default connectToRabbitMQ;

// export const send = async (queue: QueueNameType, message: string): Promise<void> => {
//   let connection: Connection | null = null;
//   try {
//     connection = await connect(URL);

//     if (!connection) console.log('oups');

//     const channel = await connection.createChannel();

//     await channel.assertQueue(queue, { durable: false });

//     // NB: `sentToQueue` and `publish` both return a boolean
//     // indicating whether it's OK to send again straight away, or
//     // (when `false`) that you should wait for the event `'drain'`
//     // to fire before writing again. We're just doing the one write,
//     // so we'll ignore it.
//     channel.sendToQueue(queue, Buffer.from(message));
//     console.log(" [x] Sent '%s'", message);
//     await channel.close();
//   } catch (error) {
//     console.warn(error);
//   } finally {
//     if (connection) await connection.close();
//   }
// };

// export const receive = async (queue: QueueNameType): Promise<void | string> => {
//   try {
//     const connection = await connect(URL);
//     const channel = await connection.createChannel();

//     process.once('SIGINT', async () => {
//       await channel.close();
//       await connection.close();
//     });

//     await channel.assertQueue(queue, { durable: false });
//     await channel.consume(queue, (message) => {
//       if (message) {
//         console.log(" [x] Received '%s'", message.content.toString());
//         return message.content.toString();
//       }

//       console.log(' [*] Waiting for messages.');
//     }, { noAck: true });
//   } catch (err) {
//     console.warn(err);
//   }
// };
