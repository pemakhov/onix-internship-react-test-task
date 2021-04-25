import Joi from 'joi';

const userInputSchema = Joi.object({
  yearInput: Joi.number().min(1969).max(new Date().getFullYear()).messages({
    'number.base': 'Рік має бути числом',
    'number.min': 'Вкажіть дату після дня народження Лінуса',
    'number.max': 'Зараз лише {#limit} рік',
  }),
  episodeInput: Joi.string().min(5).max(200).messages({
    'string.base': 'Подія біографії має бути рядком',
    'string.empty': 'Подія має бути вказана',
    'string.min': 'Рядок має містити хоча б {#limit} символів',
    'string.max': 'Рядок не має бути довшим за {#limit} символів',
  }),
});

export default userInputSchema;
