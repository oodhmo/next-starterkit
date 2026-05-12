export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Theme = "light" | "dark" | "system";

export type Size = "sm" | "md" | "lg" | "xl";

export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };

export type PaginationParams = {
  page: number;
  limit: number;
};

export type SortDirection = "asc" | "desc";

export type BaseEntity = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type WithChildren<T = object> = T & {
  children: React.ReactNode;
};
