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

    async githubUsers(_: unknown, args: GithubSearchUsersArgs, { dataSources }: ContextValue) {
      const { data } = await dataSources.githubAPI.findUsers(args);

      return data.search.edges.filter((edge: any) => edge.node.id).map((edge: any) => ({
        cursor: edge.cursor,
        ...edge.node,
        socialAccounts: edge.node.socialAccounts.edges.map((socialAccount: any) => ({
          ...socialAccount.node,
        })),
      }));
    },

    async githubUser(
      _: unknown,
      { login }: { login: string },
      { dataSources }: ContextValue,
    ) {
      const { data } = await dataSources.githubAPI.findUserByLogin(login);

      return {
        ...data.user,
        socialAccounts: data.user.socialAccounts.edges.map((socialAccount: any) => ({
          ...socialAccount.node,
        })),
      };
    },
  },
};

export default resolvers;

// id: ID!
// name: String!
// login: String!
// location: String!
// email: String!
// url: String!
// websiteUrl: String!
// avatarUrl: String!
// bio: String!
// socialAccounts: [githubUserSocialAccounts]
