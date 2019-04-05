// config.js

const env = {
  mongoUser: process.env.MONGO_USER,
  mongoPassword: process.env.MONGO_PASSWORD,
  mongoPath: process.env.MONGO_PATH,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
};

function getDBURL(): string {
  return `${env.mongoUser || ''}${env.mongoUser && env.mongoPassword ? ':' : ''}${env.mongoPassword || ''}${env.mongoPath}`;
}

export default { env, getDBURL };
