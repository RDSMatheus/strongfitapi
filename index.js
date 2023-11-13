require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser'),
  swaggerJsdoc = require('swagger-jsdoc'),
  swaggerUi = require('swagger-ui-express');

const PORT = process.env.PORT;
const ORIGIN = process.env.ORIGIN;

const CSS_URL =
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css';

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'StrongFit API',
      version: '0.1.0',
      description:
        'CRUD de um projeto ficticio de uma academia chamada StrongFit',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Matheus',
        email: 'matheus_rds1998@hotmail.com',
      },
    },
    servers: [
      {
        url: 'https://strongfitapi.vercel.app/',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { customCssUrl: CSS_URL }),
);

app.use(
  cors({
    origin: ORIGIN,
  }),
);

app.use(express.json());

const mailRoutes = require('./routes/mailRoutes');
const userRoutes = require('./routes/userRoutes');
const planRoutes = require('./routes/planRoutes');

app.use('/contact', mailRoutes);
app.use('/', userRoutes);
app.use('/plan', planRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} http://localhost:${PORT}`);
});

module.exports = app;
