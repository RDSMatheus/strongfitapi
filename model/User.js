const mongoose = require('../conn/conn');
const { Schema } = mongoose;

const User = mongoose.model(
  'User',
  new Schema(
    {
      name: {
        require: true,
        type: String,
      },
      email: {
        require: true,
        type: String,
      },
      phone: {
        require: true,
        type: String,
      },
      cpf: {
        require: true,
        type: String,
      },
      plan: {
        require: true,
        type: String,
      },
    },
    {
      timestamps: true,
    },
  ),
);

module.exports = User;
