import Joi from "joi";

export const UserInputSchema = Joi.object({
  titleInput: Joi.string().min(2).max(40).messages({
    "string.base": "Название характеристики должно быть строкой",
    "string.empty": "Название характеристики должно быть указано",
    "string.min": "Название характеристики должно содержать хотябы {#limit} символов",
    "string.max": "Название характеристики должно быть длинее {#limit} символов",
  }),
  valueInput: Joi.string().min(2).max(40).messages({
    "string.base": "Значение должно быть строкой",
    "string.empty": "Значение должно быть указано",
    "string.min": "Значение должно содержать хотябы {#limit} символов",
    "string.max": "Строка не должна быть длинее {#limit} символов",
  }),
  propertyNameInput: Joi.string().min(2).max(40).pattern(/^[a-z][a-zA-Z0-9]+$/).messages({
    "string.base": "Название свойства должно быть строкой",
    "string.empty": "Название свойства должно быть указано",
    "string.min": "Название свойства должно содержать хотябы {#limit} символов",
    "string.max": "Название свойства не должно быть длинее {#limit} символов",
    "string.pattern": "Название свойства должно содержать латинские буквы в camelCase",
  }),
});
