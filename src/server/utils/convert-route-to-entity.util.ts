const mapping: Record<string, string> = {
  companies: 'company',
  documents: 'document',
  permissions: 'permission',
  roles: 'role',
  'role-permissions': 'role_permission',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
