const { validateUserSchema } = require('./schema');

const validateUser = (displayName, email, password) => {
  const { error } = validateUserSchema.validate({ displayName, email, password });
  console.log(error, 'errorValidate');

  if (error) return { type: 'ERRO_USER', message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateUser,
};