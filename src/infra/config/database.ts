import env from "../config/env";

const db = {
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  host: env.DB_HOST,
  port: env.DB_PORT,
  dialect: "mysql",
};

export default db;