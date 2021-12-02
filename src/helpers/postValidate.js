const Joi = require('joi');

module.exports = (post) => {
  const schema = Joi.object({
    title: Joi.string()
      .required()
      .min(3)
      .max(80),
    body: Joi
      .string()
      .required()
      .min(3)
      .max(300),
    tags: Joi.array().items(Joi.string()),
  });
  const validation = schema.validate(post);
  if (validation.error) {
    const { message, path, type } = validation.error.details[0];
    return {
      validate: false,
      error: { message, path, type }
    };
  }
  return { validate: true }
}