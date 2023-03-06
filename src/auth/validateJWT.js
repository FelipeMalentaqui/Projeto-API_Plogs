const jwt = require('jsonwebtoken');

const { loginService } = require('../services');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  const token = req.header('authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await loginService.login(decoded.data.email);
    
    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
  };
