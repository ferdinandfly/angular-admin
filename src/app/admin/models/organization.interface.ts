export enum OrganizationStatus {
  CLIENT= 'Client',
  PROSPECT = 'Prospect',
}

export interface Organization {
    name: string;
    status: OrganizationStatus,
}

