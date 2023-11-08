require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT;
const ORIGIN = process.env.ORIGIN;

const corsOptions = {
  origin: ORIGIN,
  methods: 'GET,PUT,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(express.json());

app.use(cors({ origin: '*' }));

const mailRoutes = require('./routes/mailRoutes');

app.use('/contact', mailRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
