import { IStorageActionProvider } from "./index";
import StorageActionTypes from "./action-types";
import ActionProvider from "../../action-providers";

import reducer from "./reducer";

export class SyncStorageActions extends ActionProvider
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

  saveOrUpdate = (object: any) => {
    for (let index = 0; index < Object.keys(object).length; index++) {
      const key = Object.keys(object)[index];

      localStorage.setItem(key, JSON.stringify(object[key]));
    }

    return this.dispatch({
      type: StorageActionTypes.STORAGE_UPDATED,
      payload: object
    });
  };

  remove = (keys: string | Array<string> = []) => {
    let deleted: any = {};

    if (Array.isArray(keys)) {
      keys.forEach(key => {
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
