const router = require('express').Router();

const Plan = require('../controller/PlanController');

router.post('/newplan', Plan.addPlan);
router.get('/getplanbyname/:planName', Plan.getPlanByName);
router.get('/getplanbyid/:id', Plan.getPlanById);
router.get('/getplan', Plan.getPlan);

module.exports = router;
