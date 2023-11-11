const Plan = require('../model/Plan');

module.exports = class PlanController {
  static async addPlan(req, res) {
    const { planName, planPrice, planPromo, planBenefits } = req.body;

    const planExist = await Plan.findOne({ planName });

    if (planExist) {
      res.status(422).json({ message: 'Plano já cadastrado' });
      return;
    }

    const plan = new Plan({
      planName,
      planPrice,
      planPromo,
      planBenefits,
    });

    try {
      await plan.save();
      res.status(200).json({ message: 'Plano cadastrado com sucesso!' });
    } catch (error) {
      res.status(500).json({ message: error });
      return;
    }
  }

  static async getPlanByName(req, res) {
    const { planName } = req.params;

    const plan = await Plan.findOne({ planName });

    try {
      res.status(200).json({ plan });
    } catch (error) {
      res.status(500).json({ message: error });
      return;
    }
  }

  static async getPlanById(req, res) {
    const { id } = req.params;

    const plan = await Plan.findById(id);

    try {
      res.status(200).json({ plan });
    } catch (error) {
      res.status(500).json({ message: error });
      return;
    }
  }

  static async getPlan(req, res) {
    const plans = await Plan.find();

    try {
      res.status(200).json({ plans });
    } catch (error) {
      res.status(500).json({ message: error });
      return;
    }
  }
};
