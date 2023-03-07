const { User } = require('../models');

const getByUserEmail = (email) => User.findOne({ where: { email } });

const getAll = async () => {
  const usuarios = await User.findAll();

  return usuarios;
};

const login = async (email, password) => {
  const usuario = await User.findOne({
    where: { email },
  });
  
  if (!usuario || usuario.password !== password) {
    return { type: 'INVALID_FIELDS', message: 'Invalid fields' };
  }

  return { type: null, message: usuario };
};

module.exports = {
  login,
  getAll,
  getByUserEmail,
};