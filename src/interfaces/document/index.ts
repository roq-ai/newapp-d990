import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DocumentInterface {
  id?: string;
  title: string;
  content: string;
  date_created: any;
  date_updated?: any;
  company_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface DocumentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  company_id?: string;
  user_id?: string;
}
