const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  planName: {
    type: String,
    require: true,
  },
  planPrice: {
    type: String,
    require: true,
  },
  planPromo: {
    type: String,
  },
  planBenefits: {
    type: Array,
    require: true,
  },
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
