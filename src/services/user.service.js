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

  return { type: null, message: newUser };
};

module.exports = {
  createdUser,
};