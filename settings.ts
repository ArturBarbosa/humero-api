import * as dotenv from "dotenv";
import * as _ from "lodash";

dotenv.config({ path: ".env" });

export const ENVIRONMENT = _.defaultTo(process.env.APP_ENV, "dev");
export const IS_PRODUCTION = ENVIRONMENT === "production";
export const APP_PORT = _.defaultTo(parseInt(process.env.APP_PORT), 3000);
export const DB = {
  USER: _.defaultTo(process.env.DB_USER, "root"),
  PASSWORD: _.defaultTo(process.env.DB_USER_PWD, "secret"),
  HOST: _.defaultTo(process.env.DB_HOST, "localhost"),
  NAME: _.defaultTo(process.env.DB_NAME, "pulsardb"),
  PORT: _.defaultTo(parseInt(process.env.DB_PORT), 3306),
};
export const GRAPHQL_PATH = _.defaultTo(process.env.GRAPHQL_PATH, "/graphql");
