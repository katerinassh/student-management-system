require('dotenv').config();

const {
  DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_PORT,
} = process.env;

module.exports = {
  client: 'pg',
  connection: {
    user: DATABASE_USER,
    database: DATABASE_NAME,
    password: DATABASE_PASSWORD,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
  },
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds/dev',
  },
  useNullAsDefault: true,
};
