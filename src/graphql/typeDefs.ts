import { gql } from '@apollo/client';

const typeDefs = gql`
  type Person {
    id: ID!
    name: String
    login: String!
    location: String
    email: String
    url: String
    websiteUrl: String
    avatarUrl: String
    bio: String
    socialAccounts: [PersonSocialAccounts]
  }

  type PersonSocialAccounts {
    displayName: String
    provider: String
    url: String
  }

  type Query {    
    githubProfiles(
      location: String,
      searchTerms: String,
      usersToFilter: [String],
      quantity: Int,
      page: Int
    ): [Person]

    githubProfile(login: String): Person
  }
`;

export default typeDefs;
