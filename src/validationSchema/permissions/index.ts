import * as yup from 'yup';

export const permissionValidationSchema = yup.object().shape({
  permission_name: yup.string().required(),
  description: yup.string().nullable(),
  date_created: yup.date().required(),
  date_updated: yup.date().nullable(),
  role_id: yup.string().nullable().required(),
});
