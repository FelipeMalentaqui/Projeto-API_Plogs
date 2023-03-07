const Joi = require('joi');

const validateUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
});

module.exports = {
  validateUserSchema,
};