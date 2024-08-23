export interface Role {
  id: number;
  value: string;
  label: string;
  description?: string;
  permissions: string[];
}

export const ROLE: Role[] = [
  {
    id: 1,
    value: "superadmin",
    label: "Super Admin",
    description: "Top-level administrator, with all rights.",
    permissions: ["read", "write", "update", "delete", "assign_roles"],
  },
  {
    id: 2,
    value: "admin",
    label: "Admin",
    description: "Administrator, has rights to manage and edit the system.",
    permissions: ["read", "write", "update", "delete"],
  },
  {
    id: 3,
    value: "moderator",
    label: "Moderator",
    description: "Content and user management.",
    permissions: ["read", "write", "update"],
  },
  {
    id: 4,
    value: "user",
    label: "User",
    description: "Regular users, with basic access rights.",
    permissions: ["read"],
  },
  {
    id: 5,
    value: "guest",
    label: "Guest",
    description: "Guest users, only have permission to view public content.",
    permissions: ["read"],
  },
];
