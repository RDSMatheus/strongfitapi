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
    const { remetente, assunto, mensagem } = req.body;

    const mailOptions = {
      from: EMAIL,
      to: EMAIL, // Replace with the recipient's email address
      subject: assunto,
      text: mensagem,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao enviar o e-mail');
      } else {
        console.log('E-mail enviado: ' + info.response);
        res.status(200).send('E-mail enviado com sucesso');
      }
    });
  }
};
