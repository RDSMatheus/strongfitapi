require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT;

console.log(PORT);

app.use(express.json());

app.use(cors());

const mailRoutes = require('./routes/mailRoutes');

app.use('/contact', mailRoutes);

app.listen(PORT);

module.exports = app;
