import "dotenv/config";

const ENV = {
  API_NAME: process.env.API_NAME as string,
  NODE_ENV: process.env.NODE_ENV as string,
};

export default ENV;
