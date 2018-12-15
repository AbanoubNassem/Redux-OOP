import { IStorageActionProvider } from "./index";
import { ActionProvider } from "../../action-providers";
import reducer from "./reducer";

export enum StorageActionTypes {
  STORAGE_LOADED = "STORAGE_LOADED",
  STORAGE_CLEARED = "CLEAR_STORAGE",
  STORAGE_UPDATED = "STORAGE_UPDATED",
  STORAGE_REMOVED = "STORAGE_REMOVED"
}

export class StorageActions extends ActionProvider
  implements IStorageActionProvider {
  load = () => {
    const storage: any = {};

    for (let i = 0, len = localStorage.length; i < len; i++) {
      let key: any = localStorage.key(i);
      let value = localStorage[key];
      storage[key] = JSON.parse(value);
    }

    this.dispatch({
      type: StorageActionTypes.STORAGE_LOADED,
      payload: storage
    });

    return storage;
  };

  clear = () => {
    const storage: any = {};

    localStorage.clear();

    this.dispatch({
      type: StorageActionTypes.STORAGE_CLEARED,
      payload: storage
    });

    return storage;
  };

  saveOrUpdate = async (object: any) => {
    for (let index = 0; index < Object.keys(object).length; index++) {
      const key = Object.keys(object)[index];

      await localStorage.setItem(key, JSON.stringify(object[key]));
    }

    return this.dispatch({
      type: StorageActionTypes.STORAGE_UPDATED,
      payload: object
    });
  };

  remove = async (keys: string | Array<string> = []) => {
    let deleted: any = {};

    if (Array.isArray(keys)) {
      keys.forEach(async key => {
        localStorage.removeItem(key);
        deleted[key] = null;
      });
    } else {
      localStorage.removeItem(keys);
      deleted[keys] = null;
    }

    return this.dispatch({
      type: StorageActionTypes.STORAGE_REMOVED,
      payload: deleted
    });
  };

  reducer = () => reducer;
}
