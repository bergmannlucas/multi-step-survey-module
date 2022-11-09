import Joi from 'joi'

export const schema = Joi.array().items(
  Joi.object({
    name: Joi.string().empty(''),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .empty('')
  }),
  Joi.object({
    gender: Joi.string().required(),
    age: Joi.number().required()
  }),
  Joi.object({
    book: Joi.string().required(),
    colors: Joi.object({
      black: Joi.boolean(),
      white: Joi.boolean(),
      red: Joi.boolean(),
      green: Joi.boolean(),
      blue: Joi.boolean(),
      yellow: Joi.boolean(),
      purple: Joi.boolean(),
      orange: Joi.boolean(),
      pink: Joi.boolean()
    })
  })
)
