require('dotenv').config()

const { DB_PASSWORD, DB_HOST, DB_NAME, DB_USER, DB_PORT, DB_SERVER, EXTERNAL_URI } = process.env;
const URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}.${DB_SERVER}/${DB_NAME}`;

const settings = {
  url: EXTERNAL_URI,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: false,
      rejectUnautharized: false
    }
  }
}

const config = {
  development: { ...settings},
  test: { ...settings},
  production: { ...settings}
};

module.exports = config;
