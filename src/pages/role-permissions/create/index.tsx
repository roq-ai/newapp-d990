import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createRolePermission } from 'apiSdk/role-permissions';
import { rolePermissionValidationSchema } from 'validationSchema/role-permissions';
import { RoleInterface } from 'interfaces/role';
import { PermissionInterface } from 'interfaces/permission';
import { getRoles } from 'apiSdk/roles';
import { getPermissions } from 'apiSdk/permissions';
import { RolePermissionInterface } from 'interfaces/role-permission';

function RolePermissionCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: RolePermissionInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createRolePermission(values);
      resetForm();
      router.push('/role-permissions');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<RolePermissionInterface>({
    initialValues: {
      role_id: (router.query.role_id as string) ?? null,
      permission_id: (router.query.permission_id as string) ?? null,
    },
    validationSchema: rolePermissionValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Role Permissions',
              link: '/role-permissions',
            },
            {
              label: 'Create Role Permission',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Role Permission
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <AsyncSelect<RoleInterface>
            formik={formik}
            name={'role_id'}
            label={'Select Role'}
            placeholder={'Select Role'}
            fetcher={getRoles}
            labelField={'role_name'}
          />
          <AsyncSelect<PermissionInterface>
            formik={formik}
            name={'permission_id'}
            label={'Select Permission'}
            placeholder={'Select Permission'}
            fetcher={getPermissions}
            labelField={'permission_name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/role-permissions')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'role_permission',
    operation: AccessOperationEnum.CREATE,
  }),
)(RolePermissionCreatePage);
