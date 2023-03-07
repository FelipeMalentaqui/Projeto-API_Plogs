const { userService } = require('../services');
const { mapError } = require('../utils/errorMap');
// const criandoTokenLogin = require('../utils/criandoToken');

const createdUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, message } = await userService.createdUser(displayName, email, password, image);

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(201).json(message);
};

const getAll = async (req, res) => {
  const listAll = await userService.getAll();

  return res.status(200).json(listAll);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await userService.getById(id);

  if (type) return res.status().json({ message });

  return res.status(200).json(message);
};

module.exports = {
  createdUser,
  getAll,
  getById,
};