const { userService } = require('../services');
const { mapError } = require('../utils/errorMap');
// const criandoTokenLogin = require('../utils/criandoToken');

const createdUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, message } = await userService.createdUser(displayName, email, password, image);

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(201).json(message);
};

module.exports = {
  createdUser,
};