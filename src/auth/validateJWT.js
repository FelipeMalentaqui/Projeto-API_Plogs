const jwt = require('jsonwebtoken');

const { userService } = require('../services');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  const token = req.header('authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await userService.getById(decoded.id);
    
    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    req.user = user.dataValues;
    // req.user = decoded;
    console.log('****************', user, '*************');

    next();
  } catch (err) {
    console.log(err, 'err tryCath');
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  };
