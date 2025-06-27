import type { Contact, Group } from "../models/storage.model";

export const isPhoneUnique = (phone: string, contacts: Contact[]): boolean => {
  return !contacts.some((contact) => contact.phone === phone);
};

export const isGroupNameUnique = (name: string, groups: Group[]): boolean => {
  return !groups.some((group) => group.name === name);
};
