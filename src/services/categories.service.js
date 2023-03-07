const { Category } = require('../models');

const createPost = async (name) => {
  const newPost = await Category.create({ name });

  return { type: null, message: newPost };
};

const getAll = async () => {
  const listAll = await Category.findAll();

  return listAll;
};

module.exports = {
  createPost,
  getAll,
};