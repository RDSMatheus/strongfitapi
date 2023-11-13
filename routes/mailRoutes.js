const router = require('express').Router();

const MailController = require('../controller/MailController.js');

/**
 * @swagger
 * tags:
 *   name: Mail
 *   description: API para envio de e-mails
 *
 * components:
 *   schemas:
 *     MailOptions:
 *       type: object
 *       properties:
 *         from:
 *           type: string
 *           description: O endereço de e-mail remetente.
 *         to:
 *           type: string
 *           description: O endereço de e-mail destinatário.
 *         subject:
 *           type: string
 *           description: O assunto do e-mail.
 *         text:
 *           type: string
 *           description: O corpo do e-mail em formato de texto.
 *
 * /contact/sendmail:
 *   post:
 *     summary: Envia um e-mail
 *     tags: [Mail]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MailOptions'
 *     responses:
 *       200:
 *         description: E-mail enviado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               message: 'E-mail enviado com sucesso'
 *       500:
 *         description: Ocorreu um erro ao enviar o e-mail.
 *         content:
 *           application/json:
 *             example:
 *               message: 'Ocorreu um erro ao enviar o e-mail'
 */

router.post('/sendmail', MailController.mailSend);

module.exports = router;
