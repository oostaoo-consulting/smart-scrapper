import { gql } from '@apollo/client';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    status: String!
  }

  type githubUser {
    id: ID!
    name: String
    login: String!
    location: String
    email: String
    url: String
    websiteUrl: String
    avatarUrl: String
    bio: String
    socialAccounts: [githubUserSocialAccounts]
  }

  type githubUserSocialAccounts {
    displayName: String
    provider: String
    url: String
  }

  type Query {
    viewer: User
    
    githubUsers(
      location: String,
      searchTerms: String,
      quantity: Int,
      page: Int
    ): [githubUser]

    githubUser(login: String): githubUser
  }
`;

export default typeDefs;
