const router = require('express').Router();

const User = require('../controller/UserController');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - cpf
 *         - email
 *         - phone
 *         - plan
 *       properties:
 *         id:
 *           type: string
 *           description: ID gerado automaticamente
 *         name:
 *           type: string
 *           description: Nome do usuário
 *         cpf:
 *           type: string
 *           description: CPF do usuário
 *         email:
 *           type: string
 *           description: Email do usuário
 *         phone:
 *           type: string
 *           description: Telefone do usuário
 *         plan:
 *           type: string
 *           format: objectid
 *           description: Plano escolhido pelo usuário
 *         createdAt:
 *           type: string
 *           format: date
 *           description: a data da criação do usuário
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API de controle de usuário
 * /register:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Confirmação de usuário criado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       422:
 *         description: Faltando dados ou usando dados já utilizados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: 'Insira um email válido!'
 *       500:
 *         description: Some server error
 *
 */

router.post('/register', User.register);

module.exports = router;
