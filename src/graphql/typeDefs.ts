import { gql } from '@apollo/client';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    status: String!
  }

  type Query {
    viewer: User
  }
`;

export default typeDefs;
