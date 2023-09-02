import { gql } from "apollo-server-express";
import User from "./User";

const Base = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [Base, User];
