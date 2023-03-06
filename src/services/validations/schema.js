const Joi = require('joi');

const validateLoginSchema = Joi.object({
  email: Joi.email().requerid(),
  password: Joi.string().required(),
});

module.exports = {
  validateLoginSchema,
};