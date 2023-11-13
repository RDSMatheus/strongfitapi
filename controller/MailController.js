require('dotenv').config();
const nodemailer = require('nodemailer');
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

module.exports = class MailController {
  static async mailSend(req, res) {
    const { email, name, subject, message } = req.body;

    if (!email) {
      res.status(422).json({ message: 'Informe um email!' });
      return;
    }

    if (!name) {
      res.status(422).json({ message: 'Informe um nome!' });
      return;
    }

    if (!message) {
      res.status(422).json({ message: 'Escreva a messagem!' });
      return;
    }

    const mailOptions = {
      from: EMAIL,
      to: EMAIL,
      subject,
      text: `email:${email}, nome:${name}, mensagem:${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao enviar o e-mail');
      } else {
        console.log('E-mail enviado: ' + info.response);
        res.status(200).send({ message: 'E-mail enviado com sucesso' });
      }
    });
  }
};
