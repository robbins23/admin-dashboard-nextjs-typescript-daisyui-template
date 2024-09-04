import React from "react";

/**
 * Interface for sidebar menu items.
 */
export interface SidebarMenuObj {
  path: string;
  icon: React.JSX.Element;
  pageName: string;
  pageTitle: string;
  submenu?: SidebarMenuObj[];
}

/**
 * Interface for api response
 */
export interface APIResponse {
  payload: any;
  message: string;
}

/**
 * Interface for UserProfile data.
 */
export interface UserProfile {
  name: string;
  avatar: string;
  emailId: string;
}

/**
 * Interface for lead data.
 */
export interface Lead {
  first_name: string;
  last_name: string;
  description: string;
  email: string;
  avatar: string;
  id?: number;
}
