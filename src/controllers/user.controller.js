const { userService } = require('../services');

const createdUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, message } = await userService.createdUser(displayName, email, password, image);

  if (type) return res.status(400).json(message);

  return res.status(200).json(message);
};

module.exports = {
  createdUser,
};