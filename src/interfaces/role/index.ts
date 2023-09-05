import { PermissionInterface } from 'interfaces/permission';
import { RolePermissionInterface } from 'interfaces/role-permission';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RoleInterface {
  id?: string;
  role_name: string;
  description?: string;
  date_created: any;
  date_updated?: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  permission?: PermissionInterface[];
  role_permission?: RolePermissionInterface[];
  user?: UserInterface;
  _count?: {
    permission?: number;
    role_permission?: number;
  };
}

export interface RoleGetQueryInterface extends GetQueryInterface {
  id?: string;
  role_name?: string;
  description?: string;
  user_id?: string;
}
