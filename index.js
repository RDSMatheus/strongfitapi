require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT;
const ORIGIN = process.env.ORIGIN;

const corsOptions = {
  origin: ORIGIN,
  methods: 'GET, HEAD, PUT, POST, DELETE, OPTIONS, PATCH',
  allowedHeaders:
    'Origin, X-Requested-With, Content-Type, Accept, Authentication, Access-control-allow-credentials, Access-control-allow-headers, Access-control-allow-methods, Access-control-allow-origin, User-Agent, Referer, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Cache-Control, Pragma',
};

app.use(
  cors({
    origin: 'https://strongfit.vercel.app',
  }),
);

app.use(express.json());

const mailRoutes = require('./routes/mailRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/contact', mailRoutes);
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
