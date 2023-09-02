import { APP_PORT, ENVIRONMENT } from "../settings";
import { setupApolloServer } from "./server";

const express = require("express");
const helmet = require("helmet");

const bodyParser = require("body-parser");

/**
 * App Configuration
 */
const app = express();
// app.use(cors())
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

setupApolloServer(app);
console.log("Apollo Server is up and running\n");

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.listen(APP_PORT, () => {
  console.log(`Server running in ${ENVIRONMENT} in port ${APP_PORT}`);
});

export default app;
