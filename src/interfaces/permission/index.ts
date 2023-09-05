import { RolePermissionInterface } from 'interfaces/role-permission';
import { RoleInterface } from 'interfaces/role';
import { GetQueryInterface } from 'interfaces';

export interface PermissionInterface {
  id?: string;
  permission_name: string;
  description?: string;
  date_created: any;
  date_updated?: any;
  role_id: string;
  created_at?: any;
  updated_at?: any;
  role_permission?: RolePermissionInterface[];
  role?: RoleInterface;
  _count?: {
    role_permission?: number;
  };
}

export interface PermissionGetQueryInterface extends GetQueryInterface {
  id?: string;
  permission_name?: string;
  description?: string;
  role_id?: string;
}
