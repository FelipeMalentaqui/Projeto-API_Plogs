const { postService } = require('../services');

// const createPost = async (req, res) => {
//   const { title, content, categoryIds } = req.body;

//   const { type, message } = await postService.createPost(title, content, categoryIds);

//   if (type) return res.status().json({ message });

//   return res.status(201).json(message);
// };

const getAll = async (req, res) => {
  const postAll = await postService.getAll();

  return res.status(200).json(postAll);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await postService.getById(id);

  if (type) return res.status(404).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  // createPost,
  getAll,
  getById,
};