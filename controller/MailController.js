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

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log('Server is ready to take our messages');
          resolve(success);
        }
      });
    });

    const mailOptions = {
      from: EMAIL,
      to: EMAIL,
      subject: assunto,
      text: `<h1>${remetente}<h1>
      <p>${mensagem}</p>`,
    };

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
  }
};
