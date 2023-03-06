const { User } = require('../models');

const getAll = async () => {
  const usuarios = await User.findAll();

  return usuarios;
};

const login = async (email, password) => {
  const usuario = await User.findOne({
    where: { email, password },
  });

  if (!usuario) {
    return { type: 'INVALID_FIELDS', message: 'Invalid fields' };
  }

  // if (!usuario || usuario.password !== password) {
  //   return { type: 'INVALID_FIELDS', message: 'Invalid fields' };
  // }

  return { type: null, message: usuario };
};

module.exports = {
  login,
  getAll,
};