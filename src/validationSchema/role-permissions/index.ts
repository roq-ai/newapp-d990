import * as yup from 'yup';

export const rolePermissionValidationSchema = yup.object().shape({
  role_id: yup.string().nullable().required(),
  permission_id: yup.string().nullable().required(),
});
