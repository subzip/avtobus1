import type { StorageData } from "../models/storage.model";

export class StorageService {
  private static STORAGE_KEY = "contacts_app_data";

  static loadData(): StorageData {
    try {
      const rawData = localStorage.getItem(this.STORAGE_KEY);
      if (!rawData) {
        return { contacts: [], groups: [] };
      }
      return JSON.parse(rawData) as StorageData;
    } catch (error) {
      console.error("Ошибка при парсинге данных из localStorage", error);
      return { contacts: [], groups: [] };
    }
  }

  static saveData(data: StorageData): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Ошибка при сохранении данных в localStorage", error);
    }
  }

  static clearData(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
