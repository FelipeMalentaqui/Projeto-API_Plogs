// const jwt = require('jsonwebtoken');

const { loginService } = require('../services');
const { createToken } = require('../utils/criandoToken');

// const { JWT_SECRET } = process.env;

// const criandoToken2 = (dadoObjeto) => {
//   const jwtConfig = { expiresIn: '10d', algorithm: 'HS256' };

//   const payload = { email: dadoObjeto.email };

//   const token = { token: jwt.sign(payload, JWT_SECRET, jwtConfig) };

//   return token;
// };

const getAll = async (req, res) => {
  const usuariosCadastrado = await loginService.getAll();

  return res.status(200).json(usuariosCadastrado);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const { type, message } = await loginService.login(email, password);

  if (type) return res.status(400).json({ message });

  console.log(message.dataValues);

  return res.status(200).json(createToken(message.dataValues));
};

module.exports = {
  // criandoToken,
  login,
  getAll,
};