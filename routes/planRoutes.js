const router = require('express').Router();

const Plan = require('../controller/PlanController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Plan:
 *       type: object
 *       required:
 *         - planName
 *         - planPrice
 *         - planPromo
 *         - planBenefits
 *       properties:
 *         id:
 *           type: string
 *           description: ID gerado automaticamente
 *         planName:
 *           type: string
 *           description: Nome do plano
 *         planPrice:
 *           type: string
 *           description: Preço do plano
 *         planPromo:
 *           type: string
 *           description: Preço promocional
 *         createdAt:
 *           type: string
 *           format: date
 *           description: a data da criação do plano
 */

/**
 * @swagger
 * tags:
 *   name: Plan
 *   description: API de controle de planos
 * /plan/newplan:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Plan]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Plan'
 *     responses:
 *       200:
 *         description: Confirmação de plano criado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Plan'
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
 * /plan/getplan:
 *   get:
 *     summary: Obtém todo os planos
 *     tags: [Plan]
 *     responses:
 *       200:
 *         description: Detalhes dos planos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Plan'
 *       404:
 *         description: Plano não encontrado
 *       500:
 *         description: Some server error
 * /plan/getplanbyid/{planId}:
 *   get:
 *     summary: Obtém detalhes de um plano por ID
 *     tags: [Plan]
 *     parameters:
 *       - in: path
 *         name: planId
 *         required: true
 *         description: ID do plano
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalhes do plano
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Plan'
 *       404:
 *         description: Plano não encontrado
 *       500:
 *         description: Some server error
 */

router.post('/newplan', Plan.addPlan);
router.get('/getplanbyname/:planName', Plan.getPlanByName);
router.get('/getplanbyid/:id', Plan.getPlanById);
router.get('/getplan', Plan.getPlan);

module.exports = router;
