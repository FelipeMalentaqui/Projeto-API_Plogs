const { validateUserSchema } = require('./schema');

const validateUser = (displayName, password, image) => {
  const { error } = validateUserSchema.validate(displayName, password, image);

  if (error) return { type: 'algum erro', message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateUser,
};