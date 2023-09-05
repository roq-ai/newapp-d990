import axios from 'axios';
import queryString from 'query-string';
import { RolePermissionInterface, RolePermissionGetQueryInterface } from 'interfaces/role-permission';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRolePermissions = async (
  query?: RolePermissionGetQueryInterface,
): Promise<PaginatedInterface<RolePermissionInterface>> => {
  const response = await axios.get('/api/role-permissions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createRolePermission = async (rolePermission: RolePermissionInterface) => {
  const response = await axios.post('/api/role-permissions', rolePermission);
  return response.data;
};

export const updateRolePermissionById = async (id: string, rolePermission: RolePermissionInterface) => {
  const response = await axios.put(`/api/role-permissions/${id}`, rolePermission);
  return response.data;
};

export const getRolePermissionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/role-permissions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRolePermissionById = async (id: string) => {
  const response = await axios.delete(`/api/role-permissions/${id}`);
  return response.data;
};
