import { RoleInterface } from 'interfaces/role';
import { PermissionInterface } from 'interfaces/permission';
import { GetQueryInterface } from 'interfaces';

export interface RolePermissionInterface {
  id?: string;
  role_id: string;
  permission_id: string;
  created_at?: any;
  updated_at?: any;

  role?: RoleInterface;
  permission?: PermissionInterface;
  _count?: {};
}

export interface RolePermissionGetQueryInterface extends GetQueryInterface {
  id?: string;
  role_id?: string;
  permission_id?: string;
}
