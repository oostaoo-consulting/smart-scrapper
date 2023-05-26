import connectToRabbitMQ from '../utils/rabbitmq';
import type { ContextValue } from '../pages/api/graphql';

// type QueueNameType = 'github_api_queue';

const resolvers = {
  Query: {
    hello: async () => {
      const rabbitMQChannel = await connectToRabbitMQ();
      await rabbitMQChannel.assertQueue('helloQueue');
      await rabbitMQChannel.sendToQueue('helloQueue', Buffer.from('Hello from RabbitMQ!'));
      return 'Hello, World!';
    },

    async githubProfiles(
      _: unknown,
      args: GithubSearchProfilesArgs,
      { dataSources }: ContextValue,
    ): Promise<Person[]> {
      const { data } = await dataSources.githubAPI.findProfiles(args);
      const profiles = data.search.edges;

      const filteredProfiles = profiles.filter((person) => 'id' in person.node);

      return filteredProfiles.map((person) => ({
        cursor: person.cursor,
        ...person.node,
        socialAccounts: person.node.socialAccounts.edges.map((socialAccount) => ({
          ...socialAccount.node,
        })),
      }));
    },

    async githubProfile(
      _: unknown,
      { login }: { login: string },
      { dataSources }: ContextValue,
    ): Promise<Person> {
      const { data } = await dataSources.githubAPI.findProfileByLogin(login);

      return {
        ...data.user,
        socialAccounts: data.user.socialAccounts.edges.map((socialAccount) => ({
          ...socialAccount.node,
        })),
      };
    },
  },
};

export default resolvers;
