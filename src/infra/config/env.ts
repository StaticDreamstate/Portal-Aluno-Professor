import "dotenv/config";

const ENV = {
  API_NAME: process.env.API_NAME as string,
  NODE_ENV: process.env.NODE_ENV as string,
  DB_NAME: process.env.DB_NAME as string,
  DB_USER: process.env.DB_USER as string,
  DB_PASS: process.env.DB_PASS as string,
  DB_HOST: process.env.DB_HOST as string,
  DB_PORT: Number(process.env.DB_PORT),
};

export default ENV;
