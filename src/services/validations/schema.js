const Joi = require('joi');

// const validateLoginSchema = Joi.object({
//   email: Joi.email().requerid(),
//   password: Joi.string().required(),
// });

const validateUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
  // validateLoginSchema,
  validateUserSchema,
};