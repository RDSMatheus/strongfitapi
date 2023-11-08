const User = require('../model/User');

module.exports = class UserController {
  static async register(req, res) {
    const { name, email, phone, cpf, plan } = req.body;

    if (!name) {
      res.status(422).json({ message: 'Insira um nome!' });
      return;
    }

    if (!email) {
      res.status(422).json({ message: 'Insira um email válido!' });
      return;
    }

    if (!phone) {
      res.status(422).json({ message: 'Insira um telefone válido!' });
      return;
    }

    if (!cpf) {
      res.status(422).json({ message: 'Insira um cpf válido!' });
      return;
    }

    const cpfExist = await User.findOne({ cpf: cpf });

    console.log(cpfExist);

    if (cpfExist) {
      res.status(422).json({ message: 'CPF já cadastrado!' });
    }

    const user = new User({
      name,
      email,
      phone,
      cpf,
      plan,
    });

    try {
      await user.save();
      res.status(200).json({
        message:
          'Pré-matricula realizada com sucesso! Finalize sua matricula na nossa academia.',
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};
