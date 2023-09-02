import { gql } from "apollo-server-express";

const User = gql`
  type User {
    name: String
  }

  type Query {
    getUser(id: String): User
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default User;
