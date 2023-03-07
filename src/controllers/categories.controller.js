const { categoriesService } = require('../services');

const createPost = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await categoriesService.createPost(name);

  if (type) return res.status(400).json({ message });

  return res.status(201).json(message);
};

const getAll = async (req, res) => {
  const listAll = await categoriesService.getAll();

  return res.status(200).json(listAll);
};

module.exports = {
  createPost,
  getAll,
};