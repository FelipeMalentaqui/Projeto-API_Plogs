const { BlogPost, User, Category } = require('../models');

// const createPost = async (title, content, categoryIds) => {
//   const newPost = await BlogPost.create({ title, content, categoryIds });

//   return { type: null, message: newPost };
// };

const getAll = async () => {
  const postAll = await BlogPost.findAll({

    include: [
      { model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
    
      { 
        model: Category,
        as: 'categories',
        through: { attributes: [] }, // como a tabela não consegue se relacionar com a outra,
        // precisamos referenciar como ela esta se relacionando usando "atraves:through"
      },
    ],
  });

  return postAll;
};

const getById = async (id) => {
  const postId = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
    
      { 
        model: Category,
        as: 'categories',
        through: { attributes: [] }, // como a tabela não consegue se relacionar com a outra,
        // precisamos referenciar como ela esta se relacionando usando "atraves:through"
      },
    ],
  });

  if (!postId) return { type: 'POST_NOT_EXIST', message: 'Post does not exist' };

  return { type: null, message: postId };
};

module.exports = {
  // createPost,
  getAll,
  getById,
};