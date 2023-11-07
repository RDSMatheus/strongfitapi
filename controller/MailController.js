require('dotenv').config();
const { Resend } = require('resend');
const EMAIL = process.env.EMAIL;
const API_KEY_RESEND = process.env.API_KEY_RESEND;

// const transporter = nodemailer.createTransport({
//   host: 'smtp-mail.outlook.com',
//   port: 587,
//   secure: false,
//   auth: {
//     user: EMAIL,
//     pass: PASSWORD,
//   },
// });

module.exports = class MailController {
  static async mailSend(req, res) {
    const { remetente, assunto, mensagem } = req.body;

    const resend = new Resend(API_KEY_RESEND);

    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'contatostrongfit@outlook.com',
      subject: assunto,
      html: mensagem,
    });
  }
};
