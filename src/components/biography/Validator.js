import Joi from "joi";

export const userInputSchema = Joi.object({
  yearInput: Joi.number().min(1969).max(new Date().getFullYear()).messages({
    "number.base": "Год должен быть числом",
    "number.min":
      "Укажите дату после рождения Линуса",
    "number.max": "Сейчас только {#limit} год",
  }),
  episodeInput: Joi.string().min(5).max(200).messages({
    "string.base": "Событие биографии должно быть строкой",
    "string.empty": "Событие должно быть указано",
    "string.min": "Строка должна содержать хотябы {#limit} символов",
    "string.max": "Строка не должна быть длинее {#limit} символов",
  }),
});
