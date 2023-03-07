const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const criandoTokenLogin = (dadoObjeto) => {
  const jwtConfig = { expiresIn: '10d', algorithm: 'HS256' };

  const payload = { email: dadoObjeto.email };

  const token = { token: jwt.sign(payload, JWT_SECRET, jwtConfig) };

  return token;
};

const criandoTokenCreate = (dadoObjeto) => {
  const jwtConfig = { expiresIn: '5d', algorithm: 'HS256' };

  const payload = { email: dadoObjeto.email };

  const token = { token: jwt.sign(payload, JWT_SECRET, jwtConfig) };

  return token;
};

module.exports = {
  criandoTokenLogin,
  criandoTokenCreate,
};