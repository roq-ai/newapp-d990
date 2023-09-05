import * as yup from 'yup';

export const roleValidationSchema = yup.object().shape({
  role_name: yup.string().required(),
  description: yup.string().nullable(),
  date_created: yup.date().required(),
  date_updated: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
