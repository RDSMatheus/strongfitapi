const Plan = require('../model/Plan');
const mongoose = require('mongoose');

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
      return;
    } catch (error) {
      res.status(500).json({ message: error });
      return;
    }
  }

  static async getPlanById(req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'ID inválido' });
      return;
    }

    try {
      const plan = await Plan.findById(id);

      if (!plan) {
        res.status(404).json({ message: 'Plano não encontrado' });
        return;
      }
      res.status(200).json({ plan });
      return;
    } catch (error) {
      res.status(500).json({ message: error });
      return;
    }
  }

  static async getPlan(req, res) {
    const plans = await Plan.find();

    try {
      res.status(200).json({ plans });
      return;
    } catch (error) {
      res.status(500).json({ message: error });
      return;
    }
  }
};
