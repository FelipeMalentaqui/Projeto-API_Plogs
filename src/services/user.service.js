const { User } = require('../models');
const { validateUser } = require('./validations/validateInputsValue');

const createdUser = async (displayName, email, password, image) => {
  const error = validateUser(displayName, email, password);
  if (error.type) return error;

  const emailUser = await User.findOne({
    where: { email },
  });

  if (emailUser) return { type: 'ALREADY_REGISTERED', message: 'User already registered' };

  const newUser = await User.create({ displayName, email, password, image });
  // console.log(newUser, 'user');

  // await newUser.save({ fields: ['displayName', 'email', 'image'] });

  return { type: null, user: newUser };
};

const getAll = async () => {
  const listAll = await User.findAll(
    // where: { displayName, email, image },
    // { fields: ['displayName', 'email', 'image'] },
    { attributes: ['id', 'displayName', 'email', 'image'] },
    );
    
  return listAll;
};
  // displayName, email, password, image

const getById = async (id) => {
  const listId = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

  console.log(listId, 'id aqui');

  if (!listId) return { type: 'NOT_EXIST', message: 'User does not exist' };

  return { type: null, message: listId };
};

module.exports = {
  createdUser,
  getAll,
  getById,
};