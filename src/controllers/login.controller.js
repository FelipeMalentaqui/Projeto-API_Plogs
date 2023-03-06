const { loginService } = require('../services');
require('dotenv/config');
// const jwt = require('jsonwebtoken');

// const secret = process.env.JWT_SECRET;

const getAll = async (req, res) => {
  const usuariosCadastrado = await loginService.getAll();

  return res.status(200).json(usuariosCadastrado);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const { type, message } = await loginService.login(email, password);

  if (type) return res.status(400).json(message);

  return res.status(200).json(message);
};

module.exports = {
  login,
  getAll,
};