const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const createToken = (dadoObjeto) => {
  const jwtConfig = { expiresIn: '10d', algorithm: 'HS256' };

  const payload = { email: dadoObjeto.email, id: dadoObjeto.id };

  const token = { token: jwt.sign(payload, JWT_SECRET, jwtConfig) };

  return token;
};

module.exports = {
  createToken,
};