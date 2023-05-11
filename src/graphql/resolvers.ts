import type { ContextValue } from '../pages/api/graphql';

export interface GithubSearchUsersArgs {
  location: string;
  searchTerms: string;
  quantity: number;
  cursorAfter: string;
}

const resolvers = {
  Query: {
    viewer() {
      return { id: 1, name: 'John Smith', status: 'cached' };
    },

    async githubUsers(
      _: unknown,
      args: GithubSearchUsersArgs,
      { dataSources }: ContextValue,
    ): Promise<Person[]> {
      const { data } = await dataSources.githubAPI.findUsers(args);
      const profiles = data.search.edges;

      if (profiles.length === 0) return [];

      const filteredProfiles = profiles.filter((person) => 'id' in person.node);

      return filteredProfiles.map((person) => ({
        cursor: person.cursor,
        ...person.node,
        socialAccounts: person.node.socialAccounts.edges.map((socialAccount) => ({
          ...socialAccount.node,
        })),
      }));
    },

    async githubUser(
      _: unknown,
      { login }: { login: string },
      { dataSources }: ContextValue,
    ): Promise<Person> {
      const { data } = await dataSources.githubAPI.findUserByLogin(login);

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
