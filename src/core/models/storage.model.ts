export interface Contact {
  id: string;
  name: string;
  phone: string;
  groupId: string;
}

export interface Group {
  id: string;
  name: string;
}

export type StorageData = {
  contacts: Contact[];
  groups: Group[];
};
