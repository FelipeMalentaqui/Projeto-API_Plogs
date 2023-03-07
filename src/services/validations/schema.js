const Joi = require('joi');

// const validateLoginSchema = Joi.object({
//   email: Joi.email().requerid(),
//   password: Joi.string().required(),
// });

const validateUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  password: Joi.number().min(6).required(),
  image: Joi.string().required(),
});

module.exports = {
  // validateLoginSchema,
  validateUserSchema,
};