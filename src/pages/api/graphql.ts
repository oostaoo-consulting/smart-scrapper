import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import resolvers from '../../graphql/resolvers';
import typeDefs from '../../graphql/typeDefs';
import GithubAPI from '../../graphql/dataSources/githubAPI';

export interface ContextValue {
  dataSources: {
    githubAPI: GithubAPI;
  };
}

const server = new ApolloServer<ContextValue>({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server, {
  context: async () => {
    const { cache } = server;
    const token = process.env.GITHUB_TOKEN!;
    return {
      dataSources: {
        githubAPI: new GithubAPI({ token, cache }),
      },
    };
  },
});
