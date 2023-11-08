require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_DB_CONNECT_URL = process.env.MONGO_DB_CONNECT_URL;

async function main() {
  await mongoose.connect(MONGO_DB_CONNECT_URL);
  console.log('Conectou ao mongoose');
}

main().catch((err) => console.log(err));

module.exports = mongoose;
