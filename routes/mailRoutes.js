const router = require('express').Router();

const MailController = require('../../controller/MailController.js');

router.post('/sendmail', MailController.mailSend);

module.exports = router;
