import { ApolloServer } from "apollo-server-express";
import { Express } from "express";
import resolvers from "./graphql/resolvers";
import schema from "./graphql/schema";
import { GRAPHQL_PATH } from "../settings";

export const setupApolloServer = async (app: Express) => {
  const server = new ApolloServer({
    resolvers: resolvers,
    typeDefs: schema,
    introspection: true,
    context: async ({ req }) => {
      // pass context to resolver
    },
    formatError: (err) => {
      // TODO: Add error handling tool
      console.log(err);
      return err;
    },
  });

  await server.start();

  server.applyMiddleware({ app, path: GRAPHQL_PATH });
};
